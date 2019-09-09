---
date: 2017-06-05
title: How it works
linktitle: How it works
description: How it works
kbSeries: ["ADashbird"]
kbSeries_weight: 300
---

## Dashbird Uses Public AWS APIs

By using public AWS APIs to fetch data from your AWS account, we produce actionable metrics and detailed data without the need of editing any code!

For it to work, Dashbird needs limited read access to your AWS account to collect the data. You give Dashbird access by using our custom made onboarding flow. It will create a CloudFormation template that sets up all necessary policies and roles.

### Which functions are we importing?

Dashbird polls lambda functions from all regions after a fixed interval of 10 minutes. By default, all functions are imported. It’s possible to select which Lambdas to monitor from the importing settings.

### Fetching data

Dashbird periodically polls your AWS account for data and saves everything internally. All the data we receive is encrypted and stored safely in the us-east-1 region.

The exact polling interval is determined by the number of lambda functions and requests. We usually poll data a few times a minute for a single function.

Polling adheres to AWS limits and we track each and every throttle error from the AWS API, doing our best not to overwhelm them. However, if there are other services using the same client APIs, then throttles might still occur.

### Aggregator

After importing the first batch of logs, an aggregator starts, going through all imported data and extracting metrics by each invocation. The Aggregator detects the result, duration, memory usage and other meaningful information about the invocation.