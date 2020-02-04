---
title: What Vending-Machines Have to Do With Your Microservices Architecture
description: Orchestrating and composing multiple services in a distributed architecture is not easy. It turns out that vending-machines have already solved this issue.
date: 2020-02-03T00:00:00.000Z
frontImage: 2020-02-03/vending-machine.jpg
thumbnail: /images/blog/2020-02-03/vending-machine.jpg
author: Renato Byrro
blog: ["Microservices", "Architectural Patterns", "Step Functions"]
---

Orchestrating and composing multiple services in a distributed architecture is not easy.

# Desired Serverless Composition Properties

Before we move along with the great solution offered by vending-machines to our distributed architectures, we need to understand what solutions and values we're looking for.

In a serverless environment, there are at least three desired properties of any distributed services implementation.

> Below is a short intro. We're covered these in details in the [Serverless Composition Strategies](https://dashbird.io/knowledge-base/architectural-patterns/serverless-functions-composition-strategies/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=step-functions) article, in case you'd like to dive deeper.


## Isolation

![Microservices Isolated Component Icon](/images/blog/2020-02-03/microservices-isolated-component.png)

Each component must be isolated from each other, working as a blackbox. Services should not need to be aware of eachothers' implementation details to interact with. The deployment process is ideally independent for each individual component.


## Substitution

![Substitution Icon](/images/blog/2020-02-03/microservices-substitution-icon.png)

It must be relatively easy to replace (or extend) an existing component with minimal to no risk of causing a disruption to other services.


## Zero-waste

![Zero-waste Icon](/images/blog/2020-02-03/zero-waste-icon.jpg)

Pay-per-use model is one of the main benefits of serverless. As opposed to renting time-allocation, such as in virtual server instance. The composition of services should not increase costs by creating idle time and double billing with IO-bound waiting time, for example.


# Challenges

Usually meeting all three requirements is not a trivial task. Sometimes an implementation meets two of them, but breaks a third. And it really depends on the context and use case.

Although there's no one-size-fits-all when it comes to distributed cloud architecture, there are some software patterns that can be applied to a variety of use cases. By following these conceptual implementation designs, it is usually possible to meet the desired properties and also achieve a robust and scalable architecture.


# One Possible Solution

This is where Vending-Machines come in.

These little soda & snack automated distributors usually run on top of a mature and robust software design pattern called Finite-State Machine (FSM).

![Vending-Machine Icon](/images/blog/2020-02-03/vending-machine-icon.png)

In essence, a FSM takes care of controlling a workflow process composed of multiple steps, in which it the system may be in a finite number of states and there's a needs to handle transitions between these states. _[Read more about it here](https://dashbird.io/knowledge-base/architectural-patterns/finite-state-machine/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=step-functions) in case you're not familiar_.


# Why Finite-State Machines?

The orchestration of distributed microservices is about coordinating multiple components in a coherent and organized way to achieve a higher-level task.

This very often involves some sort of workflow with multiple steps, transitions and different states along the way. Sounds like a FSM!


# By example, we learn

![E-commerce Checkout Icon](/images/blog/2020-02-03/ecommerce-checkout.png)

Take an e-commerce checkout process as an illustrative example. After the customer submits an order, the system kicks out a process with several steps:

1. Verifies stock availability;
1. Reserve products in stock;
1. Process the payment;
1. Issue invoice;
1. Send confirmation message to the customer e-mail;
1. Decrement inventory availability for ordered products;
1. Notify the logistics and fulfilling department;

When transitioning from one step to the other, some checks might be necessary. For example: did the customer ask any products to be delivered as a gift? If yes, a separate process needs to be triggered within the fulfillment center. If the payment fails, the rest of the process should be suspended and someone must be notified, either the customer directly, a support agent or perhaps both.

Coding and handling all this logic manually can be difficult and developers risk ending up with a tangled spaguetti code with multiple services being coupled with each other.

Meeting the three desired properties is not trivial, as we said before. If the payment fails, should the inventory reservation be released for others to buy the products? In this case, should the inventory service stay running in idle state waiting for payment status to only then react accordingly?

We risk having two services (payment and inventory management) contributing to double-billing by being tied to an IO-bound process with a third-party credit card processing provider, for example. This would be a subpar implementation from a Serverless good practices standpoint.


# Solution in practice

The Finite-State Machine will allow us to handle not only the task execution, but also the logic behind state transitions and rules to manage exceptional cases (such as when payment fails).

There would be no need to keep services in a double-billing state, because the FSM knows what to do when the payment fails and will ensure the inventory management component is triggered appropriately.


# Hands-on Finite-State Machines

There are basically three ways of implementing a FSM in your projects:

1. Implementing on top of open-source packages;
1. Leveraging managed cloud services;
1. Creating your own from scratch (not recommended);


## Open-source

There are multiple open source projects in many different programming languages available. Below are some projects, but this is not a recommendation, you should do your own research before deciding to use:

* **Python**: [Transitions](https://github.com/pytransitions/transitions)
* **Javascript**: [Xstate](https://www.npmjs.com/package/xstate)
* **Java**: [Easy FSM](https://sourceforge.net/projects/java-easyfsm/)


## Managed Cloud Services

The leading cloud providers offer a managed service for implementing custom FSM logic. They are usually very flexible and easy to get started with. Also often employ a pay-per-use model, being cost-effective for small to large applications.


### AWS

![AWS Step Functions Icon](/images/blog/2020-02-03/step-functions-icon.png)

Amazon Web Services offer [Step Functions](https://aws.amazon.com/step-functions/), which allows developers to "_build distributed applications using visual workflows_". It integrates very well with a variety of other AWS services, making it ideal to coordinate services in the leading cloud provider.


### Azure

![Azure Logic Apps Icon](/images/blog/2020-02-03/azure-logic-apps-icon.png)

Microsoft offers [Logic Apps](https://azure.microsoft.com/en-us/services/logic-apps/) to "_quickly build powerful integration solutions_", as well as the [Power Automate](https://flow.microsoft.com/en-us/) service.


# Wrapping up

We learnt that orchestrating distributed services in a serverless architecture is not a trivial task, but there are software design patterns to help us with that.

The Finite-State Machine is a robust and mature pattern that can be used in a variety of cases.

In case you'd like to learn more, read more about serverless architectural patterns in our [Cloud Knowledge Base](https://dashbird.io/knowledge-base/architectural-patterns/serverless-functions-composition-strategies/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=step-functions) in which we cover other patterns that might be more suitable to different scenarios.

