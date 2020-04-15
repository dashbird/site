---
date: 2017-06-05
title: Lambda Functions
linktitle: Lambda Functions
description: Lambda Functions
kbSeries: ["CApplication Guide"]
kbSeries_weight: 200
aliases:
  - /docs/user-guide/monitoring/
---

In this section, developers can browse all Lambdas monitored by Dashbird, view metrics, errors and debug logs.

Our system will aggregate performance and resource usage metrics for easy analysis, such as:

* Invocations
  * Total count of:
  * * Successful requests
  * * Errors
  * * Cold starts
* Memory usage
  * Average
  * Maximum
  * Minimum
  * 99th percentile
* Duration
  * Average
  * Maximum
  * Minimum
  * 99th percentile
* Cost
  * Aggregated billed execution time

It is possible to customize a time period and visualize performance metrics per hour or day.



### Navigating Lambdas

Navigate your Lambda functions from the list in the left side of the window. Also check which Lambdas are being actively monitored or not by filtering at the top of the list.

![Lambda Functions Navigation](/images/docs/application-guide/lambda-functions/lambdas-active-inactive.png "Lambda Functions Navigation")



### Visualizing Metrics and Invocations

By clicking on a Lambda function, you will be able to see a set of aggregated metrics (mentioned above), a list of recent invocations and opened events (issues detected in your Lambda).

![Lambda Function Metrics and Invocations](/images/docs/application-guide/lambda-functions/lambda-metrics-invocations.png "Lambda Function Metrics and Invocations")


### Navigating Invocations

In the "Recent Invocations" panel, click on the down arrow icon to select which types of invocations to show:

![Navigating Lambda Invocations](/images/docs/application-guide/lambda-functions/navigating-lambda-invocations.png "Navigating Lambda Invocations")

On the top-right corner of the panel, there are short links to searching logs within this Lambda and to [tailing logs in real time](/docs/application-guide/live-tailing/).



### Analyzing Logs

Simply click on any invocation to open all logs generated from its execution. Any JSON objects logged will be formatted in a rich and easy to navigate way, as the screenshot below shows.

At the top, we will show basic metrics and meta data about the invocation, such as memory consumed, duration, whether there was an error.

![Lambda Logs View](/images/docs/application-guide/lambda-functions/lambda-logs-view.png "Lambda Logs View")

There are links to copy the log information and to view it in AWS Cloudwatch.

![View Logs in CloudWatch](/images/docs/application-guide/lambda-functions/lambda-view-logs-in-cloudwatch.png "View Logs in CloudWatch")

