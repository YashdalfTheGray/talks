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
