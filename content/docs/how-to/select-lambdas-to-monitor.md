---
date: 2017-06-05
title: Select which Lambdas to monitor
linktitle: Select which Lambdas to monitor
description: Select which Lambdas to monitor
kbSeries: ["EHow-to"]
kbSeries_weight: 200
---

In some cases, you may want to leave a few functions out of **Dashbird monitoring**. Since we charge per GB of logs generated across all your Lambdas, you probably will want to leave testing or experimental functions out of Dashbird.


In order to do that, go to your user Profile (top-right corner in Dashbird app). Under Organization, in the left menu, go to Import. You will be able to set patterns for selecting which Lambdas are monitored (Importing Lambdas, at the bottom of the page) or not (Filtered out Lambdas).


Filters are <a href="https://en.wikipedia.org/wiki/Glob_(programming)">glob</a> patterns. Use an asterisk (*) as wildcard to match one or multiple characters. For example, to match all Lambda functions containing “testing” in the name, use this pattern: *testing*.


Important to note that by filtering out a Lambda function in Dashbird will not affect your Lambda or its CloudWatch logs in any way. You will still be able to access logs in CloudWatch, but not in Dashbird. Consequently, Dashbird won’t be able to send any alerts to you in case an error happens with functions that are filtered out.

![User settings](/images/docs/select-lambdas-to-monitor.png)
