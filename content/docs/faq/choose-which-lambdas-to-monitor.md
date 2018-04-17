---
date: 2017-06-05
title: FAQ
linktitle: Can I choose which Lambda Functions to monitor?
description: Frequently Asked Questions
kbSeries: ["FFAQ"]
kbSeries_weight: 700
---

<h2>
  <span class="h2 underlined bold">
    Can I choose which Lambda Functions to monitor?
  </span>
</h2>
**Yes!**

You can control our log importer by specifying filters.
<br>Navigate to _**Menu -> Importer settings**_
![Lambda filtering](/images/docs/filtering.png 'Lambda filtering')

Filters are <a href='https://en.wikipedia.org/wiki/Glob_(programming)' target='_blank'>glob patterns</a>.

Use <code>some-service-*</code> to include and <code>!some-service-prod-*</code> to exclude lambda functions. You can also use the `name includes` or `name excludes` to filter functions.

By default, all Lambda Functions are imported to Dashbird.

Read more from [here](/docs/get-started/say-hi-to-dashbird/).

- this is already good :)
- add more stylish writing
- link to `/docs/get-started/say-hi-to-dashbird/`