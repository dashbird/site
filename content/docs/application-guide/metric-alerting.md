---
date: 2017-06-05
title: Metric based alerting
linktitle: Metric alerting
description: Metric alerting
kbSeries: ["CUser Guide"]
kbSeries_weight: 300
---

Dashbird supports full-fledged and customisable failure detection and incident management for serverless applications. Incidents are divided into two main sub-categories: execution errors and **metric condition failures.** *This article is about metric alerts. You should also learn about <a href='/docs/user-guide/alerting/'>handling execution errors</a>.*

![Metric alerting](/images/docs/metric-alerting.png)

**Metric incidents** are custom condition violations of a user-selected metric. For example, you can configure an alert for each time a Lambda function takes more than a second to execute.

#### Configuring an metric alert policy

 To configure your first alert policy, navigate to <i class="fa fa-exclamation-triangle"></i> -> Policies -> + ADD.

![Metric alerting](/images/docs/metric-alerting-getting-started.png)

Alert policies consist of one or more **metric conditions** and one or more **notification channels**.

**A notification channel** is a way to notify user of the failures (slack integration or e-mail address). Read more about <a href='/docs/user-guide/integrations/' target='_blank'>notification channels</a>.

A metric condition consists of:

  * **metric** (invocations, errors, retries, cold starts)
  * **parameter** (count, duration, cost etc.)
  * **target functions**
  * **value** condition
  * **time period**

You can choose to open an incident per policy, condition or target.

#### Best practices for metric alerts

Alerting should be an ongoing process, we reccommend testing different policies, adding new ones based on needs and deleting/muting unnecessary alerts to avoid alarm fatique.

  * **Monitor the latency of user facing Lambda functions**. For example, you could set conditions for all functions that are triggered by a user to alert when the duration exceeds 1 second.
  * **Monitor cost of busy functions**. In scenarios when large amounts of executions take place, an unexpected slowdown can cause unexpected costs. Set an acceptable cost limit to a function so you would be able to solve the problem before getting a surprise at the end of the month.
  * **Protect against running out of memory**. If you set memory utilisation alert to be trigger at 80-90%, you might be able to prevent running out of memory.
  * **Set error count over X conditions** to get alerts for reoccurring problems.
