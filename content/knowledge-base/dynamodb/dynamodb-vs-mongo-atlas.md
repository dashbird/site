---
date: 2019-11-06T00:00:00-03:00
title: "DynamoDB Vs. Mongo Atlas"
description: "Comparing managed database services: DynamoDB vs. Mongo Atlas"
learning: ["CDynamoDB"]
learning_weight: 5010
---

# Intro

**DynamoDB** is a managed NoSQL database by Amazon Web Services. **MongoDB Atlas** is a managed service used to provision, maintain and scale clusters of instances running the MongoDB database engine.

> In this comparison, we will not cover DB differences in terms of data model, schema, and access patterns. For this, please refer to the [DynamoDB vs. MongoDB](/knowledge-base/dynamodb/dynamodb-vs-mongodb.md?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb) page.

The main advantages of each service are:

* **DynamoDB**
    * Truly zero-maintenance and free of infrastructure hurdles
    * Easy to use and get started
    * Scaling througput capacity is very simple and straightforward
* **MongoDB Atlas**
    * Free instance for dev/testing purposes
    * New versions of MongoDB are deployed immediately by the Atlas team
    * By the creators of MongoDB, it runs a highly optimized infrastructure for Mongo


# Integrations

> **TL;DR**:
> As part of the AWS ecosystem, DynamoDB provides great integration with other cloud services. Integrating MongoDB would require considerably higher development and maintenance efforts.

DynamoDB integrates with other AWS Services, such as [AWS Lambda](/knowledge-base/aws-lambda/introduction-to-aws-lambda.md?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb).

It is possible, for example, to:

* Trigger a Lambda function every time a new item is inserted, updated or deleted in a DynamoDB table
* Expose data stored in DynamoDB for external parties through scalable and secure HTTP endpoints with API Gateway
* Load data from DynamoDB into Redshift for running big-data analytical jobs

As a standalone database system, MongoDB Atlas does not integrate out-of-the-box with other AWS services. Any integration would need to be implemented by the development team.


# Scalability

## Connections

> **TL;DR**:
> DynamoDB offers high scalability by relying on HTTPs API endpoints. Mongo, on the other way, still requires socket connections, which can be an additional source of bottleneck in the database infrastructure.

Applications don't need to open connections in order to query a DynamoDB table. All operations are performed through HTTPs endpoints, which makes it as scalable as possible.

MongoDB requires a TCP socket connection open in order to perform operations. There is a maximum number of concurrent connections in MongoDB Atlas, which depends on the server instance[^2].

MongoDB connection model offers some constraints that might collide with the high-concurrency of the serverless paradigm. In projects using high-throughput compute services, such as AWS Lambda, this can be a problem.

## Throughput and Data Storage

> **TL;DR**:
> DynamoDB offers unparalleled scalability. For small to medium sized applications, MongoDB Atlas would probably meet throughput and storage scalability requirements, though. For projects that expect high increases in demand, DynamoDB might be the safest option to cope with growth.

MongoDB Atlas uses a sharding[^3] strategy to distribute documents (items in the database) across multiple nodes, in order to cope with higher scalability needs.

DynamoDB can scale to virtually as many instances as needed. The scaling model of DynamoDB is based not only on data storage, but also I/O demand. When the application demands higher read/write throughput, it automatically increases the number of instances in background to handle the load.

One of the main differences between the two services arise at this point is: Atlas exposes instance provisioning to the developer, while DynamoDB abstracts all that away.

Using sharding restricts[^4] the usage of some database features in MongoDB, while DynamoDB offers the same feature-set regardless of the scale level. How many shards it's possible in MongoDB and maximum data size it can hold depends on a formula[^5].

In the best-case scenario, MongoDB can store up to 32 Terabytes of data.

In DynamoDB, developers can store virtually an infinite amount of data. Throughput level is controlled by provisioning I/O capacity[^6], or select an on-demand model[^7], in which DynamoDB will optimize I/O allocation according to demand.

In summary, DynamoDB scalability model requires very little to no effort at all from developers. MongoDB Atlas is not as straighforward and cannot provide a throughput threshold that developers can trust in advance.


# Reliability

## Replication & Distribution

> **TL;DR**:
> Very similar offering from both services. Since MongoDB Atlas can be deployed on AWS itself, developers can benefit from the cloud provider's high reliability.

DynamoDB follows the battle-tested AWS Multi-AZ[^8] and Multi-Region[^9] implementations, providing maximum reliability possible.

MongoDB Atlas uses multiple replica-sets[^10] to maintain the same dataset across multiple nodes in order to achieve high reliability and availability of the data.

## Backup

> **TL;DR**:
> Backup options are quite similar in both services and would meet the needs of most cloud applications.

DynamoDB provides two backup options:

* On-demand: create full copies of a DynamoDB table at any moment, which can be easily restored with a single-click
* Point-in-time: maintains incremental backups of a DynamoDB table

Point-in-time backups protects the application against mistaken modifications to the data. It eliminates the need to schedule and run periodic on-demand backups, since it automatically keeps a record of multiple versions of the table.

DynamoDB backup processes (creation or restoration) run in background using state-of-the-art technology model that allows to backup an entire table in a matter of a few seconds, regardless of its size. A backup process does not affect table performance and capacity. Backups are retained on external and highly-durable storage.

MongoDB offers similar feature for backing up data:

* Continuos backups: similar to the point-in-time DynamoDB backup
* Cloud provider snapshots: a scheduled full-backup of the database that runs on a daily basis and keeps stored in your cloud provider of choice (AWS, GCP, Azure)


# Portability

> **TL;DR**:
> By relying on an open-source engine, MongoDB Atlas provides much higher portability than DynamoDB, which is a proprietary, closed-source database system.

Since Mongo Atlas relies on MongoDB, which is an open platform, it naturally offers higher portability than DynamoDB. Atlas itself can run on multiple cloud providers.

Nonetheless, some users have reported an unusual difficulty when they tried to move data out[^11] of Mongo Atlas. Although it doesn't prevent developers from porting its databases to another service, this increases migration costs.

DynamoDB, in fact, provides zero portability. It is impossible to run it outside of AWS domains. Lock-in worries are legitimate and should be considered in this case.

For projects in which it's important to keep the option of migrating to another cloud provider in the future, using DynamoDB can impose big migration costs down the road. There is no other database on the market that can serve as a drop-in replacement for DynamoDB API and functionalities. In the event of a migration out of DynamoDB, considerable refactoring work of the application will be required.


# Security

> **TL;DR**:
> Both services provide a level of security that should be enough for most production cloud deployments. Applications in financials or health data industries might need extra security only provided by AWS.

DynamoDB provides simple and easy-to-use **encryption-at-rest**, either with AWS's keys or custom keys by integrating with AWS KMS (Key Management Service)[^12].

**Encryption-in-transit** is provided through HTTP REST API endpoints using TSL (Transport Layer Security) and encryption models with the highest security standards. If it is necessary to expose DynamoDB for connections from external on-premise systems, AWS offers Site-to-Site VPN connections[^13] option. Each endpoint provides a certain functionality. Some examples below:

* **Data-level**
    * Query or scan items stored in a table
    * Delete items
    * Update items
* **Database-level**
    * Create or delete a table
    * Add or remove secondary indexes[^14] to a DynamoDB table
    * Enable data streams[^15]

DynamoDB relies on the battle-tested IAM (Identity Access Management)[^16] service. In short, data consumers can use IAM roles and policies with fine-grained permission levels that are used to authenticate and authorize connections to a certain DynamoDB endpoint in order to perform data-level and database-level operations.

In MongoDB Atlas, IP addresses must be whilelisted, which can be a problem for applications using ephemeral compute services, such as AWS Lambda (no fixed IP unless in a VPC).

Clusters can be deployed in a VPC (Virtual Private Cloud[^17]), providing security and isolation to the networking. MongoDB also offers TLS and LDAP[^18] and a user authentication mechanism as an added security layer.


---

# Footnotes

[^1]:
     [Comparison](https://www.g2.com/compare/aws-amazon-dynamodb-vs-mongodb-atlas) of popular market segments among DynamoDB and MongoDB users.

[^2]:
     [Connection Limits in MongoDB Atlas](https://docs.atlas.mongodb.com/connection-limits/)

[^3]:
     [Sharding (database)](https://en.wikipedia.org/wiki/Shard_(database_architecture))

[^4]:
     [Restrictions imposed by Sharding on MongoDB](https://docs.mongodb.com/manual/core/sharded-cluster-requirements/#sharding-operational-restrictions)

[^5]:
     [Formula for calculating maximum shard count and data size](https://docs.mongodb.com/manual/core/sharded-cluster-requirements/#sharding-existing-collection-data-size)

[^6]:
     DynamoDB [Provisioned Capacity Mode](/knowledge-base/dynamodb/capacity-modes?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb#provisioned-capacity-mode)

[^7]:
     DynamoDB [On-demand Capacity Mode](/knowledge-base/dynamodb/capacity-modes?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb#on-demand-capacity-mode)

[^8]:
     [AWS Availability Zone (AZ)](/knowledge-base/aws-cloud/global-infrastructure.md?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb#availability-zone-az)

[^9]:
     [AWS Region](/knowledge-base/aws-cloud/global-infrastructure.md?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb#availability-zone-az)

[^10]:
     [MongoDB replication strategy](https://docs.mongodb.com/manual/replication/)

[^11]:
     [Some have reported](https://www.g2.com/compare/aws-amazon-dynamodb-vs-mongodb-atlas) difficulties in exporting datasets out of Mongo Atlas

[^12]:
     [AWS Key Management Service](https://aws.amazon.com/kms/)

[^13]:
     AWS [Site-to-Site VPN](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) security connections

[^14]:
     DynamoDB [Secondary Indexes](/knowledge-base/dynamodb/secondary-indexes/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb)

[^15]:
     [DynamoDB Streams](/knowledge-base/dynamodb/dynamo-streams/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb)

[^16]:
     [AWS Identity Access Management Service]()

[^17]:
      [Virtual Private Cloud](/knowledge-base/basic-concepts/virtual-private-cloud/)

[^18]:
      [MongbDB Atlas Security with LDAP](https://docs.atlas.mongodb.com/security-ldaps/)
