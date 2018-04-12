---
date: 2017-06-05
title: Set up your Dashbird Account
linktitle: Setting up your account
description: Setting up your account
kbSeries: ["BGetting Started"]
kbSeries_weight: 200
alias:
  - /help/settings/configuring-dashbird/
  - /docs/settings/configuring-dashbird/
---

In this article:
- Specifying the lambdas to be imported

## Lambda function filtering
1. Navigate to [clients page](https://app.dashbird.io/clients).
![](/images/docs/settings.png)

2. By default, all lambdas are imported (*)
![](/images/filtering.png)

3. Add one or more filters to select the right subset of lambda functions.
Filters are [glob patterns](https://en.wikipedia.org/wiki/Glob_(programming)), meaning you can specify which lambdas you want to import by matching a string and a wildcard(*).
For instance, filter `*-prod-*` matches all function names like 'service-prod-functionName'

![](/images/docs/filtering2.png)

_Note that you can test any filter before adding with the 'Test' button._

4. *Click Save!*

5. The next import will only import the functions specified in the list.
