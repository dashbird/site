---
title: Cost-Efficient Ways to Run DynamoDB Tables
description: 
date: 2020-06-08T00:00:00.000Z
frontImage: "2020-05-vacation-buffer/cost-efficient-ways-to-run-dynamodb-tables.png"
thumbnail: "images/blog/2020-05-vacation-buffer/cost-efficient-ways-to-run-dynamodb-tables.png"
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["Serverless", "Cost-Efficiency", "Well-Architected", "DynamoDB"]
---

As we all know, the [on-demand capacity mode](https://dashbird.io/knowledge-base/dynamodb/capacity-modes/#on-demand-capacity-mode) of DynamoDB is great but can be cost-prohibitive in some cases (up to seven times more expensive than the Provisioned Capacity mode).

The Provisioned mode, on the other hand, shifts to the development team the burden of predicting what level of capacity will be required by the application. And it’s not quite as straightforward to achieve the same level of scalability in the Provisioned mode as we enjoy in the On-demand one.


## Improving Provisioned mode scalability while cutting costs

There are at least three strategies to improve scalability in the Provisioned mode and keep costs down at the same time.

The built-in auto-scaling feature is an option but requires benchmarking. It usually does not adapt itself very quickly to sharp spikes in demand. It’s important to run some tests with a distribution close to what your system currently gets in order to verify whether auto-scaling would be suitable.


## Alternative to read-intensive tables

If you are considering the On-demand capacity for a read-intensive table, maybe the cache service, DAX, can be a more economical alternative

But it really depends on the level of usage. A relatively small DAX instance (t2.medium) would cost the equivalent of more than 200 Million read operations in On-demand mode. In this case, the costs savings are only possible in high-throughput scenarios.


## Queue-load leveling for write-intensive tables

Last, but not least, an SQS queue can be an alternative for write-intensive workloads.

A highly coupled architecture with a Lambda function directly connected to the DynamoDB table is very common but this creates uncertainty as to how much capacity will be required on the DynamoDB side.

![dynamodb lambda highly-coupled](/images/blog/2020-05-vacation-buffer/dynamodb-lambda-highly-coupled.png "dynamodb lambda highly-coupled")

The SQS load level strategy is about using an SQS queue to handle the high-throughput and unpredictable traffic spikes.

Messages are polled by another Lambda function, which is responsible for writing data on DynamoDB. By setting a throttling limit to this second Lambda function, we make capacity allocation a lot easier on the database side, opening up the opportunity to use the much cheaper Provisioned capacity mode.

![dynamodb lambda decoupled](/images/blog/2020-05-vacation-buffer/dynamodb-lambda-decoupled.png "dynamodb lambda decoupled")


## Visibility is key

It’s certainly impossible to optimize costs if we are unable to monitor and visualize our cloud stack. [Dashbird](https://dashbird.io/) is a Serverless-first monitoring tool that allows you to keep track of DynamoDB tables, Lambda functions, SQS queues, and more.

It also cross-references our architecture against industry best practices to suggest performance improvements, cost reduction opportunities, and anticipate potential points of failure. [Start a free trial right now](https://dashbird.io/#register). It takes only 3 minutes and no credit card is required.
