---
date: 2019-11-08T11:44:23+02:00
title: "Advantages, Challenges and Solutions"
description: "Learn the main pros/cons of AWS Lambda, and how to solve the FaaS development challenges"
learning: ["BAWS Lambda"]
learning_weight: 400
---

# Main Benefits and Advantages

## Simplified Cloud Infrastructure

Abstracting away the need to provision and manage clusters of servers and load-balancers greatly simplifies the management of cloud resources. Development teams can focus on building valuable backend applications, instead of managing infrastructure that is invisible to end users.

## Improved Productivity

Lambda has a very simplified development and deployment model. Mature tooling solutions available nowadays are combined to improve the productivity of developers.

The FaaS model also empowers development teams to adopt modern and scalable architectures. Microservices, asynchronous processing, event-driven development are all well suited for AWS Lambda.

## Scalability and Concurrency

Lambda makes it easy to scale an application backend up and down very rapidly. As mentioned in the [Use Cases](/knowledge-base/aws-lambda/use-cases/#parallelizing-cpu-bound-workloads) page, it's also a good platform for parallelizing CPU-bound workloads that would be harder to handle in multi-core machines.

## Financial Benefits

Lambda improves the financials of running compute workloads in the cloud in many ways:

* Zero waste with resource over-provisioning leads to lower cloud bills
* Costs are 100% variable, hence the financial risks are very low
* Simplified infrastructure reduces the need for large budget allocated to DevOps

## Customer Satisfaction and Trust

As a platform fully managed by AWS DevOps teams, the chances of downtime or performance degradation are certainly much lower than an in-house cluster of servers. An application built on top of a stable and robust infrastructure like that can build higher customer satisfaction and earn trust from its users.

# Challenges and Solutions

## Monitoring, Logging and Tracing

Abstracting the underlying infrastructure has its benefits, but also creates challenges. When it comes to logging and monitoring applications in Lambda, it's not possible to rely on background daemons to monitor a web server, for example.

Since the code runs on ephemeral containers, application logs also can't be persisted locally for later inspection or sync'ing with external platforms.

The solutions to these issues are:

* Monitoring: AWS CloudWatch integrates with Lambda to provide basic performance and runtime metrics for Lambda functions. Third-party providers, such as [Dashbird](https://dashbird.io/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda), will offer advanced metrics and statistics for professional backends.
* Logging: Lambda outputs all logs to AWS CloudWatch Logs by default. Since it is not a platform designed specifically for serverless debugging, dedicated services - such as [Dashbird](https://dashbird.io/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda) - can provide a much better and faster interface for debugging application issues.
* Tracing: AWS offers [X-Ray](https://aws.amazon.com/xray/), an application tracing service deeply integrated with AWS Lambda.

## Debugging

Debugging Lambda functions can be hard for many reasons.

Logs from multiple different invocations are mixed together in AWS CloudWatch Logs. It is also hard to navigate logs from all executions in a time-ordered way.

Although microservices and event-driven architectures bring many benefits, they also make debugging harder, since the execution of a given business-rule or job is scattered through multiple functions and message buffer systems. 

Logs will be equally dispersed. When it comes to debugging application issues, just finding the root cause can drain a huge amount of time.

Professional debugging platforms - such as [Dashbird](https://dashbird.io/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda) - especially designed for serverless environments can solve these problems very easily for developers.

## Timeout Limit

A Lambda function invocation can last up to 15 minutes. For most use cases, this will be more than enough, but some long-running processes may require longer periores of time. In these cases, the only way around is breaking down tasks in chunks that can be processed withing the Lambda timeout period.

## Memory Limit

The maximum RAM memory allocated to a Lambda function is 3 Gb. If your application requires more, there is no easy way around it. The only alternative is breaking down the compute processing task into chunks that can fit in the memory limit. If that's not possible, then Lambda is not suitable to the workload in question.

## Package Size Limit

The deployment package can only have up to 250 Mb when uncompressed. This limit can become inconvenient and maybe infeasible for some use cases. In Artificial Intelligence systems, for instance, some libraries and frameworks will be much larger.

A possible solution could be retrieving additional code from an external source (e.g. an S3 bucket) and loading in memory during runtime execution. Beware that this solution will increase execution time and may not be a scalable alternative.

This is one of the Lambda limits that is difficult to get around in an elegant and performant way.
