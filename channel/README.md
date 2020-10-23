# Work handoff between two threads

## Introduction

This is a problem that I recently dealt with while trying to get two Java threads to hand off work to each other. First, I wanna set the stage here and explain what the problem was. Then I'll get into the mental model. Then I'll get into the options that Java presents to make this happen.

## The mental model

Mentally, the way that we expect the threads to interact is basically akin to the producer consumer model. One thread updates some common memory that sits between the threads and the producer just puts the things that need to be processed in this shared memory. On the other side, the consumer just receives the things and waits for any new things that appear in the shared memory space.
