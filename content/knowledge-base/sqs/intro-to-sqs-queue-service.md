---
date: 2020-03-02T00:00:00+03:00
title: "Introduction to SQS queue service"
description: ""
learning: ["GSQS"]
learning_weight: 100
---

# What is SQS

SQS - stands for **Simple Queue Service** - is a managed service by AWS to handle [message queueing](https://dashbird.io/knowledge-base/architectural-patterns/message-queue/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=sqs).

In a queue, one service sends messages, and other service consume those messages. It can be used for a variety of purposes.

As a managed service, SQS releases developers from the worries of setting up and maintaining a queue system. The service will provide everything needed out of the box and seamlessly scale to accomodate the demand.

This can be a perfect fit for projects running on a tight schedule, as well as for small & medium sized development teams.


# What is it used for

SQS is frequently used to decouple distributed backend services. Instead of having one service directly interacting with another, a queue could intermediate the communication.

Another common usage for queues is to accomodate mismatches in services scalability. When a service relies on another one that can't scale to the same level or as quickly as the first, bottlenecks can become a problem. In these cases, having a queue between A and B is beneficial, because the queue can absorb peak demand from A, and transmit messages in a slower pace that B can cope with.


# How it works

We have already covered the broad [mechanism of message queues](https://dashbird.io/knowledge-base/architectural-patterns/message-queue/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=sqs) in another article. SQS buils on these concepts and provides an API that developers can use to communicate with the service.

The main actions in high-level are:

* **Send message**: a service sends a message to a queue, which becomes available for other service to consume;
* **Receive message**: another service can request the queue to receive pending messages;
* **Delete message**: after a message has got properly processed, the consumer can delete it from the queue;

SQS does not work as a database and the consumer can't determine which message to receive from the queue. It can, though, specify how many messages it wants to receive at each time.

After a message is received, SQS will remove it temporarily from the queue. This is to avoid it being consumed twice (althout it still might happen in some occasions - see topic below). During a certain time, the message will be hidden and the consumer has the chance to process it and later delete from the queue.

If the message is not deleted after the visibility timeout period, it will go back to the queue and will be received in future requests. The visibility timeout period can be customized.


# Types of Queues

There are two different types of queues in SQS: **FIFO** and **Standard**.

In the **Standard** queue, SQS will deliver messages out of order. It means that, a message received later can be delivered first to a consumer. It may also deliver the same message more than once in some occasions. This type of queue leverages advantages of distributed systems with low consistency, which drives down costs. As a result, this is the cheapest option in SQS.

The **FIFO** type follows a _First-in, First-out_ model. It delivers messages in the exact same order they were received, and each message is delivered only once. Despite being 25% more expensive than Standard queues, FIFO is sometimes necessary for projects that require precision and high consistency properties for its queues.

Another difference between the two types of queues is the scalability capabilities. Standard queues support an unlimited amount of transactions per second, which FIFO will handle up to 3,000 messages per second, although this limit can be increased by requesting the AWS support.
