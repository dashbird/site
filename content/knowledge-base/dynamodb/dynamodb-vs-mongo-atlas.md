---
date: 2019-11-06T00:00:00-03:00
title: "DynamoDB Vs. Mongo Atlas"
description: "Comparing managed database services: DynamoDB vs. Mongo Atlas"
learning: ["CDynamoDB"]
learning_weight: 5010
draft: true
---

# Intro

**DynamoDB** is a managed NoSQL database by Amazon Web Services. **MongoDB Atlas** is a managed service used to provision, maintain and scale clusters of instances running the MongoDB database engine.

> In this comparison, we will not cover DB differences in terms of data model, schema, and access patterns. For this, please refer to the [DynamoDB vs. MongoDB](/knowledge-base/dynamodb/dynamodb-vs-mongodb.md?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb) page.

The main advantages of each service are:

* **DynamoDB**
    * Easy to use and get started
    * Scaling up/down table througput capacity is very simple and straightforward
    * Provides a truly zero-maintenance database service
* **MongoDB Atlas**
    * Free instance for dev/testing purposes
    * New versions of MongoDB are deployed immediately by the Atlas team
    * Runs a highly optimized infrastructure for MongoDB


# Integrations

DynamoDB integrates with other AWS Services, such as [AWS Lambda](/knowledge-base/aws-lambda/introduction-to-aws-lambda.md?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb).

It is possible, for example, to:

* Trigger a Lambda function every time a new item is inserted, updated or deleted in a DynamoDB table
* Expose data stored in DynamoDB for external parties through scalable and secure HTTP endpoints with API Gateway
* Load data from DynamoDB into Redshift for running big-data analytical jobs

As a standalone database system, MongoDB Atlas does not integrate out-of-the-box with other AWS services. Any integration would need to be implemented by the development team.


# Scalability

?????? Mongo Atlas supports up to 50 instance replicas.

DynamoDB can scale to virtually as many instances as needed. The scaling model of DynamoDB is based not only on data storage, but also I/O demand. When the application demands higher read/write throughput, it automatically increases the number of instances in background to handle the load.

One of the main differences between the two services arise at this point: Atlas exposes instance provisioning to the developer, while DynamoDB abstracts all that away.

In DynamoDB, developers can control the throughput level by provisioning I/O capacity[^2], or select an on-demand model[^3], in which DynamoDB will optimize I/O allocation according to demand.


# Reliability

## Replication & Distribution

Both services support Multi-AZ[^4] and Multi-Region[^5] implementations, providing maximum reliability possible.

## Backup

DynamoDB provides two backup options:

* On-demand: create full copies of a DynamoDB table at any moment, which can be easily restored with a single-click
* Point-in-time: maintains incremental backups of a DynamoDB table

Point-in-time backups protects the application against mistaken modifications to the data. It eliminates the need to schedule and run periodic on-demand backups, since it automatically keeps a record of multiple versions of the table.

DynamoDB backup processes (creation or restoration) run in background using state-of-the-art technology model that allows to backup an entire table in a matter of a few seconds, regardless of its size. A backup process does not affect table performance and capacity. Backups are retained on external and highly-durable storage.

?????? Mongo Backups??


# Portability

Since Mongo Atlas relies on MongoDB, which is an open platform, it naturally offers higher portability than DynamoDB. Atlas itself can run on multiple cloud providers.

Nonetheless, some users have reported an unusual difficulty when they tried to move data out[^6] of Mongo Atlas. Although it doesn't prevent developers from porting its databases to another service, this increases migration costs.

DynamoDB, in fact, provides zero portability. It is impossible to run it outside of AWS domains. Lock-in worries are legitimate and should be considered in this case.

For projects in which it's important to keep the option of migrating to another cloud provider in the future, using DynamoDB can impose big migration costs down the road. There is no other database on the market that can serve as a drop-in replacement for DynamoDB API and functionalities. In the event of a migration out of DynamoDB, considerable refactoring work of the application will be required.


# Security

???????? DynamoDB VPC

MongoDB Atlas deploys each cluster in a dedicated VPC (Virtual Private Cloud[^7]), providing isolation to the data networking inside the data center.

????? Mongo connection, authentication model?

DynamoDB provides simple and easy-to-use **encryption-at-rest**, either with AWS's keys or custom keys by integrating with AWS KMS (Key Management Service)[^8].

**Encryption-in-transit** is provided through HTTP REST API endpoints using TSL (Transport Layer Security) and encryption models with the highest security standards. If it is necessary to expose DynamoDB for connections from external on-premise systems, AWS offers Site-to-Site VPN connections[^9] option. Each endpoint provides a certain functionality. Some examples below:

* **Data-level**
    * Query or scan items stored in a table
    * Delete items
    * Update items
* **Database-level**
    * Create or delete a table
    * Add or remove secondary indexes[^10] to a DynamoDB table
    * Enable data streams[^11]

DynamoDB relies on the battle-tested IAM (Identity Access Management)[^12] service. In short, data consumers can use IAM roles and policies with fine-grained permission levels that are used to authenticate and authorize connections to a certain DynamoDB endpoint in order to perform data-level and database-level operations.


---

# Footnotes

[^1]:
     [Comparison](https://www.g2.com/compare/aws-amazon-dynamodb-vs-mongodb-atlas) of popular market segments among DynamoDB and MongoDB users.

[^2]:
     DynamoDB [Provisioned Capacity Mode](/knowledge-base/dynamodb/capacity-modes?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb#provisioned-capacity-mode)

[^3]:
     DynamoDB [On-demand Capacity Mode](/knowledge-base/dynamodb/capacity-modes?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb#on-demand-capacity-mode)

[^4]:
     [AWS Availability Zone (AZ)](/knowledge-base/aws-cloud/global-infrastructure.md?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb#availability-zone-az)

[^5]:
     [AWS Region](/knowledge-base/aws-cloud/global-infrastructure.md?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb#availability-zone-az)

[^6]:
     [Some have reported](https://www.g2.com/compare/aws-amazon-dynamodb-vs-mongodb-atlas) difficulties in exporting datasets out of Mongo Atlas

[^7]:
     What is a [Virtual Private Cloud](/knowledge-base/basic-concepts/virtual-private-cloud/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb).

[^8]:
     [AWS Key Management Service]()

[^9]:
     AWS [Site-to-Site VPN](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) security connections

[^10]:
     DynamoDB [Secondary Indexes](/knowledge-base/dynamodb/secondary-indexes/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb)

[^11]:
     [DynamoDB Streams](/knowledge-base/dynamodb/dynamo-streams/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb)

[^12]:
     [AWS Identity Access Management Service]()
