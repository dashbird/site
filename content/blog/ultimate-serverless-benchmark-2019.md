---
title: Ultimate Serverless Benchmark: AWS Lambda Vs. All (Azure, Google, IBM, Alicloud, and Oracle)
description: In-depth comparison between AWS Lambda Vs. all major cloud provider serverless solutions
date: 2019-07-01T12:00:00.000Z
frontImage: "2019-07-01/serverless-benchmark.jpg"
thumbnail: "images/blog/2019-07-01/serverless-benchmark.jpg"
authorlink: 'https://twitter.com/@byrrorenato'
author: Renato
author_image: '/images/team/renato.jpg'
blog: ["Serverless", "AWS Lambda", "Cloud Services", "Benchmark"]
---

We currently have six major cloud platforms offering serverless products, AWS Lambda being the pioneer. Our goal is to provide a quick way to compare and evaluate all. For each service, we will be evaluating:

1. Resource capabilities;
2. Runtime support;
3. Integrations;
4. Pricing;

_There are smaller service providers on the market that are focused on serverless, but we won’t cover them in the present analysis._

_For the pricing comparison, we considered regions in the United States east coast._

Let the battle begin!

# Spoiler

Due to its larger resource allocation availability, as well as the unrivaled set of possible integrations, the **_winner is AWS Lambda._**

The serverless paradigm enables and makes it easier to implement some of the best practices in software development, such as event-based architectures. Being able to integrate AWS Lambda with many other services within the AWS portfolio and having it responding automatically to events in these services can greatly contribute to the application’s health and stability.

Dashbird integrates deeply with AWS Lambda to provide enterprise-grade monitoring, alerting  and debugging features for serverless development teams. You can [try it today](https://dashbird.io/signup/) for free (no credit card).

# AWS Lambda

![AWS Lambda Logo](/images/blog/2019-07-01/logo-aws-lambda.png)

## Resource Capabilities

In terms of memory AWS Lambda offers from 128 MB up to 3 GB of RAM. Users can select memory on increments of 128 MB.

AWS allocates CPU proportionally to the memory assigned. Above 2 GB of RAM, the function is allocated two vCPU cores, which is useful for parallelizing tasks.

Maximum execution time is 15 minutes.

## Runtime Support

AWS allows users to implement [custom runtimes](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-custom.html), being able to support virtually any runtime. A [few popular runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html) are provided out of the box, which makes it easier to get started:

- Node.js (10 & 8.10)
- Python (2.7 & 3.6 & 3.7)
- Ruby (2.5)
- Java (8)
- Go (1.x)
- C# / .NET Core (1.0 & 2.1)

## Integrations

Lambda can integrate with the following AWS services (synchronously and/or asynchronously):

*   [CloudWatch](https://docs.aws.amazon.com/lambda/latest/dg/services-cloudwatchlogs.html): cloud monitoring and logging
*   [API Gateway](https://docs.aws.amazon.com/lambda/latest/dg/with-on-demand-https.html): api gateway service
*   [ELB](https://docs.aws.amazon.com/lambda/latest/dg/services-alb.html): load balancer
*   [S3](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html): blob storage
*   [DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html): scalable, NO-SQL, key-value pair database
*   [Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html): stream processing
*   [Cognito](https://docs.aws.amazon.com/lambda/latest/dg/services-cognito.html): user management & authentication
*   [SNS](https://docs.aws.amazon.com/lambda/latest/dg/with-sns.html): notification/messaging service
*   [SES](https://docs.aws.amazon.com/lambda/latest/dg/services-ses.html): email delivery service
*   [CloudFront](https://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html): content distribution network
*   [CloudFormation](https://docs.aws.amazon.com/lambda/latest/dg/services-cloudformation.html): infrastructure-as-code
*   [Code Commit](https://docs.aws.amazon.com/lambda/latest/dg/services-codecommit.html): code repository
*   [Lex](https://docs.aws.amazon.com/lambda/latest/dg/services-lex.html): conversational bot service
*   [Alexa](https://docs.aws.amazon.com/lambda/latest/dg/services-alexa.html): voice assistant


## Pricing

AWS offers up to 1,000,000 invocations for free. Above this tier, the pricing is $0.20 per million invocations.

Memory is charged per MB-millisecond consumed. The price does not scale perfectly linear with each level of RAM allocated, but every 128 MB used for 100 milliseconds cost, on average, $0.00000020838. The free tier is 400,000 GB-seconds of compute time per month.


# Azure Functions

![AWS Lambda Logo](/images/blog/2019-07-01/logo-azure-functions.png)

## Resource Capabilities

Azure Functions memory allocation availability also starts at 128 MB, going up to 1,536 MB and growing in increments of 128 MB.

CPU power is also allocated in proportion to memory. Azure also offers a premium version of Functions, in which the user can determine the number of vCPUs to be allocated, paying $0.00173 per 100 vCPU-seconds.

Maximum execution time is 10 minutes.


## Runtime Support

Azure Functions has official [support for five runtimes](https://docs.microsoft.com/en-us/azure/azure-functions/supported-languages):

*   C# / .NET Core (2)
*   Node.js (8 & 10)
*   F# / .NET Core (2)
*   Java (8)
*   TypeScript

Two other runtimes are supported as a preview:



*   Python (3.6)
*   PowerShell Core (6)

Some other runtimes are supported only in an experimental fashion, not recommended for production usage.


## Integrations



*   [Cosmos DB](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2): NO-SQL scalable database
*   [Storage blobs](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob): blog storage
*   [Queue](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue): queue processing service
*   [Event Hub](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-hubs): event management service
*   [Service Bus](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-service-bus): message/notification service
*   [Twillio](https://www.twilio.com/): SMS mes


## Pricing

Azure pricing model is very similar to AWS Lambda’s. It offers the exact same free tier levels for both invocations and memory usage.

The price per invocation is the same as Lambda, but the RAM pricing is slightly cheaper (- 4%):  $0.0000002 per 128 MB of RAM consumed over 100 milliseconds.


# Google Cloud Functions

![AWS Lambda Logo](/images/blog/2019-07-01/logo-google-cloud-functions.png)

## Resource Capabilities

Google offers five tiers of resource allocation (memory and CPU, respectively):



*   128 MB & 200 MHz
*   256 MB & 400 MHz
*   512 MB & 800 MHz
*   1 GB & 1.4 GHz
*   2 GB & 2.4 GHz

The maximum execution time is 9 minutes, which is lower than the previous contenders.


## Runtime Support



*   Node.js (6, 8 & 10)
*   Python (3.7)
*   Go (1.11)


## Integrations



*   [Cloud Pub/Sub](https://cloud.google.com/functions/docs/tutorials/pubsub): message/notification service
*   [Cloud Storage](https://cloud.google.com/functions/docs/tutorials/storage): blob storage service
*   [Stackdriver](https://cloud.google.com/functions/docs/concepts/events-triggers): cloud monitoring and logging service
*   [Firebase](https://firebase.google.com/docs/functions/get-started): mobile app development platform


## Pricing

Google Functions also has a different pricing model in comparison to the ones we’ve already seen above, since it charges for memory and CPU separately - although CPU is still determined in a fixed way by the memory allocated.

Memory costs $0.0000025 per GB-second and computing power is charged at $0.00001 per GHz-second consumed.

It’s twice more expensive than Lambda in terms of invocation count cost ($0.4 per million).

The free tier is more generous than AWS and Azure, offering 2 million invocations for free, 1 million compute-seconds per month.


# IBM Cloud Functions

![AWS Lambda Logo](/images/blog/2019-07-01/logo-ibm-cloud-functions.png)

## Resource Capabilities

Memory allocation in IBM Functions is limited in comparison to other cloud services, going from 128 MB to 1,024 MB. CPU is assigned proportionally to the memory.

Execution timeout can go up to 10,000 minutes, which is way higher than other services. This would be a compelling selling point for long-running processing needs, but we would argue that serverless platforms are not well suited for this type of job in the first place.


## Runtime Support



*   Node.js (8 & 10)
*   Python (2.7, 3.6 & 3.7)
*   Swift (3 & 4)


## Integrations

IBM offers a [REST API](https://cloud.ibm.com/openwhisk/learn/integrations) so that users can implement their own integrations with any other HTTP-compatible services. There are no out-of-the-box integrations offered by the platform, unfortunately.


## Pricing

Memory allocation is slightly more expensive than AWS and Azure, costing $0.0000002125 per 128 MB per 100 milliseconds.

The advantage of IBM in pricing is that invocations are free.

Free tier also includes 400,000 GB-second per month, just as AWS.


# Alicloud Function Compute

![AWS Lambda Logo](/images/blog/2019-07-01/logo-alicloud.jpg)

## Resource Capabilities

Memory availability goes from 128 MB up to 1,536 MB, growing in increments of 128 MB. CPU is proportional to memory allocated.

Execution time duration limit is 10 minutes.


## Runtime Support



*   Node.js (6 & 8)
*   Python (2.7 & 3.6)
*   PHP (7.2)
*   Java (8)
*   C# / .NET Core (2)


## Integrations



*   [Log service](https://www.alibabacloud.com/product/log-service): logging
*   [OSS](https://www.alibabacloud.com/product/oss): blob object storage
*   [API Gateway](https://www.alibabacloud.com/help/doc-detail/54788.htm): API gateway service
*   [Table Store](https://www.alibabacloud.com/product/table-store): NO-SQL scalable database
*   [MNS](https://www.alibabacloud.com/help/doc-detail/97032.htm): pub/sub messaging service


## Pricing

Memory allocation cost is slightly higher than AWS, at  $0.0000002085 per 128 MB per 100 milliseconds. 

Invocation count price is also priced at $0.2 per million calls, just as AWS. 

Alicloud offers the first 400,000 GB-seconds per month free of charge.


# Oracle Functions

![AWS Lambda Logo](/images/blog/2019-07-01/logo-fn-project-oracle.png)

Oracle Functions isn’t generally available yet and many of the items we analyzed in this article are still unknown: resource capabilities, pricing, integrations. Nevertheless, we decided to mention it here because we see they’re heading in an interesting direction.

Instead of developing their own proprietary serverless platform, like all other we analyzed above, they went the open source way and adopted the [Fn Project](https://fnproject.io/), managed by Apache, in their underlying infrastructure.

Two main advantages are:

1. Avoids vendor lock-in, making it easier to migrate an application to another infrastructure that also uses Fn, or to deploy your own Fn cluster;
2. Runtime agnostic: functions are packaged as Docker images, which offers a flexibility that “_[lets developers focus on solving business problems and not on figuring out how to hack around restrictions](https://blogs.oracle.com/cloud-infrastructure/announcing-oracle-functions)_”, in Oracle’s own words;

We wish the best to the Oracle team and that their debut in serverless computing contributes to foster competition, innovation, a healthier market and, ultimately, better and cheaper services for the developer community.
