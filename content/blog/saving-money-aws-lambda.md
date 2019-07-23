---
title: How to save a lot of money on your Lambdas with Dashbird
description: Serverless as an arhitecture is a great way to save money but you have to keep an eye out on those AWS Lambda costs beacause they can climb quickly.
date: 2019-07-18T12:00:00.000Z
frontImage: "2019-07-18/fabian-blank-pElSkGRA2NU-unsplash.jpg"
thumbnail: "images/blog/2019-07-18/fabian-blank-pElSkGRA2NU-unsplash.jpg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
blog: ["alerts", "Lambda"]
---

We’ve talked about how serverless architecture is a great option for companies that are looking to <a href='https://dashbird.io/blog/saving-money-switching-serverless/'>optimize costs</a> and moving from a traditional server to serverless can get amazing results. For most companies, making the infrastructure swap to serverless takes some convincing but I’m extremely happy to see so many companies going with serverless in the past couple of years.

Just like with everything else, monitoring the performance of your implementation is crucial and we, the folks at Dashbird, understand this need all too well. This is why we’ve spent the better part of the past year and a half to create a monitoring and observability solution that won’t be the one-trick pony we’ve been accustomed to from the services that were available at the time.

One of those important features for serverless users is the cost monitoring solution that Dashbird offers. I’ll walk you through how it works and how you too can use this to your advantage.

<img src="/images/blog/2019-07-18/lambda-cost-overview.png">

If you don’t have a Dashbird account, you’ll need to get one before anything else. Luckily that’s not going to cost an arm and a leg because you can <a href='https://dashbird.io/register/'>get Dashbird for free</a>.

Before we jump straight in, let’s take a second to discuss how does the AWS Lambda pricing actually work. You get one million invocations for free and 3.2M seconds of compute time, every month and you only pay for the invocations you use on top of those. Now you may think that’s a lot and if you are developing your product or service, that’s going to be enough. The production environment it’s going to be a different story alltogether as that million invocations go by extremely fast. 

For every individual invocation, you pay $0.0000002 but it’s important to note that duration plays an important factor too as you’ll have to pay about $0.0000166667 for every Gb/s after that.

I know those numbers have enough zeros to make the AWS Lambda promise of cutting down your server bills seem amazing but the truth is, they add up really quick. Because of the nature of the serverless architecture, you’ll split every functionality into small little functions that do one thing and return the result so the number of execution will be high.

<h2>How do we keep Lambda costs down?</h2>
There are a few ways to get those costs down, from reducing cold-starts, optimizing memory utilization to picking a runtime that better fits your needs.

<h3>Reducing cold stats impact</h3>
We’ve already established the way AWS Lambda works and is priced so is going to be of no surprise to anyone when I tell you that cold starts are going to be expensive since you’ll have to pay for the time it takes to spin up those containers.

There a couple of ways to address these but let’s first look at how you go about seeing which functions have a cold start issues and how much of an impact does it really have. 

So let’s jump into the app and look how easy it is to identify cold-starts using Dashbird. You login into the app and jump in the Lambda view and look on the right side of the screen. From here you can filter out only the cold starts.

<img src='/images/blog/2019-07-18/lambda-filter.png'>

The little anomaly icon you see next to each function is a cold-start.

Now that we have a simple way to identify our cost increasing cold-starts, we need a way to address them. 
<h3>Use a runtime that boots up fast</h3>
One of the most popular ways of dealing with cold-starts is by using a runtime that has faster bootup and right now the fastest way to do that is by using Python. Based on a simple benchmark Nathan Malishev did a while back, it’s clear that Python is the clear winner.

<img src='https://miro.medium.com/max/2000/1*ucO5VGFTt2ZYqrWHTAC0KQ.png'>

<h3>Use HTTP calls instead of HTTPS</h3>
<a href="https://medium.com/@serkan_ozal?source=follow_footer--------------------------follow_footer-">Serkan Özal</a> has looked into this claim and using a simple function that accessed Dynamodb, he concluded that using HTTP instead of HTTPS is a lot faster, especially when using Lambdas with lower memory settings since the transaction is much simpler.
 
<img src='https://miro.medium.com/max/1400/0*Rnc2YD0jA_5O7_tf'>

<h3>Bumb up the memory limit</h3>
This might seem counterproductive to the already established goal of saving money on your Lambdas, but since you get charged by execution, it might make sense to increase the memory of your function thus having it execute a lot faster. Lambda containers also spin up considerably faster when the function has more memory so while this is probably not a universal solution to the cold-start issue there are some cases where this might make a lot of sense.

<h3>Downgrade the memory of your functions</h3>
Sometimes we overestimate the memory needs of a function and instead of upgrading by small memory increments we throw caution into the wind and go big. Since AWS Lambda has a linear pricing model, 1024mb is 8 times more expensive than 128mb and 3008mb is 24 times more expensive than 128. So you can imagine a scenario where you could cut the cust down 10x or even more just by making small memory adjustments.

Let’s jump back to our Dashbird Lambda panel to look at execution speeds of our functions. After a few seconds, I see a function that looks suspicious. 

<img src='/images/blog/2019-07-18/lambda-memory-use.png'>

As you see in the screenshot, our function using only 3% out of the 1024mb of RAM allocated. This seems like the perfect example of what I just described above. Before I jump into my AWS console and take drastic measures I’m going to take a little bit of time to look at multiple invocations of the same function over several days to make sure that I’m looking at a one-off or some sort of exception to the rule. 

I quickly filter out this function and compare all the other invocations I see there and I can easily tell that this function is using up to 6% of the memory allocated so I’m comfortable reducing the memory of that function to 128MB saving me about $25 a month on this functions alone. Now imagine doing this for 10, 25 or 100 functions. It adds up.

<h3>Decrease Lambda execution time</h3>
We’ve talked about how Python is great at reducing boot-up times for your containers but as it turns out, for overall execution speed for warm containers Python might not be the best choice.

<a href="https://read.acloud.guru/@yunspace?source=follow_footer--------------------------follow_footer-">Yun Zhi Lin</a> wrote an excellent benchmark on this very subject where he went through all the runtimes available for AWS Lambda and compared the execution duration of each one. As it turns out, .Net Core 2.0 wins the race by a good margin with Node and Python coming in second and third. 

<img src='https://miro.medium.com/max/1400/0*1YuoubeiC1RDxWvG.'>

---

I hope I’ve been of some help shedding some light on the different ways to cut costs for AWS Lambda and while these might be some of the most popular ways for developers to scale down those AWS bills, I’m sure these are not the only ones. If you have a good trick to save money on AWS Lambda I’d love to hear it!
