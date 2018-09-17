---
title: Securing serverless applications
description: Serverless security is not inherently better or worse, it's just different.
date: 2018-09-10T12:00:00.000Z
frontImage: "2018-09-10/jose-fontano-246362-unsplash.jpg"
thumbnail: "images/blog/2018-09-10/jose-fontano-246362-unsplash.jpg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
blog: ["AWS", "serverless", "security"]
---

We've seen time and again how serverless architecture can benefit your application, graceful scaling, cost efficiency and a fast production time are just some of the things you think of when talking about serverless. But what about security? What do I need to do to ensure my application is not prone to attacks? This is exactly what I'm going to try to address today so let's jump right in!

> "Serverless security is not inherently better or worse, it's just different. " - Guy Podjarny

From a developer perspective serverless architecture, switching to serverless is a great move as it allows them to focus on the product itself while the platform on which the code executes is run by the province provider. What this means for security is that the patches themselves are being applied on time everytime which is one of the biggest "challenges" for traditional servers. Basically, the people responsible for the security updates either forget or just ignore said updates, leaving you and your data at great risk.
 
> "Most attacks exploit known vulnerabilities that have never been patched despite patches being available for months or years" - Verizon
 
<h2>It's not all fun and games!</h2>
While the architecture has some clear advantages over its traditional counterpart, serverless has some security disadvantages (yeah, let's call them that). I'll quickly go over a few but if you want to go into details you can check out <a href="https://twitter.com/adnanrahic">Adnan's</a> article on the issue where he talks about finding the <a href="https://serverless.com/blog/fantastic-serverless-security-risks-and-where-to-find-them/">biggest security risks in serverless</a>.

<strong>Event injection</strong> — Solved with input validation and predefined database layer logic, such as an ORM or stored procedures.

<strong>Broken authentication</strong> — Solved with built-in authentication/authorization solutions and avoiding dangerous deployment settings.

<strong>Insecure deployment settings</strong> — Solved with never using public read ACLs and keeping files encrypted.

<strong>Misuse of permissions and roles</strong> — Solved with the “least privilege principle.”

<strong>Insufficient logging </strong>— Solved with 3rd party tools such as Dashbird or becoming well versed in using CloudWatch.

<strong>Insecure storing of app secrets </strong>— Solved by using AWS KMS to encrypt your application secrets.

<strong>DoS attacks and financial exhaustion </strong>— Solved with writing efficient code, using timeouts and throttling.

<strong>Improper exception handling </strong>— Solved by logging stack traces only to the console or dedicated log files. Never send stack traces back to the end user.

One of the many companies that do serverless security, <a href="https://www.protego.io/">Protego</a> came up with an analogy I really like. 

> "It’s a bit like riding in an Uber vs. taking your own car. Sure, the drivers are probably more professional, and perhaps better trained. And the flexibility of paying for a car only when you need it is great. At the same time, you don’t get to choose which safety features the car has, or how many airbags you’ll have around you."

<h2>Conclusion</h2>
To summarize, with serverless, the new kid on the block a lot of things got easier from a security perspective, things like the need to patch servers which are now done by the service providers or the microservices that got smaller and easier to control and not to mention the fact that each container is stateless and ephemeral. 

And while all these are really cool, with serverless we need to look for security flaws in a different place and this is something that doesn't come easily to anyone. Having to manage deployment permission alongside the many new points of attack is going to prove challenging but not impossible if you know where to look. Here's where <a href="https://dashbird.io">Dashbird</a> comes into play. It gives you the observability you lack in your serverless environment while providing monitoring and alerting to help you get the most of your new serverless application.