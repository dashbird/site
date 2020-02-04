---
date: 2020-01-27T00:00:00+03:00
title: "Use Cases for AWS Step Functions"
description: "Learn when it is beneficial to use Step Functions in cloud systems"
learning: ["FStep Functions"]
learning_weight: 300
---

AWS Step Functions is well suited for handling any kind of process or workflow in which multiple services need to be coordinated to accomplish a higher level task. Especially in cases where there is a need to control the flow of information and process execution based on rules and/or results from previous tasks.

Below we list some examples of workloads that would usually benefit from using Step Functions. It is not an extensive list, intended only for illustration purposes.


## ETL and Artificial Intelligence Jobs

Extract, Transform and Load (ETL) jobs are becoming more and more common in many applications and companies. The rise of tools for data analytics and artificial intelligence has made it inevitable to deal with large amounts of data. Often, the data points require manipulation in multiple steps before being ready for analysis.

The same is valid for Machine Learning or Deep Learning tasks. They often involve processing pipelines in which a series of steps must be followed before reaching a prediction or classification result.

To solve these needs, Step Functions can be used in connection with other services, such as [AWS Lambda](/knowledge-base/aws-lambda/introduction-to-aws-lambda/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=step-functions) or [AWS Batch](https://aws.amazon.com/batch/) to run custom logic upon the data, as well as [S3](https://aws.amazon.com/s3/) and [DynamoDB](https://aws.amazon.com/dynamodb/) to store and retrieve information along the workflow processing.


## Microservices Orchestration

Applications that implement a microservices architecture can benefit from Step Functions by simplifying the orchestration work. Higher level tasks can be composed from multiple services that are coordinated in a centralized, but decoupled manner.

Complex logic and rules can be applied to the workflow in order to account for exceptional cases. The retry mechanism embedded in Step Functions (and integration services such as AWS Lambda) makes it even easier to implement fault-tolerant microservices composition strategies.


## Fan-out or parallel processing

Step Functions can be used to process multiple tasks in parallel, or to control the fan-out process of tasks that require a breakdown in order to be tackled in small steps.


## Handling lists of datapoints

Step Functions support logic such as `for loops`. When there is a list of datapoints to process in a similar, but independent fashion, this feature can be implemented. The same workflow can be designed for the entire list, but each item is processed separately and sequentially by Step Functions.

