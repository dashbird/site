---
date: 2020-01-16T00:00:00+03:00
title: "Pub/Sub Messaging"
description: "Asynchronous message and task processing with Pub/Sub"
learning: ["QArchitectural Patterns"]
learning_weight: 220
---

In a previous topic we covered the [Asynchronous Messaging](/knowledge-base/architectural-patterns/asynchronous-messaging/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=architectural-patterns) architectural pattern, its advantages and some high-level examples.

Pub/Sub is one way of implementating this type of architecture, and now we are going to cover it more in depth.

# What is Pub/Sub

Pub/Sub (or Publish/Subscribe) pattern is a way for multiple services to communicate with eachother by publishing messages to a topic, which are then distributed to subscribers of that topic.

Differently than a [Message Queue](/knowledge-base/architectural-patterns/message-queue/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=architectural-patterns), each topic can have multiple subscribers (or consumers, as it would be called in a Queue model).

Another difference is that messages published to a topic are delivered immediately to all subscribers. As a result, Pub/Sub does not offer many options in terms of message delivery.

![Pub/Sub Messaging](/images/knowledge-base/architecture/pub-sub-messaging.png)


# Advantages

## Multi-task processing in parallel

The Pub/Sub model allows for one message to be delivered to multiple subscribers. Each of them can perform a different task in parallel. 

This pattern can also prove to be a good solution for controlling data processing workflows, as well as for implementing a Fan-Out strategy to conquer larger tasks.


## Eliminates Polling

Since topics will notify subscribers when new messages come in, there is no need to continuouslly poll the topic and check for new data. This can save resources and speed up processing of tasks.


## Flexibility

It is easy to add new subscribers to an existing topic. New jobs can be performed for the same types of messages without Publishers having to control a list of destinations.


## Multi-protocol delivery

Most Pub/Sub systems will provide multiple protocols to deliver messages. These are some of the protocols commonly available:

* HTTP APIs
* Serverless functions (e.g. [AWS Lambda](/knowledge-base/aws-lambda/introduction-to-aws-lambda/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=architectural-patterns))
* E-mail
* Mobile push notifications
* Message Queues [^1]


## Filtering Capabilities

Pub/Sub systems usually provide a way for subscribers to filter messages that are relevant to them. This can save resources and also increases flexibility for how messages are distributed across a set of compute services.


# Options to Implement

## Serverless / Managed Services

Pub/Sub can be easily be deployed in any project by leveraging modern cloud services. [AWS, for example, offers SNS](https://aws.amazon.com/sns/), a serverless Pub/Sub system, fully managed by their team.

This releases teams to work on aspects of the software that are really going to differentiate it in the market. Another benefit of using a managed service is faster time-to-market.


## Open Source Projects

Nonetheless, for larger teams with access to advanced DevOps skills and enough financial resources, there are also great open source projects, so that development teams don't have to reinvent the wheel.

Some options are:

* [Apache Pulsar](https://pulsar.apache.org/)
* [Apache Kafka](https://site:kafka.apache.org) [^2]


# Footnotes

[^1]:
    It is possible to combine a Pub/Sub with a [Message Queue](/knowledge-base/architectural-patterns/message-queue/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=architectural-patterns). If one Service needs to process messages but may not be able to scale as fast as the volume of messagees coming from the Pub/Sub topic at some point, having a Message Queue in front of it will increase the overall reliability of the architecture.

[^2]:
    Although Apache Kafka is not originally designed for Pub/Sub, it can be used as such.
