---
title: When Dedicated DevOps is Not Available
description: How small development teams can compete with big players, even when a dedicated DevOps specialist is not available
date: 2020-03-24T00:00:00.000Z
frontImage: "2020-03-24/when-dedicated-devops-is-not-available.jpg"
thumbnail: "images/blog/2020-03-24/when-dedicated-devops-is-not-available.jpg"
authorlink: 'https://medium.com/@byrro'
author: Renato Byrro
author_image: '/images/team/renato.jpg'
blog: ["Serverless", "DevOps", "Monitoring"]
---

With the rise of cloud computing and modern distributed systems, we also witnessed the rise of a new practice area: DevOps.

Despite being fundamental for smooth cloud operations, a dedicated DevOps practitioner is a luxury most teams can't afford. Salaries average $130K in San Francisco, for example.

> When a dedicated DevOps practitioner is not available in our team, what should we do?

The answer could unfold a multitude of aspects. Below are two main areas we think every development team should give a good deal of thought:


# Keep it simple

The KISS (keep it simple) principle, well-known among developers, also applies to infrastructure decisions.

End-users don't really care about Docker, Kubernetes, servers, etc. As long as it meets the purpose. Not having a dedicated DevOps means you need an infrastructure as simple as it can get. Not the hottest tech necessarily.

Simplification releases time to create value for users. That's how you'll beat the competition.

[Serverless](https://dashbird.io/knowledge-base/basic-concepts/what-is-serverless/) is a relatively new cloud paradigm where infrastructure set up and management are shifted to the cloud provider's hands. By using [Lambda functions](https://dashbird.io/knowledge-base/aws-lambda/introduction-to-aws-lambda/), for example, we are outsourcing most operational hassle to the AWS DevOps team. [For pennies of a dollar](https://dashbird.io/knowledge-base/aws-lambda/aws-lambda-pricing/). Do you think you have the budget to beat AWS in their own game? Think again...

That was precisely the case of a [Dashbird](https://dashbird.io) customer: Blow Limited, a startup based in London. With a small team, they are growing fast in the beauty market. As you probably guessed, they are leveraging the power of serverless. [Check out their case study here](https://dashbird.io/blow-ltd-case-study/).


# Monitor like a Pro

Serverless can abstract away most infrastructure management, but the application is still on our hands.

Our code may fail, networking could disrupt connection with a third-party API, databases can be a bottleneck. In other words: many things can still go wrong.

A proper monitoring tool is necessary to detect and alert of anything requiring attention or fixing, which reduces the _average time to discovery_ of issues. This tool should also enable an efficient debugging process in order to reduce the _average time to resolve_ issues.

[Dashbird](https://dashbird.io), for example, is the pioneer in serverless monitoring and has been monitoring hundreds of thousands of Lambda functions in the past years. Although AWS will provide CloudWatch as a standard monitoring tool, it still [misses several important features](https://dashbird.io/blog/dashbird-vs-aws-cloudwatch/). Think of Dashbird as your very own DevOps guy, working 24/7 and letting you know anything going wring in your application within seconds.

If you haven't yet, you can [start your free 14-day trial with Dashbird](https://dashbird.io/register) today and test out the premium features yourself. No credit card required.
