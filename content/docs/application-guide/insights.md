---
date: 2020-04-11
title: Insights
linktitle: Insights
description: Insights
kbSeries: ["CApplication Guide"]
kbSeries_weight: 500
---

Apart from an active monitoring system, Dashbird also has compiled a series of Serverless Well-Architected best practices. All your cloud resources behavior and configurations are cross-referenced against this set of good practices.

Insights are alerts and suggestions for you to:

* Prevent cloud resource from failing
* Improve performance
* Reduce costs
* Identify architectural improvement opportunities

![Insights Example Metrics](/images/docs/application-guide/insights/insights-example-metrics.png "Insights Example Metric")

For each cloud resource, different types of insights can be generated. SQS queues, for example, are tracked for abandoned queues (unused), high delay in message reading, etc. API Gateways are checked for unusual latency times. ECS services are verified for resource consumption, such as low or high memory/CPU usage levels.

Insights also track errors in cloud resources, such as exceptions in a Lambda code, API Gateway or Lambda timeouts, DynamoDB throttling, among others.

### Insight Notifications

On the left panel, click on the **Settings** tab:

![Insights Settings Tab](/images/docs/application-guide/insights/settings-tab.png "Insights Settings Tab")

Select which channels (e-mails, Slack channels) should receive notifications from insights:

![Select Insights Notification Channels](/images/docs/application-guide/insights/select-notification-channels.png "Select Insights Notification Channels")

Finally, select what types of insights and errors should be notified:

![Select Conditions for Notification](/images/docs/application-guide/insights/conditions-for-notification.png "Select Conditions for Notification")

**Errors:**

* Only new errors or all (including new occurrences of errors already notified in the past)
* Types of errors
  * Crash
  * Timeout
  * Out of memory
  * Configuration error
  * Early exit

**Insights:**

* Severity:
  * Critical
  * Warning
  * Informational
* Resources monitored:
  * Lambda
  * API Gateway
  * SQS
  * DynamoDB
  * ECS Services
  * ECS Clusters

Control conditions for notifications in the right side:

* **Add** new conditions for errors and insights notifications
* Use the **slider** to enable/disable a condition
* **Delete** a condition

![Control Conditions for Notification](/images/docs/application-guide/insights/control-notification-conditions.png "Control Conditions for Notification")
