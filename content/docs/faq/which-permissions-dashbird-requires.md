---
date: 2019-06-06
title: Which AWS permissions Dashbird requires
linktitle: Which AWS permissions Dashbird requires
description: Which AWS permissions Dashbird requires.
kbSeries: ["FAQ"]
kbSeries_weight: 700
---

We have a [CloudFormation](https://aws.amazon.com/cloudformation/) stack that automates the setup of your AWS account connection to our log monitoring service. Below is a list of the permissions this CloudFormation stack will require, which operations our system can perform and why we need those.

In case you would like to review the YAML file directly, here is the link to the [CloudFormation stack](https://s3.amazonaws.com/dashbird-cf/cloudformation.yml) hosted in an S3 bucket owned by Dashbird.

## Main Permissions

| Services         | Operations             | Why we need these permissions
| ---------------- | ---------------------- | ----------------------------- |
| CloudWatch &<br>CloudWatch Logs | List<br>Get<br>Describe<br>Put Subscription Filter<br>Describe Subscription Filters<br>Filter Log Events<br>Start/Stop Query<br>Describe Log Streams<br> | Discover and access the logs produced by your Lambdas, so that we can do our magic |
| Lambda | List Functions<br>List Tags | Identify your Lambda functions for monitoring |
| X-Ray | Get<br>Batch Get | Link your Lambda logs to X-Ray traces for easy debugging and monitoring |
| API Gateway | GET<br>HEAD<br>OPTIONS | Identify your API Gateways and monitor them |
| CloudWatch Events | List<br>Describe | CloudWatch Events help complement data monitored by Dashbird |
| CloudFormation | Lists<br>Get<br>Describe | Maintain our CloudFormation stack to make sure your AWS account is properly connected to Dashbird |
| Kinesis | List<br>Describe | Make sure we have all subscriptions in place to monitor your Lambda logs |

## Additional Permissions

The services below aren't currently being monitored by Dashbird and we don't use those permissions yet. They are listed in our stack because we have a plan to offer monitoring services to those services. We wanted to make our CloudFormation stack future proof and be able to broaden our support to your cloud stack.

| Services         | Operations             |
| ---------------- | ---------------------- |
| DynamoDB | List<br>Describe |
| SQS | List<br>Get |
| SNS | List<br>Get |
| S3 | List Buckets<br>Get Bucket |
| Route53 | List<br>Get |
| StepFunctions (states) | All |
| AppSync | List<br>Get |
| CloudFront | List<br>Get |
| RDS | List<br>Describe |
| Batch | Describe |
