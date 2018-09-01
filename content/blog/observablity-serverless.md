---
title: Monitoring vs observability
description: You get observability in your application by knitting together monitoring with alerting while having a clear debugging solution that provides clarity for your data
date: 2018-08-28T12:00:00.000Z
frontImage: "2018-08-28/freddy-marschall-186923-unsplash.jpg"
thumbnail: "images/blog/2018-08-28/freddy-marschall-186923-unsplash.jpg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
blog: ["AWS", "Lambda", "Cold-Start"]
---

With the popularity of serverless, there has been a huge amount of debate in regards to observability or the lack thereof(within the serverless space), and more often than not, the serverless fanboys (a group of highly intellectual individuals of which I am proud to be part of) have had the same answer to everything: third-party monitoring tools that does this or that. But you have to understand that you can't patch the observability limitation by throwing graphs and alerts at the situation. 

> <i>Monitoring and observability are two different things altogether.</i>

Allow me to explain by using a service we're all too familiar with, Twitter. As you might imagine a product like Twitter has a LOT of moving parts and when something breaks down it can be difficult to understand why or what caused said problem. 
Imagine having 350 million active users that interact with each other through your system, tweeting, liking, dm-ing, retweeting, and whatever else you can do in the platform. That's a lot of information to follow and if you've ever worked on a platform this size you can imagine the kind of effort it would take to figure out why a tweet isn't posted or a message takes too long to be delivered. Before they made the switch from monolithic application to a distributed system finding out why something doesn't work was, at times, as simple as opening an error log file and seeing what went wrong.

When you have hundreds maybe thousands of small services communicating asynchronously with each other, saying that debugging a simple thing like a tweet not firing would be hard is a complete understatement. They've posted a really cool posted about their migration to microservices in 2013. Read the post [here](https://blog.twitter.com/engineering/en_us/a/2013/observability-at-twitter.html).

![observability at twitter](/images/blog/2018-08-28/observability_attwitter95.thumb.1280.1280.png)
<center>A graph illustrating the Twitter microservices</center>


So back to my point. [Baron Sc​hwartz](https://twitter.com/xaprb) has put it best.

> "Monitoring tells you whether the system works. Observability lets you ask why it's not working."

Monitoring an app will get you information about your system and let you know in the event of a failure while Observability is a quality of your app or technology you are using that grants an easy way of seeing what and where it broke.

<h2>We know observability isn't monitoring. What is it then?</h2>
Observability is a system attribute that, as [Anthony Asta](https://twitter.com/anthonyjasta) - Engineering Manager @Twitter - puts it, is composed of four pillars:

* Monitoring
* Alerting/visualization
* Distributed systems tracing infrastructure
* Log aggregation/analytics

With distributed systems (read microservices), especially at scale, having observability into your platform is more than a necessity, it's a requirement that can't be circumvented by using only alerting or by only looking at logs. You need an environment that provides visibility to a microscopic level in order to have the right information on which to act upon.

To continue using our Twitter example, their observability system is humongous and took years to develop into the well-oiled machine it is today. 

> "Our time series metric ingestion service handles more than 2.8 billion write requests per minute, stores 4.5 petabytes of time series data, and handles 25,000 query requests per minute" - <i>Antony Asta on the scope of their observability systems published in 2016 in a two-parter that covers architecture, metrics ingestion, time series database, and indexing services. Check out part [one](https://blog.twitter.com/engineering/en_us/a/2016/observability-at-twitter-technical-overview-part-i.html) and part [two](https://blog.twitter.com/engineering/en_us/a/2016/observability-at-twitter-technical-overview-part-ii.html).</i>

Here are my two cents, you get observability in your application by knitting together monitoring with alerting while having a clear debugging solution that provides clarity for your data. Missing just one of this aspects will leave you at a great disadvantage, chasing your tail trying to figure out what went wrong within your app. It's not enough to be notified everytime it something breaks down, neither is having the insight of knowing when something is about too. You have to be able to pinpoint the issue within your platform efficiently. 
<h2>Conclusion</h2>
I'd like to end with a simple statement that reflects my thoughts on the whole subject. <strong>Observability in the serverless space is non-negotiable. </strong>You have got to have it and it's not a quantifiable attribute, meaning you can't have a little observability or too much of it. You either do or don't.

<a href="dashbird.io">Dashbird</a> aims to help you solve that issue by providing insights into your application and while it's not a universal observability solution that works for everyone, it does offer a lot of benefits like failure detection, analytics, visibility, cost analysis, cold starts information, alerting and a lot more features. And the best part, it's free! 
