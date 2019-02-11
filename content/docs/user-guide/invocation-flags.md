---
date: 2019-02-11
title: Invocation Flags
linktitle: Invocation Flags
description: Invocation Flags
kbSeries: ["CUser Guide"]
kbSeries_weight: 200
---


Dashbird can assign flags to each of your Lambda invocations. Flags makes it easier for you to quickly identify whether an invocation was a cold start or a retry, for example. Below is the list the flags used by Dashbird:


#### Cold Start

A cold start flag is assigned if your Lambda was in a cold state before serving this invocation request.

_Learn about <a href="/blog/cold-starts-impact/">cold starts</a> and the <a href="https://docs.aws.amazon.com/lambda/latest/dg/running-lambda-code.html">Lambda execution context</a>._

![Invocation Flag: Cold Start](/images/docs/invocation-flag-cold-start.png)

Cold starts are important to monitor because they may be detrimental to your user experience - if it's directly serving a customer request. We wrote two articles about this topic, in case you'd like to get better at handling cold starts:

- <a href="/blog/cold-starts-impact/">Cold Start Impact On Latency</a>
- <a href="/blog/how-to-deal-with-cold-starts/">How To Deal With Cold Starts</a>


### Retry

In case your function invocation results in an error, AWS Lambda will automatically retry the request for you (see <a href="https://docs.aws.amazon.com/lambda/latest/dg/retries-on-errors.html">AWS Lambda Retry Behavior</a>). That can be very convenient, but is also a potential source of issues that can be hard to debug.

To help you track down those cases, a "Retry" flag is assigned to the invocations when we identify AWS Lambda is retrying a previously failed request.

![Invocation Flag: None](/images/docs/invocation-flag-retry.png)


#### Anomaly

Anomaly is an outlier invocation that does not match the overall pattern of invocations for the same function in the past 24 hours. Dashbird's anomaly detection algorithm takes into account memory consumption, duration, logged information, and execution errors to identify outliers. A function can have no anomalies at all if it behaves in a consistent way.

![Invocation Flag: None](/images/docs/invocation-flag-anomaly.png)


#### No Flag

When none of the previous situations are met for a given invocation, Dashbird assigns it a "none" Flag, so that you can know the invocation behaved well. ;)

![Invocation Flag: None](/images/docs/invocation-flag-none.png)
