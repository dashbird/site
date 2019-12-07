---
date: 2019-11-06T00:00:00-03:00
title: "DynamoDB Vs. Mongo Atlas"
description: "Comparing managed database services: DynamoDB vs. Mongo Atlas"
learning: ["CDynamoDB"]
learning_weight: 5010
draft: true
---

# Overview

**DynamoDB** is a managed NoSQL database by AWS. **Mongo Atlas** is a managed service used to provision, maintain and scale clusters of instances running the MongoDB database engine.

> In this comparison, we will not cover DB differences in terms of data model, schema, and access patterns. For this, please refer to the [DynamoDB vs. MongoDB](/knowledge-base/dynamodb/dynamodb-vs-mongodb.md?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb) page.

While DynamoDB serve very well from SMEs and startups to large corporations, it is well known to be the choice of many development teams in the Enterprise tier. Mongo Atlas, on the other hand, is reported to be very popular among SMEs[^1].


# Integrations

DynamoDB integrates with a multitude of other AWS Services, such as [AWS Lambda](/knowledge-base/aws-lambda/introduction-to-aws-lambda.md?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb) and API Gateway.

It is possible, for example, to trigger a Lambda function every time a new item is inserted, updated or deleted in a DynamoDB table. Or to expose data stored in DynamoDB for external parties through scalable and secure HTTP endpoints with API Gateway.


# Scalability

Mongo Atlas supports up to 50 instance replicas.

DynamoDB can scale to virtually as many instances as needed. The scaling model of DynamoDB is based not only on data storage, but also I/O demand. When the application demands higher read/write throughput, it automatically increases the number of instances in background to handle the load.

One of the main differences between the two services arise at this point: Atlas exposes instance provisioning to the developer, while DynamoDB abstracts all that away.

In DynamoDB, developers can control the throughput level by provisioning I/O capacity[^2], or select an on-demand model[^3], in which DynamoDB will optimize I/O allocation according to demand.


# Reliability

Both services support Multi-AZ[^4] and Multi-Region[^5] implementations, providing maximum reliability possible.


# Portability

Since Mongo Atlas relies on MongoDB, which is an open platform, it naturally offers higher portability than DynamoDB. Atlas itself can also run on multiple cloud providers.

Nonetheless, some users have reported an unusual difficulty when they tried to move data out[^6] of Mongo Atlas. Although it doesn't prevent developers from porting its databases to another service, this increases migration costs.

DynamoDB, in fact, provides zero portability. It is impossible to run it outside of AWS domains. Lock-in worries are legitimate and should be considered in this case.

In case there is a chance the development team will have to migrate to another cloud provider in the future, using DynamoDB can impose very big migration costs. There is no other database on the market that provides the same API and functionalities as DynamoDB.


# Pricing



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
