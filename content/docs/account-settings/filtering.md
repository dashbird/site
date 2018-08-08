---
date: 2017-06-05
title: Data importer settings
linktitle: Configuring data importer
description: 
kbSeries: ["EAccount Settings"]
kbSeries_weight: 400
---

Dashbird lets you control which Lambda functions are being monitoring by managing CloudWatch log group subscriptions. 

Note that filtering Lambda functions should only be use when you wish to:

  * Avoid sensitive data from reaching Dashbird
  * Reduce noise on functions that aren't necessary to monitor for some reason
  * Optimize data-ingestion size

**NB! Dashbird does not backfill data when filters are edited. You will only have data after the moment a filter was added.**

**NB! Filters can take up to 10 minutes to activate, depending on the event cycle of an Lambda under your AWS account.**

**NB! Filters can be changed an unlimited amount of time.**

## Basics of importer configuration

 * Find the importer settings view by clicking on your organization name and selecting "Importer settings" or by going <a href='https://app.dashbird.io/client' target='_blank'>https://app.dashbird.io/client</a>.

 * Filters consist of <a href='https://en.wikipedia.org/wiki/Glob_(programming)' target='_blank'>glob patterns</a>, meaning you can use wildcard to select a subset of your lambda functions.

## Examples

##### 1) Exlusion of one or a few functions

If you want to monitor most of your functions but need to eliminate a few. Start by adding an inclusion filter `*` and then use exclusion filters to select functions not to be imported.

**Note that you can also specify the region of the function!**

Here's how it should look like:

![Exlusion filter example](/images/docs/single-exclusion.png)


##### 2) Inclusion of a subset

Lets imagine that you only want to monitor productions Lambda functions and your naming convention defines a stage inside the name. You would then need to add an inclusion filter `*prod*`.

![Exlusion filter example](/images/docs/subset-inclusion.png)

## Conclusion

Since you can add as many filters as you like, you can specify rules that follow your preferences to the letter. If you have a complex use case for filtering, feel free to contact support from the chat bubble or write at <a href='mailto:support@dashbird.io'>support@dashbird.io</a>.
