---
title: Things you might have missed when using Dashbird
description: If you haven’t tried out Dashbird yet and would like to follow along, feel free to try Dashbird out yourself.
date: 2019-05-09T12:00:00.000Z
frontImage: "2019-05-10/wPrCjOGF.jpeg"
thumbnail: "images/blog/2019-05-10/wPrCjOGF.jpeg"
authorlink: 'https://medium.com/@martlaul'
author: Mart Laul
author_image: '/images/team/mart.jpg'
featpop: most-popular
blog: ["AWS", "Serverless", "Other"]
---

Just starting out with Dashbird? Great, you are in the right place.

I’ve been speaking with hundreds of our new users in the past couple for months about their experience with Dashbird. I must say the feedback has been incredible so far. However, there are a few things I’ve noticed that our users haven’t yet taken advantage of within the platform. For a better success, let me point them out to you.

If you haven’t tried out Dashbird yet and would like to follow along, <a href="https://dashbird.io/register">feel free to try Dashbird</a> out yourself – in the worst case scenario you will end up finding errors you didn’t have a clue of. Set up is an easy 2-minute process without any code changes. 

## Confusion around the alerting

In order to be on top of your serverless stack and get notified at the right time, we recommend setting up both <a href="https://dashbird.io/docs/user-guide/alerting/">error</a> and <a href="https://dashbird.io/docs/user-guide/metric-alerting/">metrics</a> alerting. In order to do that you must:

1. First set up the <a href="https://app.dashbird.io/settings/channels">notification channels</a> under Settings -> Organization -> Notifications (<a href="https://dashbird.io/docs/user-guide/integrations/">tutorial</a>). We currently support email and Slack notifications. 
2. For error alerting, go to Errors –> <a href="https://app.dashbird.io/errors/policies/">Policies </a>add a new policy by clicking + ADD. Be sure to add a notification channel you set up in the previous stage. Under conditions you can modify what kind of alerts (CRASH, TIMEOUT, OUT OF MEMORY, CONFIGURATION ERROR, EARLY EXIT) you would like to receive. Also, you can choose if you like to receive an alert for a certain function, project or all of your stack (<a href="https://dashbird.io/docs/user-guide/alerting/">detailed instructions</a>).
3. For metrics alerting, go to Alerting –> Polices. Similarly, to pervious step, add a new policy and set up the notification channels. You can choose to open a new incident (get alerted) per policy, condition or a certain target. There are many ways to configure the conditions and every company has different needs, but for better success we have pointed out the best practices for <a href="https://dashbird.io/docs/user-guide/metric-alerting/">metric alerts</a> that you can follow.

## Handling errors 

Managing errors can be a real pain in the ass sometimes, excuse the expression. To relieve the pain, Dashbird is grouping together all the similar errors for a certain Lambda. Nobody wants to deal with 50k errors separately, am I right? 

<img src="/images/blog/2019-05-10/image1.png">

There are in total of three error states (OPEN, RESOLVED, MUTED) where the error can sit. Every time a new error occurs it will be in the OPEN state. After fixing the error, be sure to mark it RESOLVED. Otherwise you will not be notified the next time when that error occurs. 

You can resolve errors from the top right corner of the <a href="https://app.dashbird.io/errors/issues">errors page</a> and view resolved errors under the “RESOLVED” tab.

If an error is unimportant for you, you can mute notifications for it and discard it from the active errors list to reduce clutter.

“Error handling is for sure one of the most interesting things about Dashbird. Those who haven’t checked it out, are missing out!”  - Hendry Sadrak, CTO at Modash, <a href='https://www.modash.io/blog/4-easy-ways-to-find-micro-influencers-on-instagram/' target='_blank'>a database for finding instagram influencers</a>.

## Managing environments and microservices

<img src="/images/blog/2019-05-10/project-views.gif">

It is always a good practice to have separate AWS accounts for different environments. Mostly it is because of security, development speed, billing etc. If you have separate accoutns – great, you can onboard all of them to Dashbird by using <a href="https://dashbird.io/docs/user-guide/organizations/">Organizations</a>.

However, if haven’t done it or you want to separate your microservices, you can do it by grouping together Lambda functions under the <a href="https://app.dashbird.io/projects">Projects view</a>. This will allow you to better monitor, analyze and debug your functions. Projects can also be targets to error or metrics alerting conditions, so you will only track what is necessary. Here’s a short guide how to set up your projects.

## Conclusion

At Dashbird we release new features very often and therefore some of the most important things might get unnoticed. We try to notify all the important updates by newsletter, but feel free to check out our <a href="https://dashbird.io/blog">blog</a> and <a href="https://dashbird.io/docs">docs</a> from time to time for the latest information.

You can sign up for a Dashbird account <a href="https://dashbird.io/register">here</a>. If you have any questions just book a call with me and I can help you set up your account for success. 
