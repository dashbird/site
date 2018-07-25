---
title: Dashbird product update - July 2018
description: Over the past year, we've seen Dashbird grow up into a great product service. Here's the latest updates we've made to the service
date: 2018-07-19T12:00:00.000Z
frontImage: "2018-07-20/pexels-photo-920115.jpeg"
thumbnail: "images/blog/2018-07-20/pexels-photo-920115.jpeg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
category: "Serverless, Other, Lambda"
blog: ["Serverless", "Other", "Lambda"]
---

Over the past year, we've seen Dashbird providing increasingly better visibility for developers building serverless applications. One of our goals is to create a product service that gives end-to-end visibility into serverless architectures, one that aligns perfectly with the needs of our clients. 

<h2>Improved data integrity and scalability for big clients</h2> 

The first update worth mentioning is the importing and onboarding flow changes. The new streaming logs from CloudWatch with a Kinesis stream ensures that Dashbird does not miss a single invocation and that the delay is not dependant on the inner workings or Dashbird log-polling worker.
We went to great lengths to ensure the sign-up process takes as little effort as possible and what we got now is a system that takes about two minutes to set up which makes using Dashbird easier than ever.

<h2>We got latency from 2 mins to 30 seconds</h2>

Another major improvement we've made in the past few months is addressing the developers need for easy observability into their serverless applications. The geniuses behind Dashbird have managed to get the latency of the application down to around 30 seconds. Before the update, you'd have to wait around 2 minutes to see function updates in the dashboard so getting that number lower was a big win for us. What this means for you is that you will be able to basically monitor your app in real time.


<h2>Gigabyte based pricing model launch</h2>

Last but definitely not least, after months of careful consideration, we've decided to make changes to the pricing plans. This is something that has been a topic of discussion for the better part of the last 4 months. We are proud to announce that we will no longer charge you for the number of functions or invocation we track but by the data we ingest.

<h3>How does the new pricing work?</h3>
I'm glad you asked! Up until now, our plans included a maximum number of invocations and function per month. Starting today we are going to charge users based on the size of the logs we receive from AWS. Each plan will have a preset limit that can be tracked from within the application where you'll be able to keep see exactly how much bandwidth you have used up. Check out the <a href="https://dashbird.io/pricing/">new pricing</a> page to learn more.

<center><h3>Smaller bills, happier customers <i> -  a win-win in our books!</i></h3></center>

These past few months have been a true rollercoaster for us starting with our round of investing, the changes to the app and the addition of a few very impressive people to our team's roster. 

Perhaps one of the most important things we learned this past year is that if we are to succeed in our endeavor to create the best serverless monitoring tool on the market we will have to work closely with our community and to do so we will have to establish a communication channel that will keep everybody on the same page. 

This post is about just that, communication and we wish to extend an open invitation to you all to keep sending in your feedback, suggestions, and questions. 