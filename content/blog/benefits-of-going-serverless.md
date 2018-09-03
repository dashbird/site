---
title: Why even bother with Serverless? 
description: Here are just a few reason why serverless is a great option for you
date: 2018-08-14
frontImage: "2018-08-14/pexels-photo-277615.jpeg"
thumbnail: "images/blog/2018-08-14/pexels-photo-277615.jpeg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
category: ["Learn", "Serverless"]
blog: ["Serverless", "AWS", "Lambda"]
---

There has been so much stuff written online about serverless that you are probably already sick of reading about it by now. I mean, it's a great technology but is it deserving of all the buzzing going around the tech industry? Traditional servers have been around for years and you know what, they will continue to play an incremental role in the development of thousands and thousands of apps and website in the future.

So how come so many people are flocking towards the new paradigm of hosting and running APIs? Why would you even consider making such an important switch and what should you expect?
<center>
![But Why?](/images/blog/2018-08-14/butwhy.gif)</center>

<center>But why you ask?</center>

<h3>The cost</h3>
If you stick long enough doing this while development thing you'll eventually get to see an infrastructure that's so huge and complex that costs over $5K/month. Or $20K. Or $100K/mo. You get the point. Hosting your own services is expensive. Sometime you'll hear someone saying that having the servers on-premise will cost less but let's face it, you'll end up saving 10 or 15% but you will end up being directly responsible for every single aspect of that, from hardware upgrades, security issues, the team that manages those servers. 

With Serverless, all you'll end up paying is for the actual invocation, no need to worry about the management, security, updates, hardware. All of that is handled by your [provider](https://dashbird.io/blog/top-function-as-a-service-faas-providers/). Furthermore, when nobody is using your service or website you don't pay anything, this in contrast with your traditional way that server works where you pay the same amount of money regardless if you have 100 K users online or 0. To read more about how companies are [saving money with serverless](https://dashbird.io/blog/serverless-case-study-coca-cola/) you can check out [our blog](https://dashbird.io/blog/saving-money-switching-serverless/)

<h3>Zero-to-production speed</h3>
Yes, there are other aspects of serverless that draw people in but the speed at which you can create and deploy an app with serverless is something that got me excited to dive into serverless in the first place. The whole idea that you don't need to worry about the underlying infrastructure when developing your application is something that will forever fascinate me personally.

Once you signup for a provider, the time it takes to launch your product depends largely on the complexity of your application, all the other aspects are being dealt with by the amazingly simple to operate, services offered by companies like Amazon, Microsoft, IBM, Google, etc. Take for (a juvenile) example creating a contact form that works on Lambda. The whole process takes under 15 minutes. Read about it [here](https://dev.to/adnanrahic/building-a-serverless-contact-form-with-aws-lambda-and-aws-ses-4jm0).

<h3>Graceful scaling</h3>
Ah, the scaling subject again. That ever important yet somehow the one thing that so many developers fail to take in account when building an application. They expect a certain number of users at the peak and event make sure the service works with more people than that but as most painfully find out, that's not how the internet works. You can't predict the shifting patterns of organic reach, social media virality or the popularity of the app or site that is using your service. 

![app scaling issues](/images/blog/2018-08-14/user-expectation.jpg)

With serverless, the problematic scaling issue is a thing of the past. Your application will scale on demand and the only cost you inquire is the cost of the invocations. Nothing else. Using serverless is what allows companies like [Coca-Cola](https://dashbird.io/blog/serverless-case-study-coca-cola/ to develop systems that are cost-effective and will scale along with their audience.

<h3>Security and hardware</h3>
Using traditional servers you often run into limitations created by the servers you are using. If you have your servers on site, upgrading is not a big problem, you buy the part and then you get someone to install it. There are some logistical issues like storing backups and downtimes while the upgrades happen but that might not be a deal breaker for you. The part that can be a concern is the cost of the entire operation. And something else you need to consider, what happens if you need to do this exercise often, like every few months?

Security is another thing you need to deal with. Seems like every couple of weeks there's another major vulnerability that you need to address with your system or you run the risk of losing data.

Both, hardware issues and security concerns are things that are dealt with by using serverless. All of that heavy lifting is handled by the trusty service providers while you are left with focusing on building the best product for your customers. 

The list of reasons why anyone would consider serverless over the traditional servers could go on but I'll stop here. If you've made the switch to serverless I'd love to feature your story on our blog, just send a message to john@dashbird.io.