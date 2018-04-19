---
date: 2017-06-05
title: Get Started | Say Hi to Dashbird!
linktitle: Say Hi to Dashbird
description: Say Hi to Dashbird
kbSeries: ["BGet Started"]
kbSeries_weight: 300
---

<h2>
  <span class="h2 underlined bold">AWS Lambda Monitoring with Dashbird</span>
</h2>

- explain organizations dropdown menu - what is an organization? -> mention add an organization but link to another page where it is explained.
- `/client/alerts` configuration overview - how do Dashbird alerts work?
- `/client` importer settings overview - explain default settings and how to filter in/out your functions with a real-life use case such as only filter in production functions
- explain the left navbar and where all the buttons navigate to
- wrap up with a fun but engaging sentence to move on to the user guide for detailed explanations



<br>

# re use content below

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


