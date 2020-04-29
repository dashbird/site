---
title: Leveraging Lambda Cache for Serverless Cost-Efficiency
description: Learn how read-intensive applications can save money and improve efficiency by using a simple AWS Lambda cache mechanism
date: 2020-04-16T00:00:00.000Z
frontImage: "2020-04-29/header-lambda-cache.png"
thumbnail: "images/blog/2020-04-29/header-lambda-cache.png"
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["Serverless", "AWS Lambda", "Caching", "Well-Architected"]
---

Cost-efficiency is one of the main pillars of the Serverless Well-Architected framework. Read-intensive applications can save money and improve efficiency by using cache systems. [AWS Lambda's](?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=lambda-caching) internal memory could be used as a caching mechanism.

A Lambda container remains alive after an invocation is served, even if it stays idle for some time. Whatever was loaded in the container’s memory will remain there for the next invocations. And that can be used as a caching mechanism as we demonstrate below. In some cases, this could be an alternative to external caches such as Redis or Memcached.


## Basic structure of a Lambda function

The basic structure of a Lambda function is the main file containing a handler function:

![Basic structure for Lambda function handler](/images/blog/2020-04-29/lambda-handler.png "basic structure lambda function handler")

What runs inside the lambda_handler function is lost after the execution ends, but what is loaded outside the handler function will remain in memory as long as the container is alive.

Consider a read-intensive backend service that provides data about application users. It receives a username as an argument, looks for the user in a database, and returns the information to the requester.

![read-intensive lambda function querying database](/images/blog/2020-04-29/lambda-handler-using-database.png "read-intensive lambda function querying database")

## Caching data outside Lambda handler

The basic idea of using Lambda for caching is to start keeping this information in memory, outside the handler function. We could delegate the user data collection to a caching mechanism that would be loaded outside the handler function.

![using lambda internal memory as a cache](/images/blog/2020-04-29/lambda-handler-using-cache.png "using lambda internal memory as a cache")

Whenever user information is needed, we ask the cache. If the username is not available, the cache automatically pulls it from the database and updates its own internal buffer. In future invocations, when the same username is requested, the cache won’t have to query the database again.

![using lambda internal memory as a database cache](/images/blog/2020-04-29/lambda-cache-logic.png "using lambda internal memory as a database cache")

The `cache_by_username` variable is a key-value map. Everything loaded there will remain in memory throughout the Lambda container lifecycle. In subsequent requests, retrieving a cached user data will not only be faster but also cheaper, since we won’t have to hit the database.


## Considerations for Lambda caching

This is obviously an oversimplification of the problem. We would likely need to consider some other factors to make sure our caching works properly.

In the example above, the function isn't really doing anything with the cached data other then returning it. In these cases, we could cache in a higher level part of the infrastructure by using CloudFront with API Gateway, for example. This would avoid requests from even reaching the Lambda function.

Another aspect is cache size and resource usage. How much memory does the Lambda function need and how much is allocated? The difference is roughly what we have available for caching. If the cache starts to grow further, it may cause memory exhaustion errors and prevent the function from working altogether. Thus, it’s a good idea to run a benchmark and avoid this potential failure point.

Another thing to consider is the lack of synchronization between Lambda containers. When multiple invocations are running concurrently, Lambda has to spin up one container for each. They will not have the exact same usernames in their caches, as invocation arguments hitting each container will hardly be the same.

For that reason, we can't ensure consistent caching performance across all Lambda invocations. Depending on the number of concurrent requests and the variability of usernames requested, the cache might end up having to hit the database most of the time in practice.

The Well-Architected framework is composed of four other pillars apart from Cost-Efficiency. In case you are interested in mastering serverless architectural best practices, we compiled a [list with several battle-tested design patterns in this short video](https://dashbird.io/knowledge-base/well-architected/serverless-architectural-patterns/).
