---
date: 2017-06-05
title: Global Search
linktitle: Global Search
description: Global Search
kbSeries: ["CApplication Guide"]
kbSeries_weight: 700
---

Dashbird indexes all logs retrieved from the monitored Lambda functions and provides a full-text search. We call it "**Global** Search" because users can search across multiple Lambdas at once.

These are the filters available in Global Search:

* Keywords
* Lambda function(s) or [Project(s)](/docs/quickstart/projects/)
* Invocation status (success or error)
* Datetime period

Matching results are highlighted for fast browsing. Each logline is linked to the respective invocation, making it easier to expand all logs from the request, as well as visualize traces from AWS X-Ray, for example.

![Global Search](/images/docs/global-search.png)
