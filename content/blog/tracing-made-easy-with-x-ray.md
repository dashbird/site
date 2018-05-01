---
title: Product News - Tracing made easy with X-Ray
description: We are committed to provide the best serverless monitoring and debugging experience out there. Here's what we have been working on lately.
date: 2018-05-01
frontImage: "02-05-2018/x-ray-update.jpg"
thumbnail: "images/blog/02-05-2018/x-ray-update.jpg"
authorlink: 'https://twitter.com/kolmas'
author: 'Mikk Kirštein'
---

![Dashbird Product Updates](/images/blog/02-05-2018/x-ray-update.jpg)

X-ray itself collects traces from apps. With traces its possible to see in a quick and low effort way whats happening to your app. 
In terms of lambdas x-ray will be added automatically IF one checks the "enable monitoring" button in lambdas settings view. Enabling x-ray for lambda essentially means that all (unless sampling is available) lambda invocations from that lambda contain a information about the active trace. For lambda invocations the active trace will be added to lambda env and will be automatically picked up by x-ray.



When just enabling monitoring you will see a really - really high level overview of your function invocations. This is what you can see from AWS:

![](/images/blog/02-05-2018/trace-1.png) 

As you can see from here x-ray allows you to show the timing of lambda container as well. The dwell time measure there is the time spent waiting for the invocation etc. A lambda that contains only the basic one is this: 

![](/images/blog/02-05-2018/trace-2-dashbirdapp.png)

With Dashbird we try to make sense of that AWS graph shit by removing the nonsense, so it would make a bit more sense and would be easier to understand.

The real power of x-ray however comes when you tie it to different aws services or send custom segments to that. For instance if you tie X-ray to dynamodb you can also see how much time it takes to contact dynamodb with all requests and all the errors + metadata for that (for added debugging).

A good example of this is function. 

![](/images/blog/02-05-2018/trace-3-dashbirdapp.png)


The function does the following things:

- it pushes random string to dynamodb
- it fetches the random string from dynamodb
- it triggers lambda invoke on another lambda
- it triggers sns trigger to invoke another lambda.

As you can see there then everything aside from the sns trigger we can track just fine. This is how its showin in the AWS x-ray console. 

![](/images/blog/02-05-2018/trace-4-aws-console.png)

Like the simple example from above we try to clean up the traces a bit and this is our results.

What's also really cool about this is the fact that you can see all the other resources touched by that Lambda
when looking at the X-Ray logs.

![](/images/blog/02-05-2018/trace-5-dashbirdapp.png)


We can actually see that it's also touching the `alpha-dev-push-receiver` function.
It allows you to navigate to sub requests made from that Lambda. (we currently dont have a UI for that, but im hoping to finish that today), giving you a super easy and cool way to check whats going on within the actual function invocation

---

_We aim to improve Dashbird every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about these improvements and new features! We would really appreciate it!_