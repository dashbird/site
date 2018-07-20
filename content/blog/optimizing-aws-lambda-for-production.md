---
title: Optimizing AWS Lambda for Production
description: Here's how I get my Lambda functions in line to behave their best in production environments.
date: 2018-01-10
frontImage: 10-01-2018/optimize-lambda-production.jpeg
thumbnail: images/blog/10-01-2018/optimize-lambda-production.jpeg
author: Taavi Rehemägi
blog: ["Serverless", "Lambda"]
---

Serverless was the MVP of last year and I'm betting it's going to play a bigger role next year in backend development.

AWS Lambda is the most used and mature product in the Serverless space today and that's why I'm going to share some tips and best practices for building production-ready Lambdas with optimal performance and cost.

_By the end of this article, you will have a workflow of continuously monitoring and improving your Lambda functions and getting alerts on failures._

### 1. Tracking Performance & Cost

Before making any changes to your functions, I recommend setting up performance tracking for your functions. Monitoring invocation counts, durations, memory usage and cost of your Lambda functions allows you to pinpoint issues and make effective decisions. I recommend using <a href='https://dashbird.io' target='_blank'>Dashbird</a>, since it's easy to set up and the relies only on CloudWatch logs, meaning the service itself won't slow down your functions (or up your AWS cost).

![Optimizing AWS Lambda for Production](/images/blog/10-01-2018/project-overview.png)

In the above image, we can instantly notice some quickwins:

  1. **alpha-prod-client-error-processor** has the most invocations, meaning it has the highest potential of optimization.
  2. The same function has the most errors, so it's reliability can be improved.
  3. **alpha-prod-ping** and **alpha-prod-client-metrics** have memory overprovisioned and can be optimized towards cost.
  4. Some of the functions have invocation times over 20 seconds. This is slow and probably yields and optimization opportunity.

_So, let's dive in the different strategies to turbocharge your functions..._

### 2. Optimal memory provisioning
The amount of CPU allocated to your Lambda function is relative to the memory provisioned for that function. A function with 256 MB of memory will have roughly twice the CPU from a 128 MB function. Memory size also affects cold start time linearly.

Taking into account the cost increase of more memory, developers have a choice to optimize either for speed or cost.

Here's a good example of from <a href='https://serverless.com/blog/aws-lambda-power-tuning/' target='_blank'>cost and speed optimization</a> by Alex Casalboni:

<table class='table-bordered w-100 text-center mb-4'>
  <thead>
    <tr>
      <th>RAM</th>
      <th>DynamoDB</th>
      <th>SNS Message sending</th>
      <th>Billed time</th>
      <th>Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>128MB</td>
      <td>110ms</td>
      <td>120ms</td>
      <td>300ms</td>
      <td class='bg-warning'>Cheapest & slowest</td>
    </tr>
    <tr>
      <td>1024MB</td>
      <td>80ms</td>
      <td>70ms</td>
      <td>200ms</td>
      <td class='bg-danger'>Most expensive</td>
    </tr>
    <tr>
      <td>1536MB</td>
      <td>35ms</td>
      <td>45ms</td>
      <td>100ms</td>
      <td class='bg-success'><b>Optimal</b></td>
    </tr>
  </tbody>
</table>

<q>In terms of cost, the 128MB configuration would be the cheapest (but very slow!). Interestingly, using the 1536MB configuration would be both faster and cheaper than using 1024MB. This happens because the 1536MB configuration is 1.5 times more expensive, but we'll pay for half the time, which means we'd roughly save 25% of the cost overall.</q>

### 3. Re-use Lambda containers
AWS reuses Lambda containers for subsequent calls if the next call is within 5 minutes. This allows developers to, for instance, cache resources and implement connection pooling.

**Below is a checklist that you can go through when thinking in that direction:**

 * Store and reference external configurations and dependencies locally after first execution.
 * Cache reusable resources with <a href='https://en.wikipedia.org/wiki/Cache_replacement_policies' target='_blank'>LRU</a> methods.
  - Beware of the provisioned memory here, which is 1536MB at most!
 * Limit the re-initialization of variables/objects on every invocation. Instead use static initialization/constructor, global/static variables and singletons.
 * Keep alive and reuse connections (HTTP, database, etc.) that were established during the first invocation. **Here's some material on how to do that:**
    - <a href='https://www.mongodb.com/blog/post/optimizing-aws-lambda-performance-with-mongodb-atlas-and-nodejs' target='_blank'>Connection pooling for MongoDB.</a>
    - <a href='http://blog.rowanudell.com/database-connections-in-lambda/' target='_blank'>Connection pooling for PostreSQL & MySQL.</a>

Avoid using recursive code in your Lambda function, wherein the function automatically calls itself until some arbitrary criteria is met. This could lead to unintended volume of function invocations and escalated costs.

### 4. Log-based monitoring and error handling

With servers, collecting performance metrics and tracking failed executions is normally done by an agent that collects telemetry and error information and sends it over HTTP. With Lambdas, this approach can slow down functions and over time add quite a bit of cost. Not to mention the extra overhead that comes from adding (and maintaining) third-party agents over possibly large amounts of Lambda functions.

The great thing about Lambda functions is that all performance metrics and logs are sent to AWS CloudWatch. In itself, CloudWatch is not the perfect place to observe and set up error handling, but there are services that work on top of it and do a good job on providing visibility into your services.

<a href='https://dashbird.io' target='_blank'>Dashbird</a> is a log-based monitoring and error handling solution for AWS Lambda functions, which is perfect for observing all layers of your Servelress architecture and getting alerted for all failures that can happen to you service.


### Conclusion
There's a lot of room to optimize your Serverless stack and it all starts with knowing the right ways to do it and being able to locate the issues. I reccomend following all of the instructions above and testing the difference in performace after doing changes to you Lambda functions. Keep in mind that performance is especially important in API endpoints and functions that have high execution volumes.


_I hope you enjoyed reading this article. If you have some tips that were not mentioned here, don't hesitate to let me know in the comments._
