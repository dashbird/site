---
date: 2019-11-18T15:55:00-03:00
title: "Resilience"
description: "Building fault-tolerant serverless functions with AWS Lambda"
learning: ["BAWS Lambda"]
learning_weight: 700
---

# Overview

Resilience is the ability of a cloud system to anticipate and handle faults without disrupting or discontinuing services to its users[^1].

Lambda offers a high level of resilience by benefiting from multi-AZ[^2] replication[^3] by default[^4]. Each function can run from one or more AZs within an AWS Region[^5]. Even in the event of multi-machine or an entire data center failure, AWS is able to continue serving invocations to a Lambda function.

Cross-region replication, function versioning and retry behavior are other features provided by Lambda that increases application reliability.

# Function Versioning

Function versions[^6] and aliases[^7] enables developers to save a function's code and configuration. It's possible, for example, to run different versions of the same function at the same time.

This enables multiple consumers of a single function to upgrade to newer versions as it best suits. It reduces the likelihood of service disruption by upgrading a function for all consumers at the same time. Blue/green and rolling deployments are also a possibility by using versioning in Lambda functions.

# Retry Behavior

When a function invocation fails for some reason, Lambda may retry multiple times until the execution is successful. A retry is simply invoking the same function again with the same event payload.

This bahavior enables fault-tolerance in Lambda applications, since it avoids transient faults from frustrating the request service definitively. For more information, please read the page about [Lambda retry behavior](/knowledge-base/aws-lambda/retries-and-idempotency/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda).

# Cross-Region Replication

Although multi-AZ replication is enabled by default for all Lambda functions, Cross-Region must be implemented manually by developers. This can be accomplished by combining API Gateway regional endpoints and Route53 active-active setup.

Below is an outline of the implementation:

1. Each Lambda function is deployed in two or more regions.
1. API Gateway regional endpoints are also replicated in the same regions, connected to the Lambda functions.
1. The same custom domain is used for all regions.
1. A health-checker endpoint is deployed in each Lambda, which will ping all backend services needed by the application (database, external APIs, etc).
1. Route53 will ping the health-checker to measure the application latency in each region.

For a detailed walk-through, please check this [AWS blog post](https://aws.amazon.com/blogs/compute/building-a-multi-region-serverless-application-with-amazon-api-gateway-and-aws-lambda/).

# Reserved Concurrency

Lambda can scale very quickly to accommodate hundreds or thousands of concurrent requests to multiple functions. To protect the entire platform from abuse and DoS attacks, there is a limit to how much it can scale. The default value is 1,000 concurrent requests (burstable to 3,000 to cope with short peaks).

It is very common that applications will rely on multiple functions. If a single function scales up to 1,000 concurrent requests, it will prevent all others from being executed. To avoid this type of scenario, Lambda provides Reserved Concurrency. Read more about it in the [Scalability and Concurrency](/knowledge-base/aws-lambda/scalability-and-concurrency/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda) page.

# Dead-Letter-Queue

When asynchronous invocations fail, Lambda may retry the request multiple times[^8]. When the last retry still fails, Lambda can be configured to send the request payload to a Dead-Letter Queue (DLQ). This queue can store messages for several days[^9], which allows developers to inspect failed requests, possibly fix the causes of failure and replay them.


---

# Footnotes

[^1]:
     Refer to the [Reliability](/knowledge-base/basic-concepts/reliability/) page

[^2]:
     Refer to [Availability Zone (AZ)](/knowledge-base/aws-cloud/global-infrastructure/#availability-zone-AZ) in the AWS Global Infrastructure page

[^3]:
     Refer to [Multi-AZ deployments](/knowledge-base/aws-cloud/global-infrastructure/#multi-az-Replication) in the AWS Global Infrastructure page

[^4]:
     For functions running inside a VPC, AWS is only able to provide multi-AZ replication if the VPC has subnets in different AZs. More info in [Configuring a Lambda Function to Access Resources in a VPC](https://docs.aws.amazon.com/lambda/latest/dg/security-resilience.html).

[^5]:
     Refer to [Region](/knowledge-base/aws-cloud/global-infrastructure/#region) in the AWS Global Infrastructure page

[^6]:
     [AWS Lambda Function Versions](https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html)

[^7]:
     [AWS Lambda Function Aliases](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html)

[^8]:
     Refer to the [Retries and Idempotency](/knowledge-base/aws-lambda/retries-and-idempotency/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda) page for more details.

[^9]:
     At the time of writing, [SQS message retention limit was 14 days](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-messages). Please check the documentation link for up-to-date information.
