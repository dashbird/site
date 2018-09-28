---
title: Serverless SWOT analysis
description: Moving past the 'Hello world', developers quickly realise they've traded one set of problems for another.
date: 2018-09-28
frontImage: "2018-08-12/pexels-photo-767197.jpeg"
thumbnail: "images/blog/2018-08-12/pexels-photo-767197.jpeg"
authorlink: 'https://twitter.com/@rehemagi'
author: Taavi Rehemägi
author_image: '/images/team/taavi.jpg'
blog: ["AWS", "Lambda", "FAQ"]
---

Building a serverless application means you usually trade in old issues for new ones. This is an attempt to create a decision framework and break down arguments for and against using serverless vs. other computing models. If you ever find yourself deciding for or against serverless the following tries to make the decision easier for you (so maybe save this post for future if you find it useful). This is also an open document which I will keep improving in the future (edits are welcome).

## Strenghts
1) **Faster time to market** - the real benefit of serverless is that developers can only focus on the business logic and that drastically increases development speed and time to market.

2) **Scalability** - if you follow the right architectural patterns, serverless is very scalable.

3) **Cost effectiveness** - in most cases, serverless is cheaper than other computing models although exceptions apply for some forms of compute heavy data processing/background jobs.

## Weaknesses
1) **Troubleshooting and testing** - it's difficult to test locally and it's difficult to navigate debugging data. You can set up a local environment for testing but it will take a lot of effort. Dashbird is good for observing and debugging production architectures.

3) **Learning curve** - at first, new patterns and tooling can take a while to learn and adopt.

3) **Developer onboarding** -  bigger learning curve for new developers mid-project.


## Opportunities
1) **Observable by default** - all serverless architectures are by default observable. Keep in mind that it does not mean you'll get any visibility, it just means that most of the data necessary to understand your service is actually available in the AWS through various APIs (CloudFormation, Lambda, API Gateway), logs (CloudWatch and CloudTrail) and metrics (CloudWatch). Services like <a href='https://dashbird.io' target='_blank'>Dashbird</a> structure and visualize that information
to make it navigable and simplify troubleshooting.

2) **SAML and other services** - if done well, you can get large parts of your service just by using available Lambda functions and services for auth etc.

3) **Hype** - developers are excited to work with new technologies, meaning that they are less likely to quit and it's easier to hire.

## Threats
1) **Performance issues (latency)** - poorly constructed architectures, cold starts and database connections running out.

4) **Lock in** - hard to migrate to dockers later if for some reason that's necessary.

5) **Security** - bigger surface area for loopholes and higher complexity for security audits.
