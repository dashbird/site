---
date: 2017-06-05
title: Creating Projects for grouping Lambda Functions with Dashbird
linktitle: Project views
description: Projects
kbSeries: ["CApplication Guide"]
kbSeries_weight: 500
---


A *Project* in Dashbird is basically a group of Lambdas. You can create as many Projects, each containing as many Lambdas as you would like. The same Lambda can be assigned to multiple Projects as well.

Dashbird will provide a custom metrics dashboard, as well as a central repository of errors and alerts particular for each Project.

![Project Views](/images/docs/project-views.gif)

Projects can be very helpful to organize a large number of Lambdas, creating a way to group functions based on business or system logic.

Consider multiple Lambdas taking care of processing customer orders in an e-commerce system, for instance:

* Lambda 1: receives and validates the order
* Lambda 2: checks for inventory or delivery conflicts
* Lambda 3: payment processing
* Lambda 4: sends notifications by email to logistics team and the customer
* Lambda 5: takes care of order fulfillment

Since the system logic is decentralized (I mean decentralization at the application level, not infrastructure), it may be harder to debug issues. When something goes wrong with the order processing, system-wise, it would more sense to debug all five Lambdas as a unit, and that is precisely what a Project delivers in Dashbird.

When searching for errors by keyword, for example, it is possible to narrow down results by Project, making it easier to debug issues related to a specific. Developers can configure policies or error alerting specific to a Project. Issues can be tracked and resolved in the context of a Project.

In summary: with **Dashbird Projects**, developers can benefit from decentralization and a microservices approach at the software architecture-level, while retaining close supervision and visibility at a snapshot over the entire stack.