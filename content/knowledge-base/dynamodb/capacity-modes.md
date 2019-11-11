---
date: 2019-11-08T10:00:00-03:00
title: "Capacity Modes"
description: "Different models for throughput capacity allocation and optimization in DynamoDB"
learning: ["CDynamoDB"]
learning_weight: 500
---

# Quick Intro

DynamoDB manages throughtput capacity in basically two types of operations: read and write. It can scale up and down to cope with variable read/write demand, and it does so in two different modes. It is up to the developer to choose which capacity mode fits better with the application needs.


# On-demand Capacity Mode

This is the easiest to use and most straight-forward, since it abstracts all capacity thinking to the AWS team behind DynamoDB.

When a table is configured as _on-demand_, the DynamoDB team will allocate a default read/write capacity. Independent tests show around 4,000 request units (RU)[^1]. There is a simple trick to 10X this value:

* Create the table in _Provisioned Capacity Mode_
* Set read and write allocated capacity to 40,000 RU each
* Switch the table to _On-Demand Capacity Mode_ right after

It will inherit the capacity provisioned (40,000 RU). Do it only if really needed, though, since DynamoDB will scale back down if capacity is not used.

Beware that it's possible to switch capacity modes only once every 24 hours[^2].

# Provisioned Capacity Mode

In this mode, it is up to the developers to determine the maximum request units DynamoDB must be able to support at any given time.

The provisioned values don't have to be rigid, though. Dynamo does offer an auto-scaling feature that developers can enable to scale provisioned capacity up and down, according to demand. Note that the scaling process might not be sufficient for coping with a sudden spike in application traffic.

# How to choose

The main advantage of _Provisioned_ is that each read/write request is cheaper than in _On-demand Mode_. On the other hand, _On-Demand_ usually scales in a faster and smoother way than _Provisioned_.

When the demand is highly variable and exhibits sharp spikes, it might be better to switch _On-Demand Mode_. When application traffic is somewhat predicatable and varies in a smoother way, _Provisioned Mode_ will be a more cost-effective option.


# What happens when demand exceeds allocated capacity

In case too many read or write requests are issued against a table and its Capacity Units are exhausted, DynamoDB will throw a `ProvisionedThroughputExceededException`[^3].

Even for very small applications, it is important to model the development considering the possibility of having a request being throttled. Especially write requests must have a way to retry to avoid losing information.

The application may retry the request a couple of times following an exponential backoff[^4]. If still unsuccessful, the write request could be queued for example, in order to be retried at a later time.


[^1] [Understanding the scaling behaviour of DynamoDB OnDemand tables](https://theburningmonk.com/2019/03/understanding-the-scaling-behaviour-of-dynamodb-ondemand-tables/)

[^2] [Considerations When Changing Read/Write Capacity Mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/switching.capacitymode.html)

[^3] [DynamoDB Programming Errors](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.MessagesAndCodes.http400)

[^4] [Error Retries and Exponential Backoff](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff)
