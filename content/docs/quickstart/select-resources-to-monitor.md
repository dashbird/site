---
date: 2020-04-11
title: Selecting resources to monitor
linktitle: Selecting resources to monitor
description: Selecting resources to monitor
kbSeries: ["BQuickstart"]
kbSeries_weight: 400
---

Dashbird pricing model is based on usage. Some resources might not be necessary to be monitored. Lambda functions or DynamoDB tables used for testing, for example.



### Selecting Lambda functions

Go to your user Profile (top-right corner in Dashbird app).

Under Organization, in the left menu, go to Import.

You will be able to set patterns for selecting which Lambdas are monitored (Importing Lambdas, at the bottom of the page) or not (Filtered out Lambdas).

Filters are <a href="https://en.wikipedia.org/wiki/Glob_(programming)">glob</a> patterns. Use an asterisk (\*) as wildcard to match one or multiple characters. For example, to match all Lambda functions containing “testing” in the name, use this pattern: *testing*.

Important to note that filtering out a Lambda function in Dashbird will not affect your CloudWatch logs or metrics.

![User settings](/images/docs/select-lambdas-to-monitor.png)



### Selecting other cloud resources

In the Inventory section of Dashbird, locate the cloud resource you want to select and click in the settings icon

![Inventory Settings Icon](/images/docs/quick-start/select-resources-to-monitor/inventory-resource-settings-icon.png "Inventory Settings Icon")


At the bottom of the page, you will see two sections:

* Include resources by tag
* Exclude resources by tag

Specify a key-value pair in the first one to select which resources Dashbird should monitor. Include key-value pairs in the second one to determine resources that should be excluded from Dashbird monitoring. Make sure your AWS resources are tagged appropriately according to the key-valur pairs selected in our system.

![Include or Exclude resources by tag](/images/docs/quick-start/select-resources-to-monitor/inventory-include-exclude-resources-by-tag.png "Include or Exclude resources by tag")
