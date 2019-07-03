---
title: Using Lambda Layers for Better Serverless Architecture
description: Learn how to use Lambda Layers to better organize your code and dependencies
date: 2019-07-01T12:00:00.000Z
frontImage: "2019-07-01/lambda-layers.jpg"
thumbnail: "images/blog/2019-07-01/lambda-layers.jpg"
authorlink: 'https://twitter.com/@byrrorenato'
author: Renato
author_image: '/images/team/renato.jpg'
blog: ["Monitoring", "Serverless", "AWS Lambda"]
---

Lambda Layers were introduced by AWS in late 2018 as a way to simplify the developer's life when managing dependencies and shared resources across a multi-Lambda stack. It's a versatile feature that brings many benefits, which we will discuss in this article.

Using Lambda Layers does increase complexity to monitor and maintain your applications, but there's no need to fear. Dashbird can seamlessly monitor your functions, as well as its Layers, making it smooth and easy to manage your Serverless stack, regardless of how complex it is.

You can use Dashbird for free, [subscribe here](https://dashbird.io/#register) (no credit card required).

# Shared Microservices

One benefit of using AWS Lambda as a platform for microservices architectures is organizing code for clever reuse and separation of concerns in the service level.

Let’s say we have an application with multiple endpoints, many customer-facing APIs, others serving internal background workloads: data transformation, payment processing, analytical data crunching, etc. Each of these APIs could be served by a single-purpose Lambda:

- User login credentials authentication
- Transform an image file to generate thumbnails
- Process a credit card to charge a recurring bill
- Etc...

So far so good. We code each of these services, package as a single Lambda, deploy and then instrument how they’ll interact together. Simple and scalable.

Now let’s say we want to send an email, for security purposes, when the same user account faces five consecutive failed authentication attempts. We would also want to email our customers if their subscription renewal fails due to a credit card denial, for example.

This could be deployed as a new service in a dedicated Lambda, just like the others. But since this service would be shared by many others, maybe it would also make sense to deploy it as a layer that could be attached to multiple Lambdas. That’s really a matter of preference, or maybe you would like to save one Lambda invocation charge by AWS. In the scale of several million requests, this could make a difference in our overall bill.

![Honeycomb](/images/blog/2019-07-01/microservices.jpg)

# Keep Lambda Package Small

Another benefit of using Layers is to simplify development and keep the main Lambda package small. Say we have a data processing pipeline, with multiple Lambda functions relying on data science packages such as [Pandas](https://pandas.pydata.org/), [Numpy](http://www.numpy.org/), etc. These libraries can end up adding dozens of megabytes of data to our Lambda package. Instead of injecting them in every Lambda package, keep them out and deploy as individual layers. Attach the layers to the Lambdas that rely on them and voila: you have a small package size, while still keeping all the heavy dependencies.

Layers also support versioning, which is very handy. Let’s say you need to upgrade Numpy to the latest version, but for only one Lambda, not others. Push a new version of the layer containing the latest library code and update the Lambda pointing it to the latest Layer version. The other Lambdas will keep pulling the old Numpy version from the previous Layer, avoiding backward compatibility issues.

# Custom Runtimes

Lambda Layers also support the new custom runtime capability. You can run Layers with code in Julia or Erlang, for example, two languages not yet supported directly by AWS. You can find more information about custom runtimes in this [AWS doc](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-custom.html).
