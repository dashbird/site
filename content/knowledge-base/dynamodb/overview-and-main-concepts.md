---
date: 2019-11-08T00:11:00-03:00
title: "Overview and Main Concepts of Amazon DynamoDB"
description: "What is DynamoDB, how it works and the main concepts of its data model"
learning: ["CDynamoDB"]
learning_weight: 100
---

# Quick Intro

DynamoDB is a NoSQL serverless database provided by AWS. It follows a key-value store structure and adopts a distributed architecture for high availability and scalability.

As in any serverless system, there's no infrastructure provisioning needed. Dynamo offers two capacity modes that can serve both highly variable and predictable workloads.

Data is organized in tables, which contains items. Each item contains a set of key-value pairs of attributes. There are two special types of attributes: the `primary-key`, which works similarly to an item ID, and the `sort-key`, which allows for ordering the items.

Dynamo supports secondary indexes. They can be used to reference and order items by different `primary-key` and `sort-key`s. It is a schema-less database, in which items can have different sets of attributes. This allows for sparse indexes: composed only of items that contain a particular attribute.


# Main Concepts

**Table**: as a collection that can hold a virtually infinite number of items, it may also have secondary indexes associated

**Secondary Index**: duplicates table items using a different `primary-key` and `sort-key`

**Item**: the most basic unit in Dynamo, it holds the data attributes structured in a JSON

**Attribute**: a key value pair that contains informational data-points about an item in the database table

**Primary Key**: a special form of attribute that is used to reference items, similarly to an item ID

**Sort Key**: another special form of attribute that is used to organize items in a different sorting order

**Streams**: a constant stream of state-changing operations executed against a table

**Query**: operation to retrieve a particular item (or set of items)

**Scan**: oepration to scan the entire table or a section of it

**Filter**: rules to apply _after_ a query or scan has executed, but _before_ results are returned to the requester
