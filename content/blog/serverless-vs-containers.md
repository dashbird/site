---
title: Serverless Vs. Containers — the big showdown
description: Which is the btter choice right now? Stay tuned to find out.
date: 2019-11-05
frontImage: "2019-11-05/1_SBvfoUOrc1d4vJNBjMookQ.jpeg"
thumbnail: "images/blog/2019-11-05/1_SBvfoUOrc1d4vJNBjMookQ.jpeg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
blog: ["Serverless", "Lambda"]
---

If you have anything to do with the world of cloud computing or even programming for that matter, then I'm sure you've heard of different terms being tossed around such as "serverless computing" or "containers," and even "monolithic architectures."


A lot of people who understand such computing methods can have a bad habit of using these terms without leaving any explanation as to what they are. So, I hope to help you in your quest for understanding today by listing out simple definitions for these computing methods, how they are beneficial by themselves, and how they can work together to make your computing methods more efficient.

<h2>Cloud Computing: What You Need To Know</h2>
Today I'll cover two different methods for cloud computing. In so doing, I'll briefly explain each of those methods, compare them to each other, and then show how you can benefit from using them together.

<h2>Monolithic Architectures</h2>
When it comes to traditional cloud computing, most anyone who has taken programming 101 understands what monolithic structures are.

To put it simply, and just as the name implies, a monolithic architecture is a coding structure that processes a data chain from beginning to end. This architecture is named after ancient monoliths in the real world, which are stone pillars or monuments that had writings and information on them. Monolithic architectures are also the most commonly used method today because it is also the most traditional way to compute data on the cloud.

Although this is true, just because it's the oldest and most widely used method, does not make it the best fit for each application.

A monolithic structure can be beneficial because you can make your application as large and as complicated as you want. Another benefit to this is that you have complete control over your entire code chain, whereas other methods may not allow you such freedom.

Some of the downsides to this architecture lies in the fact that using one long piece of data for your application is not always the best. Just like machinery in a factory can wear out, our just like your car needs maintenance, so does a monolithic structure.

Coding does indeed break down over time, and it is a programmer's, job to keep a watchful eye over their data and employ maintenance to the code sequence when needed. If the code chain does break, then your entire application will fail, and a code patch will be required for it to work again. Another downside to this type of architecture is the fact that running your applications in this way can be very costly.

The reason it's so expensive is that you need to purchase your own in-house servers that will process your applications. Not only is this equipment costly, but you also need to keep your servers running 24/7, and that can do a number on your power bill.

<h2>Serverless Architectures</h2>
Serverless Architectures are a relatively new method to cloud computing since Amazon first brought it to light in 2014. In the last five years, Amazon has been steadily developing this new method as well as Microsoft, IBM, and Google.

All these companies have seen the significant benefits that Serverless Architectures can bring, and that is why they have joined the world of cloud computing as Cloud Service Providers. Just like any other new technology, serverless cloud computing can seem like magic if you don't take the time to understand it. And so, that brings us to explain its name.

Contrary to what some might think when they read, "serverless" in the title, serverless cloud computing is not actually serverless. What it refers to is the fact that you do not need to own servers to use and benefit from a serverless architecture.

<strong>This is how a serverless architecture works</strong>: Your CSP allows you an amount of space on their servers (the amount is determined on your service plan), and all you have to do is set up API calls from your application that will be triggered by events.

Once an API call is triggered, then the server will start processing the needed data for that event until its finished and then it will deploy it. This can be very beneficial because your application can now be broken up into microservices and different parts of your code can be processed separately or as needed instead of the entire code being processed all at once. Each microservice will also have teams of programmers who will watch your code themselves and conduct maintenance as needed.

Serverless architectures can be beneficial because you no longer need to buy expensive equipment or run servers for 24/7. On top of that, CSPs will only charge you for the amount of time that it takes for each function to process from your application.

*And there you have it, no more expensive overhead costs!*

Some of the downsides to serverless computing can include the fact that you do not have as much freedom as you would running a monolithic architecture. When you run your application through your CSP, they take care of all the maintenance and processing. Now, this can be seen as freedom in itself since you may not want to deal with the code all the time or it can seem restricting since you won't have complete control over your code.

Another downside to this method is the fact that large and complex applications can struggle when they are broken up into a lot of different microservices. Each microservice communicates with the others since the code is still considered a whole even though it has been broken up.

When there are a lot of microservices communicating with each other, then your application can start to get "chatty," and this "chattiness" can make monitoring your application a nightmare. You can compare this phenomenon to when you are trying to have a private conversation with a friend in a very loud and crowded room; it's just hard to hear each other. If you understand the nightmare of trying to monitor microservices for your application, then do I have the tool for you.

<a href="https://dashbird.io">Dashbird</a> is a cutting edge observability platform that allows you to see every layer of your application and it even shows you the average cost it takes to process each of your applications. Dashbird integrates beautifully with AWS X-Ray, and they also offer instant failure alerts that can be integrated with Slack or even notify you by email. Not only does Dashbird alert you but it allows you to troubleshoot straight from the dashboard as well.

<h2>Containers</h2>
Containers are a different way to approach the world of monolithic architectures. Programmers have seen the difficulties of using a monolithic structure, and so they have innovated new ways to work around these problems.

Containers are small receptacles that contain portions of the code for your application. Each container not only has a code portion but it also as configuration for your code and an engine to run that code per your configuration. In other words, you can view this as a pseudo-microservice structure.

With containers, you can break up your monolithic code chain into smaller sections which run and compute separately instead of one long string of data. And so, this will also help prevent your application from having complete failures just because one part of your code breaks.

A benefit to using containers is the fact that you can configure your own coding framework instead of relying on a CSP's code structure which may not work with other CSP's code configurations. And just because you have your own code framework does not mean you cannot use a CSP for serverless aspects of your application as well. In fact, Amazon Web Services use what are called "Amazon containers" (or Amazon ECS), and even though they have their own containers, Amazon readily accepts containers from Docker as well.

A downside to containers is the fact that they can be hard to communicate with other containers when there is a large number of them. Each container communicates with others, and just like in the serverless world, chattiness can become a problem with communication.

Another problem is that if you have to move your "container clusters" (basically bunches of containers that communicate together for your application) somewhere else, it can become more and more problematic with more and more containers.

<iframe width="100%" height="300" src="https://www.youtube.com/embed/TN25-siFnS8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h2>Containers and Serverless Working Together</h2>
So, now that we see the good and the bad of these different methods of computing, what would happen if we put them together? What would happen would be a beautiful working relationship between these two methods of cloud computing.

You might ask, "how so?" or, "I thought they were completely different methods," and to that last question, I would say that you are right. Even though these two methods are different from each other, it doesn't mean that they both can't work together.

Now, stick with me. If you are already using a monolithic structure and your application is too large to handle on a serverless structure, that doesn't mean that you still can't use a serverless architecture for your benefit. A lot of applications have what's called "back-end tasks" that are small tasks that need to be wrapped up in your application before deployment.

So, with that said, you can use your monolithic structure to do the brunt of the processing, but when it comes to the small tasks that are easy to take care of, use a serverless architecture to process those.

Combining these two methods will help you not only save on overhead, but it can make your application run more efficiently since your monolithic structure has less to worry over now.

Big companies around the world have already started integrating the two with amazing results. Check out Netflix's case study as well as Coca-cola's case study to read more on how Fortune 500 companies use serverless in production.

<h2>Conclusion</h2>
I'm trying not to biased here into saying that serverless is better because it's probably not. It has its fair share of issues and just because I'm more inclined to use it over a traditional architecture doesn't mean everyone should. That being said, I do have to share an image with you that (kind of) proves my point about it being the better choice (from a deployment perspective at least).

<img src="https://cdn-images-1.medium.com/max/2400/1*P5fcQwn4vOs0mSsyffa_Jw.png">
<span style="
    text-align: center;
    margin: 10px auto 0;
">Checkout Cloudflare's <a href="https://www.cloudflare.com/learning/serverless/serverless-vs-containers/">post</a> on serverless vs containers. There are some really cool insights about this particular subject.</span>

Checkout Cloudflare's post on serverless vs containers. There are some really cool insights about this particular subject.But I digress, monolithic architectures and serverless architectures can be very different ways of computing. Even so, that doesn't mean you can't use them together, and when you do use them together, you can create a method of cloud computing that is not only powerful and reliable but also more efficient than if you used any method by itself.

As you can see, monolithic architectures and serverless architectures can be very different ways of computing. Even so, that doesn't mean you can't use them together, and when you do use them together, you can create a method of cloud computing that is not only powerful and reliable but also more efficient than if you used any method by itself. 