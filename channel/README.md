# Work handoff between two threads

## Introduction

This is a problem that I recently dealt with while trying to get two Java threads to hand off work to each other. First, I wanna set the stage here and explain what the problem was. Then I'll get into the mental model. Then I'll get into the options that Java presents to make this happen.

## Setting the stage

The stage is the JVM and the actors are these two threads who wish to communicate with each other through a channel. Let's define some stuff to get on the same page,

- JVM - the Java Virtual Machine, it is what runs Java code and it supports a bunch of different platforms.
- thread - a thread is a processor of code, JVM creates a main thread for you and you are free to spawn more
- channel - a bit of shared space between the two threads where each of them can put data that they wanna share. A particular trait of this channel is that it preserves the order that data has been put in the space.

## The mental model

Mentally, the way that we expect the threads to interact is basically akin to the producer consumer model. In this case, there is one producer (of information) and one consumer. There is a channel between them that is able to contain a limited number of pieces of information. As soon as the producer generates a piece of information, it drops it on the channel and on the other side, the consumer can pick it up and process it. Since there is limited space in the channel, the producer waits for an empty spot on the channel to put new data and the consumer waits for something to show up on the channel to process.

That's the mental model that we are going to try and emulate.

## The Spliterator

The first way that we came up with to emulate the mental model above is called the `Spliterator`. Before we start talking about the `Spliterator`, we need to talk about iterators. Iterators are workers that take a list of information and produce each bit of information, one after another, preserving the order. For example, if I created an iterator over the list of the first 10 integers, it would produce the numbers 0 through 9, one after another, in order.

A `Spliterator` is an iterator that supports parallel processing of the bit of informations that it is generating. In contrast, an iterator can only have one consumer. A `Spliterator` makes it really easy for us to implement our mental model. Once we have all the information, we create a spliterator and we hand it off to the consumer to process as it would like.

Before we talk about why we had to move on from this approach, we need to talk about streams. A stream, just like a real life water stream, has a start, an end, and some content - on a computer, it is data, in real life, it is water. Now imagine if you put 1 paper boat every second for 5 seconds in a flowing stream, they will all flow along, from start to end, and you'll be able to retrieve 5 paper boats at the end. This is similar to how data flows in a stream from one end to another.

But turning a stream into a `Spliterator` is what is called a terminal procedure. This is akin to putting a dam in the middle of the stream and stopping the entire flow. This would mean that, going back to our original example, you would find 5 paper boats all collected at the dam, rather than ariving at the end.

If you had someone at the end of the stream picking up the paper boats, you would only have a certain number of paper boats in the stream at any point, putting a dam in the middle would mean that you are collecting all the paper boats at the dam and you will eventually run out of space to store those paper boats. This was the problem we faced with `Spliterator`s. Converting a stream into a `Spliterator` would capture all of the data and we would run out of space to keep all of the data.

## The stream

Then you might be thinking, well the answer is staring right at us, let's just use streams and not worry about the dam at all. This was the second solution that we tried to implement.
Create a stream between the producer and the consumer, where the producer is at the start and the consumer is at the end. Paper boats (data) gets dropped in by the producer and they get picked up by the consumer.

There are two potential problems here, when do we tell the consumer that this stream exists where it can get data from and how do we account for multiple producers who all need to send data, one after another, making sure that the order is preserved?

The way we had it implemented, we would tell the consumer that it had access to a stream after we had already put all the paper boats on the stream so something had to contain the paper boats. A little caveat of the Java programming language here is that you can't add more paper boats to a stream, you can only turn a collection of paper boats into a new stream and then merge the old stream and the new stream together. So as we started to account for multiple sources of data, we had to create multiple streams and merge them, one after another, and then tell the consumer that it could access the stream. But, by the time we told the consumer that it had access to a stream of data, we had already lost some data.

The reason for this being that, once Java is done acting on a stream, it closes it to signal everyone looking at the stream that there are no more things that will go on this stream. This means that by the time we got done constructing a big stream by merging all the little streams, Java would start closing the oldest streams and we would lose daa.

## The BlockingQueue

The issues with the stream brought us to what is called a `BlockingQueue`. This is a special type of queue that blocks anything else from happening until there is something on the queue or there is space for something on the queue. Basically, this tells the producer to wait for space on the queue if it is full and tells the consumer to wait for data on the queue if it is empty. This seemed like it would work really well for us and it would very closely match the mental model described above too!

There are a couple of gotchas here too that we ran into. One of the first things that you need to consider is the size that you are going to allocate for the queue, is 10 a good numnber? Is 30? 200? 1000? The best way to gauge this is to make your queue proportional to how much data you can process at one time. If you process a 100 bits of data at one time, then you set your queue to be 100 long and so on and so forth.

The other thing to consider is a stop condition. The consumer needs to know when the producer is done putting new data on the queue and it can't just wait for nothing to show up on the queue because the producer might be taking their time getting data on the queue and they still might have more data to present. So we created a stop signal which the producer puts on the queue and once it reaches the consumer, it knows, for sure, that it is time to stop.

With these two concerns sufficently addressed, we were pretty happy with the progress that we had made.
