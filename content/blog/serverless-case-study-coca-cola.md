---
title: Serverless Case Study - Coca-Cola
description: See how Coca-Cola North America has made use of the serverless framework
date: 2018-07-04T12:00:00.000Z
frontImage: "2018-07-04/pexels-photo-844875.jpeg"
thumbnail: "images/blog/2018-07-04/pexels-photo-844875.jpeg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
blog: ["Serverless", "Other"]
---

A while back I talked about how big companies have started using serverless in production and how this is a clear sign that we will see more implementation of the serverless infrastructure in the near future. I'd like to take some time today and talk about one of the <a href="https://dashbird.io/blog/companies-using-serverless-in-production/">companies that are using serverless in production</a>: Coca-cola.

Back in 2016, <a href="https://twitter.com/devatlanta">Michael Connor</a> from Coca-Cola North America, the person in charge of the company's could migration strategy, has taken the stage at AWS Re-invent to give a glimpse into the tools and strategies they’ve developed in order to make their next generation of digital marketing applications completely serverless, and a peek into the innovative ways they’re planning to use AWS Lambda in the future.

While explaining the multiple issues that traditional servers have(he was at a Serverless conference, the server bashing was mandatory) he came across a point that really resonated with me personally: 

<i>Nowadays, developers need to know devops in order to build enterprise applications.</i>

Think about it for a second. Most companies rely on developers to run and manage their servers. That's not a good use of their time. It's fun to know whatever blackmagic needs to be inputted into those Linux terminals in order to make the app load but that should not be a prerequisite.

[<strong>Caution!</strong> "Back in my time" story coming up. <i>Overt your eyes</i>]

When I started out coding there was little to no difference between frontend development and backend development. In fact, we used to all be in the same boat, Developers. For web, front-end development meant html and css. Then, around the year 2004 when Ajax became a thing we added Javascript to the mix of things that a front-end developer needs to know. A couple of years later, the powers that be, decided that a frontend developer needs to know a little design, maybe a little photoshop or Illustrator, and some user experience and user interface design.

Don't believe me? Lookup job ads for front-end developer right now and compare them to job ads from 2006 - 2009. You'll see a clear pattern.

Ok, fast forward to 2018. As a frontend developer, you need to know all the technologies mentioned above plus a little Angular, React, Redux, VueJs, Aurelia, SemanticUI, Bootstrap, Bulma, Foundation and the list can go on for quite a while.

And that's for the frontend of the application. The backend is even worse. Add to that "the new normal" which is that a backend developer needs to be able to deploy, monitor, manage, make security updates and so on so forth. Again, look up backend job ads, you'll come to the same conclusion.

<h2>How is serverless any different?</h2>

Serverless will still have you learn and use a bunch of the same frontend frameworks but it will take away the pressure of doing all the backend, management, plugging of security holes, etc. This will allow you to focus on the app, the UX, UI, and the business logic while everything else will be served on a platter.

<h2>Coca-cola ❤️ Serverless</h2>

Back to the topic at hand, let's see how Coca-cola uses serverless to improve their service.

Their vending machines that you find around the globe have an integrated communication system with the Coca-Cola HQ. This is how the guys servicing those machines know if a particular machine is running low on a beverage or if something is broken. The same system is used by the marketing teams that can create campaigns like "Buy one get one free" or the ones where the user gets credit for every Coke product he buys.

To start comparing the two options, infrastructure as a service vs functions as a service let me explain what Coca-cola was doing before serverless. Their oldest vending machines (the ones with the functionality I mentioned above) are about 10 to 12 years old. Up until 2016 they had been using 6 EC2 T2.Medium machines that cost them $12,864/year to operate. This included Automation, Ealastic load Balancer, Management, Security, etc. Within this, close to $13,000 they got everything they needed to run those vending machines for a year. 

Ater moving to a serverless framework, adding up the costs for all the features they needed, it came down to $4,490/year. This was calculated for the 30 million requests they were getting at the time. Connor stated at AWS <a href="https://reinvent.awsevents.com/">re:invent</a> that the break-even point, where having infrastructure as a service would even begin to make sense would be around 80 million calls per month. That's 3 times what they were expecting to get at the time.
</br><br>
<center><h4><i>Coca-cola went from $13000 per year to $4.500 per year after switching to serverless</i></h4></center>
<br><br>
![Coca-Cola Serverless case study](/images/blog/2018-07-04/coca-cola-serverless.jpg)

<h2>So how does it actually work</h2>

The logic behind the vending machines is quite straightforward. The client buys a drink, the machine calls the payment gateway(which so happens to be a Coca-cola Partner) to verify the purchase which makes rest API call to the AWS API Gateway which triggers a lambda. The AWS Lambda will handle all the business logic behind the transaction. If a user initiated the transaction through a mobile device there's a 5th step involved which is to do a push notification to their phone submitting the information to Android Pay or Apple Pay.

![Coca-Cola Serverless case study](/images/blog/2018-07-04/coca-cola-serverless-setup.jpg)

Another impressive aspect of their serverless implementation is that all that communication happens in less than 1 second and they only have to pay when they have an actual request.

<h2>The conclusion</h2>

Serverless has been such a big step forward for The Coca-Cola company that they have made it so when you have an idea in the company and you take it to the architecture review board, your idea has to be based on serverless. 

Right now they are forced into using both the EC2 instances and the newly developed serverless system until they replace the old vending machines with a newer model that work on serverless. Basically, they will have to support the old machines with the 6 EC2 instances that cost $12K a year for the foreseeable future or until the oldest vending machines can be "sunset". 

With Serverless this will never happen. Imagine for a second ten or twenty years from now when they'll switch a different system(not sure they'll ever do that but for the sake of the argument let's imagine a scenario like that). As the serverless vending machine die off the cost will decrease to the point where if they have less than 1 million requests per month they will get their cost down by 99%. 

I personally look forward to hearing more from Coca-Cola and how they implemented serverless within their organization. And while I'd love to keep writing this article but I have to run down to the store because, for some reason I have this unexplainable urge to drink a crisp cold bottle of Coke.