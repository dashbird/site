---
title: "AWS re:Invent 2019 - API Gateway HTTP Proxy"
description: 
date: 2019-12-09T00:00:00.000Z
frontImage: "2019-12-09/reinvent-2019-api-gateway-http-proxy.jpg"
thumbnail: "images/blog/2019-12-09/reinvent-2019-api-gateway-http-proxy.jpg"
author: Renato Byrro
blog: ["api-gateway", "aws", "reinvent", "serverless"]
---

[API Gateway](https://dashbird.io/knowledge-base/api-gateway/what-is-an-api-gateway/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=api-gateway-http-apis) is a serverless service by AWS to expose cloud services through private or public HTTPs endpoints.

It is used by many serverless teams to connect frontend applications to backend systems in a secure, scalable and seamless way. API Gateway integrates with [Lambda](https://dashbird.io/knowledge-base/aws-lambda/introduction-to-aws-lambda/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=api-gateway-http-apis), DynamoDB, S3 and a variety of other AWS services.

The main issue with API Gateway, so far, was its cost. At $3.50 per million requests, it can be more expensive than Lambda itself. Paying more to an HTTP endpoint than to the actual computing service makes little sense.

API Gateway comes with a bunch of additional features that are awesome, but add cost to the service: API Key management, API access plans, fine-grained authentication, throttling, etc.

What we observe in reality is that a large portion of software projects only use API Gateway as an HTTP proxy to connect a request to a backend service (e.g. a Lambda function).

To facilitate adoption of API Gateway, AWS decided to provide a version of it working solely as an **HTTP API** proxy with +70% price reduction: $1.00 per million invocations.

Despite being in beta, teams that perhaps would fall for another solution (such as an [Application Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html)) for cost savings can now start using the traditional API Gateway REST API, and later migrate to the cheaper HTTP API when generally available.

> We're publishing a thorough guide on the new HTTP APIs feature. [Subscribe here](https://dashbird.io/subscribe-knowledge-base/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=api-gateway-http-apis) to receive an alert when it goes live!

---

_API Gateway HTTP APIs preview is available in the following AWS regions: N. Virginia (us-east-1), Ohio (us-east-2), N. California (us-west-1), Oregon (us-west-2), Ireland (eu-west-1), Frankfurt (eu-central-1), Tokyo (ap-northeast-1), and Sydney (ap-southeast-2)._
