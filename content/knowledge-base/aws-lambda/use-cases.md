---
date: 2019-11-08T11:44:23+02:00
title: "Use Cases for AWS Lambda"
description: "Suitable use cases and advantages of using AWS Lambda"
learning: ["BAWS Lambda"]
learning_weight: 200
---

# Overview

Being a computing platform, AWS Lambda can be used for virtually any backend processing workload. Due to its characteristics and limitations it is better suited for some types of jobs.

We will cover in the lines below the values of AWS Lambda and in which scenarios it would be a suitable computing service.


# Use Cases

## Parallelizing CPU-bound workloads

Popular programming languages among web app developers, such as Python and Javascript, are not optimized for efficient parallelization.

An alternative to multi-core parallelization is fan-out multiple tasks to AWS Lambda. Since it scales up very quickly, handling 1,000 concurrent jobs is easy.

Sending multiple I/O-bound requests efficiently is much easier than handling CPU-bound in parallel. Since invoking a Lambda function is an I/O-bound operation, the development team can save time and have a more stable and scalable implementation.

## In combination with other AWS products

Lambda integrates very well with most other AWS services.

Manipulating objects in an S3 bucket, processing events from a Kinesis Stream, database items from a DynamoDB table or messages in an SQS queue, responding to REST API requests, etc.

These are all examples of services that work seamlessly with AWS Lambda. For a full list of integrations, please refer to the official documentation[^1].

## Serverless Website or Mobile App Backend

While static content can be stored in S3 and CloudFront, dynamic API requests can be served by AWS Lambda in combination with API Gateway or AppSync. With this configuration, it is possible to have an entire website in serverless platforms.

## Unpredictable, high-variance load

Lambda is usually a good fit for workloads whose demand is unpredicable and highly variable, due to its highly scalable performance.

Traditional infrastructures are provisioned accounting for peak demand. This leads to waste on idle resources. Although auto-scaling can mitigate, it may not be able to cope with rapid spikes in demand.

## File Manipulation

A Lambda function can provide a quick and stable way to manipulate files. Images stored in an S3 bucket, for example, could be automatically converted from JPG to PNG, or have its size and quality setting reduced for optimized web navigation.

This could work for virtually any kind of file: text, video, compressed, etc.

## Artificial intelligence

Implementing and maintaining an infrastructure to run AI systems on a large scale can be difficult. Some machine learning frameworks and libraries, such as Scikit Learn, SciPy, NumPy, spaCy, etc. can run smoothly on AWS Lambda.

Models that are too big to deploy with the Lambda package can be stored in S3 and retrieved on demand. It's possible to keep the model in memory for a warm start in the next invocations served by the same Lambda container.

## Disaster recovery

AWS Lambda can be used to automate tasks such as EBS snapshot and AMI creation to backup resources when configuring EC2 instances. Backup images can be stored in S3, for example.

Lambda can also be used to restore backup images and run CloudFormation templates.

## Extract, Transform, Load (ETL)

ETL jobs can be easily automated and scaled with AWS Lambda. A JSON object can be stored in S3, normalized in Lambda to insert in an RDS database, or validated to save in a DynamoDB table, for example. Later, Lambda could optimize the JSON using a columnar format to store back in S3 and serve fast and efficient analytical queries with AWS Athena.


---

# Footnotes:

[^1]:
     [Using Lambda with Other AWS Services](https://docs.aws.amazon.com/lambda/latest/dg/lambda-services.html)
