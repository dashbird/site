---
date: 2017-06-05
title: FAQ - Picking Specific AWS Lambda Functions To Monitor
linktitle: Can I choose which lambda functions to monitor?
description: Can you pick and choose which specific lambda functions you want to track and monitor? Yes, you can filter the functions in Dashbird.
kbSeries: ["FFAQ"]
kbSeries_weight: 700
---

<h2>
  <span class="h2 underlined bold">
    Can I choose which lambda functions to monitor?
  </span>
</h2>
**Yes!**

You can control our log importer by specifying filters.
<br>Navigate to _**Menu -> Importer settings**_
![Lambda filtering](/images/docs/filtering.png 'Lambda filtering')

Filters are <a href='https://en.wikipedia.org/wiki/Glob_(programming)' target='_blank'>glob patterns</a>.

Use <code>some-service-*</code> to include and <code>!some-service-prod-*</code> to exclude lambda functions. You can also use the `name includes` or `name excludes` to filter functions.

By default, all lambda functions are imported to Dashbird.

---

Check out our [**step by step guide**](/docs/get-started/step-by-step-guide) to read about it in more detail!


<!-- - this is already good :)
- add more stylish writing
- link to `/docs/get-started/say-hi-to-dashbird/` -->
