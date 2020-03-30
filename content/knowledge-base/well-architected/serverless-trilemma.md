---
date: 2020-03-23T00:00:00+03:00
title: "Serverless Trilemma"
description: "Learn the three basic concepts to build scalable and maintainable applications on serverless backends"
learning: ["AWell Architected"]
learning_weight: 100
---

<div class="youtube-embed-container">
    <iframe src="https://www.youtube.com/embed/Q4E9qUGdOd0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>



### Video Script

Did you know that using the AWS SDK between Lambda invocations can be a bad idea? Or that your architectural design might be doubling your costs on AWS Lambda?

This is the Serverless Trilemma. My name is Renato and I welcome you to our Serverless Well Architected series.

Before we dive into it, go to [dashbird.io/subscribe](https://dashbird.io/subscribe) and make sure you will not miss the next videos.

The serverless trilemma framework was developed a couple of years ago by a team of researchers in IBM. It helps us to evaluate architectures and make decisions considering the trade-offs involved.

The framework constraints are:

* Black-box
* *Double-billing
* Substitution

The **Black Box** principle indicates that Each function should work independently from the rest of the system and no implementation details should be leaked.

Consider two functions running on AWS Lambda: A and B. Function A uses the AWS SDK to invoke Function B.

But what happens if we need to move Function B code to another infrastructure? The AWS SDK invocation process will not work anymore This type of architecture makes it difficult to introduce changes and increases the likelihood of unintended consequences.

Function B is leaking its implementation details, thus not working as a Black Box. The leakage is having Function A aware that Function B is deployed in AWS Lambda.

To satisfy the Black Box principle, we could create an HTTP API. By routing requests through the API, we can decouple the functions. Later we can just update the API routing to the new infrastructure. This can be extremely valuable as the system and development team grows.

The Double Billing principle is relatively simple: two functions should not run at the same time while one is waiting in waiting in idle state for the other to respond

In Serverless, we pay for the function execution time:

* **Function A** starts processing and being charged
* It then invokes **Function B** and wait for a response
* While **Function B** was processing, **Function A** continued to be charged, despite being idle
* Only after **Function B** finishes processing is that **Function A** can resume its work
* **Function B** processing time is effectively being charged twice

Ideally, we should avoid such situations.

Substitution is about having a composition of functions behaving just like any normal function. What is a composition? Consider a user requests an invoice from a billing system. It may rely on a second function to apply any discounts available. And yet another function is responsible for calculating Sales Tax. All functions are composed to work as a group, hence the name "composition".

The substitution principle indicates that all three functions together should behave like a function From invocation methods to timeout to dead-letter-queue, everything behaves as if they were a single function.

The requester doesn't actually know this is a composition of functions. Any developer can rely on this composition without worrying about how it behaves, they just apply everything they already know. This property improves productivity and quality.

Most of the time, it is not possible to have all properties together. Applying the Black box principle is usually easy. When it comes to the other two, there is usually trade-off. When we prioritize one, such as Substitution, it becomes difficult to apply Double-billing.

This framework helps to make architectural decisions and identify what needs to be prioritized.

The Black Box improves:
* Maintainability
* Scalability
* Resilience by decoupling components

Double billing enables:
* Cost-eficiency
* Reduces
* Concurrency level

Substitution enables:
* Code reusability
* Improves quality

What should be prioritized will really depend on each case. We'll dive in more details about this decision-making process in the next videos on this series, so [stay tuned](https://dashbird.io/subscribe)!
