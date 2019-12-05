---
title: Solve The Cold Start Issue with Lambda Provisioned Concurrency
description: With Provisioned Concurrency, AWS will provide sub double-digit millisecond performance for function startup for a level of concurrency you set.
date: 2019-04-19T00:00:00.000Z
frontImage: "2019-12-04/lambda-provisioned-concurrency.jpg"
thumbnail: "images/blog/2019-12-04/lambda-provisioned-concurrency.jpg"
author: Renato Byrro
blog: ["Lambda", "Cold Start", "Concurrency", "Serverless", "FaaS"]
---

[Cold Starts](https://dashbird.io/blog/cold-starts-impact/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=lambda-provisioned-concurrency) have been a massive issue with FaaS. In summary, it makes functions slower to startup in some cases. That's in the opposite way of every effort to improve web applications performance.

Many [efforts](https://dashbird.io/blog/can-we-solve-serverless-cold-starts/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=lambda-provisioned-concurrency) have been made in the recent years to [solve](https://github.com/dashbird/xlambda) AWS Lambda cold starts or [educate on handling](https://dashbird.io/blog/reducing-cold-start-impact/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=lambda-provisioned-concurrency) them. Many have mitigated the issue, but none really solved it.

AWS has just made a great progress on the area with the Provisioned Capacity feature announcement. As the function scales up, instead of waiting new requests to come in before provisioning resources to serve them, AWS will proactively provision new instances of the function in advance.

This behavior guarantees the performance of **every request** will stay within **double digit milliseconds**, up to the Provisioned Concurrency threshold set to the function. There are some caveats that developers should be aware though.

Learn everything about this feature and follow a step-by-step guide in our [Knowledge Base](https://dashbird.io/knowledge-base/aws-lambda/provisioned-concurrency/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=lambda-provisioned-concurrency).

Lambda Provisioned Concurrency is [generally available in several regions](https://aws.amazon.com/pt/about-aws/whats-new/2019/12/aws-lambda-announces-provisioned-concurrency/) and already integrated with AWS SAM, CodeDeploy and other serverless frameworks.
