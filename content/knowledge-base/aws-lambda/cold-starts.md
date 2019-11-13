---
date: 2019-11-13T13:26:00-03:00
title: "Cold Starts"
description: "What are cold starts, why they happen and what to do about them"
learning: ["BAWS Lambda"]
learning_weight: 900
---

# Lambda Model

A Lambda function runs inside a microVM[^1]. When an invocation is received, Lambda will launch a new container and load the code package in memory to serve the request. The time taken by this process is called startup time.

The microVM is **not terminated immediately** after it finishes serving its request. Lambda usually keeps the microVM alive from a few minutes up to an hour.

Each Lambda function may have multiple active microVMs at any given point in time. If Lambda receives ten concurrent requests for the same function, it will need to provision ten microVMs to serve them in parallel. Those ten microVMs will remain active for some time after they finish serving the requests.

# What are Cold Starts

When a function is invoked, Lambda checks whether a microVM is already active. If there's an idle microVM available, it will be used to serve the new incoming request. In this particular case, there is no startup time, since the microVM was already up and had the code package in memory. This is called **warm start**.

The opposite - having to provision a new microVM from scratch to serve an incoming request - is called **cold start**.

# What impacts startup time

The total startup time depend on multiple factors. As a general rule, these are the most important ones:

* **Scripting languages**, particularly **Python** and **NodeJS**, are the fastest ones to startup
* Running the function **outside a VPC** will contribute to speed up the startup process
* Allocating **more memory** will reduce the time to start a microVM
* **Reducing** the code **package size** will speed up startup time

# Are Cold Starts really a problem?

Cold starts add up to the overall execution time. For time-sensitive workloads, this can be a problem.

The occurrence of a cold start will depend a lot on the variability of the application demand. For frequent and low variability traffic, cold starts will hardly be an issue. This is because the application will require the same number of microVMs most of the time. And since traffic is frequent (new requests every minute for example), Lambda will find warm microVMs available for most invocations.

Applications that present infrequent or highly variable traffic demand, the likelihood of cold starts increase considerably. Infrequent access means Lambda will terminate microVMs after too long idle periods. And high variability increases chances of multiple concurrent requests, which may require spinning up microVMs from scratch.

# Solutions to Cold Starts

A simple solution is invoking functions on a scheduled basis (e.g. every 10 minutes). This will make Lambda keep some microVMs alive all the time. Developers will commonly need to ensure warm starts for multiple concurrent requests. The scheduled process will need to handle multiple invocations in parallel in order to force Lambda into keeping multiple microVMs alive.

Beware that the warming scheduled invocations will be charged normally as any other Lambda request. Since there's no need to process anything actually, the function can terminate right after invoked, reducing the cost of the warm-up process.

Another approach is using traffic prediction modeling. By anticipating how many requests are likely to be received in the next 30 minutes, for instance, it's possible to adjust the scheduled invocations. This would also contribute to keep warming costs down.

There are open source projects to help with those two approaches:

1. [xlambda](https://github.com/dashbird/xlambda/): predicts AWS Lambda demand and keeps a fleet of containers warm to mitigate cold-start latency.
1. [Lambda Warmer](https://github.com/jeremydaly/lambda-warmer): a nodejs module to optimize AWS Lambda function cold starts.

---

# Footnotes

[^1]:
     A _microVM_ is a _micro virtual machine_. For more information, please check the [AWS announcement](https://aws.amazon.com/about-aws/whats-new/2018/11/firecracker-lightweight-virtualization-for-serverless-computing/) about [Firecracker](https://firecracker-microvm.github.io/), the underlying virtualization technology that manages microVMs for AWS Lambda.
