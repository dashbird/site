---
date: 2019-11-05T10:00:14+02:00
title: "Serverless Advantages and Use Cases"
description: "Why use serverless? Breakdown of the advantages of serverless over traditional server-centric infrastructure. Overview of the common use cases of serverless."
learning: ["ABasic Concepts"]
learning_weight: 300
---

## Why use serverless?

Serverless computing has numerous advantages over classical server-centric infrastructure. Developers are usually able to release products faster, benefit from inherent scaling and reduce infrastructure costs. Serverless also requires less know-how of infrastructure management and is easier to get started with.


## Advantages of serverless computing

Benefits of serverless are associated with on-demand functionality, pay-as-you-go pricing model and faster time to market. 

#### Faster time to market

With serverless, developers spend less time provisioning, scaling and managing infrastructure, freeing up time to develop value-added business logic. On top of that, function code is often easier and faster to write since it's concise and should be designed to do only one thing at a time.

#### Scales out of the box

Serverless infrastructures scale up and down based on demand for specific functions of the system. For developers, this means less problems and a smoother experience when a product or an application suddenly becomes very popular. Usually cloud-providers set limits for maximum concurrency to protect developers from runaway costs but those limits can be changed and revoked on request. 


### Pay-as-you-go pricing model

Developers are only charged by the amount of compute and resources they end up using. In case the system is idle, no cost is associated. In addition, AWS provides a generous free tier of 1M Lambda function requests per month, not to mention other services.

#### Less heavy lifting 

Serverless ecosystem features building blocks for common functionalities like databases (DynamoDB, Aurora), file storage (S3), API (API Gateway) and user management (AWS Cognito), among others. This simplifies getting off the ground at first and also increases the stability of system because those services are built and maintained at the highest quality.

## Popular use cases for serverless

Serverless can be used for a wide variety of use cases, including *batch processing*, *stream processing*, *web applications*, *mobile applications*, *IoT* (internet of things), and *ETL* (extract-transform-load).

#### Web and Mobile Applications

One of the most common use cases for serverless tends to be building backend APIs that service web and mobile applications. Serverless APIs are generally easy to build and manage and work well in fluctuating load scenarious.

#### Stream and batch processing

The event-driven nature of serverless is well suited for data processing. Lambda functions can be assigned to consume events from data streams or set as workers to process tasks in bulk. Another great example why pay-per-use billing model is attractive, although at high loads, compute can be more expensive with serverless.

#### Internet of things

Devices that connect to internet to read or write data are an excellent use case for serverless. Services like Alexa and home appliances like iRobot are well-known serverless users. Serverless is also seeing a lot of adoption in home automation and other custom-built solutions.

#### Cloud Automation and CRON jobs

Lambda is also well suited for automating cloud tasks like backing up databases, changing condigurations periodically and for taking care of periodical jobs that don't require a server constantly running.

## Sky is the limit

Although above we listed the most common use cases and the strongest advantages of serverless computing, many other use cases and benefits exist. Theoretically anything is possible to build on serverless architecture.
