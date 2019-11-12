---
date: 2019-11-10T17:30:00-03:00
title: "Secondary Indexes"
description: "Alternative indexing methods for flexible data access patterns"
learning: ["CDynamoDB"]
learning_weight: 300
---

# Overview

By default, every DynamoDB table buils an index of items based on the `primary-key` attribute. Apart form that, it's possible to create other indexes based on different attributes of the same items.


# Local vs Global Secondary Indexes

Two types of indexes are supported: local and global. The main differences are:

**Local** indexes can vary only the `sort-key`, maintaining the same `partition-key` as the base table, thus being useful only for different sorting patterns.

**Global** indexes support different attributes for both `partition-key` and `sort-key`.

In general, developers should avoid using Local indexes and prefer Global ones. Local indexes limit data volume to 10 Gb for any given `partition-key` value, which defeats the high scalability purpose of DynamoDB. Global indexes, on the other hand, impose no restrictions.


# Data projection

When setting up an index, DynamoDB will allow three data projection options. A data projection is a definition of which item attributes are projected - or copied - into the index:

1. Key-only projection: only the `primary-key` and `sort-key` item attributes will be available in index
2. All projection: an exact copy of all item attributes will be available in the index, which doubles the storage space the item takes in total
3. Custom projection: the developer chooses which items will be available in the index apart from the `primary-key` and `sort-key`


# Good Practices

## The less indexes, the better

Keeping the number of indexes to a minimum is recommended. Instead of creating too many indexes, consider using one table and one index (or very few indexes) for all querying requirements. This is possible by writing additional items to support alternative access patterns[^1].

Beware that indexes will consume storage space and write resources from the base table. When an item is inserted or modified in a table, DynamoDB needs to update the associated index(es). Updating an item in a table with five indexes, for example, will consume six write requests: one for the base table and five for the indexes.


## Project only what's necessary

Although projecting all attributes in indexes can be convenient, it might not be the smartest decision in all cases. Projected attributes consume storage space. Depending on the size of a table, projections can become very expensive.

Consider cases when items are rarely accessed or when just a few attributes are needed frequently. In those scenarios, it might be better to project only the key-attributes, or a minimum set of frequently used attributes.

Whenever is needed, it is always possible to retrieve additional attributes from the base table. This will consume an extra read requet, but could be way cheaper than doubling storage permanently on a _project-all_ index.


[^1] Refer to the [Access Pattern Strategies](/knowledge-base/dynamodb/access-pattern-strategies/) page
