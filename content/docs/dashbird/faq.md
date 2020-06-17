---
date: 2020-04-11
title: Frequently Asked Questions
linktitle: Frequently Asked Questions
description: Frequently Asked Questions
kbSeries: ["ADashbird"]
kbSeries_weight: 500
---

### How do I set up Dashbird?

Setting up Dashbird takes under 5 minutes and requires no code changes. To start, <a href="https://dashbird.io/%23register&sa=D&ust=1567587525025000">sign up</a> and follow the on-screen instructions to link your AWS account with Dashbird.



### Do I need to change my code to have Dashbird monitoring?

No, Dashbird does not require any code or configuration change. You will only need to deploy a pre-formatted CloudFormation stack, which takes less than 5 minutes.



### How is my data stored in Dashbird?

Dashbird [imports logs and metrics from AWS CloudWatch APIs](dashbird/how-it-works) and uses encryption-at-rest to keep it safe. After that, the data is processed and analyzed into data metrics, which are then stored in another secure database. All our storage systems are hosted in AWS.



### What does a 'resource' mean for Dashbird?

Dashbird tracks multiple cloud resources in your AWS account. Currently, the services covered are listed on the Inventory section. A resource is a fundamental unit within each AWS service. Below are examples of cloud resources:

* A Lambda function
* a DynamoDB table
* An SQS queue
* An ECS container

[Learn how to control](#how-to-select-which-resources-to-monitor-in-my-cloud-inventory) which resources are monitored by Dashbird in your AWS account.



### What if things fail?

We have over-provisioned our data importing stacks to a point that if half of our cloud infrastructure fails for any reason, we could still carry on serving the whole production load for all our customers. Currently, our main importing workflow is being hosted on the **us-east-1** region, but we also have idle backups ready on **us-east-2**.



### How long does it take for Dashbird to read Lambda logs?

It usually takes under 30 seconds after the execution for logs to be visible in Dashbird.



### Is there any overhead or latency added to my Lambdas?

Dashbird does not affect the performance of your lambda functions. We [get all the information](dashbird/how-it-works) we need indirectly from AWS CloudWatch APIs.



### Is there added cost to my AWS bill?

Dashbird [polls AWS CloudWatch APIs](dashbird/how-it-works) to gather data from your cloud components.

For AWS Lambda function Logs, AWS charges data transferred out of CloudWatch equivalently to data transferred out of an EC2 server. Check it out at <a href="https://aws.amazon.com/cloudwatch/pricing/">AWS CloudWatch pricing</a>. The total cost should represent a tiny percentage of your total AWS bill.

For other cloud components (SQS, ECS, DynamoDB, etc), the cost will depend on how frequently you determine the polling frequency. Each API request will be billed according to CloudWatch API [pricing set by AWS](https://aws.amazon.com/cloudwatch/pricing/).



### How do I customize the polling frequency of my cloud components?

In the Inventory section of Dashbird, click on the Settings icon on the top-right corner of the component card:

![SQS Settings Icon](/images/docs/dashbird/faq/inventory-sqs-settings-icon.png "SQS Settings Icon")

At the top of the page, select the polling interval that suits your needs and budget:

![SQS Polling Interval Configuration](/images/docs/dashbird/faq/inventory-polling-interval-customization.png "SQS Polling Interval Configuration")



### How to select which AWS Regions to monitor in my Cloud Inventory?

In the Inventory settings, there is a **Regions** section. Click on the region of your choice to toggle whether it will be monitored or not:

![Inventory Region Selection](/images/docs/dashbird/faq/inventory-select-regions.png "Inventory Region Selection")



### How to select which resources to monitor in my Cloud Inventory?

In the Inventory settings, you will see two sections:

* Include resources by tags
* Exclude resources by tags

Specify a key-value pair in the first one to select which resources Dashbird should monitor. Include key-value pairs in the second one to determine resources that should be excluded from Dashbird monitoring. Make sure your AWS resources are tagged appropriately according to the key-valur pairs selected in our system.

![Include and exclude resources by tag](/images/docs/dashbird/faq/inventory-include-exclude-resources-by-tag-.png "Include and exclude resources by tag")



### How do I invite my team members?

In the top right corner of the screen, go to your "Profile". In the left side of the page, under “Organization”, go to “Users”. Click on the “Add user” button on the top-right corner to invite anyone you would like to your Dashbird account.
