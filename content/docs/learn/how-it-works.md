---
date: 2017-06-05
title: Dashbird Uses Public AWS APIs
linktitle: How it works?
description: Dashbird connects with AWS public APIs and collects logs from CloudWatch. We turn these logs into actionable metrics that can be used for monitoring serverless functions. 
kbSeries: ["ALearn"]
kbSeries_weight: 300
aliases:
 - /help/basic/how-it-works/
 - /docs/user-guide/how-it-works/
---

By using **public AWS APIs** to fetch data from your AWS account, we produce actionable metrics and detailed data **without the need of editing any code!**

For it to work, Dashbird needs **limited** read access to your AWS account to collect the data. You give Dashbird access by using our custom made onboarding flow. It will create a CloudFormation template that sets up all necessary policies and roles. [Click here to find detailed instructions.](/docs/get-started/quick-start/)

### Which functions are we importing?

Dashbird polls lambda functions from all regions after a fixed interval of 10 minutes. By default, all functions are imported. It's possible to create custom importing limits from the [client settings](https://app.dashbird.io/client).

### Fetching data

Dashbird **periodically polls** your AWS account for data and saves everything to our servers. All the data we receive is encrypted and stored safely in region <b>us-east-1</b>.

The exact polling interval is determined by the amount of lambda functions and the amount of requests they have. We usually poll data a few times a minute for a single function.

Polling adheres to AWS limits and we track each and every throttle error from the AWS API, doing our best not to overwhelm them. However, if there are other services using the same client APIs, then throttles might still occur.

### Aggregator
After importing the first batch of logs, an aggregator starts, going through all imported data and extracting metrics by each invocation. The **Aggregator** detects the result, duration, memory usage and other meaningful information about the invocation.

### Error detection
Dashbird <b>detects errors from invocations</b> and shows them in the UI for users to see and debug. They're **categorized by similarity**.
