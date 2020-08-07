---
title: A Simple Introduction to AWS Step Functions
description: A quick overview illustrated with examples of what Step functions is and how it works
date: 2020-08-07T12:00:00.000Z
frontImage: "2019-06-03/aron-visuals-322314-unsplash.jpg"
thumbnail: "images/blog/2019-06-03/aron-visuals-322314-unsplash.jpg"
canonical: https://dashbird.io/blog/introduction-to-step-functions/
authorlink: 'https://medium.com/@byrro'
author: Renato Byrro
author_image: '/images/team/renato.jpg'
featpop: most-popular
blog: ["AWS", "Serverless", "Step Functions", "Orchestration"]
---

Let's cut to the point and not lose your scarse time.

## Quick (I promise) intro

[Step Functions](https://aws.amazon.com/step-functions/) is a managed service by AWS that implements the Finite-state Machine (FSM) model.

You coordinate multiple AWS services into serverless workflows so you can build and update apps quickly. Using Step Functions, you can design and run workflows that stitch together services such as AWS Lambda and Amazon ECS into feature-rich applications.

You can read [Wikipedia's](https://en.wikipedia.org/wiki/Finite-state_machine) definition of a Finite-state Machine, but I think you'll like the next section more. Keep on reading.

## By example, we learn 

Have you noticed that intersection traffic lights never turn green simultaneously for crossing directions? Not even once in a Million times?

It never bugs down! How come?

<img src="/images/blog/2019-10-26/roshni-sidapara-h5M6LhYIDKU-unsplash.jpg">

> Thank FSM Gods next time you drive through it safely. 

The FSM model ensures that, when a traffic light is about to go green for one direction, all the others turned red before.

It does that by managing `states` and `transitions`. Mark those two words. They're **pivotal**.

Right, let's clarify.

For one light to `transition` into the green `state`, all other lights must have `transitioned` to the red `state` before. Simple, right?

<img src="/images/blog/2019-10-26/traffic-ligths.jpg">


FSM is a robust model for that type of scenario: multiple states with transitional rules.

It's kind of a _design pattern_. Not quite, but not too _strechy_.

Wanna see more?

Ever wondered how vending machines work? Yup, FSM is there too!

It guarantees you won't get a snack until you feed it up with at least those 3 bucks. Ouch, expensive! 

FSM will also manage the transition to delivering the snack after payment, and also secure your change if any is owed.

> Yes, some times vending machines fail, but it's not due to the FSM model

FSM is a mature and proven model that can be trusted. Implementing correctly isn't hard. When done right, rest assured it is going to fulfill its promises.

---

## FSM implementations

As a mature, battle-tested model, there are implementations in many programming languages, such as [Python](https://github.com/pytransitions/transitions), [Javascript](https://www.npmjs.com/package/xstate), [Java](https://sourceforge.net/projects/java-easyfsm/), etc.

Not recommending these libraries, just exemplifying. Do your research.

Or... even better... wait for it:

Wouldn't there be a way to use FSM without having to implement anything programming-wise? 

YES! Enters AWS Step Functions.

## Step Functions: a managed FSM service

<img src="https://usercontent2.hubstatic.com/14703367_f520.jpg">

Following FSM concepts, AWS Step Functions also has [states](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-states.html) and [transitions](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-transitions.html).

[Tasks](https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-task-state.html) are also part of the package, but more on that later.

---

## Straight to the point

We'll start with some [examples](https://docs.aws.amazon.com/step-functions/latest/dg/create-sample-projects.html) and go from there.

Consider a huge number of entries in a database. They all need to move to another storage location.

Too many entries, can't do in a single shot. Will need to loop.

![Step Functions example diagram](https://thepracticaldev.s3.amazonaws.com/i/64psnchxvvb5ijxcwr5z.png)

_Step Functions implementation - example diagram - adapted from [AWS Docs](https://docs.aws.amazon.com/step-functions/latest/dg/sample-project-transfer-data-sqs.html)_

This outlines how Step Functions would handle that data migration process for us.

The initial state is data seeded from the source database. It goes through a loop, then reading next entry, sending it to another location, until it finally succeeded.

It won't magically guess what we need. An FSM is coded in Step Functions using the [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html). It's just a JSON representation of your States, Transitions and Tasks.

Here's the [JSON snippet](https://gist.github.com/byrro/93ddb063ee42a9c083d507723d77a971) corresponding the diagram above.

Now `Tasks`. It's what executes what you need once data transitions across states.

In our example, when a DB entry comes from the loop, it gotta go to the new storage location. A Task would involve, in simple terms:

1. Getting the original data
2. Formatting it for the new location standards
3. Establishing a connection with the target database
4. Inserting the data
5. Waiting for confirmation
6. Returning a `200 | Success` response from the transfer request

In the AWS example, this `Task` is accomplished by a [Lambda function](https://dashbird.io/blog/what-is-a-lambda-function/?utm_source=dev.to&utm_medium=referral&utm_campaign=article&utm_content=educational).

---

## Advantages of Step Functions

### Auto-retry failures

In case the migration for a given entry fails for any reason, the Step Function can automatically retry it for us. Could even have it notifying ourselves in case of errors.

It will make sure an entry is not duplicated in the target storage by tracking its state and whether a retry is needed.

Once successfully migrated, an entry cannot possibly go back to "_pending migration_" state. That's guaranteed by the FSM model.

### FSM Benefits

[Everything beautiful](https://www.elprocus.com/finite-state-machine-mealy-state-machine-and-moore-state-machine/) about the FSM model comes bundled by default:

- Maturity and trustworthiness: resilient and fault-tolerant
- Flexibility
- Quickly move from an abstract, conceptual process to code and execution
- Little processing overhead

_Adapted from: [elprocus.com](https://www.elprocus.com/finite-state-machine-mealy-state-machine-and-moore-state-machine/)_

### Fully-managed

As we discussed previously, we can avoid the hassle of implementing an FSM library in our own environment.

AWS will manage everything. Make sure servers are provisioned to run our state machines. Scale the infrastructure when needed. Up and down. Horizontally. In the fourth dimension. Kidding.

No, but really, scalability is difficult to get done right, this is a big plus.

### Integrations

Step Functions will seamlessly integrate with [various other AWS services](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-service-integrations.html).

It's possible to connect your Step Functions workflow with other AWS services or even other workflows. That's right, you can compose workflows to create higher-level processes. Here are some examples of what you can do:

* Invoke a Lambda function
* Run Amazon Fargate task or Amazon ECS
* Submit an AWS batch job
* Publish a message to an SNS Topic
* Interact with SageMaker machine learning model training, inference and classification
* Send a message to an SQS queue
* Put or get items from a DynamoDB table

## Monitoring & Debugging

You must be asking: ok, this all too good, but how do I monitor my workflows, make sure they're running as expected or debug issues?

Step Functions publishes events and metrics to [CloudTrail](https://docs.aws.amazon.com/step-functions/latest/dg/procedure-cloud-trail.html) and [CloudWatch](https://docs.aws.amazon.com/step-functions/latest/dg/procedure-cw-metrics.html), and is also monitored by [the Serverless Insights platform](https://dashbird.io/blog/dashbird-supports-aws-kinesis-step-functions/) which contributes to better architectural practices.

In these services, you can set alarms and monitor the health of workflows throught various indicators. The underlying services orchestrated by Step Functions (e.g. Lambda functions) can be [monitored normally by any appropriate solution](https://dashbird.io/blog/ultimate-guide-to-serverless-monitoring-platforms/).

---

# Stay tunned

I won't even ask. You're smart enough to see the value.

Therefore, stay tuned. We're preparing a hands-on, _techy_ article showing how to actually put all of these concepts in practice, for real-world use cases.

Leave your [contact here](https://dashbird.io/?utm_source=dev.to&utm_medium=referral&utm_campaign=article&utm_content=educational#mc-embedded-subscribe-form) (bottom-right corner) to get notified when we do.

---

<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are step functions?","acceptedAnswer":{"@type":"Answer","text":"Step Functions is a managed service by AWS that implements the Finite State Machine (FSM) model."}},{"@type":"Question","name":"What is a Finite State Machine model?","acceptedAnswer":{"@type":"Answer","text":"A Finite State Machine, or FSM, is a computation model that can be used to simulate sequential logic, or, in other words, to represent and control execution flow."}},{"@type":"Question","name":"Advantages of step functions","acceptedAnswer":{"@type":"Answer","text":"Serverless: We do not have to manage the running of the source code. AWS step functions provides the infrastructure for it.\nVisual nature: The state machine can be seen and is easy to understand. This is a big plus months later.\nNative constructs: Some useful native constructs like re-try logic with exponential back-off.\nParallelization: You can parallelize the work declaratively. Procedural code is not hard to parallelize with threads, but it can be harder to debug later visually."}}]}</script>

