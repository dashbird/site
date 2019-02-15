---
title: Dashbird Updates - February 2019 Edition
description: There's a lot of cool stuff happening at Dashbird. Here is just some of them.
date: 2019-02-11T12:00:00.000Z
frontImage: "2019-02-11/cody-davis-253925-unsplash.jpg"
thumbnail: "images/blog/2019-02-11/cody-davis-253925-unsplash.jpg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
blog: ["serverless", "business"]
featloc: blog-header
---

This past couple of month were a bit hectic and there’s a good reason behind that. We’ve set out to create a better experience for our users, and it’s exactly what we did! Besides making a lot of quality-of-life changes, we’ve introduced new features that we think, will increase up the speed at which you’ll debug your applications and give you a whole new perspective on all things AWS Lambda.

We got carried away by building features and improving the application experience, that we forgot to announce the changes. Here are recent changes at a glance:

* New lambda view
* New invocation view
* Metric based alerting
* Error reporting

## New lambda view
The new view has separate charts for invocations, errors, duration, memory usage and cost. On the metric panel, you can see the sparklines, which indicate what is happening it over the selected period and clicking on them opens up the chart in full size.
Picking the period is more straightforward, there are only four options at the moment: 1 hour, 1 day, 7 days and 30 days. 
The bottom part includes recent invocations, which can be filtered down to errors, retries, cold starts or anomalies, and all the errors that have happened with this lambda. 

## New invocation view
Instead of having a separate full page for invocations, it slides open from the right. You can still scroll around lambda's invocations list and open up a new one quickly.

## Alerting
Now you can set up metric based alerting for any lambda or project. Just open up policies view under alerting tab and start adding the conditions. Whenever a condition fails, an incident opens and stays that way until the term passes again.
For every policy, you can attach multiple notification channels, which are shared within the organization account, so that you only need to define them once.

## Errors View
Errors view got design updates and moved to policy-based notifications. You can choose which types of errors you want to receive for selected targets. We generated the default policies for you to receive all errors of all lambdas, but feel free to change it.
At the moment we only send out notifications when a new error occurs, or it reopens.  We recommend to resolve the error after bugfix or mute it when it is not important.

## Smaller changes
* Added Dashboard menu item for easier navigation. Clicking on the logo still works as well
* Search and header have a new look and feel
* API Gateways got a design overhaul
* Logs now supports JSON formatting

## We’re an AWS Advanced Technical Partner
We’re happy to announce that we have been accepted as an Advanced Technical Partner at AWS and we are more than proud to be endorsed and have all our efforced recognized by the folks at AWS. More about this <a href=”https://dashbird.io/blog/aws-partner-update/”>here</a>.
