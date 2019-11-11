---
date: 2019-11-07T14:19:00-03:00
title: "Types of Serverless Systems"
description: "What are the types of serverless systems for computing, storage, queue processing, etc."
learning: ["CBasic Concepts"]
learning_weight: 200
---

# Quick Intro

Originally, serverless started as Function-as-a-Service (Faas), only for computing purposes. Nowadays, it spans across all sorts of cloud services.

There are even some that preceded FaaS (such as some storage and queue platforms), but are now called serverless because they fit the conceptual characterization.

In the following lines we cover the most common types of serverless systems and their main purposes.

# Compute

Developers can deploy code and run it on-demand or on-schedule. FaaS platforms, such as AWS Lambda, will abstract all infrastructure - even the OS itself - to provide only a containerized runtime to the developer.

Usually supporting the most popular runtimes as default, such as `Python`, `NodeJS`, `.NET` , `Java`, some platforms also allow to implement custom runtimes, such as AWS Lambda.

In a nutshell, the developer responsibility is to:

* Chose which runtime and version to run (e.g. `Python 3.8`)
* Allocate how much memory (RAM) the code will need
* Package the code and deploy in the FaaS platform

Once invoked, a serverless function will provide the invocation parameters to the developer code, which is responsible for processing what it needs and returning a response.

Almost anything that that could be done in a traditional infrastructure, such as authenticating a user login, calling an external API, reading or writing data to a database, etc, can be implemented in a serverless compute service.

The AWS service for serverless computing is Lambda. Find more information here.

# Queue/Message Buffer

A queue or message service holds data for a limited period of time while being moved from one part of an application to another.

The most common goals for using a queuing service are:

* Decouple services with an asynchronous communication process
* Control the volume of data to prevent a larger system to flood a less scalable one

The AWS serverless offering for queuing is SQS. Find more information here.

## Example: polls

Consider a poll that gathers feedback from people on a particular topic.

It's possible for the poll to intake so many requests at a given point in time that the database can't handle persisting all of them.

The queue can work as a vote buffer. An internal job regularly reads votes from the queue according to the database write capacity. During peak load, the queue might build up. It can be gradually cleaned up in periods of lower demand.

## Example: e-commerce

After a purchase on an e-commerce site, the store might send a confirmation email, a request to the fulfilling department, etc.

The store can send a message to the `confirmation-queue`, for example. An internal job regularly reads purchases and emails buyers.

The advantage is service decoupling. Changing the email service doesn't impact the on-line store code. The new email processor only needs to read messages from the same queue.

# Stream Processing

A system that receives a constant flow of data packages. It can analyze and process data in real time.

What sets a queue buffer and stream processor appart is its ability to analyze data, detect patterns, apply conditions and react accordingly.

Although it can be used as a buffer, like the queuing mechanism, it is more commonly employed when analytics is needed for data ingested.

Kinesis is the AWS offering for stream processing. It is capable of processing streams in four different specializations:

* Video Streams
* Data Streams
* Data Firehose
* Data Analytics

Apply SQL queries to structured incoming data and set conditional triggers. Combine data from the past 10 minutes, or once it reaches 5 Mb, in order to trigger a custom data processor. The system is flexible for many use cases.

# Event Bus

An event bus allows to receive messages from multiple sources and deliver to multiple destinations.

The line between a message queue and an event bus is somewhat blurred. While a queue handles messages of a particular kind, an event bus can process multiple topics and serve several publishers/subscribers.

Event bus allows for custom rules to get each message delivered to the right subscriber(s). It is an alternative for reducing service coupling. Event bus offers an interface that is easy to change and maintain.

The AWS serverless offering is EventBridge, an event bus that also comes with integrations with third-party systems, from customer support (Zendesk) to sales solutions (SugarCRM) to security suites (Symantec).

# Database

The serverless database space is very rich nowadays, with options ranging from SQL, to NoSQL, Graph, Analytics, you name it.

A SQL database, such as AWS Aurora Serverless is ideal when:

* Data is not expected to grow very big over time
* Access patterns are a mix of transactional and analytical
* The data presents many-to-many relationships

NoSQL options, such as AWS DynamoDB, usually scale better for large datasets or write-intensive applications, due to the data distribution. Transactional queries have better and predictable performance. It is not well suited for analytical needs, though.

Graph databases, such as AWS CloudDirectory, are indicated when the data relationships become too complex, or when it is required to have both the transactional performance of NoSQL and data connectibility support similar to a SQL model.

Finally, analytical services, as the name suggests, are usually applied in combination with another type of database. A NoSQL can be used for highly performant transactional persistence, while a service like AWS Athena can be plugged in to provide analytical insights in an efficient way.

# Blob Storage

A blog storage system is used to store objects such as a text file, an image or video, for example.

The AWS offering in this space is the battle tested S3.

S3 can integrate with AWS Lambda and Athena to build powerful big data analysis, by leveraging structured data formats such as CSV or Apache Parquet.

# API Endpoints

The two most common models for API implementations are REST and Graph (not to confuse with GraphDB).

REST is the oldest and most widely used. It allows two systems to communicate by levaraging HTTP methods (GET/PUT/POST/DELETE). REST requires data consumers to known in advance its endpoints and which parameters or filters are supported.

Graph API is a model created by Facebook to support more flexible queries from data consumers. Requesters can combine filters, select which data points to return, or aggregate information before retrieval, for example.

AWS offers solutions for both architecture models:

* REST: API Gateway
* Graph: AppSync

# Auth & User Management

Most web applications need to manage, authenticate and authorize users at some point. Using a serverless user management system allows to speed up an application development and to focus on what really brings value to its users.

Security is also improved, since these services implement high security standards that are hard to replicate by a small team.

Cognito is the AWS contender at this space. There are external services, as well, such as [Auth0](https://auth0.com).
