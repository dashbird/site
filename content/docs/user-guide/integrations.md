---
date: 2017-06-05
title: Dashbird Integrations
linktitle: Integrations
description: Integrate Dashbird with Slack or Zapier to get instant error alerts or build your own integration using webhooks.
kbSeries: ["CUser Guide"]
kbSeries_weight: 500
alias:
  - /help/integrations/managing-webhooks/
  - /docs/integrations/managing-webhooks/
---
You can integrate Dashbird with different tools in order to get error alerts in the channels that make the most sense for your use case.

# Slack #
Get instant error alerts in your Slack channels. To set it up, go to [*Alerts*](https://app.dashbird.io/client/alerts) section from the upper right menu and on the bottom part of the *Alerting* section click on the Slack logo and configure the settings. Here you can choose the Slack channel where the error alerts will get delivered.

![Slack integration with Dashbird](/images/docs/slack-integration.png)

You can also use alert digestion, which means you will get alerted every x minutes about the errors that have happened. This can also be configured on the [*Alerts*](https://app.dashbird.io/client/alerts) page.

# Zapier #
Webhooks are the foundation for all integrations out of Dashbird. To create an integration with other services, we recommend first integrating Dashbird with [Zapier](https://zapier.com) and then using an integration from Zapier to other services.

How it works:

1. you have an endpoint
2. you set up a webhook from Dashbird side to push events to that endpoint
3. every time we have a certain event that will be pushed there

# Webhooks #

**Webhooks can be set up separately for each lambda.** To configure a webhook, open up <a href='https://app.dashbird.io/lambdas' target='_blank'>lambda list</a> and select the function you want to integrate. You can access the configuration screen under `Webhooks` tab.

As a first request after configuring a webhook, Dashbird will try to validate the remote endpoint. For that a POST request with a following payload is made.

```
{
    "ref": "1f3ac2f4-c25f-42c6-a131-08b7575abdb5",
    "createdAt": 1518048245419,
    "event": "VALIDATION"
}
```

The endpoint is considered valid when the remote endpoint responds with the following payload.

```
{
  "status": "success"
}
```

If the remote endpoint fails to respond with this payload, the request will be retried with 30 second intervals for 3 times. After which, you can manually retry the webhook with the refresh button.

### Supported events

You can choose the events on which the requests are triggered. We will add more in the future.

`INVOCATION_ERROR` - triggers each time a lambda execution fails

`ERROR_GROUP_CREATED` - triggers each time a new error has occurred

`ERROR_GROUP_UPDATED` - triggers if a new error occurrence was found in importing patch. A new importing patch is imported about every minute, given that the lambda function is active enough.

---

Check out how you can [set up error alerting and daily account summaries via email](https://dashbird.io/docs/user-guide/alerting/) too!
