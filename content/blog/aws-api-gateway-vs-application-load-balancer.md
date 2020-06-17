---
title: AWS API Gateway vs. Application Load Balancer (ALB)
description: "In this full comparison: pros and cons of each service, scalability capabilities, costs, feature set, and more"
date: 2020-05-28T00:00:00.000Z
frontImage: "2020-05-vacation-buffer/aws-api-gateway-vs-application-load-balancer.png"
thumbnail: "images/blog/2020-05-vacation-buffer/aws-api-gateway-vs-application-load-balancer.png"
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["Serverless", "API Gateway", "Application Load Balancer", "ALB", "Load Balancer"]
---

We recently wrote about whether [API Gateway can act as a Load Balancer](https://dashbird.io/blog/can-api-gateway-act-load-balancer/). The answer is yes and, in many cases, they are substitutes for each other. But how should we choose which one to use?

In this article, we will dive into more details on how these two types of HTTP networking services compare, using the AWS services as a base level: API Gateway and Application Load Balancer (ALB).


## Scalability

Both are highly-scalable services to a point that scalability should not be a concern for most use cases. For high-throughput applications, though, there are differences that need to be considered.

[API Gateway has a limit](https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html#api-gateway-limits) of 10,000 RPS (requests per second), which might not be enough for some cases. When we look at Regional and Edge APIs, the limit is a lot more concerning: 600 and 120, respectively. More troublesome is that the last two can’t be increased, while the larger quota can on a per-request basis.

The 10,000 limit also benefits from burst capacity - up to 5,000 additional RPS - in peak demand moments. However, AWS does not take any hard commitments, and developers can’t control or predict how the burst capacity will be allocated. In practice, it’s risky to rely on it for purposes that involve user-facing endpoints.

ALB, on the other hand, is virtually unlimited. In fact, AWS specifies no limits in terms of connections per second or concurrently in the [service quotas page](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html). It can easily scale to handle +100,000’s RPS in a second and, in principle, could go beyond millions of RPS as well at these levels, it’s probably a good idea to pre-warm the Load Balancer with the help from the AWS support team, as well as to conduct stress tests and make sure the architecture is well optimized for the load.


## Reliability and Availability

Both services are managed by AWS. API Gateway is highly reliable and available out of the box, developers do not have to worry about anything here. ALB requires developers to specify more than one Availability Zone per region to reach a higher level of availability.


## Integrations

For Serverless applications, API Gateway was the only way to go until recently, when AWS announced the integration of ALB with Lambda functions.

Apart from Lambda functions, ALB can route requests to EC2 instances, ECS containers, and IP addresses. It also integrates with AWS Cognito for user authentication and authorization purposes.

API Gateway, on the other hand, is much better integrated with AWS’s managed services. Apart from Lambda functions, it can also integrate with virtually any other service that is available through HTTP requests, such as DynamoDB tables, SQS queues, S3 buckets, etc. Even external HTTP endpoints hosted outside of AWS can be integrated through HTTP.

It’s also possible to customize requests before forwarding to downstream resources, and also the responses from these resources before sending back to the clients. This way, API Gateway can even replace many use cases when a Lambda function would be needed as simply an intermediary, cutting costs and improving performance.


## Request Routing Capabilities

API Gateway supports path-based routing. In other words, developers can configure which resources will receive incoming API requests based on the URL requested by the client.

ALB, on the other hand, offers a rule-based routing mechanism. Apart from supporting a URL path-based approach similarly to API Gateway, it also provides:



*   Requester Hostname
*   Requester IP address ([CIDR blocks](https://tools.ietf.org/html/rfc4632))
*   HTTP Headers
*   HTTP Request method (POST, GET, etc)
*   Key/value pairs incoming as query strings

It is possible to combine multiple conditions based on the options listed above, but there are some limitations. Wildcards are also supported, making the rule system flexible enough for most use cases.


## Cost

Based on a fully Serverless pricing model, API Gateway charges only for requests received. The price depends on what type of API service is used:



*   **Rest APIs**: from $1.51 to $3.50 per million requests
*   **HTTP APIs**: from $0.90 to $1.00 per million requests
*   **WebSockets**: from $0.80 to $1.00 per million requests, plus $0.25 per million connection minutes

ALB charges based on two dimensions: time and resource usage. The first is straightforward: $0.0225 per hour. The second is a bit more complex: $0.008 per LCU-hour. LCU measures traffic processed by ALB. One LCU can support:



*   25 new connections per second
*   3,000 active connections per minute
*   1 GB of traffic per hour for EC2 instances, or 0.4 GB per hour for Lambda functions
*   1,000 routing rule evaluations per second

When any of these dimensions are exceeded, the ALB will charge an additional LCU for the hour.


## Other features


### WebSockets

Supported by both API Gateway and ALB.


### Tracing

ALB injects an “X-Amzn-Trace-Id” header into all requests routed to downstream resources. Tracing can be enabled for API Gateway to work [integrated with X-ray](https://docs.aws.amazon.com/xray/latest/devguide/xray-services-apigateway.html).


### Firewall

Both the [API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-aws-waf.html) and [ALB](https://aws.amazon.com/blogs/aws/aws-web-application-firewall-waf-for-application-load-balancers/) can be protected by AWS firewall service WAF.


### Authentication

API Gateway offers its own token-based authentication system, as well as integration with Cognito. ALB also offers integration with Cognito and any other identity provider that is compliant with [OpenID Connect](https://openid.net/connect/faq/) standards.


### Logging

API Gateway stores access logs in CloudWatch (optional). For teams relying on AWS Lambda, that can be a convenience factor, since the Serverless functions will also store its logs in CloudWatch. ALB can only store access logs in an S3 bucket. This can be inconvenient for development teams since it’s necessary to download logs from S3 and index somewhere else for searching and debugging purposes.


### Monitoring

Both services have health tracking and metrics generated by CloudWatch.

Although many teams developing on AWS are used to rely on CloudWatch, it can be cumbersome for debugging and monitoring tasks. The error detection and alerting capabilities are limited as well, leaving developers in the dark.

Thousands of developers are using [Dashbird](https://dashbird.io/#register) to stay on top of their infrastructure and avoid the embarrassment of getting blindsided and alerted of issues in their API endpoints by their customers or company executives. [Join them right now](https://dashbird.io/#register), it’s free and doesn’t even require a credit card.
