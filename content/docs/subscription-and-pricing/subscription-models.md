---
date: 2019-06-06
title: Subscription Details
linktitle: Subscription Details
description: Subscription & Pricing
kbSeries: ["FSubscription & Pricing"]
kbSeries_weight: 100
---

Dashbird offers a **Free** plan and per-usage basis **Pro** and **Enterprise** plans. The total cost of the paid plans depends on two dimensions:

* Volume of application logs generated (GB)
* Number of cloud resources being monitored (AWS Lambda functions, SQS queues, DynamoDB tables, etc)

Some features are only available in the Pro and/or Enterprise plans. Below is a detailed breakdown.

| Feature     | Free        | Pro         | Enterprise  |
|-------------|-------------|-------------|-------------|
| Daily data ingestion[^1] limit | 50 MB | 10 GB | 10 GB or custom |
| Monthly data ingestion[^2] limit | 1 GB | 300 GB | 300 GB or custom |
| Data ingestion (on-demand[^3]) | N/A | $6 per GB | $8 per GB |
| Data ingestion (reserved[^4]) | N/A | $4 per GB | $6 per GB |
| Cloud Resource (on-demand) | N/A | $6   | $8          |
| Cloud Resource (reserved) | N/A | $4    | $6          |
| AWS Accounts | 1           | Unlimited   | Unlimited   |
| Delegations | 1           | Unlimited   | Unlimited   |
| [Inventory](/docs/application-guide/inventory/) resources | 15  | Unlimited   | Unlimited   |
| Error tracking | Yes      | Yes         | Yes         |
| [Insights](/docs/application-guide/insights/)    | No          | Basic       | Advanced    |
| [Alarms](/docs/application-guide/alerting-and-policies/)      | No          | Yes         | Yes         |
| Custom log events | No    | No          | Yes         |
| [Notifications](/docs/quickstart/notification-channels/) | E-mail    | E-mail/Slack | All        |
| [Live Tailing](/docs/application-guide/live-tailing/) | No         | Yes         | Yes         |
| [Global Search](/docs/application-guide/global-search/)  | No          | Yes         | Yes         |
| Single Sign-On | No       | No          | Yes         |
| Log retention | 1 day     | 14 days     | 14 days or custom |
| Support     | Knowledge Base | Chat / Email | Chat / Email / Slack |

<hr>

**Footnotes:**

[^1]:
    Reserved price for yearly contracts

[^2]:
    Data ingestion of application logs produced by AWS Lambda on CloudWatch Logs

[^3]:
    On-demand pricing for monthly payments variable to what is needed

[^4]:
    Reserved pricing for contracts with yearly commitments
