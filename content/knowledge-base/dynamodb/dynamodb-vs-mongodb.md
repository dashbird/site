---
date: 2019-11-21T21:05:00-03:00
title: "DynamoDB Vs. MongoDB"
description: "Comparing NoSQL databases: DynamoDB and Mongo"
learning: ["CDynamoDB"]
learning_weight: 5000
---

# Who Uses

| DynamoDB  | MongoDB    |
|-----------|------------|
| Netflix   | Uber       |
| Medium    | Lyft       |
| Lyft      | Codecademy |
| Intuit    | MIT        |
| New Relic | CircleCI   |

_Source: [Stackshare](https://stackshare.io/)_

Both databases are used by heavy-weights in the software industry, what indicates that they are are on par to handle challenging production environments.

# Service vs. Software

The main different between the two is that MongoDB is an open-source software, while DynamoDB is a service (_DBaaS_[^1], if you will).

This has major implications to how developers interact with both databases. First of all, MongoDB will require a lot more work in terms of provisioning and maintaining an infrastructure. By using DynamoDB, developers abstract all that away to AWS DevOps team.

This can be positive or negative, depending on the project and development team. Since DynamoDB is a proprietary service, it only runs on AWS and is more _opinionated_. There is only so much options developers have to interact with it.

As an open software, Mongo is more flexible. It can be deployed virtually anywhere, on premise or on any cloud. This also transfers a huge portion of the architectural decision-making and operation responsibilities to the development team.

# Data Model

DynamoDB follows a `key-value` store data model with `tables` and `items`.

Data is organized in tables, which contains items. Each item contains a set of key-value pairs of attributes. These attributes can be indexed for fast and efficient data access patterns.

MongoDB, on the other hand, is centered around `collections` of `documents`.

# Schema

MongoDB is schema-free, but it still possible to enforce a schema, if needed. DynamoDB is schema-less, meaning it's impossible to enforce any kind of schema on the database.

Developers can always enforce a schema using code. Nevertheless, it would transfer to the application-side a responsibility that is usually better taken care of by database systems.

This difference can be positive or negative, depending on the use case. For highly structured datasets relying on hierarchies and in need of strict and tightly controlled data formats, DynamoDB might not be a good choice. On the other hand, projects that need high data flexibility to accomodate future changes and requirements, Dynamo is a well-suited database.

# Reliability and Availability

Both databases can offer highly available setups. For DynamoDB, high availability comes out of the box with [AWS Multi-AZ strategy](/knowledge-base/aws-cloud/global-infrastructure/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb). The Global Tables[^2] feature also allows easy to setup multi-region replication.

With Mongo, it really depends on the underlying infrastructure. Building reliable and redundant setups for Mongo can impose an expensive fixed costs. Small applications ususally end up with a configuration that, despite being sub-par, can serve most business cases. Multi-region deployments are possible, but much more complex to implement and maintain in Mongo as well.

# Scalability

As a fully-managed service, DynamoDB will automatically scale according to what the service demands. It has its limits, but they are more than enough for a large majority of use cases. High-load applications have ways to prepare a DynamoDB table for handling larger loads as well.

DynamoDB is known to be used for a variety of applications within Amazon.com itself. The shopping cart, for example, is powered by DynamoDB. It proves that it can handle loads at the scale of the world largest online retailer.

MongoDB, on the other hand, has a storage model that is more difficult to scale. The Master-Slave approach can ease the horizontally scaling of the database. It is probably useful for read-intensive applications though. Strongly consistent reads is also hard to obtain in a multi-slave setup without compromising performance.

# Data Access Patterns

All the scalability power offered by DynamoDB shows its cons when it comes to data access patterns. In order to remain highly scalable and easy to replicate across multiple nodes, DynamoDB imposes strict rules with regards to how applications can access data.

Each table can only have a single item attribute indexed for fast retrieval, and only one attribute for ordering results. It is possible to use secondary indexes on additional attributes, but they don't support strongly consistent reads.

In order to query two different attributes at the same time (e.g. employee `title` and `location`, for example), it is necessary to build a composed index manually. Either by adding a new item in the table with the attributes concatenated (e.g. `title_location="John Doe_New York, NY, USA"`), or by creating a `title_location` attribute in all items and a secondary index on it.

With MongoDB, queries are way more flexible. It is possible to query the database with virtually any combination of attributes, values, ranges, etc. Ordering results is also easy and can be applied to multiple fields at once.  Mongo will even support read-only SQL queries.

Both databases support **ACID transactions**.

All this flexibility, though, hurts Mongo's ability to scale and keep performance predictable.

DynamoDB will respond[^3] to **any query** a developer might write in up to 30-50 ms (usually in the 99th percentile). With in-memory caching, latency can drop to microseconds. On the other hand, MongoDB performance may vary a lot depending on the query complexity, the server cluster health, and size of the dataset.

# Mongo to Dynamo Migration

AWS offers a [Database Migration Service](https://aws.amazon.com/dms/) that makes it easier to move datasets from [MongoDB clusters into DynamoDB](https://aws.amazon.com/blogs/database/performing-a-live-migration-from-a-mongodb-cluster-to-amazon-dynamodb/).

---

# Footnotes

[^1]:
     DBaaS: Database As A Service

[^2]:
     [DynamoDB Global Tables](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables_HowItWorks.html)

[^3]:
     Not a hard SLA commitment by AWS, but the regular performance observed in practice.
     
