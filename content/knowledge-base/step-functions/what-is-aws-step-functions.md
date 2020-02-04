---
date: 2020-02-02T00:00:00+03:00
title: "What is AWS Step Functions"
description: "Introduction to Step Functions and its features"
learning: ["FStep Functions"]
learning_weight: 100
---

Step Functions is a managed service by AWS that implements the [Finite State Machine (FSM)](/knowledge-base/architectural-patterns/finite-state-machine/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=step-functions) model. In short, it is a way to control workflow processes and determine what needs to happen next depending on which stage the task encounters itself.

Multiple AWS services (eg. Lambda functions, ECS tasks, SQS queues, etc) can be coordinated into a serverless workflow to accomplish a higher level task with little coding requirements. This enables the composition of  multiple services to create feature-rich applications while keeping components decoupled and scalable independently.


## Illustrative example

Let's consider a business selling online services. Once a customer closes the purchase on their website, a series of actions need to be taken:

- Handle credit card payment
- Send confirmation to the customer
- Issue invoice
- Create and send access credentials to the new customer
- Alert the customer success team to follow-up the sale

![Step Functions Workflow Example](/images/knowledge-base/step-functions/step-functions-workflow-outline-example.png)

The decision of when to execute each task depends on the status of the overall process. Consider the system tried to process the credit card, but something went wrong. Credentials should not be sent to the customer until this problem is resolved and the payment status is successful.

Handling failures is another aspect of workflow management that Step Functions takes the burden off of developer hands.

When the credit card processing fails, it's easy to determine what to do. The developer might configure the workflow to trigger a service for sending a failure e-mail to the customer or even open a support ticket in Zendesk[^1], for example.

If a notification can't be sent at a given moment, Step Functions can handle the retry logic for it later.


# Footnotes

[^1]:
     [Zendesk](https://www.zendesk.com/) is a popular cloud-based support service that integrates with EventBridge.
