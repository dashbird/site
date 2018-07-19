---
title: Comparing Amazon ECS with Amazon AWS Lambda
description: Both Amazon ECS and AWS Lambda were launched about at the same time and while they are similar in a lot of ways understanding the difference is important
date: 2018-07-17T12:00:00.000Z
frontImage: "2018-07-17/ecs-vs-lambda-header.jpg"
thumbnail: "images/blog/2018-07-17/ecs-vs-lambda-header.jpg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
category: "ECS, Lambda"
---

Both Amazon ECS and AWS Lambda were launched about at the same time. They are both services and they are both offered by Amazon. A more generic term for them would be "cloud services". So what is the difference between the two?
Both services serve the same purpose: to offer an environment in which you can run applications - a computing one to be exact. An environment in which you can access services and some microservices that help you develop and deploy applications faster than you would do on your company's servers.

<h3>Amazon Elastic Container Service</h3>
Let's first start with Amazon ECS. This service provides one with the possibility to run Docker containers on an AWS server. The upside is that these Docker containers can run an app regardless of the programming language it was written in. Amazon EC2 instances can be manually configured by the user according to one's needs. These Amazon EC2 instances run in a cluster of servers and they can be configured with the help of AWS tools. Each of these instances can be configured to run at a specific time, be of a certain size and handle a certain amount of resources. The code you develop and run however depends on said Docker containers.

<h3>AWS Lambda</h3>
In contrast, Amazon AWS Lambda uses <a href="https://dashbird.io/blog/what-is-a-lambda-function/">lambda functions</a> which are bits of code written specifically for Lambda. The server management part is handled by AWS in an automatic manner and the way in which the servers in the cloud execute the code is not at the user's disposal. Lambda functions are limited in what they can do and they must be kept simplistic. AWS Lambda activity tracking can be done with a set of tools that you can choose from.

In short, the cluster servers in the case of Amazon ECS are set up by the user while when it comes to AWS Lambda the underlying structure is handled by the system. AWS Lambda also supports few programming languages in contrast with Amazon ECS that can run any code in its containers. If you are familiar with a Linux environment and the programming languages it can run then AWS Lambda might be the thing for you. You can check online forums or mailing lists for an AWS Lambda c# example to see how the same code can be run both on Linux and in an AWS Lambda environment. The plus side with AWS Lambda is that scaling is automatic and one does not need to bother configuring the environment as is the case with Amazon ECS. If you're a Python or JAVA developer this might be what you need to rapidly deploy applications.


<center><h1>Amazon ECS vs Amazon Lambda</h1>
<h2>Spoiler! There's no winner!</h2></center>

Well, it's not really a contest. There are lots of reasons why you'd pick Lambda over ECS and vice versa, it's up to you to understand the two environments and make the correct decision when the time comes.


If your programming language of choice is not on the Amazon AWS Lambda list then you might want to go with Docker containers and use Amazon ECS. It would be great to see the transparency and ease of use present in Amazon AWS Lambda combined with the ability to run applications in a container environment. That would be a match made in Heaven for a developer that wants speed and plenty of options. Lambda functions are simple and easy to write but Docker containers can be scaled to run almost any amount of code. One can develop such code on a home computer then upload and manage the compilation process by using a preconfigured container.

To be noted that <a href="https://dashbird.io/lambda-cost-calculator/">Amazon Lambda pricing</a> might reach certain levels depending on the execution time of the code. One might regard Docker containers in an Amazon EC environment as a better option but the truth is Amazon AWS is gaining ground due to ease of use and the fact that most people use Python, Java and other programming or scripting languages that the Amazon marketing department deemed as being necessary for their clients. AWS Lambda limits seem to be ignored by the vast majority of customers so Amazon must be doing something right with this kind of service. It may be that lack of transparency doesn't bother many people when the upside is a quickly configured and efficient programming environment.

AWS serverless architecture has been around for some years and small and middle-sized companies find it easier to use an Amazon server cluster than to burden their own corporate server with processing times that are tens if not hundreds of times slower than what a few dollars can buy. Function as a service troubleshooting is also a factor must take into consideration since it is easier to use a fast cloud service than rely on a server administrator of your own for troubleshooting. And let's not forget that log-based <a href="https://dashbird.io/features/aws-lambda-serverless-monitoring/">serverless monitoring</a> is an easy way to keep watch on your processes or be alerted via e-mail when something has changed or has taken place. These are just some of the benefits of a serverless architecture and people have been jumping on them for some time now.
