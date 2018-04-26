---
title: "Common Serverless problems and methods of detection and prevention."
description: You can now set webhooks to events in Dashbird and integrate Dashbird with different platforms.
date: 2018-04-12
frontImage: "08-02-2018/webhooks-dashbird.jpeg"
thumbnail: "images/blog/08-02-2018/webhooks-dashbird.jpeg"
author: Taavi Rehemägi
---

### introduction (lose title later)

We recently did a survey targeting serverless companies and asking about the main obstacles of adopting serverless technologies. "Steep learning curve" ranked as the third highest. Here's a shot of listing the most common problems and solutions that we as a monitoring and debbuging company see the most.

## AWS Lambda failures

Lambda functions are the most common point of failure in your Serverless application. The classical reason is that developers fail to account for every variation of user input and or just make bugs in the code. However with Lambda, there are timeout restrictions and other characteristics that increase the risks.

#### 1. Task timed out after 300.01 seconds
In my experience, function timeouts are extremely easy to happen. There's a multitude of factors that contribute to this, for example:

  1. Default timeout in the Serverless Framework is 6 seconds. Depending on what the function does, this can get tight.
  2. Microservice based architecture often consists of API calls propagating through multiple service and accumulating execution time.
  3. Parallel Lambda executions can eat up database connections, making the function unable to establish a connection right away. Not a problem with DynamoDB, but a huge one with Mongo and most RDS-es where the number of open connections is limited.

##### Detecting timeouts
Detecting timeouts isn't as straightforward as you might think, since the execution is terminated from an upper layer and exception reporting agents don't have time to report it before being killed. Fortunately, AWS function container logs out a line at the end, indicating a timeout:

```
REPORT RequestId: 1023f3b5-3e99-11e8-be23-cd2aee6e97b2  Duration: 60042.00 ms Billed Duration: 60000 ms   Memory Size: 128 MB Max Memory Used: 71 MB  
2018-04-12T21:33:55.840Z 1023f3b5-3e99-11e8-be23-cd2aee6e97b2 Task timed out after 60.04 seconds
```

Best way to monitor and detect timeouts is through some sort of log analytics service. Dashbird is made for Serverless observability and detects these problems automatically by analyzing your CloudWatch logs. You can also set up log based alerting in SumoLogic for example.

![Example timeouts](/images/blog/13-04-2018/timeout-examples.png)

_Here's a screenshot of detected timeouts in Dashbird._

##### Preventing timeouts

**Increase time limit:**

Increasing time limit is acceptable only if the Lambda is not responding to an API call. However, if you're building a Serverless API that is responsible for answering to some front-end application, high latency will have a negative effect on the user experience. When it comes to data-processing I would say go for it. The maximum time limit for a lambda is 300 seconds or 5 minutes. 

**Break logic into smaller pieces:**

Use step-functions or re-think your architecture. Sometimes, very long execution time is an indicator that a function has too many responsibilites. Whenever you can, try to use step functions to keep your Lambda small, simple and fast.

**Check `context.getRemainingTimeInMillis();`**

For worker/data-processing type Lambdas that are designed to be greedy for execution time, you can check the time left for the current execution and decide based on that if you're going to process the next patch of say SQS items (note that AWS introduced SQS as an event source, so these kinds of functions might be subject to redesign). 

#### 2. Out of memory
You can run out of memory when you load too many packages into your memory or when operating with large datasets in memory. 

##### Detection

Out of memory failures are pretty nondescript and extremely difficult to detect. Here's how one looks like.
```
REPORT RequestId: 7c5ce74a-2af4-11e8-939e-1d89db278338  Duration: 9470.55 ms  Billed Duration: 9500 ms  Memory Size: 192 MB Max Memory Used: 192 MB
```

Dashbird has built-in metrics of memory usage and also detects out of memory induced failures.

##### Prevent/Fix

**Increase provisioned memory.** The most straight-forward and in most cases the only solution. The downside here is that the more a function has memory, the more it costs to run it. As a side-benefit however, the CPU of the function is in correlation with the memory, so in some cases it reduces the execution time and might end up costing roughly the same.


**Use linters to detect unused packages**. For example, Node.js has <a href='https://eslint.org/' target='_blank'>ESLint</a> that points out all unused variables and packages in your code. Eliminating all but the essentials is a good memory save.

#### 3. Runtime errors and exceptions

The most common type of problem in any software application and Serverless is no exception here. Programmer mistakes do happen and sometimes they are undetected until production. There are a couple of ways different ways to handle errors and prevent them that can reduce the amount that reaches production and also save valuable development time.

##### Detection

When a runtime error occurres, the details such as the type and the stacktrace are logged out to CloudWatch meaning it's possible to detect errors and have them be reported to developers without cluttering the code with exception reporting services. One important aspect to note here is not to silence errors by `try...cathcing` them and not logging out anything in the catch block. 

Dashbird again has exception monitoring built in. All that's needed  Use an exception monitoring service like Rollbar

#### Prevention

**Test code locally.** Taken for granted in virtually all other development areas but a big problem in Serverless. Serverless offline plugin does help with that to an extent though. I reccommend setting up test events to all Lambdas so that you can run the code before deploying it. This yields a huge time-save by reducing the development feedback cycle.

**Unit tests.** Obviously it's also a good idea to write unit tests that make all the code execute at least once.

**Test and staging environments.** Set up staging environments and populate data there to see how it runs in AWS without the risk of affecting customer experience.

## 4. Latency/Slowness

Latency, although not a fatal mistake by any means, is a frequent problem with Serverless APIs that service frontend applications.

#### Detection

**Time-series metrics.** Observe the average duration of a Lambda function by aggregating together all the durations of a Lambda function. Dashbird does that automatically but you can also configure this in CloudWatch or use any other log analytics service. This approach isn't sufficient for detecting outliers though. Imagine that one out of a hundred executions is slow - that request will remain invisible in that chart.

**Outlier detection.**

#### Prevention

**Avoid tons of propagating requests.** A scenario I've seen way too often: a request is made against an API with the purpose to fetch information. The Lambda behind that endpoint then asks data from 4-5 different services (like user data from user service and business data from 3 more sources which in some cases make extra requests to another services). Each of these requests establishes a database connections and might be a cold start as well. This is the shortcut to get 2-3 second response times. I'm personally an advocate for microservice architectures but I reccommend designing the structure in a way that would enable parallel requests and does not have too many dependencies.

**Enable AWS X-Ray.** This will help you pinpoint slow requests inside your Lambda execution which enables you to optimise the right parts.

**Connection pooling and variable caching.** You can keep connections alive over multiple invocations and cache objects and variables that are slow to initialize or need to be downloaded from an external source. Read more about connection pooling for Mongo DB <a href='https://www.mongodb.com/blog/post/optimizing-aws-lambda-performance-with-mongodb-atlas-and-nodejs' target='_blank'>here</a> and for RDS's <a href='https://blog.rowanudell.com/database-connections-in-lambda/'
target='_blank'>here</a>.

**Optimise memory provisioning.** The more you allocate memory to your function, the more CPU the container will have as well. Here are some pointer for power tuning <a href='https://serverless.com/blog/aws-lambda-power-tuning/' target='_blank'>Lambda functions</a>.

**Keep Lambdas "warm".** Not a big fan of this as I think that cold starts are widely overdramatized but you can reduce the amount of cold-starts by making dummy requests against your Lambda functions to keep them "warm".

## 5. Insufficient/Wrong IAM Roles

Depending on the architecture and the purpose of your Lambda function, this can be quite a complex subject. At a minimum, your functions should have permissions to create AWS CloudWatch log groups. Depending on the resources your function will need, you might have to allow DynamoDB or S3 access, for example. Here's an <a href='https://serverless.com/framework/docs/providers/aws/guide/iam/' target='_blank'>indepth guide to IAM roles for Lambda functions</a>.

#### Detection

#### Prevention

### API Gateway problems

The tricky thing about API Gateway errors is that the execution and errors do not reach Lambda CloudWatch logs, making them harder to detect with Dashbird. Here are some of the most commmon problems.

## 6.Bad Gateway Exception Misconfigured API GW

Usually for an incompatible output returned from a Lambda proxy integration backend and occasionally for out-of-order invocations due to heavy loads.

## 7. Endpoint Request Timed-out Exception

Maximum duration of a API GW endpoint is 30 seconds. Any Lambda that takes more than that results in an error. 

### DynamoDB


## 8. ProvisionedThroughputExceededException

Your request rate is too high. The AWS SDKs for DynamoDB automatically retries requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff, also consider enabling autoscaling for you DynamoDB table. 
