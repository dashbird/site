---
title: Serverless SWOT analysis
description: Moving past the 'Hello world', developers quickly realise they've traded one set of problems for another.
date: 2018-09-28
frontImage: "2018-08-12/pexels-photo-767197.jpeg"
thumbnail: "images/blog/2018-08-12/pexels-photo-767197.jpeg"
authorlink: 'https://twitter.com/@rehemagi'
author: Taavi Rehemägi
author_image: '/images/team/taavi.jpg'
blog: ["Serverless", "AWS", "Lambda", "FAQ"]
---

Building a serverless application means you usually trade in old issues for new ones. This is an attempt to create a decision framework and break down arguments for and against using serverless vs. other computing models. 

If you ever find yourself deciding for or against serverless the following tries to make the decision easier for you. Maybe you should save this post for future reference if you find it useful. Or don't, it's up to you. No seriously, save it. 

This is also an open document which I will keep improving in the future. Edits are welcome!

## Strengths
1) **Faster time to market** - The real benefit of serverless is that developers only focus on the business logic and that drastically increases development speed and time to market.

2) **Scalability** - If you follow the right architectural patterns, serverless is very scalable.

3) **Cost effectiveness** - In most cases, serverless is cheaper than other computing models although exceptions apply for some forms of compute heavy data processing/background jobs.

## Weaknesses
1) **Troubleshooting and testing** - It's difficult to test locally and it's difficult to navigate debugging data. You can set up a local environment for testing but it will take a lot of effort. <a href='https://dashbird.io/features/' target='_blank'>Dashbird</a> is good for observing and debugging production architectures.

3) **Learning curve** - New patterns and tooling can take a while to learn and adopt.

3) **Developer onboarding** -  Bigger learning curve for new developers mid-project.


## Opportunities
1) **Observable by default** - All serverless architectures are **observable** by default. Keep in mind that it does not mean you'll get any visibility, it just means that most of the data necessary to understand your service is actually available in AWS through:

  - **APIs** (CloudFormation, Lambda, API Gateway)
  - **Logs** (CloudWatch and CloudTrail)
  - **Metrics** (CloudWatch)

Services like <a href='https://dashbird.io' target='_blank'>Dashbird</a> structure and visualize that information
to make it navigable and simplify troubleshooting.

2) **SAML and other services** - If done well, you can get large parts of your service just by using available Lambda functions and services for auth etc.

3) **Hype** - Developers are excited to work with new technologies, meaning that they are less likely to quit and it's easier to hire.

## Threats
1) **Performance issues and latency** - Poorly constructed architectures, cold starts and database connections running out.

4) **Lock in** - Hard to migrate to Docker containers later if for some reason that's necessary.

5) **Security** - Bigger surface area for loopholes and higher complexity for security audits.

## Conclusion
As you can see there are significant upsides and downsides, but if you make sure to structure your software right, the benefits greatly outweigh the downsides!

If you have any feedback, the comment section is all yours. I'd love to hear what you have to say. I will be updating this analysis regularly.

--- 

_We aim to improve [Dashbird](https://dashbird.io/features/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about these improvements and new features! We would really appreciate it!_