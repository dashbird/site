---
title: AWS Lambda & Amazon EC2 - Two Paradigms, One Decision
description: The fundamental answer to such an obvious issue should be the provision of code by the client in any supported language if the event-managed service is to control and monitor AWS Lambda.
date: 2018-03-26
frontImage: "26-03-2018/aws-lambda-ec2.jpg"
thumbnail: "images/blog/26-03-2018/aws-lambda-ec2.jpg"
author: 'David Duarte'
---

![AWS Lambda vs EC](/images/blog/26-03-2018/aws-lambda-ec2.jpg)


The fundamental answer to such an obvious issue should be the provision of code by the client in any supported language if the event-managed service is to control and monitor AWS Lambda. In counterpart, for customization and adaptations to own needs, Amazon EC2 is the most flexible solution and has a range of EC2 instances. However, this is just a brief introduction. A deeper comparison is needed to understand each of these services and what are the benefits they bring to your company and / or business.

### About AWS Lambda


Its main function is to execute code without server support or server infrastructure. AWS Lambda comes into play only when invoked to execute the code, escalating automatically regardless of the number of requests per second that are made from one moment of time to another. The supported codes work practically for any application without any type of administration.


The support of AWS Lambda guarantees High Availability which includes administration, maintenance, capacity and automatic scaling activities. AWS Lambda currently supports Node.js, Java, C #, Go and Python.



#### What do I need to know before using AWS Lambda?


Essential components of an application based on AWS Lambda

- Lambda function: fundamental element, it consists of custom code and dependencies.

- Event source: an AWS service, such as Amazon SNS, or a customized service, which activates the function and executes its logic.

- Subsequent resources: an AWS service such as DynamoDB tables or Amazon S3 buckets, which it calls its Lambda function once activated.

- Log flows: although Lambda automatically monitors invocations of the function and registers metrics in CloudWatch, you can comment on the code of your function with customized log statements that allow you to analyze the execution flow and the performance of your Lambda function to guarantee that works correctly.

- AWS SAM: a model to define applications without a server. AWS CloudFormation natively supports AWS SAM and defines a simplified syntax for expressing serverless resources.



#### The Real Intrinsic Advantage of AWS Lambda

You pay only for the executed code, this without the need of administrative responsibility. You just need to upload your code and Amazon AWS takes care of the rest. However, we can not leave aside the monitoring capacity that reverts special importance in services of this type. That's where [Dashbird.io](https://dashbird.io) offers its most remarkable strength.

### About Amazon EC2

Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure and modifiable cloud computing capabilities. EC2 allows users to rent virtual computers in which they can run their own applications. This type of service implies a change in the computer model by providing computing capacity with a modifiable size in the cloud, paying for the capacity used. Instead of buying or renting a certain processor to use it for several months or years, in EC2 the capacity is rented per hour.


The Amazon EC2 web services interface allows you to obtain and configure capacity with minimal effort. It provides complete control over computing resources and can be executed in Amazon's accredited computing environment. Amazon EC2 reduces the time it takes to get and start new server instances in a matter of minutes, allowing you to quickly scale up capacity, either by increasing or reducing it, as your needs change. Amazon EC2 changes the economic model of computing, since you only have to pay for the capacity you actually use.


Amazon EC2 relies primarily on virtualization technologies, allowing you to use a wide variety of operating systems through its web services interfaces, customize them, manage network access permissions and run as many systems as you wish. EC2 allows the scalable deployment of applications by providing a Web service using Amazon Virtual Machines called Instances and which in turn will contain any desired software. A user can create, launch and end server instances as much as they need, by paying for active hour / server, for this reason the term "elastic" is given. EC2 provides users with control over geographical locations of instances that allow for optimization of latency and high levels of redundancy. Amazon EC2 also provides data recovery tools and strong isolation from other processes performed on their machines.


### So, what should I consider when choosing the most appropriate tool?

With Amazon EC2, there is a wide range of tools available to monitor and register your instances automatically; however, the configuration of the triggers is not automatic. These must be configured by Amazon AWS upon approval by themselves. Unlike Amazon Lambda, which is, always using the appropriate language and the code is correct for the start of a triggered event, all information is collected specifically for those assets, allowing real-time analysis of raw data. In [Dashbird.io](https://dashbird.io) we have a wide range of experiences shared by satisfied clients in the understanding of the monitoring of their programmed functions.


Amazon Lambda suppresses the need to abstract or worry about infrastructure, and companies highlight the benefits they acquired. Amazon Lambda offers sample code for real-time file processing, real-time flow processing, extraction, transformation, data validation, servers without servers. IoT Sensors to detect and redirect information, mobile backends for social media applications and web applications, that is, Weather Application. Amazon AWS has shown once again why they are the leading company in cloud computing services.



However, it is necessary to emphasize that there is a cost structure inherent to each type of service that can make a difference, as the case may be, when choosing one or the other for our needs. In the best scenario, a Lambda function running for 1 hour (even several calls to the same function that summed up one hour) can cost $ 0.030024, while an EC2 on demand service with similar statistics costs $ 0.0059.


At first glance, everything favors EC2, however it must be remembered that this EC2 server remains active listening to new connections during that hour, underutilized with few calculations, while a Lambda function, will hardly run for a whole hour, unless it is doing something very wrong. In this case, thinking about computing efficiency. Added to this, is the monitoring offered by [Dashbird.io](https://dashbird.io) to optimize this efficiency to the maximum.
