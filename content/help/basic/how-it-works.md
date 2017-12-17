---
date: 2017-06-05
title: How it works
kbSeries: ["Basic"]
---

Dashbird collects data from your AWS account and produces actionable metrics and detailed data from it.
For that, Dashbird requires a delegation to your AWS account to function. [You can find setup instructions here.](/help/setup/setting-up-dashbird)

### Importer

Dashbird periodically(about every 3 minutes) polls your AWS API with the following requests:

- Lambda.listFunctions
- CloudWatch.filterLogEvents
- CloudWatch.describeLogStreams
- CloudWatch.describeLogGroups

Using these endpoints, the service detects lambdas that have executed since the last time and pulls data to our local server. From there, the data is stored to and encrypted S3 bucket.

_ALl requests are throttled so to not use up all the API limits._


### Aggregator
After importing the the first logs, an aggregator starts, going through all imported data and extracting metrics by each invocation. Aggregator detects the result, duration, memory usage and other meaningful information from the logs.

### Error detection
Dashbird detects errors from invocations and brings them out in the UI for users to catch and debug them. Errors are detected by matching a native error regex pattern.
