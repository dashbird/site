---
title: Cloudwatch vs Dashbird
description: The Cloudwatch vs Dashbird debate will go on for some time. Here are some key feature comparisions.
date: 2019-03-20T12:00:00.000Z
frontImage: "2019-03-20/markus-spiske-711232-unsplash.jpg"
thumbnail: "images/blog/2019-03-20/markus-spiske-711232-unsplash.jpg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
blog: ["serverless", "cloudwatch"]
---

I'm going to be biased in this post and it's going to be ok because all the information you're about to see are 100% correct and fair towards both services.

### Let's look at Cloudwatch first.
Don't get me wrong, Cloudwatch is not a bad tool by any stretch of the means. In fact, is pretty decent for keeping tabs on what's going on in your AWS stack if you take the time to understand it's intricacies. It's the goto tool for monitoring cloud resources in AWS and allows you to track all your resources together.

<img src="https://thepracticaldev.s3.amazonaws.com/i/cxd9oddsphtqcxw7vi1g.PNG">

One of the best features of Cloudwatch is the ability to set up advanced alerts that are, in my opinion, quite advanced. For example, you could set it up so that you'll get alerted when a particular functions use x amount of RAM or take more than x seconds to run. The alert will be sent to your email whenever the alert gets triggered.

My main issue with AWS Cloudwatch is probably the way it displays information. Running an actual application in the cloud can make it very difficult (I can't stress this enough) to navigate the logs especially when you have multiple resources. Since the logs are all grouped together, even though the information is all in there, it takes A LOT to get to the bottom of the problem. Even reading the log itself can be tricky since it's just a long unformatted JSON string.

### What Dashbird does right!
Dashbird, on the other hand, doesn't reinvent the wheel. It just makes things easier for developers to debug their Lambda-based applications without overcomplicated UI and congested on-screen information. 

<img src="https://thepracticaldev.s3.amazonaws.com/i/j7to0v5b2pog1gk3as8y.png">

Take the invocations logs view. With Cloudwatch you'd normally see all your invocation under one screen. You'd have to manually sift through all the logs and look for the particular invocation you were looking for in order to debug the app. Now imagine you have 10, 50, 100 functions. It can get out of hand real quick!

Switch back to Dashbird. All the functions are neatly listed under the Lambda views and clicking on functions will list the invocations for that function starting with the most recent ones. When the app goes belly up, you need a way to quickly debug the problem and you REALLY can't spend time trying to figure out what you are looking at for 15 minutes.

The logs themselves are formatted so the information is interactive which is extremely convenient for large objects but if that's not your style you can always switch back to "raw logs" and have it displayed similar to how Cloudwatch shows logs.

On top of that <a href="https://dashbird.io">Dashbird</a> has a cool new incident management platform that allows you to create custom policies for alerts. You can then select a channel in which you want to get that alert and it can be Email, Slack or both.

Another cool feature that Dashbird has is the project views which allows you to group certain functions in a project and monitor those as a group rather than individual functions. This is extremely helpful for microservices running on AWS Lambda.

Search for a keyword across lambdas is a big crowd pleaser too, as well as the filters which allow you to bring up coldstarts, retries, timeouts and more.

I could go on and on but I think I've made my point, but in the unlickly event that you are still not convinced I invite you to check out this <a href="https://dashbird.io/free-cloudwatch-alternative/">Cloudwatch vs Dashbird comparison page</a> that shows a list of the main features each service has to offer.

## Conclusion

Have I spoken about every little detail that these two wonderful products have to offer? Definitely not. Have I been a bit biased with my comparison? Maybe. Is it worth taking the time to try it yourself? Abso-freaking-lutely! 

Head on over to our <a href="https://dashbird.io/register/">registration</a> page and check out our Free Tier that gets you 1024 MB of logs or if your feeling adventurous get started with the Free Trial and take the entire application out for a spin to really get a taste of what Dashbird is all about.