---
title: Running an e-commerce website on serverless
description: Getting started with serverless for e-commerce with a quick tutorial!
date: 2018-05-29T01:00:00.000Z
frontImage: "14-02-2018/optimize-lambda-cost.jpg"
thumbnail: "images/blog/14-02-2018/e-commerce.jpeg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
blog: ["Serverless", "E-commerce"]
---

<!-- add this above the ---
# canonical: https://addcanonicalurlhere
-->

![E-commerce store on a serverless platofrm](/images/blog/14-02-2018/e-commerce.jpeg)

Yessiree Bob, you heard that right. The next big step towards the future of e-commerce is serverless technology. The e-commerce space has, for years, been in need of an alternative to the regular hosts as they are really not really viable passed a certain point, mainly because of this two reason:

### 1. Hosting cost ###
Anybody that ran a business selling goods or services online(or offline) knows that margins are everything and every penny you spend will cut into those margins, hurting your business. 
What usually happens is that store owners calculate the pricing of their products based on the manufacturing costs, shipping and marketing leaving very little overhead for the infrastructure. So when they inevitably decide to spend more on ads, they don't really expect that they have to spend more on hosting. 

The more people see the ad, the more traffic your sites get. More traffic = bigger servers. It's that simple.

![Online store will need to evolve](https://i.imgur.com/WopDvYB.png)
Image credit to getshifter.io


### 2. Scaling ###
It doesn't take a genius to realize that you'll need to support your growing base of customers and to do so you need a server who can accommodate a large number of concurrent users. This is done through various methods but none are perfect and prone to errors. Truth be told, regular serves just don't scale gracefully and making them do so requires a lot of attention and a lot more money.

Serverless will get you the graceful scaling that your store needs while keeping the costs down.

Whenever the serverless discussion comes up when I'm around "e-commerce people" I always use a cautionary tale about this German show called [Dragon Den](https://www.bbc.co.uk/programmes/p05yffn3) in which budding entrepreneurs get three minutes to pitch their business ideas to five multi-millionaires willing to invest their own cash. In one of the more recent episodes, a guy walked in with an interesting idea but as soon as he started talking about the website everyone jumped on the website and before the investors got a chance to see the site it had crashed.

You'd think this is something that most websites won't go through but you'd be surprised how many store owners struggle with this very problem. And before you ask, no, this is not a problem that only small websites with cheap hosting have. This is such a problem that even the likes of Bestbuy or Cabela have faced and let me tell you, losing a couple hundred thousand dollars because your website goes down on Black Friday ain't pretty. Somebody is getting yelled at in the morning!


*Poor website performance is now measured in terms of lost customers and revenues - Tom Lounibos, CEO, SOASTA*


### 3. Selling from the cloud ###
Now that's a phrase with an odd ring to it yet there's a hard truth behind it. Moving your operations to the cloud hasn't really been an option before now but we've seen [Zalora](http://zalora.com/) doing it, and I'll link to a case study talking about just that. We've seen an increasing number of smaller companies moving their shops on [AWS](https://dashbird.io/blog/serverless-aws-lambda-terms-meanings/) and never looking back. And why should they? With lower costs, better scaling and without the constant, impending doom of your website crashing exactly when it's not supposed to (and for the sake of argument, the time to have your website crash is never!).

For anyone thinking that this might be a terribly hard thing to do here's a simple tutorial on [how to build your e-commerce store on a serverless platform](https://yos.io/2017/06/22/serverless-stripe/). This example uses Stripe and AWS Lambda to run your entire operation but of course, and while it is a simple version of what you'll end up using it's still, a fully functioning store in 5 minutes. That is remarkable!

___

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about these improvements and new features! We would really appreciate it!_

_Sign up to our newsletter to get all the latest news and tutorials on serverless._