---
date: 2017-06-05
title: How AWS Lambda Monitoring Works with Dashbird
linktitle: How it works
kbSeries: ["ALearn"]
kbSeries_weight: 300
aliases:
 - /help/basic/how-it-works/
 - /docs/user-guide/how-it-works/
---

#### Dashbird <u>collects data from your AWS account</u> and produces actionable metrics and detailed data **without the need of editing your existing code!**

But, Dashbird does need <u>limited</u> read access to your AWS account to collect the data. You give Dashbird access by using built-in tools on AWS to create policies and roles. [You can find setup instructions here.](/docs/user-guide/get-started)

<h2>
  <span class="h2 underlined bold">Importer</span>
</h2>

Dashbird polls your AWS account, a couple of times a minute, with the following requests:

- `CloudWatch.filterLogEvents`
- `CloudWatch.describeLogStreams`
- `CloudWatch.describeLogGroups`

Using these endpoints, the service detects Lambdas that have executed and pulls data to our local server. From there, the data is stored to and encrypted S3 bucket.

_**ALL requests are throttled, not to use up all the API limits.**_


<h2>
  <span class="h2 underlined bold">Aggregator</span>
</h2>
After importing the first batch of logs, an aggregator starts, going through all imported data and extracting metrics by each invocation. The **Aggregator** detects the result, duration, memory usage and other meaningful information about the invocation.

<h2>
  <span class="h2 underlined bold">Error detection</span>
</h2>
Dashbird <u>detects errors from invocations</u> and shows them in the UI for users to see and debug. Errors are detected by matching a native error regex pattern.
