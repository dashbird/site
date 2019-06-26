---
title: State of Lambda functions in 2019 by Dashbird
description: If you haven’t tried out Dashbird yet and would like to follow along, feel free to try Dashbird out yourself.
date: 2019-06-20T12:00:00.000Z
frontImage: "2019-05-10/wPrCjOGF.jpeg"
thumbnail: "images/blog/2019-05-10/wPrCjOGF.jpeg"
authorlink: 'https://medium.com/@martlaul'
author: Mart Laul
author_image: '/images/team/mart.jpg'
featpop: most-popular
blog: ["AWS", "Serverless", "Other"]
---

Ever wondered what's under the hood of your neighbors' car, the situation in their wallet or the configuration of their serverless stack?

Well wonder no more! Today we will bring you the statistics of Dashbird so you could compare your Lambda functions with others. Unfortunately, the car and the wallet thingy you should figure out on your own :(

Let's start... (I hope you like charts)


## So how many functions do they have?

Out of 3000+ active Dashbird users, the average AWS account has <strong>123 functions</strong> in total.

## OK... pretty cool. But what about their runtime?

![Runtimes](/images/blog/2019-06-20/runtimes.png)


Seems that we have some Node.js people here at Dashbird.


## The most popular regions are still us-east-1 and eu-west-1

![Regions](/images/blog/2019-06-20/regions.png)

As expected, us-east-1 and eu-west-1 are trending regions in Dashbird. But the cool fact is that over half of the Dashbird accounts use more than one region and almost 10% more than three regions.

## Now, let's look into the functions

We compared the performance indicators of the Lambda functions per runtime. Take a look at the results below.  

![Code size](/images/blog/2019-06-20/code-size.png)

![Memory Size](/images/blog/2019-06-20/mem-size.png)

![Timeout](/images/blog/2019-06-20/timeout.png)

As we all know, Java takes lots of time to boot up, but once done it will operate like a charm.  


## X-ray is used by 17% percent of the times

![X-Ray](/images/blog/2019-06-20/xray-usage.png)

## How often do people modify their functions

![Function Change](/images/blog/2019-06-20/function-change.png)

## Conclusion

Next time we will bring you the statistics of errors, coldstarts, invocations, cost etc. Stay tuned! Meanwhile, you can sign up for a Dashbird account <a href="https://dashbird.io/register">here</a>.
