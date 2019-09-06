---
date: 2017-06-05
title: Resolve or mute issues in Dashbird
linktitle: Resolve or mute issues in Dashbird
description: Resolve or mute issues in Dashbird
kbSeries: ["EHow-to"]
kbSeries_weight: 100
---
When Dashbird identifies an issue, either from your application logs or as a result of a policy breach, the issue will be raised in a state called open.


Developers can later resolve or mute the issue. The basic difference between the two is that, when an issue is muted, Dashbird will not raise it again, nor send any alerts (by email, slack) if the same issue happens in the future for the same Lambda.


Thus, in case a developer wants to get notified of future occurrences, the issue should be resolved. On the other hand, if the issue is not something the developer needs to spend time on again in the future, it can be muted.

In order to resolve or mute an issue, look for the icons below:

<img src="/images/docs/mute-errors-aws-lambda.png">
