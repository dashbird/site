---
title: Serverless Most Popular Programming Languages
description: Python and Nodejs are dominating the Serverless space. What is behind this trend?
date: 2020-05-18T00:00:00.000Z
frontImage: "2020-05-vacation-buffer/serverless-most-popular-programming-languages.png"
thumbnail: "images/blog/2020-05-vacation-buffer/serverless-most-popular-programming-languages.png"
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["Serverless", "AWS Lambda", "Nodejs", "Python"]
draft: true
---

About [90% of all Lambda functions monitored by Dashbird](https://dashbird.io/blog/state-of-lambda-functions-2019/#ok-pretty-cool-but-what-about-their-runtime) on AWS Lambda are running Nodejs and Python runtimes.

> Is this purely a reflection of the general popularity of these programming languages?


# Why are Nodejs and Python so popular?

Python has grown mainly due to its simplicity and readability, which confers a relatively flat learning curve. As well as its versatility to address a variety of problems. In the last 2 decades, it has been adopted by academia and several universities, which laid the foundation for its current dominance in the data science field.

Nodejs was a game-changer for the web. The rise of complex and rich web applications made JavaScript a fundamental tool for any web developer. Being able to use the same programming language on the backend provided a significant productivity advantage for cutting out context switching.

Apart from these particularities, both are dynamic languages that play really well with the current software trends, as we’ve covered in [this article](https://jaxenter.com/serverless-nutella-171333.html).


# What else is behind their popularity on AWS Lambda

If we look at the [programming language popularity index (PYPL)](http://pypl.github.io/PYPL.html), Python and Nodejs snap about 50% of the software development market nowadays. There must be something else going on to make it so much more popular on Serverless.

One explanation could be that Serverless functions are commonly used for gluing tasks, in which languages such as Python and JavaScript excel.

Another aspect is that AWS Lambda is popularly used as a backend service behind SaaS and mobile applications. This market is also relatively skewed towards scripting languages, particularly the two in question. Serverless is not as popular in other markets, such as IoT and desktop applications, in which languages such as Java and C tend to dominate.

But we believe it also has some connection to the inner architecture of Serverless as well. One of the limitations in Lambda functions, for example, is [cold starts](https://dashbird.io/knowledge-base/aws-lambda/cold-starts/). The heavier the runtime startup footprint, the worse it becomes. Python and Nodejs have advantages on this side. Although Golang usually outperforms both, especially on concurrent asynchronous jobs, the AWS Lambda platform [doesn’t seem to be well optimized for it yet](https://read.acloud.guru/comparing-aws-lambda-performance-of-node-js-python-java-c-and-go-29c1163c2581).

Just like Python and Nodejs are super popular on AWS Lambda, Dashbird is also the most widely used serverless monitoring tool out there. It provides developers with visibility and peace-of-mind alerting tools that are tailored for serverless resources, including Lambda functions, DynamoDB tables, API Gateway, SQS queues, etc. [Join thousands of developers already using Dashbird now](https://dashbird.io/#register), it’s free and requires no credit card.
