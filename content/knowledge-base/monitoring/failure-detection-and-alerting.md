---
date: 2019-11-13T19:41:00-03:00
title: "Failure Detection and Alerting"
description: "Program a proactive alerting system to stay on top of the serverless stack"
learning: ["OMonitoring"]
learning_weight: 100
---

# Overview

Although serverless are very stable and reliable platforms, many things can go wrong with our software. A hardware failure may cause glitches, network instability can disrupt API communications, and the application itself can present unexpected bugs.

AWS Lambda, for example, has three types of errors, as discussed in [Lambda: Invocation, Function and Runtime Errors](https://dashbird.io/knowledge-base/logging/lambda-invocation-function-and-runtime-errors/). Since developers don't have access to the underlying infrastructure in serverless systems, logs are usually piped to a central repository (e.g. AWS CloudWatch Logs[^1]).

In some cases, errors are just returned from API calls. It is the application responsibility to handle and log these error messages, otherwise it will be impossible to detect and inspect them later.

Take DynamoDB and its capacity modes[^2]. If the number of queries gets too high and above the database capacity, it will return a `Provisioned Throughput Exceeded Exception`. When a Lambda function is querying, it must log the error, which is going to be stored in CloudWatch Logs as well.


# Failure Detection

Failure detection is the process of inspecting logs and identifying all strings and patterns that indicate whether an error occurred in an application.

Logging errors is only the first step. Even for small applications, the amount of log information can easily become impossible for humans to parse. This is when a failure detection algorithm is valuable.

Such algorithm will automatically identify a DynamoDB error, a Python or Node.js exception (e.g. `TypeError`) or an AWS Lambda misconfiguration, for example.


# Failure Alerting

Waiting for a customer or manager to discover an error and report to the development team can erode trust in the application. Much better is when developers are the first to learn about the failure and can proactively provide a notification, or perhaps even a quick fix.

For that reason, professional development teams must implement an error alerting mechanism coupled with the failure detection algorithms. Whenever something fails, the system should alert the responsible development team at the most convenient channels (e.g. Email, Slack).


# Practical Approach

Traditional logging and monitoring services from big, classic companies or open source projects won't work with serverless. Simply because serverless is not a traditional architecture. It requires specialized error inspection and alerting.

AWS CloudWatch Logs, for example, does not provide failure detection algorithms for serverless, nor alerting mechanisms. It can serve only as a great log central repository.

Having a dev team implementing its own failure detection and alerting system would be a waste of time. There are professional services tailored for serverless - such as [Dashbird](https://dashbird.io/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=logging) - that can provide a much better solution at a fraction of the internal development costs.

[Dashbird](https://dashbird.io/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=logging) works by reading logs from CloudWatch Logs. It is an asynchronous way of inspecting failures that does not require code instrumentation, nor interferes or degrades the application performance. Please check [How Dashbird Works](https://dashbird.io/docs/dashbird/how-dashbird-works/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=logging) for more information.


# Handling Failures

The best professional monitoring platforms will provide a failure management system as well. It helps organizing failures that are pending, resolve errors that have been fixed, etc.

In [Dashbird](https://dashbird.io/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=logging), for example, errors are tracked in different states: open, resolved or muted.

![Dashbird Error States](/images/docs/error-states.png)

Another benefit is setting up custom alerting policies. Developers can control which AWS Lambda functions to monitor, for example. Perhaps testing and experimental functions can be ignored, but production ones must be monitored closely.

The screenshot below illustrates a policy to monitor timeout failures in a given Lambda functions.

![Dashbird Policy Error Alerting](/images/docs/error-alert-policy.png)

The Dashbird documentation provides more details on the [Enabling Error Alerting](https://dashbird.io/docs/quickstart/enable-alerting/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=logging) features and [Notification Channels](https://dashbird.io/docs/quickstart/integrations/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=logging).


---

# Footnote

[^1]:
     [AWS CloudWatch Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html)

[^2]:
     [DynamoDB Capacity Modes](https://dashbird.io/knowledge-base/dynamodb/capacity-modes/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=logging)
