---
date: 2019-01-15
title: Enabling alerting
linktitle: Enabling alerting
description: Enabling alerting
kbSeries: ["BQuickstart"]
kbSeries_weight: 300
aliases:
  - /docs/user-guide/alerting/
---



Dashbird supports full-fledged and customisable failure detection and incident management for serverless applications. Incidents are divided into two main sub-categories: execution errors and metric condition failures. *This article is about error alerting. After reading this, you should also <a href='/docs/user-guide/metric-alerting/'>learn about metric alerting</a>.*

**Execution errors** are runtime exceptions, timeouts, crashes, out of memory errors and configuration errors.

![Error states](/images/docs/errors-teaser.png)


Dashbird automatically scans all function invocations for failures. Failures can be any of the following type: `CRASH`, `TIMEOUT`, `OUT OF MEMORY`, `CONFIGURATION ERROR`, `EARLY EXIT`. Dashbird failure detection supports all programming languages that are supported by Lambda (Node.js, Python, Java, C#, Go and Ruby).

 To view all errors, <a href='https://app.dashbird.io/errors/issues/'
 target='_blank'>click here</a> or on the bug icon <i class="fa fa-bug"></i> on the left menu.

**Error states**

![Error states](/images/docs/error-states.png)

**Resolving errors (button: <i class="fa fa-check"></i>)** - after fixing an error in your code, don't forget to mark it as resolved in Dashbird. **Otherwise you will not be notified the next time when that error occurrs.** You can resolve errors from the top right corner and view resolved errors under the "RESOLVED" tab.

 **Mute errors (button: <i class="fa fa-bell-slash"></i>)** - if an error is unimportant for you, you can mute notifications for it and discard it from the active errors list.

#### Configuring an alert policy

![Error states](/images/docs/error-alert-policy.png)

You have complete control which errors get reported to you. To configure alerting rules, it's necessary to create an alert policy. Navigate to the <a href='https://app.dashbird.io/errors/policies/' target='_blank'>Policies</a> tab and click `+ ADD`. A new policy will be added to the list and you can start adding rules.

All policies must have at least one notification channel and one alert condition. A notification channel can be a slack channel or an email address. An alert condition consists of an error condition and a selection of functions. 

*For example, you can define an alert for any error over all functions, or for example only alert on invocataion timeouts for a specific function or microservice.*

#### Best practices for handling alerts

Alerting should be an ongoing process, we reccommend testing different policies, adding new ones based on needs and deleting/muting unnecessary alerts to avoid alarm fatique.

  * **Set alerts for all production lambdas.** Even if you think they'll never fail, unexpected circumstances do sometimes happen.
  * **Always resolve alerts after you've fixed them in code.** This way, if the problem re-occurrs, you'll be notified again.
