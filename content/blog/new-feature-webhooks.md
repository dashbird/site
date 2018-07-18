---
title: "Announcing: Multiple AWS Account Support And Webhooks"
description: You can now set webhooks to events in Dashbird and integrate Dashbird with different platforms.
date: 2018-02-08
frontImage: "08-02-2018/webhooks-dashbird.jpeg"
thumbnail: "images/blog/08-02-2018/webhooks-dashbird.jpeg"
author: Taavi Rehemägi
author_image: '/images/team/taavi.jpg'
category: "Product, News"
---

![Announcing Webhooks](/images/blog/08-02-2018/webhooks-dashbird.jpeg)

We just released two new features at Dashbird. Starting now, you can connect more than one AWS account to your Dashbird account and you can also start integrating Dashbird with other tools in your workflow via Webhooks. 

### Multiple AWS Account Support

Often times, teams use more than one AWS account in their development setup. For instance, production and development stages can be deployed under different accounts to prevent accidents and restrict production access. Still, both accounts will require Dashbird and navigating between accounts was a drag until now. Starting today, you can onboard multiple AWS accounts inside the app. Here are <a href='/docs/user-guide/adding-aws-account/' target='_blank'>more detailed instructions</a>.

### Webhooks

As developers ourselves, we understand how important it is to automate workflows and integrate services with each other to plan and collaborate more effectively. This is why we built webhooks to Dashbird.

Dashbird supports sending webhooks on multiple events. You can send a webhook for every error occurence or if something changes in the status of an error (like it gets resolved or re-surfaces). Here's the <a href='/docs/integrations/managing-webhooks' target='_blank'>full overview</a> of how webhooks work in Dashbird.

## Integrating with third-party services

Launching webhooks will be the first step towards integrating Dashbird into your development workflow. In the following weeks we will release Zaps and feature that make it  easier to integrate Dashbird with JIRA and other bug ticketing systems.

We advise routing webhooks through Zapier.


### What's next

We have a ton of interesting stuff coming in the next months. Here's a <a href='https://trello.com/b/DtOA1rio/public-roadmap' target='_blank'>public roadmap</a> where you can see what we are currently working on.
