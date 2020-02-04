---
date: 2020-01-25T00:00:00+03:00
title: "Intro to Event Bridge"
description: "Get started with the main concepts behind Event Bridge"
learning: ["EEvent Bridge"]
learning_weight: 100
---

# What is Event Bridge

Event Bridge is a message bus that acts as a broker between event publishers and consumers. It is somewhat similar to a [Message Queue](/knowledge-base/architectural-patterns/message-queue/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=architecture-and-best-practices) and a [Pub/Sub](/knowledge-base/architectural-patterns/pub-sub-messaging/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=architecture-and-best-practices), but with some differences.

Provided by AWS and launched in 2019[^1], it was remodeled and expanded from an older service called CloudWatch Events[^2].

The main components[^3] of an Event Bridge are:

## Event Bus

The main service component, the bus is responsible for receiving events and routing them to the correct targets following all applicable rules.

## Events

These are messages published by a service through the EventBridge bus. It may indicate a change in an environment, an action taken, a scheduled event occurence, or virtually anything else. Events are JSON messages that should follow a template standard to the Event Bridge Service. 

## Sources

Services that send events to the Bus in order to be taken care of by target services. Example: when a new customer subscribes to an online service, the _subscription_ component (source) may need to _inform_ other services (targets) in the system about it - _to send a confirmation e-mail, for example_.

## Target

Services that subscribe to the Event Bus in order to receive events when published by source components and matched by the rules in place.

## Rules

A set of instructions for the Event Bus to decide whether a particular message should be delivered to certain targets. Each rule can route a matched event to one or multiple targets. Another feature of rules is that they can customize event messages, by passing to targets only a subset of the information available, for example.

## Schema

Event Bridge schema is a template containing the structure expected for a certain type of event message published through an event bus. While this is an optional component for the EventBridge service, it can improve transparency and maintainability of highly complex systems running asynchronously on EventBridge.

## Schema Registry

AWS launched in Dec 2019 the Schema Registry[^4] service. Although still in preview[^5], it makes it easier to identify, document and discover event schemas within Event Bridge. The Schema Registry service can also generate schemas based on inference from events already published through an event bus.


# Footnotes

[^1]:
    [AWS announces Event Bridge service](https://aws.amazon.com/about-aws/whats-new/2019/07/introducing-amazon-eventbridge/)

[^2]:
    [AWS CloudWatch Events](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/WhatIsCloudWatchEvents.html)

[^3]:
     [AWS Documentation about EventBridge components](https://docs.aws.amazon.com/eventbridge/latest/userguide/what-is-amazon-eventbridge.html#event-bridge-components)

[^4]:
    [AWS Schema Registry documentation](https://aws.amazon.com/blogs/compute/introducing-amazon-eventbridge-schema-registry-and-discovery-in-preview/)

[^5]:
     Preview means the service is available for testing only and not ready for production use yet. Backwards incompatible changes or data loss may occur, for example. As of the writing of this article (Feb 02, 2020), the Schema Registry feature of EventBridge was still in preview mode.
