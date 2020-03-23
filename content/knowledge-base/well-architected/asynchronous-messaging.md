---
date: 2020-01-10T00:00:00+03:00
title: "Asynchronous Messaging"
description: "Achieving loosely-coupled architectures with the asynchronous messaging pattern"
learning: ["AWell Architected"]
learning_weight: 200
---

A common anti-pattern in serverless projects is the extensive tight coupling between services. Having [Lambda functions]() invoking eachother directly usually leads to a project that is difficult to deploy, maintain and extend.

This is a common outline of how serverless development roadmaps evolve:

* Multiple services are developed, each performing a particular role
* They are wired up using the Lambda Invoke API[^1]
* Perhaps there is a central function or process that orchestrates others for relatively complex job requirements
* An apparently cohesive system is ready to ship

Although this seems easy to implement, services will be tightly coupled. Developers might not feel the pain for small implementations. But as the overall system grows, it will become increasingly hard to maintain and evolve:

1. I/O time is wasted when one function depends on another to keep processing, which leads to poor resource utilization
1. Changes to one service are more likely to have negative and unintended consequences in other parts of the system
1. When one service fails, other services have higher potential of failing as well
1. Retrying failed requests becomes difficult and riskier
1. Harder to ensure idempotency[^2] across system components


# Alternative Architecture

The Asynchronous Messaging pattern is very useful to decouple serverless functions and make systems more maintainable. Before we get into more details about the architecture itself, let's analyze why coupling is an issue for serverless functions.

## Example

An e-commerce system is something most of us are quite familiar with. Consider when a customer submits a purchase. Several processes need to be performed:

* Temporarily set aside products in stock
* Authorize and confirm payment (charge the credit card, for example)
* If payment succeeds:
    * Decrease products purchased from stock
    * Submit purchase order to the distribution center
    * Send confirmation message to the customer
    * _Perhaps other activities goes on here, depending on the company_
* If payment fails:
    * Send failure message to the customer
    * Alert financial department to verify
    * Release products reserved in stock

> The following architectural ideas are only for conceptual illustration purposes. They omit aspects that would be required in a production environment and might not be the most suitable for the particular context used as an example.

## Tightly-coupled Architecture

Consider there is a Lambda function to perform each of the actions above.

In a highly coupled architecture, there could be a central function called `SubmitOrder` that would perform all these actions in a single run and imperatively.

![Coupled Architecture](/images/knowledge-base/architecture/ecommerce-diagram-coupled-architecture.png)

Let's analyze each disadvantage point mentioned above in light of this example:

### I/O time is wasted when one function depends on another to keep processing, which leads to poor resource utilization

Observe that each step of the process (in grey) blocks the execution of the main function **Submit Order** (in blue). Also, multiple I/O-bound processes are running in background (in yellow).

As a result, the main function will be waiting idle for considerable periods of time. This leads to poor resource usage and higher costs, since serverless functions are charged per execution time.

### When one service fails, other services have higher potential of failing as well

What happens in the above outline if the **Decrease Stock** function fails? Perhaps the database was under heavy load and couldn't process the decrement query.

Surely the request could be retried. But now there's one more thing that needs to be coordinated by the **Submit Order** function, which increases complexity. As a result, chances of experiencing even more errors only increase.

### Retrying failed requests becomes difficult and riskier

To reduce complexity, let's not handle retrying of individual components within the **Submit Order** function. If anything fails, the main function will be retried from start.

How should a failure within the **Decrease Stock** step be handled? Running the entire **Submit Order** request again will authorize payment twice.

Should the previous payment authorization be canceled? If we keep it, the main function must skip the payment step in the retry. But now there's one more logic to handle, which also adds complexity.

We can see that tight coupling of services is already making it difficult to manage our system and make it perform in a reliable way without much hurdles.

### Harder to ensure idempotency across system components

Idempotency is a "_property of certain operations in mathematics and computer science whereby they can be applied multiple times without changing the result beyond the initial application_".[^2].

In other words: the **Submit Order** function would be idempotent if it was possible to retry it in case of failure without worrying with double charges. We dedicated an entire page in our Knowledge Base to cover the [Lambda Retry behavior and Idempotency](/knowledge-base/aws-lambda/retries-and-idempotency/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=architecture-and-best-practices).

Every single serverless function should be idempotent. That is a trait of reliable and maintainable serverless systems.

What we need to know is: accomplishing idempotency for the **Submit Order** function would be a lot harder and complex in the tightly coupled architecture outlined above.


## Loose-coupled Architecture

Let's consider a different strategy and compare against the first one. When a customer submits a purchasing order, the **Submit Order** function only dispatches two messages:

* Temporarily set aside products in stock
* Request payment authorization

The main function is now streamlined to only interact with a message queue service:

![Decoupled Architecture](/images/knowledge-base/architecture/ecommerce-diagram-decoupled-architecture-1.png)

Each step in the process is now decoupled, having asynchronous messages as the means to make the system work cohesively.

Messages are further consumed by each step of the process independently. The "Set aside stock" for example, would pull pending messages from the queue and reserve products in the database.

![Decoupled Architecture](/images/knowledge-base/architecture/ecommerce-diagram-decoupled-architecture-2.png)

Having each step working independently improves resource utilization and reduces costs by cutting down idle I/O time. It is also easier now to handle retries in case anything fails. When a failure occurs within one step of the process, the other functions will not be impacted.

Another benefit is being able to replace of modify one service without having to touch others. Consider the system was only sending a confirmation e-mail to the customer. Now, sending an SMS message becomes a requirement. In the tightly coupled architecture, it would be harded to introduce any changes independently. With an asynchronous messaging architecture, we only need to add one message consumer.

Lastly, ensuring scalability and reliability of a decoupled architecture is much easier. Consider Service A publishes a message for Service B to get a task done. In case Service B relies on a database, for instance, that poses scalability difficulties, Service A can still scale up without a problem. Messages may start to pile up for some time, but Service B will eventually catch up.

Even if this situation is undesirable (a list of messages piling up and taking more time to process than usual), it is better than having Service B crashing due to a peak demand coming from tight coupling with Service A.

# Message handling options

Below is a brief introduction to the main options for handling asynchronous messages in a distributed serverless environment. We plan to cover each of them and their respective AWS services with a dedicated page in this Knowledge Base.

## Queue

We mentioned a "message queue" in the example for loosely-coupled architecture above. This is exactly what the name suggests: messages are received and piled up by the messaging system in a queue. A consumer can pull messages from the queue for processing. When processing is finished, the messaging system is notified to delete the message. If it fails, the message goes back to the queue.

Read our [detailed page about the Message Queue pattern](/knowledge-base/architectural-patterns/message-queue/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=architecture-and-best-practices).

## Pub/Sub

The main components of a Pub/Sub system are:

* **Publisher**: publishes a message to a given topic (e.g. "Send confirmation message about purchase order #123456 to customer XYZ" to the topic "customer notifications")
* **Topic**: receives messages and distributes to consumers
* **Subscribers**: enlist to receive messages published to a certain topic

In the "confirmation message" example, if we had only an e-mail sending mechanism and wanted to add SMS messaging as well, it would be a matter of deploying an SMS sender service and subscribing it to the "_customer notifications_" topic. The rest of the system remains unaware of this change. This makes the overall project a lot more manageable and extensible.

Read our [detailed page about the Pub/Sub pattern](/knowledge-base/architectural-patterns/pub-sub-messaging/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=architecture-and-best-practices).

## Event Bridge

An Event Bridge is somewhat similar to the above two, but with a difference: messages (called events) are matched to subscribers depending on a fine-grained pattern matching mechanism. Events that match a certain pattern would be forwarded to a particular subscriber responsible for processing it.

## Stream Processing

A Stream Processing system would be more suitable for continuous data ingestion. An example would be application or database logs, tracking a series of clicks in a user interface for analytical purposes, etc. It is not quite in the exact same category as the others in this list, but it can be helpful for batching.

Stream Processing services will usually allow to group multiple datapoints and invoke a service processor every 10 minutes, for example, or whenever the amount of data ingested reaches 10 megabytes. This batching mechanism can help improve performance and reduce costs in serverless architectures.


# Footnotes

[^1]:
    [AWS Lambda Invoke API documentation](https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html)

[^2]:
    [Idempotency and Retries](/knowledge-base/aws-lambda/retries-and-idempotency/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=architecture-and-best-practices)