# Work handoff between two threads

## Introduction

This is a problem that I recently dealt with while trying to get two Java threads to hand off work to each other. First, I wanna set the stage here and explain what the problem was. Then I'll get into the mental model. Then I'll get into the options that Java presents to make this happen.

## Setting the stage

The stage is the JVM and the actors are these two threads who wish to communicate with each other through a channel. Let's define some stuff to get on the same page,

- JVM - the Java Virtual Machine, it is what runs Java code and it supports a bunch of different platforms.
- thread - a thread is a processor of code, JVM creates a main thread for you and you are free to spawn more
- channel - a bit of shared space between the two threads where each of them can put data that they wanna share. A particular trait of this channel is that it preserves the order that data has been put in the space.

## The mental model

Mentally, the way that we expect the threads to interact is basically akin to the producer consumer model. One thread updates some common memory that sits between the threads and the producer just puts the things that need to be processed in this shared memory. On the other side, the consumer just receives the things and waits for any new things that appear in the shared memory space.
