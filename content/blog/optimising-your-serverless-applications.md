---
title: Finding performance boosts in serverless applications
description: ...
date: 2019-05-05
frontImage: "2018-12-02/aws-lambda-layers.jpg"
thumbnail: "images/blog/2018-12-02/aws-lambda-layers.jpg"
author: Taavi Rehemägi
author_image: '/images/team/taavi.jpg'
authorLink: https://twitter.com/rehemagi
blog: ["serverless", "AWS", "Monitoring"]
---

From launching Dashbird one and a half years ago, our team has been in contact with a lot of companies building serverless applications and one of the problem areas that keeps poppping up are performance or cost issues. Performance problems usually present themselves when some best practices are overlooked or a suboptimal architecture decision have been made. This article is focused on how to look for optimization opportunities and to capitalise on those opportunities.

<img src='/images/blog/optimizing-serverless-apps/serverless-applications.png' />

While serverless applications usually consist of **event sources**, **lambdas functions** and **external services**, functions almost always present the most opportunity for optimization. Mainly because as a developer, you have less control over (managed) event sources and external services. To spot opportunities for efficiency, lets look under the hood for a second and identify where we should look.

#### Anatomy of a Lambda function

<img src='/images/blog/optimizing-serverless-apps/anatomy-lambda.png' />

Breaking a Lambda function into pieces you can see there are multiple places to look for optimizations.

 - **Your function code** is usually the biggest opportunity for optimization and a threat of making mistakes.
 - **Language runtime**, Python, Go binary Node.js etc. does not allow optimization.
 - **Execution environment** is a somewhat unintuitive place to think about but it can have an effect on performance. For example, how an function is invoked, is it in VPC and needs an ENI? Are there too many redundant packages?
 - **Compute substrate** also allows no optimization. AWS controls this and there's nothing you can do about this.

## Structuring Lambda code for performance

Let's start by what you can do in your code since it's by far the most significant part of your application. Let's break it down into smaller parts first...

1. **event** object from the event source
2. **context object** provides  methods to interact with runtime info (request ID, log group, timeout, etc.)
3. **initialisation** inclusion of dependencies, establishing database connections and importing secrets and initialisation variables.
4. **handler function** the function to be executed upon each invocation
5. **business logic** outside of the handler function

<img src='/images/blog/optimizing-serverless-apps/code.png' />

##### Initialisation

Since initialisations takes place once for every time a container starts

For function initialisation, the key things to think about is reducing the size of dependencies and reusing database connections.

  - minimize dependencies
  - use pre-handler logic strategically
  - Share secrets based on application scope
     - single fn: env vars are most lightweight but dont scale
     - multi fn: parameter store
  - think about how re-use affects variables, connections and dependency usage

#### Concise function logic

1. Separate Lambda handler code from core logic
2. Use functions to TRANSFORM, not TRANSPORT
3. Dynamic logic via configuration - if it does something differently in dev that in prod, don't build that into your code but use env variables.
4. Read only what you need - efficient requests against DB, use views and S3 select etc.
5. No orchestration in code 
  - retries of network requests etc
  - failure handling
  INSTEAD: use step functions (retry logic, orchestration logic, workflow logic out of lambda)
6. Project & repository scoping (kk)
  - 


#### Context object
mostly you wont interact with it, but you can look where the logs go and what the timeout is and can make decisions wether to but something in the queue or execute it right now.


Lambda processes a single event per execution environment and reuses containers for consequtive events. The container is kept alive for 5-15 minutes and amount of concurrent requests dictates the number of "frozen" containers that AWS keeps alive. For consequtive requests, only the handler function is re-executed and not the initialisation part. 

#### Optimising execution environment

1. More memory == More CPU and I/O (proportionally)
2. Use AWS X-ray to profile your workload
3. >1.8GB === 2 cores, but you might not use/need it 
4. Think deeply about your execution model and invocation source needs (not everything needs to be an API)
5. Understand various aspects of queues, topics and streams when using them
6. VPC has benefits but isn't necessary for security
7. Minimize scope for IAM permissions

---

*This article is based on the talk about <a href='https://www.youtube.com/watch?v=sSSMTSn2xmA' target='_blank'>optimizing serverless applications</a> @reInvent 2018*


