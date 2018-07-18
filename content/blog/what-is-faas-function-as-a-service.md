---
title: What Is FaaS? (Function As A Service)
description: Function as a service is an entirely new cloud model and a game changer to many. Follow along and learn the basics!
date: 2018-07-10T01:00:00.000Z
frontImage: "2018-07-10/faas.jpg"
thumbnail: "images/blog/2018-07-10/faas.jpg"
author: Nemanja Novkovic, Nikola Pantic
category: "FaaS"
---
*Image Credit: [Austen Collins](https://twitter.com/austencollins) - [ServerlessConf Austin '17](https://youtu.be/b1t78P_1FT4)*

--- 

Another topic I must mention to you is the FaaS. If you don’t like it in short, here's the full name - **Function As A Service**. 

### What is FaaS? 
How do we use/implement FaaS? Does FaaS make any significant difference in my everyday life? Can you buy it on Amazon? All of the questions will be covered that you might have (except the Amazon one), and if there are some you still wish to ask, feel free to do it in the comment section below.

First off, let’s start with the basics. There are several cloud models, and I want to explain them briefly, so you’ll have a clear picture of the FaaS model. 

**IaaS (Infrastructure As A Service)** is a cloud model in which the provider supplies a complete infrastructure like virtual machines, virtual networks and more. Many are referring to IaaS as _“Cloud Computing.”_

**SaaS (Software As A Service)** is another cloud model in which the provider does not expose the virtual computers or even networks to users. Instead, it provides access to databases or any other software services, and this allows the users to be free of maintenance of operating systems while the user can remain focused on the actual usage of the software.

**PaaS (Platform As A Service)** is yet another cloud model, and its providers’ focus is on providing a software development environment to its users. The entire idea is to give developers the tools and the software they need in a single, virtual place. 

**FaaS (Function As A Service)** is an entirely new cloud model and a game changer to many. FaaS belongs to a category of CCS (Cloud Computing Services) which provides a platform for customers to develop, run, and manage applications. Doing so without the complex maintenance and building of infrastructure that is usually associated with the development and the launch of an app. Building the app while following this model is a way to achieve a **“serverless”** architecture. This model is mostly used for building microservices. 

Function As A Service is still very young and brand-new in cloud computing. FaaS was first introduced and made available to the world by [hook.io](http://hook.io/) in late 2014 and was shortly followed by [AWS Lambda](https://aws.amazon.com/lambda/), [Google Cloud Functions](https://cloud.google.com/functions/), [Microsoft Azure Functions](https://azure.microsoft.com/en-us/services/functions/) and many others. This means that you can upload modular pieces of functionality into the cloud that are independently executed. Imagine the possibilities this provides!

Before this, you needed to scale a monolithic REST server to handle the potential load, and now you can divide the server into several functions which can be scaled automatically and separately. That is something that blew my mind upon discovery. 

### FaaS And PaaS Differences
However, I should also mention the differences between **FaaS** and **PaaS (Platform As A Service)** so that you could distinguish them one from another. Some serverless computing architectures don’t require the user to have any direct interaction in managing resources, and it is called **Platform As A Service (PaaS)**. 

Let me remind you that these services are very different in their implementation architecture, having some scaling implications. Most of the PaaS systems continually run at least one server process. Even with the autoscaling functionality, a few longer-running processes are merely added on the same machine which further means that the scalability is a more visible problem to developers. The FaaS systems are the place where the functions should start in milliseconds to be able to allow handling of individual requests while the PaaS systems, in contrast, gives us the idea of the application thread which keeps running for an extended time period while handling multiple requests. The mentioned difference is most visible in the pricing. While **FaaS** services charge per execution time of the function and **PaaS** services charge per running time of the thread where the server application is running. 

### FaaS Use Case

Some of the use cases regarding the FaaS are in close connection with “on demand” functionality. This “on demand” functionality enables the supporting infrastructure to be powered down, so it won’t incur any charges while it’s not in use. Meaning you can cut your server bills drastically! Check out these cost calculators for [AWS Lambda](https://dashbird.io/lambda-cost-calculator/) and [AWS API Gateway](https://dashbird.io/api-gateway-cost-calculator/) if you don't believe me.

Some of the examples would be the data processing ones like batch processing or stream processing, ETL. Even the IOT services for devices that are connected to the internet, mobile apps as well as the web apps.

### Type Of Functions

There are various types of functions are I will briefly explain them. Since there are many potential uses for functions and support and implementation for the functions varies by the providers.  Some of the most common scenarios are scheduling tasks or jobs, processing web requests or process queue messages or even running them manually. These functions can also be chained together meaning that a web request can write a queue and it can then be picked up by a different function. 

### Conclusion

If you are asking yourself “Do I need to use FaaS and will it bring positive solutions to my every day development workflow?”, you should discover more details about whether it will benefit your work or not. Like every other tool, it depends on what you need to use it for. **FaaS** is an excellent choice for centralization of function implementation while it also has the benefit of scaling the implementation. This further means that if you need numerous instances running at the same time, the provider will handle that for you. For more details about this and many other topics, search through our [blog on our website](https://dashbird.io/blog/).

All-in-all, **FaaS** is yet to be used to its full potential, but as for now and by what we already know, it’s a big game-changer.

___

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about these improvements and new features! We would really appreciate it!_