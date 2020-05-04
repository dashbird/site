---
title: Can AWS API Gateway Act as a Load Balancer?
description: API Gateway can replace what a Load Balancer would usually provide, with a simpler interface and many more serverless features on top of it. The downside is that it doesn’t come cheap.
date: 2020-04-16T00:00:00.000Z
frontImage: "2020-05-04/api-gateway-load-balancer-header.png"
thumbnail: "images/blog/2020-05-04/api-gateway-load-balancer-header.png"
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["Serverless", "API Gateway", "Load Balancer", "Scalability"]
---

> _TL;DR: yes, API Gateway can replace what a Load Balancer would usually provide, with a simpler interface and many more features on top of it. The downside is that it doesn’t come cheap._

Load balancers have been one of the most common ways to expose a backend API to the public or even to an internal/private audience. API Gateways seem to provide the same functionality: map and connect HTTP requests to a backend service. So, are they the same or are there any differences? Can API Gateway actually provide the balancing of load? Which one is the best for [Serverless architectures](https://dashbird.io/knowledge-base/basic-concepts/what-is-serverless/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=api-gateway-vs-alb)?

> For the purposes of this article, we will look into AWS offerings for [API Gateway](https://aws.amazon.com/api-gateway/) (API GW) and [Application Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html) (ALB).


## What is a Load Balancer

An ALB is a central interface that enables better [scalability](https://dashbird.io/knowledge-base/basic-concepts/scalability/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=api-gateway-vs-alb) to connect clients and backend services through HTTP requests. Each Load Balancer might offer multiple HTTP endpoints pointing to one or more infrastructure resources.

The client requests an endpoint `/api/service/xyz` and the load balancer is responsible for distributing that request to a healthy backend resource (e.g. an EC2 server or a [Lambda function](https://dashbird.io/knowledge-base/aws-lambda/introduction-to-aws-lambda/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=api-gateway-vs-alb)). It communicates with the backend service, waits for the results, and packages an HTTP response to the client.


## What are Load Balancers used for?

As the name suggests, one of the main purposes of using an ALB is to smooth out and balance demand across a set of resources.

Traditionally, load balancers have been used to distribute requests in a horizontally scaled infrastructure cluster, with systems replicated in multiple servers, where a single server can't have sufficient power to handle all the demand.

Load Balancers also serve the purpose of decoupling clients and services, which is a good practice from a cloud architecture perspective.


## How does API Gateway compare with a Load Balancer?

API Gateway can manage and balance out network traffic just as a Load Balancer, just in a different way. Instead of distributing requests evenly to a set of backend resources (e.g. a cluster of servers), an API Gateway can be configured to direct requests to specific resources based on the endpoints being requested.

It plays an important role in [microservices architectures](https://dashbird.io/knowledge-base/well-architected/monolith-vs-microservices/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=api-gateway-vs-alb), for example. Multiple services can be connected to the Gateway and mapped to particular HTTP endpoint representations. The Gateway is responsible for routing each request, on-demand, to the appropriate backend service.


## How API Gateway scales according to load

When integrated with AWS Lambda, the API Gateway handles the network scaling in a seamless way. By default, API Gateway can handle up to [10,000 requests per second](https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html#apigateway-account-level-limits-table). Lambda will scale to match the demand of invocations coming from the API clients.

In fact, developers should not worry about configuring scalability parameters, since there are none for both API Gateway and Lambda. They both [scale according to their own internal rules](https://dashbird.io/knowledge-base/aws-lambda/scalability-and-concurrency/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=api-gateway-vs-alb). Depending on the use case, when large spikes in demand are expected, it may be necessary to request an increase in the service quotas to make sure AWS will not throttle client requests.


## Additional features provided by API Gateway

The request routing based on endpoint rules can also be supported by ALB, especially when paired with Lambda functions.

Nevertheless, API Gateway offers many additional features missing in ALB. For example, it handles authentication and authorization, API token issuance and management, and can even generate SDKs based on the API structure. API Gateway integrates with the IAM (Identity Access Management) service, for example, simplifying access control of the underlying resources.

Although we usually want to avoid throttling of client requests, in many cases it is important to have throttling rules in place. This can help in preventing abuse, or restricting access depending on billing plans, for example. API Gateway supports throttling implementation out-of-the-box, which can save time and ensure compliance with business requirements.


## Which one to choose

If you don't need the features provided by API Gateway, you may consider using an ALB instead, since it can be a lot cheaper in many cases - although it is difficult to compare because the [API Gateway pricing](https://aws.amazon.com/api-gateway/pricing/) depends on the number of requests, while ALB costs depend on several factors to determine its [pricing](https://aws.amazon.com/elasticloadbalancing/pricing/), such as hours, new and live connections. Usually, APIs with light traffic are more cost-effective on API Gateway, while the high-traffic ones can find cost savings by adopting an ALB instead.

Technically speaking, the main limitation of API Gateway is the [timeout of 29 seconds](https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html). If a request takes more time to be processed by the backend resource (e.g. a Lambda function), the API will respond early to the client with an error. Although there is a limit in the number of requests per second, as mentioned above, it can be increased according to the demand. A load balancer, though, can scale to hundreds of thousands, or even millions of requests per second, without any issues.

For that reason, an ALB is more suitable for low-cost/undifferentiated applications, long-running processes, and/or ultra-high-throughput applications. API Gateway is suitable for small teams that want to reduce time-to-market, as well as sophisticated use cases that require complex security measures and access control logic.


## Conclusion

Both API Gateway and Application Load Balancer can be very useful. The former is simpler and cheaper, which makes a good option for internal APIs to connect microservices architectures based on AWS Lambda, for example. API Gateway is more suitable especially for APIs that require fine-grained access control and other features not available in ALB.

In case you would like to learn more about cloud architecture and serverless, you might want to check this [Cloud Knowledge Base](https://dashbird.io/knowledge-base?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=api-gateway-vs-alb).
