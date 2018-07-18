---
title: "Companies using serverless in production"
description: What are the biggest companies using serverless in production right now.
date: 2018-06-27
frontImage: "16-04-2018/dashbird-concurrency.jpg"
thumbnail: "16-04-2018/dashbird-concurrency-thumbnail.jpg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.png'
category: "Serverless, Other"
---

Every couple of days you read about the "next big thing in [enter technology name here]" and it's hard to tell if there's anything behind those claims. Yet, I often suffer from a terrible affliction called FOMO - fear of missing out - which makes me spend hours upon hours testing the technology only to find it completely useless and nothing to show for my efforts.

So how can you tell that that new thing you just found out about will stick around for a while? Well, I found that if a technology gets picked up by a big company that usually means it's here to stay. Using the same logic I've put serverless to the test. Here are a few companies that use serverless right now.


![Netflix using serverless](/images/blog/2018-06-27/netflix-serverless.jpg)
<h2><a href="https://netflix.com/">1. Netflix</a> </h2>
You heard that's right kids, our favorite past time activity provider is using serverless to serve 7 billion of video hours to 50 million customers in 60 countries. EVERY. QUARTER. Now while I won't pretend to understand the intricates of the Netflix infrastructure I will point out that they rely heavily on AWS Lambda to run tasks that would otherwise take up a lot of computing process and even more time to build. The Cheif Product Officer at Netflix had a talk at AWS Re-invent where he spoke about the different ways they use serverless in order to provide the best on-demand video streaming service out there (biased alert).

<iframe width="100%"  height="400px" src="https://www.youtube.com/embed/hU25CIRPIJo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


![Codepen using serverless](/images/blog/2018-06-27/codepen-serverless.jpg)
<h2><a href="https://codepen.io">2. Codepen</a></h2>
Codepen has been around since 2012 and has quickly become a standard for web developers. People use it to share pieces of code and examples that help newcomers get a jump start in their development career. 
Right now Codepen servers up to 200 000 requests per hour and while that is impressive, what surprised me is the fact that all their infrastructure is run by a one-man DevOps team.
What better way to learn about the wonders of serverless than from the horse's mouth, to that end, here's <a href="https://blog.codepen.io/2018/02/06/160-serverless/"> a podcast</a> made by the guys over at codepen.io talking about serverless.


![Zalora using serverless](/images/blog/2018-06-27/zalora-serverless.jpg)
<h2><a href="https://zalora.com">3. Zalora</a></h2>
Zalora is one of the biggest fashion stores in Asia employing around 1500 people with a user base of over 20 million users.
They have a cool mission statement: "fashion on demand, 24/7 at your doorstep". They rely heavily on AWS and Lambda to make sure every customer gets access to the website and apps without worrying about scaling issues.
I like to quote their CTO whenever I have the chance as it points out something that most companies will come to realize in the not so distant future.

<i>"We outgrew what the server world offered to us and it was the right time for us to switch over to a provider like AWS" </i  >-- <strong>Karthik Subramanian - CTO at Zalora</strong>

![Coca-Cola using serverless](/images/blog/2018-06-27/coca-cola-serverless.jpg)
<h2><a href="http://www.coca-cola.com/">4. Coca-Cola</a></h2>
This came as a surprise to me as I was under the impression that big companies don't look at the infrastructure cost and think, "how can we cut costs?". Coca-Cola started migrating to serverless back in 2016 and while they are still in the process of moving everything in the cloud, they are still using traditional servers to service their old technologies but this will only happen until they can "sunset" the older machines. At AWS Re-invent, Coca-Cola's Michael Connor talks about how a few case studies they made where the result was clear that by using serverless they would cut down costs by 65%.
<iframe width="100%"  height="400px" src="https://www.youtube.com/embed/yErmil00DYs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

![Nordstrom using serverless](/images/blog/2018-06-27/nordstrom-serverless.jpg)
<h2><a href="https://shop.nordstrom.com/">5. Nordstrom</a></h2>
Nordstrom is an  American-based chain of department stores, headquartered in Seattle. The company was founded over a hundred years ago and has been on the innovation side of technologies every since. They started switching from data-driven applications to event-driven applications and have been really pushing the envelope with the creation of an open-source proof-of-concept Serverless architecture retail store called Hello Retail. Rob Gruhl talks to This is my Architecture, an AWS community show about how they are using AWS Lambda to create an event-driven app.
<iframe width="100%"  height="400px" src="https://www.youtube.com/embed/O7PTtm_3Os4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

These are just a few of the companies that have already switched server technologies, from traditional servers to serverless infrastructure. Of course, this is by no means a reason to think traditional servers will disappear but having big companies make the jump does point to a not so distant future where serverless will be the go-to technology for deploying enterprise applications. We, the folks at <a href="https://dashbird.io">Dashbird</a>, are proud to stand next to business giants in our belief that the future is serverless</strong>.