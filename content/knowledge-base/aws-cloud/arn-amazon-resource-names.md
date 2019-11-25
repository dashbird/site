---
date: 2019-11-20T15:41:00-03:00
title: "ARN - Amazon Resource Name"
description: "How cloud resources are identified across the AWS stack"
learning: ["BAWS Cloud"]
learning_weight: 200
---

# Overview

ARN stands for Amazon Resource Name. It's a unique identifier for resources in the AWS Cloud: an server instance, a database instance, a queue buffer, etc.

The ARN can be useful when developers need to refer to a resource in an documentation, for example. Or when it's necessary to request help from the AWS support team.

The ARN has the following format:[^1]

`arn:partition:service:region:account-id:resource-type:resource-id`

The `resource-type` is optional. When it's omitted, the ARN is presented as:

`arn:partition:service:region:account-id:resource-id`

Each ARN always starts with `arn` and is composed of five additional terms (listed below), separated by comma `:`. Another variation is a slash to separate the `resource-type` from the `resource-id`:

`arn:partition:service:region:account-id:resource-type/resource-id`

## Partition

By default, the partition value is always `aws`. There are special cases in China of infrastructure locations where AWS depends on partners. In this case, it may show `aws-cn`.

## Service

Identified the AWS service to which the resource belongs. It could be `lambda`, `ec2`, `rds`, `dynamodb`, or any other service.

## Region

Indicates in which AWS Region the resource is deployed. It could be `us-east-1` or `eu-west-2`.

For a complete list of AWS Regions and their ARN identifiers, please check the [AWS documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#w481aac15c39c17b6).

Also read our guide about the AWS [Global Infrastructure](/knowledge-base/aws-cloud/global-infrastructure/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-cloud) to understand what is a Region and an Availability Zone in AWS.

## Account ID

Identifies the AWS account that owns the resource. This is particularly useful in internal documentations for teams that use multiple accounts. It is a good practice to have one account for development and testing purposes, and a separate account for production usage.

## Resource-Type and Resource-ID

The value of `resource-type` and `resource-id` varies according to the service.

In DynamoDB[^1], for example, a table has the following format: `table/{table-name}`. A Table stream has the following format: `table/{table-name}/stream/{YYYY-MM-DDThh:mm:ss.ddd}` (e.g. `table/my-db-table/stream/2020-01-15T19:00:27.055`).

A Lambda function will have the following `resource-type` and `resource-id`: `function:{function-name}`.

---

# Footnotes

[^1]:
     [AWS Documentation about ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html)

[^2]:
     Check our [introductory guide on DynamoDB](/knowledge-base/dynamodb/overview-and-main-concepts/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-cloud).
