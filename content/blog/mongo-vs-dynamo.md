---
title: MongoDB (and Atlas) vs DynamoDB - 8 Basic Comparisons
description: A comparison among 8 categories with with strengths and weaknesses of Dynamo and Mongo, including Atlas managed Mongo
date: 2020-04-27T00:00:00.000Z
frontImage: "2020-04-27/mongo-vs-dynamo-header.png"
thumbnail: "images/blog/2020-04-27/mongo-vs-dynamo-header.png"
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["database", "mongodb", "dynamodb", "comparison"]
---

Both DynamoDB and MongoDB are NoSQL databases, but the similarities probably end there. In this article, we cover their strengths and weaknesses in 8 basic categories, so that you can decide which one suits best your needs.

While the data model behind Mongo is more flexible for storage and retrieval, Dynamo is stronger in terms of scalability, consistent performance under heavy load, and infrastructure abstraction.

Mongo also offers Atlas, a managed infrastructure, similar to AWS RDS for running MongoDB Clusters. Nonetheless, Mongo Atlas is not serverless and does not simplify operations as much as DynamoDB. It is still the closest comparison we can make, though.

Below we outline the eight basic differences in how they perform in several categories to support the decision on which one would suit best each of your use cases:


### 1) Data Model and Access Patterns

Dynamo **follows a key-value store data model** with tables and items. Data is organized in tables, which contains items. Each item contains a set of key-value pairs of attributes. Only indexed key-values can be queried and there is a limit in how many indexes can be built. Performance remains practically unchanged regardless of the query structure and database size.

Mongo, on the other hand,**is centered around collections of documents**. Virtually any data point can be queried on Mongo. Performance can vary a lot depending on query complexity and database size.

Both databases support ACID transactions.


### 2) Schema

MongoDB is **schema-free**, but it still possible to enforce a schema, if needed. DynamoDB is **schema-less**, meaning it’s impossible to enforce any kind of schema on the database side.

This difference can be positive or negative depending on your use case.


### 3) Integrations

As part of the AWS ecosystem, DynamoDB provides great **integration with other cloud services**. Integrating MongoDB **requires considerably higher development and maintenance efforts**.

Building event-driven architectures using queues and serverless functions, for example, in connection with your data storage is much easier with Dynamo in AWS.


### 4) Scalability

DynamoDB offers **high scalability** by relying on HTTPs API endpoints. Mongo, on the other way, still **requires socket connections**, which can be an additional source of bottlenecks in your database infrastructure.

The **concurrency model is relatively simple** in DynamoDB and **performance is predictable** no matter how you use the database. It is much **easier to cross-check the database capacity** versus your application demand.

Because of its flexible querying and data modeling, Mongo will probably require a **load performance analysis for each case**.

For small to medium-sized applications, MongoDB Atlas would probably meet most throughput and storage scalability requirements. For projects that expect high increases or unpredictable demand, DynamoDB might be the safest option to cope with growth.


### 5) Replication & Distribution

DynamoDB provides **Multi-AZ and Multi-Region data replication** out of the box, 100% managed by AWS. All the logic and processing for data distribution are also **taken care of internally by AWS**.

Although MongoDB supports **multi-node clusters**, it is not trivial to deploy and manage it, especially on a large scale. **Mongo Atlas simplifies the process** of deploying highly available clusters, which can even run on AWS itself. Still, it does not compare to how simple DynamoDB is.


### 6) Backup

Backup options are quite similar in both services and would meet the needs of most cloud applications. They will **provide options for continuous, point-in-time, and snapshot-based backups**.


### 7) Portability

For being an open-sourced database, MongoDB wins big here, as it **can run on virtually any cloud, traditional hosting platforms, and on-prem**. Dynamo, on the other hand, is a proprietary database that **cannot be deployed outside of AWS**.


### 8) Security

**Both services provide a level of security** that should be enough for most production cloud deployments. Applications in finance or health data industries might need extra security and certifications that might require a specialized analysis that goes beyond the purposes of this article.


### Who uses

Some notable companies reported to use the databases in their projects:

*   DynamoDB
    *   Netflix
    *   Medium
    *   Lyft
    *   Intuit
    *   New Relic
*   MongoDB
    *   Uber
    *   Lyft
    *   Codecademy
    *   MIT
    *   CircleCI

In case you would like to explore a more in-depth comparison between Dynamo, Mongo, and Atlas, check out these Learning Center articles: [DynamoDB Vs. MongoDB](https://dashbird.io/knowledge-base/dynamodb/dynamodb-vs-mongodb/) and [DynamoDB Vs. Mongo Atlas](https://dashbird.io/knowledge-base/dynamodb/dynamodb-vs-mongo-atlas/).
