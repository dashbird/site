---
title: Serverless - a paradigm shift in app development
description: Serverless is the next paradigm shift in the way we create and run web services and apps
date: 2019-10-02T12:00:00.000Z
frontImage: "2019-10-03/daniel-josef-AMssSjUaTY4-unsplash.jpg"
thumbnail: "images/blog/2019-10-03/daniel-josef-AMssSjUaTY4-unsplash.jpg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
blog: ["alerts", "Lambda"]
---
I've spent a lot of time with the development community over the years but every time I get to talk to people in the serverless community I'm constantly surprised by the passion and the general excitement over this technology. Below is one of the latest of said topics and I wanted to share it with you.

For years we’ve been building apps the same way. We put together the infrastructure based on what we perceived as a requirement for that type of service and then we start building it using whatever framework we chose. Every couple of days we go back to change or tweak the server, make sure it scales, execute our logic faster, hardware upgrades and update the OS and apply security patches.

**That’s how it used to be.**

To put it simply, serverless architecture is an outsourcing solution allowing you to pay someone else to manage your servers, databases, and even application logic that you might manage yourself otherwise. 

With serverless, we don’t have to meddle with all the hardware, software updates. We chose the framework from a list of predefined options by the service provider and we start uploading our code.

**There’s no messing with the server in any way shape or form.**

This provides an unprecedented advantage for developers since they can now focus on the business model and the quality of the app. On average they save about a day a week which is a game-changer.

**Not focusing on infrastructure is a big paradigm shift!**

But there’s more. Since you don’t have too/can’t mess with the server may cause a little bit of getting used to, especially when debugging things. Serverless has a lot of new features and quirks and one of those is the lack of observability that comes with the territory.

There’s no error log, there’s no cPanel nor there is an EC2 console that monitors the hardware and resources consumption.

Every service provider has something to aid in this regard, AWS, for example, has Cloudwatch. A solid service but far from perfect. It’s fine to debug small applications or a microservice, but keeping an eye on an entire application can be difficult since all the information is propagated into one single location.


![alt_text](/images/blog/2019-10-03/main-qimg-3d087ad7e1933ae96e20eb45fc10f211.png "image_tooltip")


This is usually what you see when trying to debug your serverless apps.** It ain’t pretty!**

Imagine this scenario. It’s 4 am and someone on the other side of the globe has a delay while using your service. It’s not a huge thing but you run the risk of losing that customer due to that bad experience. With serverless seeing that one single event in a sea of traces is hard and figuring out what caused it is an even difficult task.

**Stage enter third party monitoring and observability tools.**

There’s a big hole in this whole serverless setup and it’s caused by the inherited lack of observability. But there are plenty of solid solutions to this issue and they come in the form of third party software.

Think of them as a health monitor that knows a few other tricks like metric based alerting, live tailing and other types of search capabilities that will aid you with your debugging endeavors.

[Dashbird](https://dashbird.io/) is amongst the first ones to provide a service like this but there are a few other really great ones like Epsagon.com, IOPipe.com, Thundra.io.

Now back to the question at hand:

**Why is serverless the next paradigm shift in the way we create and run web services and apps?**

Let me clarify, serverless is not something that AWS or Microsoft invented overnight and released back in 2015, it’s been around for way longer than that. We used to call it cloud computing and it was only available to a very select handful of individuals that had the privilege (read: $$$Money$$$) to get access to something like this. Services like AWS Lambda and MS Azure just made this idea available to the masses at a very, VERY, <a href="https://dashbird.io/blog/saving-money-aws-lambda/">low price</a>.

The biggest hurdle (or paradigm shift) we developers have to overcome is the adapting to the new way we think about the infrastructure. It’s more like a “plug and play” experience where we “plug” the code and it just runs.

We also have to get used to the little quirks that we now have to deal with like the monitoring and observability solutions.

We also need to stop with the “vendor lock-in syndrome” because this isn’t really an issue. Using platforms like Serverless you can deploy your code on any provider you choose with a couple of  command lines. You’ll never have to be stuck using just one service provider.



![alt_text](/images/blog/2019-10-03/main-qimg-1008b0a0c7039b9f67b92fc866ce0ba1.jpeg "image_tooltip")


See [this](https://hackernoon.com/what-is-serverless-architecture-what-are-its-pros-and-cons-cc4b804022e9) article on how the two architectures stack up to get a better view of the differences between them.

---

Hope this little rant will shed some light on this particular subject but I’d love to hear your thoughts on this, either leave a comment or email me at [john@dashbird.io](mailto:john@dashbird.io) to get in touch.
