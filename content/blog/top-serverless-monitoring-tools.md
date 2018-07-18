---
title: The best monitoring tools for serverless environments
description: Serverless and monitoring and observability have been an issue for early adopters. Here's a list of tools that seek to solve that issue.
date: 2018-07-11T12:00:00.000Z
frontImage: "2018-07-11/pexels-photo-577585.jpeg"
thumbnail: "images/blog/2018-07-11/pexels-photo-577585.jpeg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
category: "Monitoring, Serverless"
---

Serverless has gathered a lot of attention this past couple of years and with a <a href="https://dashbird.io/blog/companies-using-serverless-in-production/">lot of Fortune 500 companies</a> jumping ship and starting to use serverless architecture in production, it only made it more popular than ever. And while Serverless offers a lot of benefits, there are a lot of people that have yet to make the switch because of the new computing paradigm that makes developers change perspective quite a bit.

A reason that I hear a lot when people discuss the pro's and cons of serverless is the lack of observability and that's why we are going to take the time today to discuss the best tools that will salve this very issue.


<h3><a href="https://dashbird.io">1. Dashbird</a></h3>
![Dashbird](/images/blog/2018-07-11/dashbird.io.jpg)
In an already crowded space of serverless monitoring tools, Dashbird has managed to make its own path to the top spot through a simple to use user interface, an easy setup that takes less than 5 minutes, a live tailing feature that allows you to see updates in real time and a powerful alerting system.
No coding required! That's right, Dashbird works seamlessly without having to code a single line of code! You signup with the service and go through the two-minute tutorial and you are off to the races.
One of the biggest benefits of Dashbird is that it takes all the data from CloudWatch and AWS X-Ray meaning that your app won't suffer any latency. 

<h4>Core features</h4>
<ul>
<li>Great user interfaces</li>
<li>No latency added to the function execution time</li>
<li>Great support staff</li>
<li>Low cost</li>
<li>Support for Java, Node.js, Python</li>
</ul>

<h3><a href="https://www.thundra.io/">2. Thundra</a></h3>
![Thundra](/images/blog/2018-07-11/thundra.jpg)
Thundra is an easy to setup tool that can work as an alternative to AWS X-Ray with easy to read diagrams in a well-designed dashboard. One of the biggest differentiators between Thundra and it's competitors is its focus on Java rather than Node.js or Python. Similar to Dashbird's approach, Thundra doesn't add any latency to the function execution time by separating the data-sending from the Lambda function.

<h4>Core features</h4>
<ul>
<li>Easy setup</li>
<li>No extra latency added to the function execution time</li>
<li>Requieres limited access to AWS account</li>
</ul>

<h3><a href="https://www.iopipe.com/">3. IOpipe</a></h3>
![IOpipe](/images/blog/2018-07-11/iopipe.jpg)
IOpipe provides monitoring, tracking and profiling for AWS Lambda functions written in Node.JS, Python, and Java. It features real-time metrics with customizable alerts as well as customizable events fro granular error logs. Similar to Dashbird and Thundra it allows you to track and profile performance and function cold starts. One of the key differentiators of IOpipe is its tracking system which involves having to wrap every Lambda function which basically means adding another piece of code to every function making a call to IOpipe in order to have monitoring for that function. This adds extra latency to your function execution time.

<h4>Core features</h4>
<ul>
<li>Low cost</li>
<li>The user doesn't need to give access to AWS</li>
<li>Versitile alerting system</li>
<li>Support for Java, Node.js, Python</li>
</ul>

<h3><a href="https://aws.amazon.com/cloudwatch/">4. AWS CloudWatch</a></h3>
![IOpipe](/images/blog/2018-07-11/cloudWatch.jpg)
Amazon’s CloudWatch is an AWS monitoring tool many solutions are using in one way or another, however, on its own, it does introduce around a minute of delay, so performance is not one of its stronger points. Serverless monitoring is done through the command line, or – alternatively – the visualization features that CloudWatch offers. You can examine a specific metric in more detail by searching for details like resources, metric names, regions, etc.
Depending on the features you want, there are different pricing tiers. The basic services all fall into the free tier, while detailed EC2 monitoring, to name an example, will require you to be a paid subscriber.

<h4>Core features</h4>
<ul>
<li>Custom alert triggers</li>
<li>Available out of the box</li>
<li>Difficult to navigate but contains all the log data</li>
</ul>
</br>
---
</br>
These are the top 4 serverless monitoring tools that I believe are worth talking about at this point but since the whole serverless space is evolving at such a rapid pace I'm sure I'll have to revisit this topic sooner rather than later.