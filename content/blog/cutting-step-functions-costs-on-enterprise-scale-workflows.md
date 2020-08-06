---
title:  Cutting Step-Functions Costs on Enterprise-Scale Workflows
description: AWS Step Functions is a great orchestration service, but can be quite expensive at large scale. In this article, we discuss two alternative and serverless architectures for cost-effective workflow management in enterprise-scale projects.
date: 2020-08-06T00:00:00.000Z
frontImage: "1mariliis/cutting-step-functions-costs-on-enterprise-scale-workflows-header.png"
thumbnail: "images/blog/1mariliis/cutting-step-functions-costs-on-enterprise-scale-workflows-header.png"
author: Renato Byrro
author_image: '/images/team/renato.jpg'
blog: ["Step Functions", "EventBridge", "DynamoDB", "Orchestration"]
draft: true
---

AWS Step Functions is a great service for orchestrating multi-step workflows with complex logic. It’s fast to implement, relatively easy to use and just works. The problem is its price.

For relatively low-scale projects, it’s a feasible solution. But for large-scale, enterprise-grade orchestration with hundreds of millions of processes, each with dozens of steps, it can be cost prohibitive.


## Why Step Functions is expensive

Behind the scenes, AWS Step Functions runs synchronously with our resources. This architecture triggers a _double-billing issue_, which is one side of the [Serverless trilemma](https://dashbird.io/knowledge-base/well-architected/serverless-trilemma/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=enterprise&utm_content=step-functions-alternatives).

The recently [announced Express Workflows](https://aws.amazon.com/blogs/compute/new-express-workflows-for-aws-step-functions/#:~:text=%20New%20Express%20Workflows%20for%20AWS%20Step%20Functions,for%20both%20creating%20and%20updating%20a...%20More%20) slashed _per-transition_ cost from $25/million to $1/million and created a new dimension: duration of tasks. And guess what? Task duration is charged exactly the same pricing as [AWS Lambda](https://dashbird.io/knowledge-base/aws-lambda/introduction-to-aws-lambda/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=enterprise&utm_content=step-functions-alternatives): per memory-second, rounded to the nearest multiple of 100 milliseconds.

This is like having a Lambda function deployed with a [Finite-state Machine](https://dashbird.io/knowledge-base/well-architected/finite-state-machine/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=enterprise&utm_content=step-functions-alternatives) implementation, which triggers other resources and keeps running in idle state waiting for their responses.

AWS recommends using Express workflows if tasks have short execution times. Standard workflows probably contain an overpriced markup to account for the risk of long-running ones.

This is suboptimal, but it’s understandable why AWS went that route. Without having access to the underlying code of tasks, it’s virtually impossible to provide all the feature-set available on Step Functions without synchronous execution and double billing.


## Affordable orchestration solutions

For large-scale and enterprise-level workflows that cannot afford the wasted resources of the Step Functions model, there are at least a couple of alternatives. One will certainly be able to figure out a dozen more, but the two we cover do the job of illustrating our point while staying 100% serverless, which is our goal.

I must anticipate that any of the two will probably require more effort to implement in comparison to Step Functions. This additional effort may be small or large, depending on your workflow requirements.


## Real-world code examples

We are planning on open sourcing code examples illustrating the architectures below, along with [CloudFormation](https://aws.amazon.com/cloudformation/) and [CDK](https://dashbird.io/blog/crash-course-aws-cdk-serverless-rest-api-data-lake-analytical-querying/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=enterprise&utm_content=step-functions-alternatives) templates for easy deployment in your own AWS accounts.

In case this is something you would like to have, please subscribe here to receive a heads-up once it’s ready.


## Orchestration with EventBridge

EventBridge is a serverless event bus that routes events from sources to targets based on certain rules. Sounds a bit like [Tasks](https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-task-state.html) and [Choices](https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-choice-state.html) on Step Functions, right?

With the [Schema Registry](https://dashbird.io/knowledge-base/event-bridge/intro-to-event-bridge/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=enterprise&utm_content=step-functions-alternatives#schema-registry) feature, it became even easier to configure EventBridge to work similarly to a workflow orchestration mechanism. We can organize event routing schemas in logical groups, resembling how Workflows are organized in Step Functions.

Any part of your application can send an event to an Event Bus, which will be matched against a set of schemas to determine which consumers should receive it. Schemas are [defined in JSON](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-schemas.html#eventbridge-schemas-create) following OpenAPI standards.

[Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/filtering-examples-structure.html) allow us to determine how events are processed depending on the fields and values present on them. [Content-based filtering](https://docs.aws.amazon.com/eventbridge/latest/userguide/content-filtering-with-event-patterns.html) provides even more granularity.

An Event Bus, however, limits itself to receiving events and routing to the appropriate target(s). It won’t track down what targets are working on and react to their responses automatically, as Step Functions does.

Another potential downside is that EventBridge is a relatively new service. Knowledge among developers and tooling to work with it is still not as mature as it is for Step Functions. Dashbird, for example, just [announced support for Step Functions](https://dashbird.io/blog/dashbird-supports-aws-kinesis-step-functions/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=enterprise&utm_content=step-functions-alternatives) in its architectural [insights engine](https://dashbird.io/docs/application-guide/insights/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=enterprise&utm_content=step-functions-alternatives). While more advanced tools are not yet available for EventBridge, as always, [CloudWatch already supports it](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-monitoring-cloudwatch-metrics.html) for basic metric monitoring.

The architecture we are discussing could involve, for example, one Event Bus and multiple Lambda functions. Each function is responsible for one step of the process. At the end of each step, the respective Lambda function is responsible for sending another event to the same Event Bus providing extra information about the latest process, so that EventBridge can parse and route to the next step in the process.

Now that Lambda offers the [Destinations](https://aws.amazon.com/blogs/compute/introducing-aws-lambda-destinations/) feature, with a simple configuration parameter it will deliver function responses to an Event Bus automatically for us. The destination event also differentiates successful executions from failed ones, making it easy to respond to failures accordingly within EventBridge, similarly to [Step Functions error handling](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html).


## DynamoDB Streams and Lambda

The [DynamoDB Streams](https://dashbird.io/knowledge-base/dynamodb/operations-and-data-access/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=enterprise&utm_content=step-functions-alternatives#streams) integration with Lambda can also be used to orchestrate complex workflows. As a new item is entered in a DynamoDB table, it can generate streams of events that automatically trigger a particular Lambda function.

We cannot customize which Lambda is triggered for each item, so this architecture requires a central orchestrator as a Lambda function. It could be deployed with an [open-source Finite-state Machine system](https://dashbird.io/knowledge-base/well-architected/finite-state-machine/#open-source), which would work similarly to Step Functions and deliver many of its features.

The main advantage here is that event routing is done in your preferred programming language, which certainly offers much more capabilities than EventBridge Schema JSON.

One disadvantage is that this central Lambda must be invoked prior to every single step, adding latency and costs. Nevertheless, as the central function receives events from DynamoDB, it can parse the workflow rules, determine targets and invoke them asynchronously to avoid the double billing issue.

The target Lambdas are then responsible for updating the tasks items in the same DynamoDB table, which will trigger another stream for the central Lambda to move into the next step of the workflow.

Unfortunately, Lambda Destinations does not support delivering responses to DynamoDB (yet!), so we need to manually embed this logic into our Lambda functions. As a result, the integration part of this architecture requires extra care in making sure events and responses will flow as expected throughout the entire process cycle.


## Wrapping up

We’ve covered in a high-level two possible alternative architectures to using Step Functions for large-scale, enterprise-level workflows. Both are 100% serverless and take advantage of event-driven and asynchronous communication to improve resource utilization, reduce waste and overall costs in comparison to Step Functions. We also propose using some of the latest features offered by AWS on other services, such as EventBridge Schema Registry and Lambda Destinations.

As we mentioned earlier, in case you’d like to receive code examples as well as [CloudFormation](https://aws.amazon.com/cloudformation/) and [CDK](https://dashbird.io/blog/crash-course-aws-cdk-serverless-rest-api-data-lake-analytical-querying/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=enterprise&utm_content=step-functions-alternatives) templates for implementing these architectural ideas, sign up here.

