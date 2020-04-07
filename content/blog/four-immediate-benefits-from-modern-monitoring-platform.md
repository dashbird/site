---
title: Four immediate benefits you will gain from a modern monitoring platform
description: Understand how development teams can benefit from professional cloud monitoring platforms
date: 2020-04-02T00:00:00.000Z
frontImage: "2020-04-02/four-immediate-benefits-monitoring.jpg"
thumbnail: "images/blog/2020-04-07/four-immediate-benefits-monitoring.jpg"
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["Monitoring", "Debugging", "Observability", "Alerting", "Issue Management"]
---

Cloud applications don't just run flawlessly by way of magic. Many things can go wrong, and rest assured some will go wrong at one point. For small teams, this can be cumbersome and take a toll at the development speed.

A monitoring system will detect these issues on behalf of the development team, so that they can act accordingly. At [Dashbird](https://dashbird.io/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=small-teams&utm_content=four-immediate-benefits-from-monitoring-platform), we think there's much more to it, though, than just [detecting and alerting issues](https://dashbird.io/knowledge-base/monitoring/failure-detection-and-alerting/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=small-teams&utm_content=four-immediate-benefits-from-monitoring-platform), especially for small teams of developers.


# Issue management and collaboration

Any cloud application with minimal complexity will generate a reasonable amount of issues on a frequent basis. Especially those that are under active development.

The development teams behind such applications need a way to **manage** these issues. As an illustration point, the team should be able to visualize and control in a user-friendly way: issues that are open, which ones were already resolved and which have been temporarily muted, for example.


![Issue Management Screenshot](../images/blog/2020-04-02/dashbird-screenshot-issue-management.png "Issue Management Screenshot")



# Quality tracking

Quickly visualizing past occurrences of the same issue can be important, as these cases require further investigation. They also indicate that current bug fixing approaches may not be working as expected.



![Past Occurrences of Issues Screenshot](../images/blog/2020-04-02/dashbird-screenshot-past-occurrences.png "Past Occurrences of Issues Screenshot")



# Event-driven debugging

Developers won't have the time to keep monitoring application logs for themselves, so they need a monitoring tool that alerts them proactively when something requires their attention:



![New Error Alert Configuration Screenshot](../images/blog/2020-04-02/dashbird-screenshot-alert-new-errors.png "New Error Alert Configuration Screenshot")


An automated alerting system may sound something trivial that any service provider can offer. The key, though, is to know what to look for. In an immense amount of application logs, it's easy for the monitor to miss relevant signals.

The alerting mechanism should detect not only application errors, but also infrastructure faults that can affect the application indirectly. In case of AWS Lambda, this would include timeouts, container crashes, memory exhaustion and more.



![Alert All Issues Configuration Screenshot](../images/blog/2020-04-02/dashbird-screenshot-alert-all-issues.png "Alert All Issues Configuration Screenshot")


For parts of the system that are more tolerant to faults, developers may disable individual issue alerting and set up aggregation metrics. This allows to shift attention from development to debugging only when it's really required.



![Alert High Error Count Configuration Screenshot](../images/blog/2020-04-02/dashbird-screenshot-alert-high-error-count.png "Alert High Error Count Configuration Screenshot")



# Fast communication

When something goes wrong in an application, developers are usually running against time to mitigate damages and fix the root cause. Not only receiving alerts is important, but getting them in the fastest and most convenient way is also essential to save time.

Nowadays, most development teams are using instant messaging services such as Slack. Having a #channel dedicated to receiving issue alerts can help developers cut through the noise and get alerted to react immediately.



![Notification Channels Screenshot](../images/blog/2020-04-02/dashbird-screenshot-notification-channels.png "Notification Channels Screenshot")


All of the features discussed above and much more are available on Dashbird, the leading monitoring platform for serverless and managed cloud services. Thousands of smart developers are already using it and you can too by [signing up for our 14-day free trial](https://dashbird.io/register?utm_source=dashbird-blog&utm_medium=article&utm_campaign=small-teams&utm_content=four-immediate-benefits-from-monitoring-platform). **No credit-card required**!
