---
date: 2019-11-13T17:57:00-03:00
title: "Real-Time Debugging"
description: "Learn how to debug Lambda functions in real time"
learning: ["BAWS Lambda"]
learning_weight: 1100
---

# Error Types

While it is important to solve all of the errors or issues, sometimes it makes sense to first detect the error type that was encountered because drilling down into every failed transaction or 4XX error message could result in unmanageable amounts of data.

Types of errors developers encounter:

- **Implicit/Fatal:** *The process execution stops and you get a core dump (or you perform log analysis).*
- **Explicit/Fatal:** *Process stops and gives you an error code.*
- **Implicit/Non-Fatal:** *Process continues to run, without actually doing what it is supposed to do. Or does things inefficiently.*
- **Explicit/Non-Fatal:** *Process gives a warning message, and continues running after that.*

The errors that belong to the explicit category are easier to debug, regardless of whether or not they are fatal. The error message itself gives pretty clear indication of the exact cause of the problem which can then be dealt with, instantaneously.

The implicit fatal errors are a bit harder to debug. Something’s wrong when the process stops unexpectedly. But it is possible to get to the root cause of the problem by inspecting the snapshot of memory at the time of the crash. It is popularly known as the core-dump and is common while debugging low-level languages like C. Recently, similar features for Node.js and Go have been introduced as well.

The most inconvenient bugs are the implicit non-fatal ones. This might mean that the function either runs successfully performing the wrong action, or it is just inefficient in terms of resources management and it is unknown which one.

This could occur if the developer didn’t understand the end-goal of a functionality or if the wrong library or data structure was used for the purpose. These bugs fly under the radar for very long periods of time. They often hurt cloud bills and leaves  customers unhappy because the apps are too slow. These bugs are often not reproducible outside the production environment and they need to be dealt with real time. Most security vulnerabilities also fall under this category.

# Solving Real-Time Errors

*/
When a function invocation fails for some reason, Lambda may retry multiple times until the execution is successful. A retry is simply invoking the same function again with the same event payload.

This retry behavior makes it easier for developers to account for transient errors and network issues, for example. When the error persists for too many retry requests, Lambda will give up retrying and may send the failed invocation to a Dead Letter Queue[^1] (if enabled).

# What developers must account for

Consider a function that processes checkout sales in an e-commerce website. Depending on how the function code is implemented, if something goes wrong and the request gets retried, it's possible that the customer credit card will be charged more than once.

This issue might happen to hundreds or perhaps thousands of customers before getting fixed. It can easily become a nightmare for the customer support, financial department and, obviously to the development team behind the badly architected application.

Every code implemented in Lambda must follow a principle called Idempotence. Wikipedia defines it as a "_property of certain operations in mathematics and computer science whereby they can be applied multiple times without changing the result beyond the initial application_".[^2].

In other words: when something goes wrong in an e-commerce website, the application makes sure a credit card will never be charged more than once for the same order.

# Implementing Idempotence

## Internal Services

A good practice to combine with idempotency is the separation of concerns[^3]. Apart from being a good practice, it will help in the idempotence implementation. One of the reasons is that idempotency needs to be analyzed from the perspective of the operation. Having each operation properly isolated simplifies the process.

Read operations usually do not produce any side effects and are idempotent by nature. Checking if an item is available in stock, for example. This operation can be repeated multiple times without violating idempotence. Implement this type of operation as a dedicated Lambda function and eliminate them from the idempotence analysis.

Insert and delete aren't idempotent operations by nature, but they can be with a unique identifier (UID) for the resource. In an e-commerce, the order could have a UID. The storing operation can be performed multiple times without creating multiple different order placements. All Lambda retries will have the same order UID.

The order UID could be, for example, a hash of the customer email or username, the purchase timestamp, and a list of items purchased. These variables would be sent as a parameter to the API when the site receives the order request. The UID can be easily re-generated by retry invocations based on the same parameters.

## External APIs

Applications that rely on write-enabled third-party APIs can be tricky to ensure idempotency.

Some services will provide idempotency features by default. This will be the case of a credit card processing platform. Stripe[^4], for example, provides an idempotency key[^5] that enables safe retries.


In other cases, it might be necessary to run all operations internally first, validate the success and then interact with the external API. This wouldn't be the ideal implementation but could be as good as one can get in some circumstances.

# Tracking Retry Invocations

AWS Lambda and CloudWatch Logs will not highlight retry requests, nor link them to the original invocation request by default. Some professional serverless monitoring services - such as [Dashbird](https://dashbird.io/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda) - will link all invocations and retries automatically, allowing easy navigation across the stack of requests.


---

# Footnotes

[^1]:
     [AWS Lambda Supports Dead Letter Queues](https://aws.amazon.com/about-aws/whats-new/2016/12/aws-lambda-supports-dead-letter-queues/)

[^2]:
     [Wikipedia: Idempotence](https://en.wikipedia.org/wiki/Idempotence)

[^3]:
     [Wikipedia: Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)

[^4]:
     [Stripe](https://www.stripe.com)

[^5]:
     [Stripe Idempotence Key](https://stripe.com/docs/api/idempotent_requests)

/*
