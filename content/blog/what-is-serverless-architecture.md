---
title: What Is Serverless Architecture?
description: In this article we take it back to the basics and explain what is serverless architecture, what are its advantages and disadvantages, and who would really benefit from adapting this new way of computing.
date: 2020-07-21T00:00:00.000Z
frontImage: "2018-09-01/header.jpeg"
thumbnail: "images/blog/2018-09-01/header.jpeg"
canonical: https://dashbird.io/blog/what-is-serverless-architecture/
author: Nemanja Novkovic
blog: ["Serverless", "Other"]
---

Serverless has been around for a minute now but it's safe to say that it's still in its infancy in 2020 and definitely has a long way to go. But serverless architecture is a major step away from to dependence on humans and towards reliance on machines. Are the machines already talking over? Not literally the “Terminator” movie scenario quite yet but is this the beginning of the end of an era in the world as we know it? Let’s roll back a little and start at the beginning.

## What is Serverless Architecture?

Serverless architecture or better yet, serverless computing as it's also known, refers to applications that are dependent on third-party services and custom code that’s running in ephemeral containers.

Considering its name, **serverless architecture doesn’t mean that it runs its code without servers**. The name it has, _“serverless computing”_, is used only because the person or a company owning the system does not have to purchase or rent servers/virtual machines for the back-end code to be able to run. Simply put, serverless architecture is a way of building and running applications and services with no need, whatsoever, for infrastructure management. 

Your application will still be running on servers, but bear in mind that [AWS Lambda](https://aws.amazon.com/lambda/) or other hosts do all of the server management. We conclude that the user no longer needs to scale, provision, and maintain servers to run his application, database or storage system.

## Why should I choose Serverless Architecture over traditional?

Using serverless architecture will significantly help developers focus more on their core product. If not for serverless, developers would still be worrying about managing and operating servers or runtimes, whether managing them on the cloud or on-site. This way, the developer’s focus will solely be on individual functions in their application code. Services like AWS Lambda, Google Cloud Functions, Firebase and Microsoft Azure Functions will take care of the physical hardware, virtual machine operating system as well as the web server, while you would only need to worry about one thing - **your code**.

## Who should be using Serverless Architecture?

In case you have a small number of functions that you need to be hosted, you should consider switching to a serverless provider. Considering that your application is more complex, serverless architecture can still be a good choice since it comes with lots of benefits, but you’d need to architect your application quite differently. Some clear benefits are easier concurrency management at scale and optimizing resource usage. If you already have an existing application, this might not be the best solution. Consider migrating smaller pieces of the application into serverless functions over time.

## The drawbacks of Serverless Architecture

Since everything else in life has downsides and drawbacks, it would be unwise to believe that serverless architecture is flawless. Let’s talk about what we can expect regarding the disadvantages. 

Problems that occur are vendor control and vendor lock-in, but also security concerns as well as multitenancy problems. Considering that you give up system control while implementing APIs, it can cause system downtime, forced API upgrades, functionality loss, as well as unexpected limits and cost changes.

Serious drawbacks though are the essential tools to work with we seem to be missing. Developers depend on vendors for debugging and monitoring tools. Luckily, [Dashbird](/) is offering an [observability solution](/features/) to ease the pain. 

While fighting a fight without operational tools, there is another problem causing the flawed usage of serverless architecture, and it's the architectural complexity. To decide how small a function should be, it takes quite some time to assess, implement and perform a test. The easiest way to perform such a test is with this [Step Functions state machine](https://github.com/alexcasalboni/aws-lambda-power-tuning) by AWS Sr. Technical Evangelist [Alex Casalboni](https://mobile.twitter.com/alex_casalboni).

## Serverless Architecture and its advantages

Keeping it simple, serverless architecture is an outsourcing solution allowing you to pay someone else to manage your servers, databases, and even application logic that you might manage yourself otherwise. You would pay less for your managed database because a vendor that hosts you is running thousands of very similar databases.

Reduced packaging and deployment complexity is yet another example of how packaging and deploying FaaS functions is simple if you compare it with the deployment of an entire server.

“Green” computing is considered as a great hit among developers and rest of the population. Since over the last couple of decades the number of servers increased drastically, so did the need to serve those servers with sufficient power supply. Therefore, large sized data centres in the world came to the existence. Extremely large companies such as Google, Apple, Facebook etc. are fighting their way through saving the environment from the pollution they cause by implementing and moving their servers on the clouds and moving their data centres near renewable energy sources, so that way they fight against the fossil-fuel burning impact on sites like those. Those “clouds” never produce rain, so your Facebook account is quite safe, do not worry. Making these differences should further lead to the far more efficient use of resources across the data centres. By making those differences, people are reducing the environmental impact which can be compared to a traditional capacity management approach.


## Conclusion

Serverless architecture is something you implement if you are in need of it. If not, learn more about it, and you might discover that you need it, but you weren’t aware of that fact, yet. If you'd like to learn more about a real life example of Shamrock Trading Corp successfully migrating from a traditional cluster to serverless architecture, and find out more about their winning strategy in doing so, dowload this [free case study](https://sls.dashbird.io/going-serverless-case-study).

___

_Editor's note: This blog has been refreshed and updated for accuracy in July 2020. Originally published in September 2018_
