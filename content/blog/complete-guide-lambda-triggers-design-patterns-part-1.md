---
title: Complete Guide to Lambda Triggers and Design Patterns (Part 1)
description: Part 1 of the Complete Guide to Lambda Triggers and Design Patterns - Orchestration & Aggregation. In this series we will be digging deeper into the correlation of Lambda integration possibilities with common serverless architectural patterns.
date: 2020-08-06T00:00:00.000Z
frontImage: "2020-05-vacation-buffer/cost-efficient-ways-to-run-dynamodb-tables.png"
thumbnail: "images/blog/2020-05-vacation-buffer/complete-guide-to-lambda-triggers-design-patterns.png"
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["Serverless", "Tutorial", "Well-Architected", "AWS Lambda"]
draft: true
---

A while ago, we [covered the invocation (trigger) methods supported by Lambda and the integrations available](https://dashbird.io/knowledge-base/aws-lambda/invocation-methods-and-integrations/) with the AWS catalog.

Now we're launching a series of articles to correlate these integration possibilities with common serverless architectural patterns (covered by this [literature review](https://drive.google.com/file/d/1yji7M877yDIgIvqAJ8EhdjrgV1_5oSUr/view)).

In Part I, we will cover the **Orchestration & Aggregation** category. [Subscribe to our newsletter](https://sls.dashbird.io/newsletter-sign-up) and stay tuned for the next parts of the series.

## Pattern: Aggregator

### Purpose

A single API is used to aggregate multiple downstream resources.

## Solutions

### Entry-point Lambda as a router to other Lambdas

Requests come from API Gateway, which triggers a Lambda function (L1) synchronously using the [proxy integration model](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html). L1 then triggers multiple other Lambda functions (L2x). The invocation from L1 to L2x could be synchronous or asynchronous, depending on the use case.

If the client expects data that comes from L2x, the invocation trigger should be synchronous. For write-only endpoints, when the client only expects a '200 - OK' response, L1 can invoke L2x asynchronously and respond to the client immediately.

One disadvantage of using synchronous invocations is that the L1 function will continue to be billed for each millisecond it awaits L2x functions results. See more in this [Serverless Trilemma](https://dashbird.io/knowledge-base/well-architected/serverless-trilemma/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=lambda-triggers-and-patterns) tutorial.

### API Gateway as a router, client as aggregator

In some cases, the client could play the role of aggregator. Consider a frontend application under your control that requires data from multiple backend sources. A single API Gateway can be deployed with several endpoints, each routing to different L2x Lambda functions (also using the [proxy integration model](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html)).

The client is then responsible for parallelizing calls to all required endpoints, collecting, and aggregating results.

The main benefit of this approach is removing the double-billing factor. Watch this [tutorial about the Serverless Trilemma](https://dashbird.io/knowledge-base/well-architected/serverless-trilemma/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=lambda-triggers-and-patterns) to learn more about this.

## Architectural concerns

-   Timeout limits

-   API Gateway [REST](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-rest-api.html) and [HTTP](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html) API services' [timeout limit is 29 seconds](https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html#api-gateway-execution-service-limits-table), which can create problems if the jobs expected from the Lambda functions take longer;
-   The [Web socket](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html) API service [supports connections for up to 2 hours](https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html#apigateway-execution-service-websocket-limits-table), which gives more room if your jobs require 30+ seconds;
-   Keep in mind that the Aggregator pattern (or even Lambda itself) may not be suitable for long-running processes taking several minutes, in the first place;

-   Concurrency limits

-   Having L1 and L2x running synchronously will eat up Lambda concurrency quota faster;
-   Consider one L1 function and four L2x functions (L2a, L2b, L2c, L2d); each invocation to the API endpoint will consume 5 concurrency credits; that means 200 requests already exhausts the entire [default quota of 1000 concurrent executions](https://docs.aws.amazon.com/general/latest/gr/lambda-service.html#limits_lambda);
-   If you are allocating concurrency 

-   Potential failures

-   L1 should have logic in place to handle failures in any of the L2x functions;
-   Bear in mind that the AWS Lambda platform [will already retry a failed L2x request automatically](https://dashbird.io/blog/why-your-lambda-functions-may-be-doomed-to-fail/?ref=hackernoon.com); the problem is that this retry will not respond to the L1 function since their connection will be lost by then;
-   Lambda failures can be identified using AWS CloudWatch, but monitoring retries and linking to previous executions are possible on professional platforms such as [Dashbird](https://dashbird.io/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=lambda-triggers-and-patterns);
-   If L1 is manually invoking L2x again, you'll be faced with at least three executions:

-   1 failed
-   1 retried by AWS
-   1 retried by the L1 function

-   This has the potential to triple your costs of running L2x and there isn't much you can do about it without big changes to the architectural pattern;

## Pattern: Data Lake


### Purpose

Having a central, long-term data storage that is rarely modified and supports flexible, on-demand data query and transformation according to different access pattern requirements.

### Solutions

### Push-based approach

API Gateway and Lambda (using [proxy integration](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html)) can serve as a passive gate to receive requests with information for the data lake. Authorized applications would send the data in JSON format through a REST endpoint. The Lambda function is responsible for packing the data and uploading it to an S3 bucket.

This bucket will serve as the data lake storage. AWS Athena is used to [query the JSON data](https://docs.aws.amazon.com/athena/latest/ug/querying-JSON.html) stored in S3 on-demand. Athena can be accessed through [JDBC](https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html) or [ODBC](https://docs.aws.amazon.com/athena/latest/ug/connect-with-odbc.html) drivers (opens up for the usage of GUI analytical tools), an [HTTP API](https://docs.aws.amazon.com/athena/latest/APIReference/), or even the [AWS CLI](https://docs.aws.amazon.com/cli/latest/reference/athena/).

In case it's needed, a second API endpoint and Lambda function could be used to receive data requests, query Athena and send data back to the client. The benefits of this approach are:

-   Ability to use API Gateway powerful authentication and throttling features, which is important considering that [Athena has short limits in terms of concurrency](https://docs.aws.amazon.com/athena/latest/ug/service-limits.html#service-limits-queries);
-   Decoupling client requests from the data lake query service; in case it's required to migrate to a different solution in the future, it would be much easier to do so without causing any disruption to clients depending on the data lake;

### Event-driven approach

In case the primary data storage service supports event-driven triggers, the Lambda function can consume data for the data lake in an asynchronous way. This is the case of DynamoDB and Aurora, for example.

[DynamoDB Streams can trigger a Lambda function](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html) automatically as information is entered or modified in a table. [Aurora (MySQL compatible only) can similarly trigger a Lambda function](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Lambda.html) in an event-driven way.

The asynchronously triggered Lambda would then perform the same operations to store the data in S3.

### Optimizing storage for fast and cheap reads

JSON is a universal and easy to use structured data format, but not optimized for large scale data consumption. Athena queries will be orders of magnitude faster and cheaper with [columnar formats such as Apache Parquet](https://docs.aws.amazon.com/athena/latest/ug/columnar-storage.html).

An [EMR Cluster could be used](https://docs.aws.amazon.com/athena/latest/ug/convert-to-columnar.html) to transform JSON data into a columnar format, but AWS Kinesis would probably fit better in a serverless stack like ours. The Firehose service can [convert incoming JSON data into popular columnar formats](https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html) supported by Athena. In this case, the data is [delivered directly into S3 from Kinesis](https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html).

An API Gateway can also be used in front of Kinesis Firehose with the [AWS-type integration](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-integration-settings.html), which is beneficial for security and concurrency control purposes.

## Architectural concerns

-   Concurrency limits

-   There are concurrency limitations for all services listed here ([API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html#apigateway-account-level-limits-table), [Lambda](https://docs.aws.amazon.com/general/latest/gr/lambda-service.html) and [Kinesis Firehose](https://docs.aws.amazon.com/general/latest/gr/fh.html)), and scalability mismatches can defeat the architectural pattern;
-   For example, API Gateway may ingest up to 10,000 concurrent requests, but Kinesis will start throttling way below that;
-   It is important to model the architecture to handle peaks in demand; [using SQS between API Gateway and Lambda or Kinesis](https://dashbird.io/blog/architectural-pattern-for-highly-scalable-serverless-apis/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=lambda-triggers-and-patterns), for example, can increase the scalability capabilities; [a more scalable alternative to API Gateway is an Application Load Balancer](https://dashbird.io/blog/aws-api-gateway-vs-application-load-balancer/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=lambda-triggers-and-patterns);

-   Query scalability limits

-   Athena tables are only metadata projection of the data stored in S3, it does not store information in itself; S3 also has its limits in terms of maximum [requests per second](https://docs.aws.amazon.com/AmazonS3/latest/dev/optimizing-performance.html); if Athena queries need to read data from too many objects, S3 may not be able to serve them;
-   Kinesis Firehose is also a good option here since it's able to concatenate multiple records in a single S3 object;

-   Data access and security

-   Although we could have all our data bundled together and accessed by anyone, this will rarely be a good practice from an access security standpoint;
-   A good practice is to have multiple [Athena Tables pointing to different S3 object locations](https://docs.aws.amazon.com/athena/latest/ug/tables-location-format.html);
-   Let's say we have human resources, logistics, and financial information within an organization and would like to keep data access restricted only to people from within each department;
-   A prefix can be added to each S3 object to enable different access patterns within various Athena tables, such as '*s3://bucket/logistics/object-name';*
-   When uploading data from Lambda to S3 it is easy to add such prefixes and [Kinesis Firehose also support custom prefixes for S3 object names](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html);

## Wrapping up

This was the first article in a series about Lambda triggers and architectural design patterns. We've covered some patterns within the **Orchestration & Aggregation** category. In the coming weeks, we'll cover more patterns in the same category, such as Fan-in/Fan-out, Queue-bases Load Leveling, Finite-state Machine.

Other categories of patterns will come as well, such as **Event-Management**, **Availability**, **Communication, **and **Authorization patterns**.

[Subscribe to our newsletter](https://sls.dashbird.io/newsletter-sign-up) to stay tuned for the next parts in this series!

In case you are looking for a solution to help you build well-architected serverless applications, [Dashbird Insights](https://dashbird.io/features/insights-engine/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=lambda-triggers-and-patterns) cross-references your cloud stack against industry best practices to suggest performance and architectural improvements. You can [try the service for free](https://dashbird.io/features/insights-engine/#register?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=lambda-triggers-and-patterns) today, no credit card required.
