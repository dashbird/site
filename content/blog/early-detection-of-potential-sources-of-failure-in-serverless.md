---
title: Early-detection of Potential Sources of Failure in Serverless
description: How to set up proper monitoring to ensure smooth operations and quality for applications running in production
date: 2020-04-14T00:00:00.000Z
frontImage: "2020-04-14/early-stage-detection.png"
thumbnail: "images/blog/2020-04-14/early-stage-detection.png"
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["Serverless", "Well-Architected", "Monitoring", "Failure"]
draft: true
---

We recently wrote about [why serverless applications fail and how to design resilient architectures](https://dashbird.io/blog/why-serverless-apps-fail-and-how-to-design-resilient-architectures/). Being able to detect early-stage failure indicators can be invaluable.

With proper monitoring, developers move from waiting for the system to crash and adopt a more proactive attitude in managing resource allocation and architecture design to avoid bottlenecks and performance degradation. This leads to end-user satisfaction, trust among executive team members, and a healthy stream of support requests for customer care agents.

The main challenge is that, even though Serverless abstracts away most traditional infrastructure management, there are still numerous architectural complexities at our hands.

The number and variety of cloud resources we use in serverless applications are growing. Each service has its own intricacies and limitations. Interactions between services increase complexity in rapid proportions. It is difficult to track everything and keep on top of all aspects of such architecture.

![SQS queue monitoring](images/blog/2020-04-14/early-detection-failure-queue-delay-insights.png "SQS queue monitoring")


Take Queues, for instance. They have to be verified constantly for latency causing high delays, an unusual accumulation of messages in the queue, etc. Compute services, such as AWS Lambda functions or ECS containers have to be monitored for a variety of possible faults, such as high resource (e.g. memory) consumption.

![ECS Monitoring](images/blog/2020-04-14/early-detection-failure-ecs-high-memory-insights.png "ECS Monitoring")


It is also important to have all monitoring metrics, performance and architectural insights in one place so that developers can be efficient to discover and act upon potential issues. Most monitoring platforms, though, still apply a server-based mindset, which doesn’t fit well the serverless paradigm.

Cloud resources cannot be monitored isolated, we must start thinking about our serverless backends as a whole, and almost as living organisms. Otherwise, issues arising from the interaction of services are difficult to track and detect early on.

In case you are interested in these topics and would like to dive deeper, we are hosting a webinar to cover. [Click here to reserve your spot for free](https://zoom.us/webinar/register/8015867838556/WN_GsUbkv7pQdqL9Og6f9IlVA).
