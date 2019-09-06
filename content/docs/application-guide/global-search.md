---
date: 2017-06-05
title: Global Search
linktitle: Global Search
description: Global Search
kbSeries: ["CApplication Guide"]
kbSeries_weight: 700
---

It usually takes an average of 30 seconds for **Lambda** logs to display in the Dashbird interface. Also, after opening a list of invocation logs, it won’t get automatically updated with new incoming logs.

![Live Tailing](/images/docs/lambda-live-tailing.gif)

With Live Tailing, Dashbird will poll Lambda logs in shorter time intervals and interactively update the user interface as new data is available from AWS. That is helpful when you are running tests and need to watch results right away, speeding up the debugging process.


Live Tailing takes more resources on the Dashbird’s end, and usually isn’t a requirement for all Lambdas. For that reason, we will allow developers to choose a subset of Lambdas to watch in a live fashion. Live Tailing can be enabled or disabled for any Lambda at any moment.