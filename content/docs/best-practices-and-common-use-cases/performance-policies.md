---
date: 2019-02-13
title: Performance policies
linktitle: Performance policies
description: Performance policies
kbSeries: ["EBest Practices"]
kbSeries_weight: 100
aliases:
 - /help/python/error-handling-python-lambda/
 - /docs/python/error-handling-python-lambda/
---

### Cold Starts

<a href="https://docs.aws.amazon.com/lambda/latest/dg/running-lambda-code.html">Lambda cold starts</a> can be undesirable in some circumstances. Especially if invocation demand is highly variable and unpredictable, cold starts tend to happen much more frequently.

With Dashbird Policy alerting system, you can monitor and set a threshold for a healthy and acceptable level of cold starts to each function, a group of Lambdas or all of them.

In the example below, we set a limit for 100 cold starts over a period of 10 minutes. In case our application goes above that limit, Dashbird will automatically send us an alert to investigate and take measures to minimize the impacts of cold starts.

<a href="https://dev.to/byrro/4-steps-to-solve-lambda-cold-starts-281l">Here</a> is an article we published about how to solve Lambda cold starts.

![Detect Coldstarts](/images/docs/cold-start-policy.png)

### Resource Usage

When a function starts consuming too much resoursed, either memory or execution time, it can be the sign of a problem developers need to tackle.

With Dashbird, we can set a policy to alert in case memory usage goes above 90%, on average, over a period of 5 minutes, for instance. Analogously, the same policy could be setup for execution time.

![Detect Coldstarts](/images/docs/resource-usage.png)

### Costs

Managing Lambda costs is essential for applications running in production. Especially if you charge customers for services running on Lambda and its costs are the basis for your pricing structure.

Dashbird can alert you in case costs start to rise unexpectedly, allowing you and your team to act quickly and avoid a terrible surprise at the end of the billing cycle.

For example, we could set up an active alerting system when invocations start costing more than  $0.01, on average, over a period of 15 minutes.

![Detect Coldstarts](/images/docs/lambda-cost-monitoring.png)

---

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about our features and error handling! We would really appreciate it!_