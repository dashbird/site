---
title: Coldstarts suck! Here's how to deal with them.
description: Serverless isn't magic. Containers need to be shut down in order for new ones to spin up.
date: 2018-08-15T12:00:00.000Z
frontImage: "2018-08-17/photo-1512422011530-b28e36ff5996.jpeg"
thumbnail: "images/blog/2018-08-17/photo-1512422011530-b28e36ff5996.jpeg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
blog: ["AWS", "Lambda", "Cold-Start"]
---

Before I jump in I'd like to take a step back to provide a better frame of reference for our fellow developers that are only now jumping into serverless and might find some of the topics covered here a bit confusing.

Every time I talk about serverless computing I constantly get interrupted by people making a note that serverless is in fact not server-less and that you have servers somewhere.  And of course, you have an actual machine that runs your code. Serverless is not magic. There aren't any magic server elves that take your code and run it on their magical cloud that connects to your modem. I admit that the wording can be confusing but if we all can just move past that I'm sure we can build wonderful things using serverless.

Back to the point, cloud computing is basically a network of machines that talk to each other and what makes them different from a local computer or a server is that they are accessed 100% remotely and can scale gracefully. 
Serverless computing is similar to an extent to this arguably juvenile explanation of cloud computing. You upload your code to a "Function As A Service" provider like AWS Lambda and it then gets made available based on requests(as it's event-driven). The code I mentioned earlier is but a function (hence the term function as a service) that once it runs, it returns a value and dies. Each function is basically a self-sufficient, completely stateless, event-driven transient container that after a period of time will be deleted altogether. 

<h2>How do cold starts happen</h2>

"A cold start occurs when an AWS Lambda function is invoked after not being used for an extended period of time resulting in increased invocation latency." -<a href="https://medium.com/@theburningmonk">Yan Cui</a>

That's how cold starts happen, after a period of inactivity the container gets shut down. It then needs to get spun up again and can take up to 5 seconds for AWS Lambda(some providers take way longer than that), and as you might imagine having a 5s request delay in production is going to be a hard pill to swallow. It's one of the biggest drawbacks that keep people from switching to serverless from traditional servers, alongside the dreaded vendor lock-in.

<h2>Do we even need cold starts?</h2>

But cold starts are a necessary evil. One of the main benefits of serverless computing is their basically infinite scaling system, and the way this happens is that your functions run for whatever period of time they need to	and then after, what now seems to amount to 45 minutes of inactivity for AWS Lambda, they get destroyed. That's why they have room to scale your application and can only charge for the invocation and execute time. 

For new containers to spin up, inactive ones need to die. It's how serverless works. I've mentioned that the amount of time before the container gets destroyed is 45 minutes but that might vary based on the availability and demand in your current region.

<h2>How do you identify cold starts</h2>

One of the best ways of finding cold starts within your app is by using a serverless observability tool like <a href="http://dashbird.io">Dashbird</a>. You signup for the free tier and get up to 1gb of AWS logs. After you are done with the signup process you need to login to the app and go to you lambdas where you can see the status of the last invocation plus you can filter for cold starts specifically.

![detecting serverless cold starts](/images/blog/2018-08-17/cold-starts-serverless.jpg)

<h2>How do I avoid cold starts?</h2>

Unless it's a critical function of the app I usually take the 5-second hit, especially if I have it happen once a day. But more often than not I find myself needing to create a "wake-up call" for my lambdas which is actually exactly what it sounds like. Every 25 minutes or so I make a call to each lambda to keep it "warm" thus avoiding the cold starts. And before you ask, yes, this will end up costing more but I believe it's a small price to pay for having a simple way to shut the naysayers mouths that complain about cold starts like it's the worst thing to ever happen to software development, to which I'm always like "Hello, the worst thing to happen to software development is PHP!".

But I digress, the important thing to note here is that cold starts are a necessary evil and if you absolutely, positively can't have that 5 second delay to your calls you can always create a simple "wake-up call" function that will call one, two or all your function after a period of time, ensuring your calls will never go cold. And while you get an increase in cost let me put that cost in perspective. If you call a function every 25 minutes you will eventually have to make 1800 calls a month. Amazon gives you 1 million calls for free every month. And if that million calls isn't enough, the cost for the wake up calls for each function is $0.00036 per function.

___

_We aim to improve [Dashbird](https://dashbird.io/features/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about these improvements and new features! We would really appreciate it!_