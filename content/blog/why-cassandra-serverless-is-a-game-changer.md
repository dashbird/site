---
title: "Why Cassandra Serverless Is a Game-Changer"
description: Understand the power of having a serverless verion of Cassandra managed by AWS
date: 2019-12-09T00:00:00.000Z
frontImage: "2019-12-09/aws-reinvent-cassandra-serverless.jpg"
thumbnail: "images/blog/2019-12-09/aws-reinvent-cassandra-serverless.jpg"
author: Renato Byrro
blog: ["cassandra", "database", "aws", "reinvent", "serverless"]
---

Up until now, [DynamoDB](https://dashbird.io/knowledge-base/dynamodb/overview-and-main-concepts/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=cassandra-serverless) has been the only option of a truly serverless database battle-tested for production environments. Especially after launching the on-demand throughput capacity optimization, is a perfect-fit database engine for serverless projects.

### The main issue with DynamoDB? **Vendor lock-in**.

That is one of the main reasons preventing serverless teams to adopt a serverless database. Many have falled back to SQL, by using Aurora Serverless, or to a document DB such as MongoDB. These two databases are supported by open-sourced APIs, releasing the vendor lock-in fears.

The problem is: none of these options offer the level of speed and scalability of DynamoDB. See, for example, our detailed comparison of [MongoDB](https://dashbird.io/knowledge-base/dynamodb/dynamodb-vs-mongodb/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=cassandra-serverless) and [MongoDB Atlas](https://dashbird.io/knowledge-base/dynamodb/dynamodb-vs-mongo-atlas/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=cassandra-serverless).

### The scalability issue can be solved by Cassandra while also meeting the open standards requirement.

As an example: each node in Cassandra can serve requests directly. Without the need for a _Master_ node, as opposed to Aurora or MongoDB, the scalability and reliability of Cassandra are increased by orders of magnitude.

Cassandra is an open-source database system and can be deployed virtually anywhere, in the cloud or on-premise. Migrating an application relying on Cassandra would be greatly faster and cheaper in comparison to one tied to the proprietary DynamoDB API.

The only downside so far is [pricing](https://aws.amazon.com/mcs/pricing/): ~16% more expensive than [DynamoDB on-demand mode costs](https://aws.amazon.com/dynamodb/pricing/on-demand/). But considering the flexibility offered by Cassandra, that might be worth paying for.

[Serverless Cassandra](https://aws.amazon.com/mcs/) is still in preview mode. At Dashbird, we are testing it to really confirm it can scale to cope with high throughput of a Lambda application, for example.

> We're publishing a thorough comparison of Cassandra Serverless and DynamoDB this week. [Subscribe here](https://dashbird.io/subscribe-knowledge-base/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=cassandra-serverless) to receive an alert when it's live!
