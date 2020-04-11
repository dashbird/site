---
date: 2017-06-05
title: How does it work?
linktitle: How does it work?
description: Dashbird connects with AWS public APIs and collects logs from CloudWatch. We turn these logs into actionable metrics that can be used for monitoring serverless functions. 
kbSeries: ["ADashbird"]
kbSeries_weight: 300
aliases:
 - /help/basic/how-it-works/
 - /docs/user-guide/how-it-works/
---

Dashbird does not require any instrumentation from you. Instead, we provide a CloudFormation stack that will connect your cloud logs and metrics to our monitoring infrastructure. This is an automated process that takes less than 5 minutes.

Dashbird requires **limited** read-only access to your AWS account to collect the data. [Click here](https://dashbird.io/docs/quickstart/setting-up-dashbird/) for detailed instructions about our integration process and CloudFormation stack.

## Which functions are we importing?

Dashbird polls lambda functions from all regions after a fixed interval of 10 minutes. By default, all functions are imported. It's possible to create custom importing limits from the [client settings](https://app.dashbird.io/client).

### AWS Lambda Monitoring

Dashbird **periodically polls** your AWS account for data. All the data we receive is encrypted and stored safely in region <b>us-east-1</b>.

The exact polling interval is determined by the amount of lambda functions and the amount of requests they have. We usually poll data a few times a minute for a single function.

Polling adheres to AWS limits and we track each and every throttle error from the AWS API, doing our best not to overwhelm them. However, if there are other services using the same client APIs, then throttles might still occur.

After importing the first batch of logs, an aggregator starts, going through all imported data and extracting metrics by each invocation. The **Aggregator** detects the result, duration, memory usage and other meaningful information about the invocation.


### Other Cloud Resources

Similarly to AWS Lambda logs, Dashbird also polls AWS on a regular basis to collect metrics from all your cloud components: SQS queues, API Gateways, ECS containers, etc.

You can select the most suitable polling interval for each type of resource:

![SQS Polling Interval Customization](/images/docs/dashbird/how-does-it-work/inventory-polling-interval-customization.png "SQS Polling Interval Customization")

After collection, the metrics data goes through Dashbird internal algorithms to identify potential faults, policy violations, performance degradation, etc. When applicable, our system will generate proactive alerts.
