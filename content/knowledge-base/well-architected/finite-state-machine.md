---
date: 2020-02-02T00:00:00+03:00
title: "Finite-State Machine"
description: "A software pattern to control workflows and state transitions on complex processes"
learning: ["AWell Architected"]
learning_weight: 1400
---

Think of Finite-State Machine (also called Step Machine) as being a workflow or process with multiple steps that can be in a finite number of states at any given time.

## Real-life examples

One popular example is a vending-machine:

1. It starts in an _idle_ state;
2. When a customer inserts payment, it validates the bill, coins or credit card, during which time the machine is in _validating payment_ state;
3. Once approved, it switches to _waiting order_ state and enables the customer to order a product.
4. Once ordered, it switches to _validating order_ state, in which the machine will check whether the product is available and the price is lower or equal to the money entered;
5. When the order is validated, the machine moves to _delivering_ state, in which the shelf will be activated to deliver the product;
6. Once delivered, it switches to _waiting collection_ from the customer;
7. After the customer collects the ordered product, the machine is back to _idle_ state again and is ready to serve another customer;

During each of these stages, the Step Machine may be programmed to react to different scenarios. For example: what happens if the customer orders a product the costs less than the amount of money entered? The machine should trigger a separate routine to return the change.

The FSM model is very robust and used in software applications throughout multiple industries and use cases.

Another practical example are traffic lights. Software controlling lights in a road intersection usually employ FSM techniques. It ensures that, when one way turns to _green_ state, every other crossing way must have turned to the _red_ state before.


## Applications to Cloud Computing

It turns out FSM is well suited to address multiple challenges in modern cloud computing. It can help in orchestrating components of distributed, microservices architectures, for example, or for controlling data processing workflows involving ETL (Extract, Transform, Load) or Machine Learning tasks, for example.

Also many business use cases can benefit from FSM implementations. An e-commerce site, for example, can use FSM to control customer checkouts. This usually involves multiple steps, similarly to vending machines: process payment, validate order and inventory, decrement inventory availability for ordered items, send confirmation to the customer, notify fulfillment center, etc.

As in the vending-machine example, many things can go wrong in business process, such as an e-commerce checkout. FSM can help ensure these exceptional cases are going to be handled appropriately, contributing to a healthy and fault-tolerant system.


## Managed, Serverless Finite-State Machine

Although developing a custom implementation of a Finite-State Machine would not be a huge task, achieving scalable and rubust deployments in the cloud can be chalenging for large amounts of data and tasks.

Thankfully, there are managed FSM services available by the main cloud providers, such as [AWS Step Functions](/knowledge-base/step-functions/what-is-aws-step-functions/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=architectural-patterns).

These services usually charge per request, so there's no fixed or startup cost involved. Even for small implementations, using a ready-to-start service such as [Step Functions](/knowledge-base/step-functions/what-is-aws-step-functions/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=architectural-patterns) can be cheaper than implementing an in-house solution when considering the cost of hours of development.


## Open Source

There are multiple open source projects in many different programming languages available. For teams that choose for a custom implementation, this can be helpful to avoid _reinventing the wheel_.

Below are some projects we identified. This is not a recommendation or endorsement. Open source projects are subject to drastic changes and disruption and each developer/team should conduct its own analysis before deciding to use any:

* **Python**: [Transitions](https://github.com/pytransitions/transitions)
* **Javascript**: [Xstate](https://www.npmjs.com/package/xstate)
* **Java**: [Easy FSM](https://sourceforge.net/projects/java-easyfsm/)
