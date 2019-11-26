---
date: 2019-11-26T18:00:00-03:00
title: "DynamoDB Pricing"
description: "How much DynamoDB costs and its different pricing models"
learning: ["CDynamoDB"]
learning_weight: 150
---

# Overview

DynamoDB has two basic types of pricing models, based on capacity modes:

* Provisioned Capacity[^1]
* On-Demand Capacity[^2]

As the name suggest, on-demand will allocate resources as the application needs them, without any pre-provisioning. All costs are charged on a per-usage basis.

In povisioned capacity mode, developers can choose how many resources each database table will receive. They may also choose whether DynamoDB can auto-scale up resources if needed, or whether the database should start throttling requests once the provisioned capacity is reached.

For more details, read our article about the two different [capacity modes](/knowledge-base/dynamodb/capacity-modes/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=dynamodb).

# Basic Concepts

**Read Operation**: an API call to read data from a DynamoDB table.

**Write Operation**: an API call to insert, modify or delete an item in a DynamoDB table.

Each Read Operation can read up to 4 KB of data. If the item is larger, DynamoDB will charge multiple Read Operation, rounded to the next multiple of 4 KB. Eventual consistent reads are charged only a half operation. Read operations inside transactions are charged double the normal price.

Each Write Operation can write up to 1 KB of data. For larger items, DynamoDB will charge multiple Write Operations, rounded to the next multiple of 1 KB. Write operations inside transactions cost double the normal price.

Bear in mind that, when using secondary indexes, DynamoDB needs to replicate all changes from the main table in the indexes. One extra Write Operation will be counted for each index associated.

# On-Demand Pricing

**Write operation** costs **$1.25 per million** requests.

**Read operation** costs **$0.25 per million** requests.

Capacity usage is charged by units. If the database doesn't reach a million operations, it's not rounded up to the nearest million, but charged only for the requests actually used.

It is not possible to buy reserved capacity at discounted prices in On-Demand mode.

Dynamo also charges the amount of **data stored** at the price of **$0.25 per GB-month**.

Backups are chaged as per follows:

* **Point-in-Time Recovery**: $0.20 per GB-month
* **On-demand (snapshot)**: $0.10 per GB-month
* **Restoring a backup**: $0.15 per GB

DynamoDB offers **Global Tables**, an automated multi-region replication system. It is charged at **$1.875 per million write operations** replicated.

DynamoDB **Streams** are charged at **$0.02 per 100,000 read operations**.

Data requested by requesters **outside the AWS region** where the DynamoDB table is deployed is charged at **$0.09 per GB**.

## On-Demand Free Tier

AWS provides a free tier with the following resources:

* 25 GB of data storage
* 2.5 million stream read requests from DynamoDB Streams
* 1 GB of data transfer out


# Provisioned Pricing

**Write operation** is charged at **$0.00065** per capacity unit per hour.

**Read operation** is charged at **$0.00013** per capacity unit per hour.

In provisioned mode, DynamoDB will provision the capacity and charge by the time it's available. Observe that it's a different model in comparison to On-Demand, which charges per request.

In provisioned mode, the application can issue several Read queries, for example, and get charged only one capacity unit. If all requests are sequential, they consume the same read capacity allocated.

It is possible to reserve capacity in advance with a monthly commitment in chunks of 100 capacity units (Read or Write). The price is as follows:

* 100 Reserved Read Capacity Operations: $150.00 (1-year, paid upfront) or $0.0128 per hour
* 100 Reserved Read Capacity Operations: $30.00 (1-year, paid upfront) or $0.0025 per hour

Reserved capacity can dramatically decrease costs with DynamoDB. If they are not used, though, no credit remains for the next billing cycle.

Global Tables (multi-region replication) is charged at $0.000975 per Read Capacity consumed.

Backup, DynamoDB Streams and data transfer have the same pricing as the On-Demand mode.

## Provisioned Free Tier

AWS provides a free tier with the following resources included:

* 25 Read and Write provisioned capacity units
* 25 GB of data storage
* 25 Read capacity for global tables deployed in two AWS Regions
* 2.5 million stream read requests from DynamoDB Streams
* 1 GB of data transfer out

# Footnotes

[^1]:
     [DynamoDB Provisioned Capacity Pricing Mode](https://aws.amazon.com/dynamodb/pricing/provisioned/)

[^2]:
     [DynamoDB On-Demand Pricing Mode](https://aws.amazon.com/dynamodb/pricing/on-demand/)

[^3]:
     [DynamoDB scaling limits](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html#default-limits-throughput): 40,000 read request units and 40,000 write request units
