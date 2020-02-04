---
date: 2020-01-25T00:00:00+03:00
title: "EventBridge Main Benefits and Characteristics"
description: "Understand why EventBridge can be beneficial in your cloud architecture"
learning: ["EEvent Bridge"]
learning_weight: 200
---

Below are some of the main characteristics that makes EventBridge an appealing service, as well as the benefits it can bring to cloud applications.

## Asynchronous Messaging Pattern

Event Bridge is, in many cases, one of the best ways to implement an [asynchronous messaging pattern](/knowledge-base/architectural-patterns/asynchronous-messaging/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=event-bridge) for a cloud system.

EventBridge delivers not only a loose-coupled architecture, but also enables:

* Isolation to the components involved;
* Makes it easy to extend or replace services;
* Enables a zero-waste architecture;

These are the [three essential characteristics](/knowledge-base/architectural-patterns/serverless-functions-composition-strategies/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=event-bridge#how-about-composition-in-serverless) of an asynchronous pattern implementation.

## Easy to manage and scale

Event schemas and the [Schema Registry](/knowledge-base/event-bridge/intro-to-event-bridge/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=architecture-and-best-practices#schema-registry) makes it a lot easier to manage large scale applications running on top of EventBridge.

These two features allows developers to discover and track tempaltes for event messages used by the system. This provides a centralized communication channel for different developers (or teams), responsible for different components, to account for and work upon eachothers' services.

## Serverless

There are no servers to provision or maintain when using Event Bridge. As usual, AWS provides services quotas[^1] and SLAs in which developers can rely upon without worrying if the underlying infrastructure components will work when needed.

This is especially benefitial if resilience is one of the main goals when applying an asynchronous architecture. By relying on a serverless offering by AWS, the development team can abstract away worries about infrastructure uptime, performance and other issues.

## Single-Bus architecture

First, the Event Bridge does not work based on topics, like the Pub/Sub mechanism. There is one single bus for a whole set of different and unrelated types of events.

While it is possible to create multiple buses, it is not required. Even though it's possible to work with unrelated messages in a Pub/Sub architecture, it becomes cumbersome and difficult to manage as the number and complexity of message types grow.

## Vast array of integrations

Internally to AWS, an EventBridge bus can seamslessly connect to Lambda functions, EC2 instances, Kinesis streams, CloudWatch logs, Containers, State Functions, Batch jobs and many more services.

EventBridge also comes with a set of SaaS partner services that can automatically push events to buses, such as Segment, SugarCRM, Zendesk and more.

When it comes to flexibility and interconnectivity, this rich integration set puts EventBridge ahead of other services such as SQS (queues) or SNS (Pub/Sub topics).


# Footnotes

[^1]:
     [AWS EventBridge Quotas](https://docs.aws.amazon.com/eventbridge/latest/userguide/cloudwatch-limits-eventbridge.html)
