---
date: 2019-02-13
title: Best Practices - Security with Critical Logging
linktitle: Critical Logs for Security
description: Securing serverless applications with critical logging.
kbSeries: ["EBest Practices"]
kbSeries_weight: 300
---

Logs play a significantly important role in securing a serverless application. Having critical logs will help us, for example, understand which security flaws attackers explored and how to fix them, build a blacklist of IP addresses, or identify compromised customer accounts.

<br>

Below are some examples of information we could classify as critical for logging in a serverless app. It is not an exhaustive list but will give us a good head start.

#### Invocation/Event Inputs

When analyzing or acting on a possible security breach, it would be helpful to retrace the attacker’s steps. For that reason, logging all invocation event requests could be very helpful for security analysis.

#### The 4 W's

Based on the <a href="https://www.owasp.org/index.php/Logging_Cheat_Sheet">OWASP Logging Cheat Sheet</a> recommendations, it's recommended to log: When, Where, Who and What in every function invocation.

#### Response Payloads

Similarly to Invocation Inputs, logging response payloads could also be helpful to analyze and mitigate security breaches. First of all, in the worst case scenario of not being able to stop an attack, we will at least want to know what information is now in possession of the attackers. These logs will answer just that.

#### Performance Levels

In a serverless stack, costs are usually variable: the more resources an invocation uses, the more it will cost. If a function is expected to run on average for 3 seconds and starts taking 30 seconds, that's a big deal and something needs to be done quickly to avoid burning financial resources for nothing.

<br>

If an attacker wants to hurt your company financially, this is one possible vector of attack. Someone might identify areas where it's possible to introduce a performance degradation in your service and make your Lambdas perform badly.

<br>

Dashbird allows you to setup <a href="https://dashbird.io/docs/user-guide/metric-alerting/">alerts based on metrics</a>. Whenever a function starts behaving in bad shape (taking too long to execute or consuming too much memory), you will receive a notification by e-mail or Slack.

#### Authentication Requests

For applications with some sort of login protected area, it's paramount to log authentication requests, especially the failed ones. Make sure you also log everything you possibly can from the requester, such as the IP address obviously.

---

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about our features and error handling! We would really appreciate it!_
