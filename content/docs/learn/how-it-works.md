---
date: 2017-06-05
title: Dashbird Works By Using AWS Public APIs
linktitle: How it works?
description: Dashbird connects with AWS public APIs and collects logs from CloudWatch. We turn these logs into actionable metrics that can be used for monitoring serverless functions. 
kbSeries: ["ALearn"]
kbSeries_weight: 300
aliases:
 - /help/basic/how-it-works/
 - /docs/user-guide/how-it-works/
---

Dashbird uses AWS public APIs to fetch data from your AWS account and produces actionable metrics and detailed data **without the need of editing any code!**

For this, Dashbird does need <u>limited</u> read access to your AWS account to collect the data.  
You give Dashbird access by using built-in tools on AWS to create policies and roles. [Click here to find detailed instructions.](/docs/user-guide/get-started)
<h2>
  <span class="h2 underlined bold">What lambdas we are importing</span>
</h2>

Dashbird polls lambdas from all regions after a fixed interval of 10 minutes. By default all Lambda functions will be imported. It's possible to create custom limits for lambda importing from [client settings](https://app.dashbird.io/client).

<h2>
  <span class="h2 underlined bold">Fetching data</span>
</h2>

Dashbird periodically polls your AWS account for data and saves everything to our local server. All the data we receive is encrypted and stored safely.
All the data is saved to <b>us-east-1</b> region.

The exact polling interval is determined by the amount of lambdas and the amount of requests they have. We usually poll data a few times a minute for a single lambda.

Polling honours AWS limits and we track each and every throttle error from the AWS Api. We are do our best not to overwhelm AWS Apis, however if there are other services using the same client APIs then throttles might still occur.

<h2>
  <span class="h2 underlined bold">Aggregator</span>
</h2>
After importing the first batch of logs, an aggregator starts, going through all imported data and extracting metrics by each invocation. The **Aggregator** detects the result, duration, memory usage and other meaningful information about the invocation.

<h2>
  <span class="h2 underlined bold">Error detection</span>
</h2>
Dashbird <u>detects errors from invocations</u> and shows them in the UI for users to see and debug. Errors are categorized by similarity.
