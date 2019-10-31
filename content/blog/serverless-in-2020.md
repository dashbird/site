---
title: What to expect from serverless tech in 2020?
description: This is where I see serverless technology be next year
date: 2019-10-30T12:00:00.000Z
frontImage: "2019-10-28/future-of-serverless.png"
thumbnail: "images/blog/2019-10-28/future-of-serverless.png"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
blog: ["Lambda"]
---
There's no sure-fire way to tell whether or not serverless tech is going to grow or even be around next year. 

Every post-apocalyptic movie has thought me that technology is the first thing to go after a catastrophic event happens. And if that happens we'll have to return to some ancient tech like ** *knock on wood* ** containers.

![Ancient tools](https://thepracticaldev.s3.amazonaws.com/i/8dds2n2iv6um40pb38kr.png)
<center>Real life photo of period-correct developer tools :)</center>

Ok, jokes aside, the consensus is that serverless is going to keep growing as it has been for the past few years. We'll see more companies make the swtich from traditional servers to jump on the bandwagon as more and third party services pop-up around the serverless ecosystem making it easier to move, develop and monitor your applications.

## What do I expect in 2020 from serverless?

### Cross-platform
Personally, I look forward to seeing a solution that allows developers to go multi-platform with ease. Imagine being able to pick and choose your favorite services from different vendors and have them work in perfect harmony without having to jump through impossible hoops.

Yes, I know it's more of a pipe dream for now with all the different pricing methods, unsupported platforms. I get it. All I'm saying is that next year I'd like to see some progress being made in this direction. Call it cloud centralization or vendor globalization, call it whatever, as long as it helps us build better applications.

### Hybrid serverless systems
We've seen this happening more and more this past year and 2020 will be no different. Since FaaS is not a one size fits all kind of deal it stands to reason that in some scenarios a mix between EC2(for example) and Lambda would make the more sense. Tasks that take longer to execute and have a tendency to repeat does make a better fit for a container rather than on a FaaS.

Big companies like Coca-Cola and Netflix have already done this successfully in the past and more are following in their footsteps.


### Different implementation of serverless
We've seen Alexa and Polly and how they use AWS Lambda and serverless technology but I expect next year will see a more diverse use case for serverless that goes beyond simple APIs.

I expect more and more critical application tasks to be handled by services like Lambda and since the good folks at Amazon are spending soo much time making sure our cold starts do not impact our services(as much) we'll probably start seeing more user-facing functions.

### Observability in 2020
Since I work for Dashbird, this particular subject should be easier to talk about but it's not. We work closely with hundreds of developers around the world from small agencies to Fortune 500s we get a lot of great feedback on what we are doing right and what we should be doing and let me tell you that the second list is big. Very big.
That's a good thing. That's the kind of feedback that keeps us going forward and pushes the product into the right direction.

Based on the feedback we got, one thing is clear. There's a need to have a better overview of all your resources, not just AWS Lambda. Next year will see observability and monitoring services built around serverless that expand beyond serverless and map the entire system rather than a subset that's built on a specific technology. 

Basically what this means is that you'll log in into your favorite monitoring and observability platform and see everything in one place, from your DynamoDB, ECS, Lambda, API gateway, etc. But since there are a lot of people already using a combination of infrastructure from AWS, Microsoft, Google, and others I believe we'll see monitoring solutions that will allow you to keep an eye on all the resources regardless of the service provider.

### Education
When I started playing with AWS Lambda a couple of years ago I had a tough time finding courses or proper tutorials to get me going. It took me a while (waaay too long) to understand this paradigm (yeah, I know fancy words too) shift and what it means or how to properly apply it into real-life working applications.

Even now, I feel like there are lot of misconceptions about serverless. People still look at it as a silver bullet to every traditional setup ever and when they run into something that contradicts their initial assumptions they turn a complete 360 and avoid the thing altogether.

And there's the whole security thing. <a href="https://dashbird.io/blog/security-in-serverless/">Securing serverless applications</a> is a whole different type of beats than the traditionally hosted applications in the sense that now you have to take in account the granularity of your infrastructure and how to balance the surface of attack being bigger but the time that that window is open is limited to how long will your function live.

--- 

Now I'm sure most of y'all have a different list of things you look forward to and I'd love to hear them so leave a message down below or hit me up on twitter <a href="https://twitter.com/JohnDemian">@johndemian</a>.