---
date: 2017-06-05
title: Lambda Functions
linktitle: Lambda Functions
description: Lambda Functions
kbSeries: ["CApplication Guide"]
kbSeries_weight: 200
---

In this section, developers can browse all Lambdas monitored by Dashbird, view metrics, errors and debug logs.

Our system will aggregate performance and resource usage metrics for easy analysis, such as:

* Invocations
  * Total count
  * # of successful requests
  * # of errors
  * # of cold starts
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

### Improving Lambdas with Performance Metrics

The memory usage is very helpful in order to optimize resource allocation, for example. Suppose a particular Lambda was assigned 1,024 MB of memory but have used at maximum 40% over the last 30 days. In this case, the memory allocated could be reduced to 512 MB, potentially reducing costs of running the application.


Duration metrics are also helpful in identifying execution outliers. When minimum and maximum durations are too far from the average, the function presents a high variability in terms of how long it takes to answer a request. In many cases that will be expected, but when it isn’t normal, Dashbird can help in identifying which areas of your Lambda stack deserve more attention.


It is quite common for SaaS businesses to consider cloud costs when determining pricing for their services. Sometimes the price is a multiple of the cloud costs (markup). Especially in those cases, monitoring closely the underlying service infrastructure costs is paramount. Dashbird will provide costs broken down by Lambda aggregated with a resolution of an hour or a day.


Analyzed together with the invocations count metrics, aggregated costs can provide a measure of how much your application is performing in comparison with the cost expected in the company’s financial projections.
