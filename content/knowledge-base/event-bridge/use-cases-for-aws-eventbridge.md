---
date: 2020-01-25T00:00:00+03:00
title: "Use Cases for EventBridge"
description: "Common scenarios and use cases that are suitable for EventBridge"
learning: ["EEvent Bridge"]
learning_weight: 300
---


## Decoupling microservices

As mentioned in the [Main Benefits and Characteristics](/knowledge-base/event-bridge/main-benefits-and-characteristics/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=event-bridge) page, EventBridge is commonly a very good service for implementing asynchronous messaging across a system in order to decouple independent services.

Instead of having one service calling another directly, EventBridge can be used to receive event messages and handle routing to the appropriate services. To learn more, check the page about [serverless functions composition strategies](/knowledge-base/architectural-patterns/serverless-functions-composition-strategies/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=event-bridge).


## Tracking and responding to status changes

Processes that may go through multiple status changes during its lifecycle in systems that need to respond to changes can benefit from EventBridge.

A logistics service may need to trigger different actions depending on what is the status of a package. When it leaves the distribution center and start heading the final destination, the system may need to send an alert through e-mail or SMS to the recipient, for example.

An e-commerce backend system may need to handle confirmation messages to the buyer once payment is confirmed, or package is shipped, or it might need to respond to status changes from the logistics department to keep the inventory, financials and customer service departments in sync.

Different departments within a company or actions might need to be triggered depending on the status of a customer support ticket, for instance.

In all these cases, EventBridge can be used as a central location to receive all status changes (events) and route to the services that need to be aware of those changes in order to appropriately respond to them.


## Connecting different services

Related to the above examples (Tracking and responding to status changes), companies that have to deal with multiple systems and keep them in sync can also benefit from EventBridge. All changes from one system can be pushed to the event bus and later processes by the adjacent systems that rely on the information.

The disadvantge here is that the synchronization process will be eventually consistent, as updates in one side won't reflect immediately on the other systems.


## Workflow automation

Since EventBridge connects to external third-party services, such as SugarCRM[^1], it's possible to create workflow automation processes connected to customer service and sales activities. The system may trigger the financial department to issue an invoice, for example, whenever a sale is closed.


## Flexibility

EventBridge is very flexible and its vast integration set makes it even easier to adapt the service to a wide variety of use cases. The examples above are meant to serve as an introduction and for illustration purposes, not to exhaust all possibilities, which wouldn't be feasible in this article.


# Footnotes

[^1]:
     [SugarCRM](https://www.sugarcrm.com/) is a popular open-source, cloud-based customer relationship manager.
