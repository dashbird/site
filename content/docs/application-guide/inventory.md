---
date: 2020-04-11
title: Inventory
linktitle: Inventory
description: Inventory
kbSeries: ["CApplication Guide"]
kbSeries_weight: 150
---

Dashbird monitors various components of your cloud stack:

* AWS Lambda Functions
* SQS Queues
* DynamoDB Tables
* API Gateways
* ECS Clusters
* ECS Services

> Our cloud resource coverage is being extended constantly. [Subscribe](https://dashbird.io/subscribe/) to receive updates.

![Inventory Overview](/images/docs/application-guide/inventory/inventory-overview.png "Inventory Overview")


On the left side of the screen, you will see a list of your components, organized by type of resource. The screenshot above shows a list of SQS queues.

Click on a resource to open its metrics:

![Inventory SQS Metrics](/images/docs/application-guide/inventory/inventory-sqs-metrics.png "Inventory SQS Metrics")


In the SQS example above, the chart shows how the queue evolved recently in terms of messages in/out and total pending in the queue. Customize the analysis time period in the top-right corner of the page.

Other data points are offered, such as the average message payload size, average delay in reading messages, the TTL (Time to Live) configured for messages, etc.

Each resource will show information and metrics associated with its particularities. DynamoDB Tables, for example, will show Read and Write Capacity Units (RCU and WCU), Throttling occurrences, Global Secondary Indexes, Partition Keys, etc.

![Inventory DynamoDB Metrics](/images/docs/application-guide/inventory/inventory-dynamodb-metrics.png "Inventory DynamoDB Metrics")


The ECS clusters and services views will provide resource consumption (CPU and Memory), as well as the number of services, tasks, servers in the cluster, etc.

![Inventory ECS Metrics](/images/docs/application-guide/inventory/inventory-ecs-metrics.png "Inventory ECS Metrics")


API Gateway view shows the history of requests and errors, the average latency and endpoints configured in the API.

![Inventory API Gateway Metrics](/images/docs/application-guide/inventory/inventory-apigateway-metrics.png "Inventory API Gateway Metrics")
