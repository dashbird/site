---
title: How Much Money Can You Save By Going Serverless?
description: One of the biggest arguments (among many others) for going serverless is the dramatic cost reduction you experience.
date: 2018-04-17
frontImage: "17-04-2018/saving-money-serverless.jpg"
thumbnail: "images/blog/17-04-2018/saving-money-serverless.jpg"
authorlink: 'https://twitter.com/annikahelendi'
author: 'Annika Helendi'
author_image: '/images/team/annika1.jpg'
blog: ["Serverless", "Other"]
---

One of the biggest arguments (among many others) for going serverless is the dramatic cost reduction you experience. Since the whole gist of serverless is that you only pay for the time your code is executed, it will result in significantly lower AWS bill (in most cases). Sounds too good to be true? Let's see what some early adopters of serverless have said about it:


### 90% cost reduction on a small non-mission critical application ###


<a href="https://medium.freecodecamp.org/how-i-cut-my-aws-bill-by-90-35c937596f0c" target=\_blank>Avner Sorek</a> has shared how he moved a simple Express.JS application (a side project with 50-150 daily visits)  —  from AWS Elastic Beanstalk to Lambda+APIG. The whole migration took less than a day and it resulted in a ~90% reduction of costs - from $44.95 to $6.12 per month. See the graph below:


![Libhive saving money](/images/blog/17-04-2018/libhive-aws-cost.png)


*Anver's website is called <a href="https://www.libhive.com/" target=\_blank>libhive</a> and it's built in Node.JS with ExpressJS, and backed by DynamoDB.*


### AI application reduced monthly AWS bill from $30 000 to $4000 ###


<a href="https://read.acloud.guru/how-going-serverless-helped-us-reduce-costs-by-70-255adb87b093" target=\_blank>Mohsiur Rahman</a> from Heavywater writes how their previous infrastructure kept getting more and more expensive for them: *"Even with most of our EC2 instances sized as t2.micro, our AWS bills kept increasing. In the span of just 4 months, our monthly bill increased from $10K to $30K with over 1,000 EC2 instances running."*


Just by going serverless, their infrastructure costs went down to $4000 from close to $30 000 at one point. See the graph below:


![Heavywater saving money](/images/blog/17-04-2018/serverless-cost-reduction-heavywater.png)


*<a href="https://www.heavywater.com/" target=\_blank>Heavywater Inc</a> is using artificial intelligence virtual assistants to offer business process outsourcing.*


### Serving 39 million requests for $370/month (instead of $10 000) ###


<a href="https://trackchanges.postlight.com/serving-39-million-requests-for-370-month-or-how-we-reduced-our-hosting-costs-by-two-orders-of-edc30a9a88cd" target=\_blank>Adam Pash</a> writes how he solved a $10 000 per month hosting bill problem at <a href="https://postlight.com/" target=\_blank>Postlight</a> by going serverless (running on AWS Lambda and API Gateway, built and deployed using the Serverless framework).


They used AWS Lambda for everything -  *"from parsing the web to writing Slack bots; from batch resizing hundreds of thousands of photos in parallel to batch transcoding hundreds of thousands of videos."*

### Conclusion ###

Serverless technology is still fairly new and an uncharted territory for the majority of technology companies, but all the early adopters that have embraced it, are very happy with their choice.


These 3 case studies above are clear indicators how switching to serverless can save you a ton of money. At the same time, serverless isn't a "one-size-fits-all" and the experiences with cost reduction might vary based on the application type. If you have your story to share,  just let us know in the comments below!

---
*NB: if you want to optimize your costs and application performance even further, make sure you check out [Dashbird!](https://dashbird.io)*
