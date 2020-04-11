---
date: 2017-06-05
title: Errors & Policies
linktitle: Lambda Errors
description: Errors & Policies
kbSeries: ["CApplication Guide"]
kbSeries_weight: 400
alias:
  - /help/integrations/managing-webhooks/
  - /docs/integrations/managing-webhooks/
---

In the **Errors** page, you can track issues across all your Lambdas. By opening an issue, the detailed stack trace is available for debugging. Previous occurrences of the same issue can also be visualized on the same screen, making it easier to identify patterns and quickly narrow down to the causes and possible solutions.

![Error Policies](/images/docs/dashbird-error-policies.png)

By leveraging the AWS X-Ray integration, from the same screen developers can also cross-reference logs with applications traces. This is key to debugging when resources external to Lambda are involved in producing the error under investigation.

![Error Policies](/images/docs/x-ray-logs-details.png)


When a request fails and gets automatically retried by AWS Lambda, Dashbird will connect the retried invocations to the original one, so that developers can debug all at once and have a unified view of the execution.


After an issue is raised by Dashbird, developers can resolve or mute it. The difference is that, when an issue is muted, Dashbird will not raise it again, nor send any alerts (by email, slack) if it happens again in the future for the same Lambda.


In case a developer wants to get notified of future occurrences, the issue should be resolved. On the other hand, if the issue is not something the developer needs to spend time on again in the future, it can be muted.


In order to resolve or mute an issue, look for the icons below:

![Error Policies](/images/docs/mute-errors-aws-lambda.png)
