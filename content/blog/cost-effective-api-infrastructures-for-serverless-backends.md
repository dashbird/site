---
title: Roadmap to Backend Developer on Serverless Infrastructures
description: Some contribution insights to the popular Backend Developer community roadmap
date: 2020-05-22T00:00:00.000Z
frontImage: "2020-05-vacation-buffer/cost-effective-api-infrastructures-for-serverless-backends.png"
thumbnail: "images/blog/2020-05-vacation-buffer/cost-effective-api-infrastructures-for-serverless-backends.png"
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["Serverless", "API Gateway", "Cost Optimization"]
draft: true
---

AWS API Gateway is a great service but can be quite expensive, and even cost-prohibitive in some cases.

An Application Load Balancer is a viable alternative since it integrates seamlessly with Lambda functions and is also highly scalable and reliable. For very small traffic, API Gateway will probably be the winner, but in high-throughput cases, ALB is capable of providing up to 90% savings.

Let’s outline an example and see how they compare. Consider an API that runs 24h/7d, receives around 5 Million requests per day, averaging 60 RPS (requests per second) and peaking at 120 RPS. The request/response payload sizes are on average 1 KB, each, and it has 10 rules for mopping and routing requested URLs to downstream resources such as Lambda functions.

Doing the math for this scenario, ALB can save from around 60% to 90% over API Gateway REST API and HTTP API services. Part of the ALB costs are fixed and irrespective of actual usage, so the higher the API traffic, the higher will be the opportunity to cut costs.

![alb api gateway cost simulation comparison](/images/blog/2020-05-vacation-buffer/alb-api-gateway-cost-simulation-comparison.png "alb api gateway cost simulation comparison")


When API Gateway is really needed for some reason, consider using the newly available HTTP API version. It’s simplified, three times cheaper than the traditional REST API service and a good alternative for using in internal APIs to decouple Lambda functions, for example.

The main reason we would recommend using the HTTP API for internal purposes is for the lack of granular concurrency control and public access security features. A firewall is not really needed for an internal API. It may not be necessary to control concurrency per client, as well, so controlling on the Lambda level should be fine.

The other missing features (access key management, SDK generation, and usage plans) are also unlikely to be worth the extra cost for the purposes of an internal API

![api gateway rest vs http api features](/images/blog/2020-05-vacation-buffer/api-gateway-rest-vs-http-api-features.png "api gateway rest vs http api features")


Also when using API Gateway, it might be interesting to enable caching. It can be applied to the entire API or only to specific methods that can tolerate cached responses. Time-to-live is also customizable. The downside is that AWS charges an hourly price for the memory allocated to the cache, not actual usage. The opportunity to cut costs will depend on whether your API receives too many similar queries over short periods of time.

Optimizing API endpoints is a moving target since the underlying services connected to it are usually in constant change. It is necessary to have proper tooling to monitor and alert as performance and cost optimization opportunities arise. Dashbird is a Serverless-first visibility service that provides everything you need to stay on top of your cloud architecture spending, from API Gateways, to Lambda functions, SQS queues, etc. [Try it today for free](https://dashbird.io/#register), no credit card required.
