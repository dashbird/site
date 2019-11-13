---
date: 2019-11-08T10:00:00-03:00
title: "Operation and Data Access"
description: "Query and Scan operations and how to access data on DynamoDB"
learning: ["CDynamoDB"]
learning_weight: 200
---

# Operations: Query & Scan

DynamoDB offers two ways to access information stored: Query and Scan.

A Query will rely on the `primary-key` to find information. Query can point directly to a particular item (or set ot items) and retrieve them in a fast and efficient way.

Scan, as the name suggests, will browse table items from start to finish. The `sort-key` allows to determine the scanning order direction.

It is possible to apply `filters`to both a Query and a Scan operation and control which items are returned. Filters do not contribute to optimizing the operation. They are applied _after_ the operation execution and _before_ results are returned.

Running a Scan is expensive and inefficient, thus should be avoided in almost all use cases. Unless one really needs to browse the entire set of items, for instance.

Querying by the `primary-key` is the most efficient manner of retrieving data from a DynamoDB table. Most applications require more flexible querying capabilities[^1], though.


# Transactions and Conditional Updates

DynamoDB supports transactions and conditional updates for enhanced data integrity.

Transactions work similarly to traditional databases: either all queries in a transaction succeed or none does. This is useful when there are queries coupled with each other.

A common example is a banking balance: when transfering funds from Account A to B, we want to avoid crediting one account without debiting the other.

Conditional updates are useful to link a write request to a particular item value. Say Account A wishes to transfer $10 to Account B. The request should only proceed if the current balance is greater than or equal to $10.

The system could read the balance first, then issue the transfer request. But a second transfer request may be received in the meanwhile. This could lead to a negative account balance. Conditional updates are verified atomically, avoiding race conditions.


# Consistency levels

Due to its distributed and high availability model[^2], DynamoDB stores each item in various servers. To update an item, each server version must be renewed. Since read requests can be served by distinct servers, an inconsistent value for the item can be provided.

That is the default model for read requests in DynamoDB. If a read request somes too close to a previous update, it might serve an old version of an item. That is called **eventual consistency**.

This model can be a problem to some applications. In the bank account example, a possibly outdated balance cannot be used to validate a request to transfer funds.

For that reason, DynamoDB offers a **strong consistency** model. When this option is set to `True` in a read request, Dynamo will make sure the value returned is the most up-to-date across all copies of the item.


# Streams

DynamoDB can generate a constant stream of time-sorted write operations in a table. _Streams_ can be used by external applications for various purposes.

A possible use case is aggregating metrics from multiple operations. A table receives user likes to a social media post. A service can aggregate to count total likes, for example.

Streams can group items up to a certain number of operations or for a given time period. It could buffer social media likes for, say 15 minutes. Hundreds or thousands of likes might come in during this time. The aggregator service updates the total likes value only once, which saves resources.

Each item in a Stream can contain the previous and new version of the item, so it's possible for the Stream consumer to evaluate what has been changed by each operation recorded.


# Time-to-Live (TTL)

Items can have an attribute called `ExpirationTime`. When it's set to a unix timestamp in the future, DynamoDB will auto-delete the item when the time expires. This is useful to keep tables clean when data loses relevance over time.

Then the TTL process auto-deletes an item from a table, it is also recorded in Streams. This can be used to audit expired items. A service consuming streams can move old data to a cold storage, for example.


[^1] Refer to the [Access Pattern Strategies](/knowledge-base/dynamodb/access-pattern-strategies/) page

[^2] Refer to the [Architecture and Limits](/knowledge-base/dynamodb/architecture-and-limits/) page
