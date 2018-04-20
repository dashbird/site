---
date: 2017-06-05
title: Using Multiple Organizations & Setting Up New Ones
linktitle: Organizations
description: One user account can be part of multiple organizations (company accounts) in Dashbird and easily access them without logging out.
kbSeries: ["CUser Guide"]
kbSeries_weight: 600
aliases:
 - /help/basic/adding-aws-account/
 - /docs/user-guide/adding-aws-account/
---
You can have different AWS accounts connected to Dashbird and access them through the same interface with your personal user account. We call these different accounts *Organizations* and you can toggle between them by opening up the upper right menu.

Each organization

  - is connected to separate AWS account and only shows data for that account
  - is billed separately according to the chosen plan and subscription type
  - has different user accounts connected to it
  - has different importing and alerting configurations


![Using multiple organizations with Dashbird](/images/docs/dashbird-organizations.png)



# Setting Up New Organization #
You can [set up new organization](https://app.dashbird.io/client/register) from the upper right menu. You have to name the new organization and the role ARN. Then proceed to creating the AWS delegation. You must follow these steps.

#### Create Policy ####

- Open your AWS Console and go to *IAM → Policies → Create Policy → JSON tab.*
- Copy the policy JSON from the left and name it *dashbird-policy*

#### Create role ####

- Navigate to IAM → Roles → Create Role → Another AWS Account
- Fill in the account ID and external ID.

**NB: DON'T require MFASelect the policy you created and name the role dashbird-delegation-role. Find the role from the list, and copy the ARN to 'Role ARN' field.**

![Setting up new organization with Dashbird](/images/docs/new-organization-setup.png)

---
Check out how you can [set up alerting for each organization!](http://localhost:1313/docs/user-guide/alerting/)
