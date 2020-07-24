---
title: Complete Guide to Lambda Triggers and Design Patterns (Part 2)
description: Part 2 of the Complete Guide to Lambda Triggers and Design Patterns - Orchestration & Aggregation. In this series we will be digging deeper into the correlation of Lambda integration possibilities with common serverless architectural patterns.
date: 2020-07-23T00:00:00.000Z
frontImage: "2020-07-vacation-buffer/complete-guide-to-lambda-triggers-design-patterns.png"
thumbnail: "images/blog/2020-05-vacation-buffer/complete-guide-to-lambda-triggers-design-patterns.png"
canonical: https://dashbird.io/blog/complete-guide-lambda-triggers-design-patterns-part-2
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["Serverless", "Tutorial", "Well-Architected", "AWS Lambda"]
draft: true
---

This is part of a series of articles discussing strategies to implement serverless architectural design patterns. We continue to follow this [literature review](https://drive.google.com/file/d/1yji7M877yDIgIvqAJ8EhdjrgV1_5oSUr/view). Although we use AWS serverless services to illustrate concepts, they can be applied in different cloud providers.

In the [previous article (Part 1)](https://dashbird.io/blog/complete-guide-lambda-triggers-design-patterns-part-1/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=lambda-triggers-and-patterns) we covered the Aggregator and Data Lake patterns. In today's article, we'll continue in the **Orchestration & Aggregation** category covering the **Fan-in/Fan-out** and **Queue-based load leveling**.

We previously explored these concepts in [Crash Course on Fan-out & Fan-in with AWS Lambda](https://dev.to/byrro/crash-course-on-fan-out-fan-in-with-aws-lambda-47g0) and [Why Serverless Apps Fail and How to Design Resilient Architectures](https://dashbird.io/blog/why-serverless-apps-fail-and-how-to-design-resilient-architectures/), in case you'd like to dig deeper into some more examples.


## Pattern: Fan-in / Fan-out


### Purpose

Accomplish tasks that are too big or too slow for a single serverless function to handle.


### Solutions

We have basically four major steps in a Fan-in/Fan-out architecture:

*   **Source of task**: everything starts with a big task or a large list of tasks
*   **Ventilator**: this is the entry point of the task and where the "Fan-out" process starts
*   **Processing**: where tasks are actually accomplished
*   **Consolidation**: brings together results from all task processing (a.k.a. "Fan-in")

We'll cover possible solutions for each of these stages below. In some cases, we use examples to illustrate our points. They are hypothetical scenarios and not necessarily an implementation recommendation for any particular case.


#### Task Source

Tasks could literally come from any possible AWS Lambda triggers, either [synchronous](https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html) or [asynchronous](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html). This includes traditional invoke API calls, or integrations with [API Gateway](https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html), [DynamoDB Streams](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html), etc.

For tasks that involve processing large amounts of data, it's common to use integrations, since the invocation payload size limits are relatively low (up to 256 KB - 6 MB). For example, to process a 1 GB video file, it can first be stored in S3. The S3 PUT operation can [automatically trigger a Lambda function](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html). It doesn't violate Lambda limits because the invocation only provides the S3 object key. The Lambda function can then GET the file from S3 for processing.

AWS also recently [added support for EFS (Elastic File System)](https://docs.aws.amazon.com/lambda/latest/dg/services-efs.html) within Lambda functions, which is an alternative to S3 for storing tasks with underlying large amounts of information. The criteria to choose between both services go beyond the purposes of our article.


#### Ventilator

This is where the Fan-out process really starts. An entry-point Lambda function receives a big task (or a large list of tasks) and is responsible for handling the distribution to multiple processors. Tasks can be distributed individually or grouped in small packs.

In the example of a 1 GB video file, let's say we need to perform machine learning analysis on video frames, or extract audio from the video. The Ventilator function could break the video down in 200 pieces of 5 MB. Each of these smaller video sections would be supplied to an external API, a cluster of servers, or even a second Lambda function to conduct proper analysis.

This is obviously based on the premise that breaking the video apart is extremely faster than performing the analysis we are interested in.


#### Processing

The 200 Fan-out requests coming from the Ventilator can be dispatched concurrently to multiple processors.

If it takes, let's say, 1 minute to process every 1 MB of video file, the entire task can be accomplished in 5 minutes (1 minute * 5 MB/section). If the entire video was to be processed sequentially in a single node, it would take 1,000 minutes (or +16 hours). Clearly not possible in Lambda, due to timeout limitations.

You might think this will also reduce total costs, since Processor Lambdas could be configured with much less memory than what the large task requires. But in most Fan-in / Fan-out use cases, the workload is CPU-bound. Reducing memory size will also reduce CPU power, which in turns increases processing time. Since Lambda is billed not only by memory size, but also per duration, the gains in lower memory allocation can be offset by the longer duration.

To learn more about this, I recommend reading [How to Optimize Lambda Memory and CPU](https://dev.to/byrro/how-to-optimize-lambda-memory-and-cpu-4dj1) and [Lower Your AWS Lambda Bill by Increasing Memory Size](https://medium.com/hackernoon/lower-your-aws-lambda-bill-by-increasing-memory-size-yep-e591ae499692).


#### Consolidation

In some cases, it will be necessary to bring results from all processors together. Since each Fan-out process will probably run independently and asynchronously, it's difficult to coordinate the results delivery without an intermediary storage mechanism.

For that we can use:



1. Queues, Topics or Event Bridges
2. Stream processors
3. Databases or Datastores

In the AWS ecosystem, for the first group we have [SQS](https://dashbird.io/knowledge-base/sqs/intro-to-sqs-queue-service/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=lambda-triggers-and-patterns) (queue), [SNS](https://aws.amazon.com/sns/) (topics) and [EventBridge](https://dashbird.io/knowledge-base/event-bridge/intro-to-event-bridge/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=lambda-triggers-and-patterns). In the second, [Kinesis](https://aws.amazon.com/kinesis/) has different flavors depending on what type of data and requirements we have. Finally, in the third group there are [S3](https://aws.amazon.com/s3/) (object storage), [Aurora Serverless](https://aws.amazon.com/rds/aurora/serverless/) (relational database) and [DynamoDB](https://dashbird.io/knowledge-base/dynamodb/overview-and-main-concepts/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=lambda-triggers-and-patterns) (key-value store). Again, choosing what suits better each use case is beyond the scope of our current discussion.

Each of these services can act as a temporary storage for processing results. A third Lambda function, which we'll call Consolidator, can later pick up all the results and assemble them together in a coherent way for the task at hand.

But how does the Consolidator know when everything is ready? One approach is having the ventilator storing a task summary in a DynamoDB table, for example. It could store an item such as this:

```javascript

{

  “taskID”: 12345,

  “description”: “Video processing task”,

  “videoSizeInMB”: 1000,

  “processCount”: 200,

  “processReady”: 0

}

```

Each processor increments the `processReady` integer when its task is finished. Since [DynamoDB supports atomic incrementing](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.Js.03.html#GettingStarted.Js.03.04), this operation is safe for our use case.

The Consolidator function can be invoked on a scheduled basis, using [CloudWatch Rules](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/RunLambdaSchedule.html), to check whether `processReady == processCount`. Or we can also use [DynamoDB Streams to automatically invoke](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.Python.03.html#GettingStarted.Python.03.04) the Consolidator upon item update (which may not be efficient, since the Consolidator will have to ignore 199 invocations out of 200).

![Architecture Diagram: Fan-in/Fan-out](/images/blog/2020-07-23/fan-in-fan-out-diagram.png "Architecture Diagram: Fan-in/Fan-out")

One disadvantage of this architecture regards monitoring and debugging issues. A good practice would be to generate a unique [correlationID](https://blog.rapid7.com/2016/12/23/the-value-of-correlation-ids/) in the Ventilator, which is passed to each Processor. All Lambda functions should log the same correlationID, this way it's possible to track down every request associated with a single Fan-in/Fan-out process.

Monitoring services that are tailored to Serverless also allows us to [create “projects”  representing multiple Lambdas](https://dashbird.io/docs/quickstart/projects/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=lambda-triggers-and-patterns), which simplifies issue tracking and resolution on distributed architectures such as Fan-in/Fan-out.


## Pattern: Queue-based load leveling


### Purpose

Decouple highly variable workloads from downstream resources with expensive or inelastic behavior.

For example: consider an API Endpoint, whose incoming data is processed by a Lambda function and stored in a DynamoDB table with a [Provisioned capacity mode](https://dashbird.io/knowledge-base/dynamodb/capacity-modes/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=lambda-triggers-and-patterns#provisioned-capacity-mode). The concurrency level of the API is usually low, but at some points, during short and unpredictable periods of time, it may spike to 10x to 15x higher. DynamoDB auto-scale usually can't cope with the rapid pace of demand increase, which leads to _[ProvisionedThroughputExceededException](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html)_.


### Solutions

The Queue-based Load Leveling pattern is a great candidate to solve this type of problem. It is highly recommended for workloads that are:



1. Write-intensive
2. Tolerant to an eventually-consistent data model
3. Highly variable
4. Subject to unpredictable spikes in demand

Implementing the solution is straightforward. In the example above, instead of having the Lambda function directly storing data in DynamoDB, it pushes the data to a Queue first. It responds with a 200-Ok to the consumer, even though the data hasn't reached the final destination (DynamoDB) yet.

A second Lambda function is responsible for polling messages from the Queue in a predetermined concurrency level that is aligned with the Provisioned Capacity allocated to the DynamoDB table.

![Architecture Diagram: Queue-based Load Leveling](/images/blog/2020-07-23/queue-based-load-leveling-diagram.png "Architecture Diagram: Queue-based Load Leveling")


### Risk Mitigation

The risks associated with this pattern are mainly data consistency and loss of information.

Having a Queue in front of DynamoDB means the data is never “committed” to the datastore immediately after the API client submits it. If the client write and read right after, it might still get stale data from DynamoDB. This pattern is only recommended in scenarios where this is not an issue.

During peaks, the Queue may grow and information can be lost if we don't take necessary precautions. Messages will have a [retention period](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SetQueueAttributes.html), after which they'll be deleted by the Queue, even if not read yet by the second Lambda.

To avoid this situation, there are three areas of caution:



*   Enable centralized monitoring of your [Inventory of queues](https://dashbird.io/docs/application-guide/inventory/) to receive [alerts about the ones growing too rapidly](https://dashbird.io/docs/application-guide/insights/) before messages are at risk of being lost
*   Set a retention period that leaves comfortable time for the second Lambda to catch up in the event of unexpected long spikes
*   Configure a Dead Letter Queue to give an extra room for processing - make sure to [observe a caveat](https://docs.amazonaws.cn/en_us/AWSSimpleQueueService/latest/SQSDeveloperGuide/working-with-messages.html#setting-up-dead-letter-queue-retention) when setting an appropriate retention period for this additional queue


### Important considerations

Read-intensive workloads can't benefit from Queue-based load leveling, basically because we must access the downstream resource to retrieve the data needed by the consumer. Reserve this pattern for write-intensive endpoints.

As discussed before, Queue-based is not recommended for systems where strong data consistency is expected.

The pattern can only deliver good value in scenarios where demand is highly variable, with spiky and unpredictable behavior. If your application has steady and predictable demand, it's better to adjust your downstream resources to it. In case of DynamoDB, the auto-scale feature might be enough, or maybe increasing the Provisioned Throughput would be recommended.


## Wrapping up

In the next articles, we'll discuss more patterns around Availability, Event-Management, Communication and Authorization. [Make sure to subscribe](https://sls.dashbird.io/newsletter-sign-up) and be notified if you'd like to follow up.

Implementing a well-architected serverless application is not an easy fit. To support you on that Journey, Dashbird launched the first [serverless Insights engine](https://dashbird.io/features/insights-engine/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=lambda-triggers-and-patterns). It runs live checks of your infrastructure and cross-references it against industry best practices to emit early signs preventing failures and indicating areas that can benefit from an architectural improvement. [Test the service with a free account today](https://dashbird.io/register/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=lambda-triggers-and-patterns), no credit card required.
