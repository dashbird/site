---
date: 2017-06-05
title: Dashbird vs Datadog vs IOpipe
linktitle: Competitive edge
description: Dashbird is using CloudWatch logs to make sense of your lambda functions and to give an actionable overview.
kbSeries: ["ALearn"]
kbSeries_weight: 800
---

<h2>
  <span class="h2 underlined bold">
    Dashbird
  </span>
</h2>

Currently Dashbird uses logs for everything. This gives a real-life overview of things happening with your lambda functions and a possibility to deep dive into a single execution and see all logs from there.

**Fetching logs is also the cheapest way to gather data**, costing only 0.010$ per GB.

Taking this approach, Dashbird experience can be really **low friction and high granularity, with a price of slight delay.** Users don't need to make any code changes but still get a really good overview, with the possibility to go very deep into a function, seeing all the need data.

_NB: we recently <a href="https://dashbird.io/blog/tracing-lambda-functions-with-aws-x-ray/" target="blank"> added AWS X-Ray support<a/> that brings more value to tracing and debugging._

## PROS:
* low cost
* high granularity
* very easy support for all languages (it just needs a few examples and a few lines of code changes on our part)
* low friction
* ability to get all the specific logs for an invocation

## CONS:
* user needs to give access to their AWS account (read only)
* slightly bigger delay
* a potential max amount we can import per month (possible to overcome with sampling), due to AWS API constraints.

Learn more about all the <a href="https://dashbird.io/docs/learn/features/" target="blank"> benefits and features Dashbird offers.<a/>

<h2>
  <span class="h2 underlined bold">
    Datadog
  </span>
</h2>

Datadog uses StatsD protocol and metrics to capture information about lambdas. StatsD (or DogStatsD) is a time series metrics protocol where you can push custom events (like tasks added N) and then show data in Datadog environment. Using StatsD protocol means that you have to use Datadog library in your code and push the metrics manually.

Datadog is doing monitoring that is based on metrics and that means they are fetching all the required metrics for lambda functions and then showing them on their dashboard. This approach is also **low friction, but has a really low granularity** (metrics are gathered and aggregated to 1 minute intervals). It's a really good way to get a nice overview of your lambda functions, but you won't see the real problems.

**Metrics also have the cost issue.** Fetching metrics costs 0.01$ per 1,000 requests. One lambda function has 5 metrics (invocations, durations, throttles, errors, concurrent executions), this means fetching all metrics for one lambda function will cost the user (56024300.01 / 1000) 2.16 USD per month. This is quite a high cost given that you only get really high level overview of ONE lambda function. We have learned that the average size lambda stack contains of 60 functions, costing the user average of 60*2.16 = 129.6 USD just to see a really high level overview of their lambdas (without the possibility to dive deep into the errors and fixing them quickly).

## PROS:
* custom events via StatsD protocol
* low friction


## CONS:
* user needs to give access to their AWS
* relatively high cost when dealing with large lambda services
* really low granularity
* not possible to dive into request specifics

<h2>
  <span class="h2 underlined bold">
    IOpipe
  </span>
</h2>

IOpipe uses their own library to send data to clients. This essentially means that the **client needs to add IOPIPEs code into their own codebase.** It brings a certain overhead to lambda functions and that can potentially be bad.

The good thing about IOpipe's approach is that they instrument the runtime the lambda function is running inside. Meaning that you will get a **deep technical overview of your invocation**, which can help the users to understand and fix potential bottlenecks with their functions.

IOpipe does not automatically fetch lambda invocation logs, however they have a **functionality to log through their system.** Which is not ideal. It's one thing to attach a library to instrument data to your code base, it's another thing to rewrite logging to fit that instrumentation.

That being said, their approach of sending you data means that they have no potential max amount of data they can receive. The approach that IOpipe has taken, can be used with unlimited amount of invocations, assuming that their backend can handle the load.

IOpipe's approach also means that they **can only support a few languages**, currently they support Node, Python and Java.


## PROS:
* low cost (it costs almost nothing to send data to clients)
* high technical insights of function performance (can drill down to request overhead etc)
* depends on the implementation, but potentially realtime debugging possibilities
* user does not need to give access to their AWS



## CONS:
* logging does not work out of the box (logging calls need to be send through IOpipe)
* library needs to be added to the function manually
* high friction
* overhead to lambda invocation execution times
* dependent on IOpipe's platform (if there is a bug in the wrapper your lambda might fail because of that)
* only supports a few languages
* hard to off-board (changing all lambda functions is a headache)


---
 _**Note**: Given that all these tools are in continuous development, please let us know if any of this information is not up-to-date._
