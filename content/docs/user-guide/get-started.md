---
date: 2017-06-05
title: AWS Lambda Monitoring Setup - Dashbird Help
linktitle: Setting up Dashbird
description: Setup
kbSeries: ["AUser Guide"]
kbSeries_weight: 200
aliases:
 - /setup
 - /docs/getting-started/setting-up-dashbird/
 - /help/basic/get-started
---

_If you haven't already, [sign up for dashbird here](https://dashbird.io/signup) to access the onboarding screen._

<h2>
  <span class="h2 underlined">Requirements for setting up Dashbird</span>
</h2>

##### **To set up Dashbird you need to have the following:**
- **Administrator access to your AWS account**

**Open the link to the onboarding screen from your e-mail.**

<br>

<h2>
  <span class="h2 underlined">1. Create a new <b>AWS policy</b> for Dashbird</span>
</h2>

- Open your [AWS console](https://console.aws.amazon.com).
- Navigate to `IAM` → `Policies` → `Create Policy`.
- Select `Create your own policy`
- Fill the form:
  - Policy name: `dashbird-policy`.
  - Policy Document:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "logs:FilterLogEvents",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "logs:describeLogStreams",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "lambda:listFunctions",
            "Resource": "*"
        }
    ]
}
```
  
<br>

<h2>
  <span class="h2 underlined">2. Add a new <b>AWS role</b> for Dashbird</span>
</h2>


- Navigate to `IAM` → `Roles` → `Create New Role`.
- Select
  - `Role for cross-account access`
- Select
  - `Provide access between your AWS account and a 3rd party AWS account`
- Fill out the following:
 - Account ID (Dashbird): `458024764010`
 - External ID: **copy from the onboarding app**
 - Require MFA: `false`
 - Click **Next step**
- Select previously created `dashbird-policy` from the policies list.
- Click **Next step**
- Fill out the following for role name and review
 - Insert role name: `dashbird-delegation-role`
 - Click **Next step**
- Find the created role in the list and open it.
- If you have done everything  correctly, the screen will look the following:
![Correct result](/images/docs/result.png 'Role')
- **Copy the ARN** of the role

<br>

### 
<h2>
  <span class="h2 underlined">3. Setup Dashbird with the created role</span>
</h2>

Back on the onboarding screen:

- Insert your (company) name
- Select your target region.
- Paste the **Role ARN** you copied above.
- **Click Finish!**

Dashbird will check if it has access to your AWS account. If everything is set up correctly, you are redirected to the app.

**It should take approximately 3-4 minutes for the data to start coming in.**
