---
date: 2017-06-05
title: Improving Lambda Functions with Performance Metrics
linktitle: Improving Lambda Functions
description: Improving Lambda Functions with Performance Metrics
kbSeries: ["EBest Practices"]
kbSeries_weight: 150
aliases:
  - /docs/user-guide/monitoring/
---

Dashbird [provides a series of metrics about your Lambda functions](/docs/application-guide/lambda-functions/). Even data points not originally available from AWS CloudWatch are aggregated and displayed in the Lambda Function view.

The memory usage, for example, can be helpful in order to optimize resource allocation. Suppose a particular Lambda was assigned 1,024 MB of memory but have used at maximum 40% over the last 30 days. The function could have its memory allocated reduced to 512 MB and yet function perfectly. This can potentially reduce costs.

Duration metrics are also helpful in identifying execution outliers. When minimum and maximum durations are too far from the average, the function presents a high variability in terms of how long it takes to answer a request. In many cases that will be expected, but when it isn’t normal, Dashbird can help in identifying which areas of your Lambda stack deserve more attention.

It is quite common for SaaS businesses to consider cloud costs when determining pricing for their services. Sometimes the price is a multiple of the cloud costs (markup). Especially in those cases, monitoring closely the underlying service infrastructure costs is paramount. Dashbird will provide costs broken down by Lambda aggregated with a resolution of an hour or a day.

Analyzed together with the invocations count metrics, aggregated costs can provide a measure of how much your application is performing in comparison with the cost expected in the company’s financial projections.
