---
title: CloudWatch alerts vs. Dashbird alerts
description: Here are the best options to keeping an eye on your serverless application
date: 2019-01-15T00:00:00.000Z
frontImage: "2019-01-15/pexels-photo-1314544.jpeg"
thumbnail: "images/blog/2019-01-15/pexels-photo-1314544.jpeg"
author: Nemanja Novkovic
blog: ["Lambda", "Other"]
---

<p>In the 21st century, it’s quite easy to manipulate machines and computers. Our worries are no longer if something is doable, but if something can be perfected. Therefore, we mostly search for new ideas and ways to make our work impeccable. For example, if you’re using a particular software and you realize that the software is excellent, but it could be better in some ways that would allow you to work even faster, you’ll explore the alternatives. There are all kinds to choose from, and you will search for the one that is most suitable for your own needs. Every one of them has some perks of their own, and in others, you’ll notice some faults.
</p>
In this article, we’ll make a brief introduction, and we’ll also talk about the differences between CloudWatch alerts vs. Dashbird alerts. Which one is better and why?

<h2>What Is Amazon CloudWatch Used For?</h2>
<a href="https://aws.amazon.com/cloudwatch/">Amazon CloudWatch</a> is built for system operators, site reliability engineers (SRE), IT managers and developers as well. CloudWatch allows you to monitor your applications via data access and insights it provides. It can also recognize, understand and respond to all changes happening throughout the entire system. <p>CloudWatch is also collecting monitoring and operational data through metrics, events, and logs which further provides you with a unique view over the AWS resources, services and apps that run on AWS as well as in the localized servers. CloudWatch enables you to set alarms (or alerts), troubleshoot for issues, and discover the insights for application optimization which will ensure that the application runs smooth.</p>

<h2>The CloudWatch Alerts Explained</h2>
<p>A CloudWatch alert (a.k.a. alarm) can watch over a single CloudWatch metric or even a result of math expression found in CloudWatch metrics. Alerts will perform single or multiple actions based on the value of metric or expression which is relative to a threshold over a number of time periods. Adding alarms to CloudWatch dashboard is enabled and that way you’ll be able to monitor them visually. There are three alarm states:
</p>
<ul>
<li> <strong>OK</strong> - meaning that the expression or metric is found inside the already defined threshold;</li>
<li> <strong>ALARM</strong> - implies that the expression or metric are located outside of the specified threshold;</li>
<li> <strong>INSUFFICIENT_DATA</strong> - this alert is shown when the alarm has already started but the metric is not available, or there’s not enough data for the metric to realize in which state the alarm is.</li>
</ul>
When creating an alarm, you are able to specify three settings which will allow CloudWatch to evaluate when to change the alarm state:
<ul>
<li> <strong>Period</strong> - will enable you to evaluate the time length of metric or expression in order to create an individual data point for an alarm;</li>
<li> <strong>Evaluation Period</strong> - is the number of the recent data points you need to evaluate to be able to determine the state of the alarm; </li>
<li> <strong>Datapoints to Alarm</strong> - is the number of data points in the evaluation period which must be breached, so it’s causing the alarm to go to the ALARM state. These breaching data points must all be within the last number of data points which is equal to the Evaluation Period.</li>
</ul>
There are a lot of features that apply to all CloudWatch alarms, and we’ll go through some of them. For example, the number of evaluation periods for an alarm if multiplied by the length of every evaluation period can’t surpass the one day limit. Another feature worth mentioning is that ASCII characters must be included in alarm naming. You are also able to create 5000 alarms within every region per a single AWS account.

<h2>Dashbird Alerts Explained</h2>
<p><a href="http://dashbird.io/">Dashbird</a>’s instant alerting system will notify you if any issue shows up within any part of your application. Its system offers messages and realistic logs that can be easily read and understood by humans, which will save you and your company a lot of debugging time. Dashbird monitors your application and is able to detect all kinds of errors by using various programming languages. </p>

<p>Dashbird’s instant alert system will alert you about crashes, timeouts, runtime errors, cold starts, early exits, and configuration errors. Dashbird interface also provides an option in the left navigation panel to press the “alert button” which will further take you to the alert page in the Dashbird app. There you have a showcase of all errors occurring in your system. Everything mentioned above works for programming languages that are supported by AWS Lambda which also includes Java, Python, C#, and Node.js.</p>

<p>All the needed data to successfully go through troubleshooting event and resolve any issues inside your application are entirely at your disposal. A human-friendly interface will present you with any previous occurrences, stack traces, logs and trends for every issue or error are also available. You can also use a “more info” button for every single error you face, and that way you’ll see the error page with all the needed info for debugging the current issue.</p>

<p>Pro-active alerts are another one of Dashbird’s features. Basically, you could set up an email notification alert system, so when your functions are about to reach memory limitations, you will be notified about it. Dashbird provides seamless integration with Slack as well. If you wish to read more about the Dashbird alerts and serverless monitoring tools, how it all works compared to other services, follow this link to a blog on our <a href="https://dashbird.io/blog/serverless-monitoring-tools-2018/">website</a>. </p>

<img src="https://dashbird.io/images/blog/2019-01-15/new_alerts_dashbird.jpg">

As of January 2019, the new alerting system is out and with the improved user interface it brings out some new features that we think it will make our users life a hwole lot easier.

<h2>Conclusion</h2>

<p>Both CloudWatch and Dashbird have their pros and cons, and we’ll wrap up here after mentioning a few. </p>

<p>While Cloudwatch is mostly an excellent choice for users who are already inside the AWS ecosystem, it’s not all that great for the ones who aren’t, and they should find a simpler solution. The alerting options for CloudWatch are not as boundless since they’re available with third-party services. Cloudwatch doesn’t offer pre-configured alerts, but you need to create custom alerts on your own which further means you must be very familiar with how everything works in order to create them properly. On the other hand, Dashbird’s alert notification system is automated and instant which surely provides you comfort and ease in case something happens within your application.</p>

If you have any ideas, questions or thoughts, feel free to share them in our comment section below.