---
date: 2017-06-05
title: How AWS Lambda Monitoring Works - Dashbird Help
linktitle: How it works
kbSeries: ["AUser Guide"]
kbSeries_weight: 300
aliases:
 - /help/basic/how-it-works/
---

Dashbird collects data from your AWS account and produces actionable metrics and detailed data without the need of editing your existing code!
But, Dashbird does need limited read access to your AWS account to collect the data. You give Dashbird acces by using built-in tools on AWS to create policies and roles. [You can find setup instructions here.](/docs/user-guide/get-started)

### Importer

Dashbird polls your AWS account, a couple of times a minute, with the following requests:

- `CloudWatch.filterLogEvents`
- `CloudWatch.describeLogStreams`
- `CloudWatch.describeLogGroups`

Using these endpoints, the service detects Lambdas that have executed and pulls data to our local server. From there, the data is stored to and encrypted S3 bucket.

_ALL requests are throttled, not to use up all the API limits._


### Aggregator
After importing the first batch of logs, an aggregator starts, going through all imported data and extracting metrics by each invocation. The **Aggregator** detects the result, duration, memory usage and other meaningful information about the invocation.

### Error detection
Dashbird detects errors from invocations and shows them in the UI for users to see and debug. Errors are detected by matching a native error regex pattern.
