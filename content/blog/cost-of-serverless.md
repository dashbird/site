---
title: The great serverless cost debate  (Serverless = Costless)
description: Is having a serverless framework cheaper than having a server? It just might be. Let's have a look and findout.
date: 2019-01-09T12:00:00.000Z
frontImage: "2019-01-10/banking-business-cent-332304.jpg"
thumbnail: "images/blog/2019-01-10/banking-business-cent-332304.jpg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
blog: ["serverless", "Lambda"]
---

If you're worried about switching to a serverless framework being too expensive for your business, you're not alone. Total spending on cloud services will top $284 billion by 2024. The good news is there are many ways to track and lower the costs of your serverless operation without slowing down your business.

So what is AWS Lambda and how can it help your business? Find out more by reading these <a href="https://dashbird.io/blog/aws-lambda-faq-for-dummies/">frequently asked questions</a>.

<h2>Working with Amazon</h2>
AWS meaning Amazon Web Services is Amazon's cloud computing business. AWS serverless is just going into its fifth year in use.

Because outsourcing computing power is still so new, it still has many tech workers asking, "<a href="https://dashbird.io/knowledge-base/basic-concepts/what-is-serverless/">What is serverless?</a>" How could using someone else's servers be efficient or cost effective? Let's talk about the top reason businesses are switching to serverless infrastructure.

<h2>No More Paying for Idle Servers</h2>
The best part of the serverless framework is that you only pay when your users are online. Your business will have as much computing power as it needs without having to buy new equipment when you grow. A new app can handle the same amount of traffic as if it had a fully equipped server room.

But small businesses aren't the only ones going without servers. Let's go over how big businesses are making the change. Bustle, an online publication with over 30 million unique visitors a month, started their new brand Romper entirely on serverless architectures.

So why does that matter to you? Well, for starters, <a href="https://aws.amazon.com/solutions/case-studies/bustle/">Bustle</a> has seen its I.T. spending drop by 84%. A big part of that is that their maintenance crew is only about half the size a comparable website would need if they were managing their own servers.

Since your team doesn't manage the servers, your provider will charge only when users are requesting data from the server.

<h2>How Requests Work on a Serverless Framework</h2>
AWS Lambda counts a request as an event notification or call invocation. Even when testing your app's features from the console, these tests count as requests. Let's take a look at how much requesting data costs:

The good news is, your first 1M requests are free. So are the 400,00 GB-seconds of computing time that come with every account.

All following requests come in at $0.20 per 1M requests and $0.00001667 per GB-second after going through your free usage. But are there other costs you should consider? Yes, here's a look at other reasons your bill is higher than normal.

<h2>Are You Using Other Services?</h2>
Many businesses new to serverless infrastructure are often surprised by extra fees. Let's take a look at how transferring data from other services on the cloud add to your monthly requests. These other fees include:

If you are storing data on Amazon's s3 service that Lambda will be reading from, these count as requests.
EC2 data transfer rates apply when your app initiates external transfers
Using Amazon DynamoDB for reading and writing storage incurs requests
So for example, you set 512 MB of memory to your function. Let's say users execute your functions 3,000,000 times in one month. What would your cost be?

> $18 for 3 million invocations is a great deal!

Just $18.34 for 3 <a href="https://aws.amazon.com/lambda/pricing/">million requests</a>. But that's a lot of data transfer. How can you keep track of everything and manage crashes?

Coca-cola North America has switched from EC2 to serverless a while back and was kind enough to <a href="https://dashbird.io/blog/serverless-case-study-coca-cola/">share</a> their experience with us. Coca-cola went from $13000 per year to $4.500 per year after switching to serverless. 

<h2>"How Do I Keep Track of All This?"</h2>
Monitoring Lambda functions is a growing issue among serverless users. Just like it's easy to lose track of how much data you use on your phone, tracking your requests can be confusing.

Let's start with reading your dashboard. AWS has some basic tracking services built into Lambda. These services include:

Spend Summary. Your spend summary is a great way to forecast future use of Lambda. You can see how much you spent last month, an estimate of this month's use, and a prediction of how much you'll use the next month.
Month-to-Date Spend by Service. This shows which AWS services you use most and the percentage of your budget going towards each.
Month-to-Date Top Services by Spend. Also shows the services you use most with a break down of their costs.
These tools are fine for free tier use, but when you have multiple Lambda functions there is a better option.

This is where <a href="https://dashbird.io/blog/simplest-way-to-monitor-failures-in-aws-lambda/">serverless trackers</a> make things easy. Serverless trackers show the status of all your Lambda functions in one place. It allows you to make data-based decisions on how to interact with your customers.

<strong>These are some of the ways a tracker will visualize costs:</strong>

With Dashbird.io you can track the cost for any particular project from the main screen allowing you to see exactly how many dollars you are spending for your AWS Lambda. Furthermore, you can see the individual cost for each of your function as well as other important information like execution time, invocations, errors, etc. under the Lambda functions view section.

<center><img src="https://dashbird.io/images/features/2d-per-function@2x.jpg"></center>

<h2>How Outsourcing Your Servers Saves You Money</h2>
So now that you know how pricing works and how to keep track of it all, let's talk about some other ways serverless saves you money.

No upfront cost with serverless. Without cloud computing, the only other option is to buy servers before creating a new app. This means more waiting time for an ROI on your servers.

Scaling is much cheaper. Instead of buying more servers and hoping they provide the capacity you need, you can just pay for how much you use, without worrying about your system crashing.

> You don't pay for maintenance!

Now being forced to hire a big DevOps team is a huge cost saver for companies. There's a lot of examples of companies that managed to run apps with millions of people with only two developers behind the scenes by switching their infrastructure to AWS and relying on them to handle the day to day maintenance operations. No more sleeping with one eye opened, fearing those midnight crashes.

<h2>Cold Starts on a Serverless Framework</h2>
Speaking of crashes, serverless presents a unique problem in the form of <a href="https://hackernoon.com/im-afraid-you-re-thinking-about-aws-lambda-cold-starts-all-wrong-7d907f278a4f">cold starts</a>. The first invocation of your lambda function will take some time to execute since the container needs time to spin up.

With the traditional computing methods, every request gets put in a queue and will be served one by one. With Lambda every request gets served at once, provided they don't run into the concurrency limit. This in itself is probably the main reason why people get so excited over this technology. The fact that with serverless you can server 10, 100 or 1000 people at once without breaking a sweat, your application gracefully scaling in order to fit the needs of your users.

<h3>So why do cold starts happen anyway?</h3>
In order to create this beautiful scaling that I keep yammering about, the unused Lambda containers get destroyed after a period of time. We've gone ahead and tested the time to deletion and found out that it seems to be anywhere from 40 to 60 minutes of inactivity. Now if this wasn't clear up until now, cold starts are necessary in order to allow AWS to pretty much infinitely scale our Lambdas. Old containers make room for the new ones. 

Not everyone will get bothered by those cold starts but for the ones that are there is one way to prevent this and that is by warming up your APIs, especially if you are expecting a rush of customers. For example, a restaurant that uses their app to accept orders can send a rush of concurrent requests just before lunch rush so less of their users will experience lag.

You can also write your code in languages with a low cold start time. A few languages that react fast to first requests are node.js, python, and go.

If your app is experiencing a lot of cold starts, try increasing your memory limits. Although it will cost more, you may be losing customers to long wait times.

It's important to know when and how often your cold starts happen, and if need be, use that knowledge to make adjustments in order to create a better experience for your users. I use Dashbird's function view to filter out cold starts and make note of how often they appear.

<center><img src="https://dashbird.io/images/features/error-aggregation@2x.png"></center>

<h2>"Will I Save Money With a Serverless Framework?"</h2>
We've gone over some of the ways to figure out how much money serverless framework will cost. While not costless, serverless is hard to beat in terms of upfront and maintenance cost. Anyone wanting to get their app up and running ASAP should consider using a serverless provider.

The deciding factor if you're still on the fence should be whether your business can continue to compete while taking longer to deploy new features to your app. If the answer is no, then going serverless could put you in the right direction.

Running back-end operations is a business in itself. That's why it makes sense to switch to a serverless provider and focus on what your business does best, better experience for your users, not I.T. <a href="https://twitter.com/AnnikaHelendi">Annika</a> wrote a great <a href="https://dashbird.io/blog/saving-money-switching-serverless/">post on</a> how much you could actually save by switching to serverless and I recommend you go see for your self how big of a difference it actually makes.
