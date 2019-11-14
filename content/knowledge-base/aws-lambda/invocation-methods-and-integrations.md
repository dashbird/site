---
date: 2019-11-13T16:18:00-03:00
title: "Invocation Methods and Integrations"
description: "Different ways of invoking a Lambda function and integrating to other services"
learning: ["BAWS Lambda"]
learning_weight: 600
---

# Invocation Methods

Developers can invoke an AWS Lambda function through an HTTP API[^1]. AWS also provides SDKs[^2] that wrap Lambda API endpoints and make it easier to interact with functions.

## Synchronous

When a Lambda function is invoked synchronously, it will keep the connection open until the execution is finished. Once it's done, it returns the response provided by the function's code (or an error, if that's the case).

This is the default invocation type for all Lambda functions. Although not necessary, to explicitly invoke a function synchronously, the API consumer provides the `InvocationType` parameter as `RequestResponse`.

## Asynchronous

When you invoke a function asynchronously, Lambda sends the event to a queue. A separate process reads events from the queue and runs your function. When the event is successfully added to the queue, Lambda returns a success message to the client[^3].

To invoke a function asynchronously, the API client must explicitly specify the `InvocationType` parameter as `Event`.

## Dry Run

This invocation type will validate the parameter values and verify whether the API client has appropriate permission to invoke the function. It will not actually execute the function code, only carry out a verification and validation process.

Simply specify `DryRun` as the `InvocationType` parameter to invoke a function in this mode.

# Integrations

Below is a list of services that integrate with Lambda. They invoke a given function either synchronous or asynchronously, depending on the service.

## S3 (Simple Storage Service)

S3 is a scalable and highly durable storage service by AWS. It an hold from image and video to text and columnar data files.

The main operations in S3 are PUT (save or update an object), GET (retrieve an object), DELETE (remove an object). It can automatically send **asynchronous** event messages to AWS Lambda whenever an object is stored or deleted, for example[^4].

Lambda receives an S3 event, which contains basic information about the object. It can then perform whatever task is needed in response to the operation executed against this object.

## DynamoDB

DynamoDB is a distributed, highly scalable NoSQL database by AWS. By enabling DynamoDB Streams, write operations (insert, update, delete) against a DynamoDB table will be stored in a stream of events. These events can be read by a Lambda function **asynchronously** to perform any kind of job in response to the database changes[^5].

To learn more about DynamoDB Streams, please read our page about [Operations and Data Access patterns](/knowledge-base/dynamodb/operations-and-data-access/#streams).

## SQS (Simple Queue Service)

SQS is a queue buffer service by AWS. Lambda can poll the queue of events and invoke a given function **synchronously**[^6]. Messages are read in batches from the queue to improve performance and reduce costs. When the function successfully processes the queue messages, Lambda deletes them from the queue.

## API Gateway

Lambda can be used as the backend processing platform to answer REST API requests received by an API Gateway[^7]. Each request method (GET, PUT, POST) can be matched to a different Lambda function or a single function can serve all requests from an endpoint (or a group of endpoints).

API Gateway will invoke Lambda **synchronously**. Beware that, even though Lambda timeout limit is 15 minutes, API Gateway is limited to 29 seconds[^8].

## Load Balancer

Similarly to the API Gateway integration, Lambda can also serve HTTP requests received by an Application Load Balancer (ALB)[^9]. Also as API Gateway, the ALB will invoke the Lambda function **synchronously**.

ALB does not have a hard timeout limit. Processing time is limited to the Lambda timeout of 15 minutes.

## SES (Simple Email Service)

SES is an email sending and receiving service by AWS. When configured to receive messages, it can invoke a Lambda function passing the email received as a parameter[^10]. SES can invoke in both synchronous and asynchronous modes, depending on how the integration is intended to work. Please refer to the AWS documentation for more details[^11].

## CloudFront / Lambda@Edge

CloudFront is a content delivery network (CDN) service by AWS. It serves static content in a performant way distributing and replicating content across hundreds of points-of-interest that are geographically closer to application users.

Lambda@Edge is an integration between CloudFront and Lambda that allows to customize content delivered through the CDN[^12]. This can be used to inspect cookies and customize content returned by CloudFront, or to manipulate headers in the CloudFront HTTP responses, for example.

## Kinesis Firehose (Stream Processing)

Amazon Kinesis Data Firehose can automatically transform data received through streams. By integrating with AWS Lambda, it's possible to implement custom transformation processes[^13].

## Other Integrations

* [Amazon Cognito](https://docs.aws.amazon.com/lambda/latest/dg/services-cognito.html)
* [Amazon Lex](https://docs.aws.amazon.com/lambda/latest/dg/services-lex.html)
* [Amazon Alexa](https://docs.aws.amazon.com/lambda/latest/dg/services-alexa.html)
* [AWS Step Functions](https://docs.aws.amazon.com/step-functions/latest/dg/connect-lambda.html)
* [Amazon Simple Notification Service](https://docs.aws.amazon.com/lambda/latest/dg/with-sns.html)
* [AWS CloudFormation](https://docs.aws.amazon.com/lambda/latest/dg/services-cloudformation.html)
* [Amazon CloudWatch Logs](https://docs.aws.amazon.com/lambda/latest/dg/services-cloudwatchlogs.html)
* [Amazon CloudWatch Events](https://docs.aws.amazon.com/lambda/latest/dg/with-scheduled-events.html)
* [AWS CodeCommit](https://docs.aws.amazon.com/lambda/latest/dg/services-codecommit.html)
* [AWS Config](https://docs.aws.amazon.com/lambda/latest/dg/services-config.html)
* [AWS IoT Events](https://docs.aws.amazon.com/lambda/latest/dg/services-iotevents.html)

---

# Footnotes

[^1]:
     [Lambda API Reference](https://docs.aws.amazon.com/lambda/latest/dg/API_Reference.html)

[^2]:
     [AWS SDKs and Programming Toolkits](https://aws.amazon.com/tools/)

[^3]:
     [Asynchronous Invocation](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html)

[^4]:
     [Using AWS Lambda with Amazon S3](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html)

[^5]:
     [Using AWS Lambda with Amazon DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html)

[^6]:
     [Using AWS Lambda with Amazon SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html)

[^7]:
     [Using AWS Lambda with Amazon API Gateway](https://docs.aws.amazon.com/lambda/latest/dg/with-on-demand-https.html)

[^8]:
     [API Gateway Integration timeout](https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html#api-gateway-execution-service-limits-table)

[^9]:
     [Using AWS Lambda with an Application Load Balancer](https://docs.aws.amazon.com/lambda/latest/dg/services-alb.html)

[^10]:
     [Using AWS Lambda with Amazon SES](https://docs.aws.amazon.com/lambda/latest/dg/services-ses.html)

[^11]:
     [SES Receiving Email Lambda Action](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-lambda.html)

[^12]:
     [Using AWS Lambda with CloudFront Lambda@Edge](https://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html)

[^13]:
     [Using AWS Lambda with Amazon Kinesis Data Firehose](https://docs.aws.amazon.com/lambda/latest/dg/services-kinesisfirehose.html)
