---
title: Serverless Influencers Share Their Predictions And Insights For 2018 And Beyond
description: We asked the top serverless influencers what they predict for the future, who are the biggest winners/losers and how they would push the community forward.
date: 2018-05-16T01:00:00.000Z
frontImage: "2018-05-16/conference.jpg"
thumbnail: "images/blog/2018-05-16/conference.jpg"
authorlink: 'https://hackernoon.com/@AnnikaHelendi'
author: Annika Helendi
---
![AWS Lambda With Node.js v.8.10](/images/blog/2018-05-16/conference.jpg)

Serverless adoption has become a popular topic of discussion and the methodology seems to be gaining more and more traction every week because of its massive <a href="https://hackernoon.com/serverless-survey-77-delivery-speed-4-dev-workdays-mo-saved-26-aws-monthly-bill-d99174f70663" target="blank">business benefits<a/>.

A growing community of enthusiasts has emerged and we wanted to find out what these serverless evangelists predict for the future - when will serverless computing become the norm, who are the biggest winners/losers and  how to get more people to try it out?

_These are unedited interviews, if you want to read a summary of it - go read this article! (link)_
___



![David Wells, serverless architecture influencer](/images/blog/2018-05-16/david-wells-dashbird.jpg)
# <a href="https://davidwells.io" target="blank"> David Wells</a>
**Full Stack JavaScript Developer & Entrepreneur. Developer <a href="https://serverless.com" target="blank"> @Serverless<a/>**

## Do you think serverless computing will become the norm? If yes, when? If no, why?

_Yes. Serverless computing will become the de-facto way folks will build apps in the future. At Serverless Inc., we are already seeing large enterprise companies running massive workloads through tiny lambda functions._

_AWS always does a great job at highlighting companies who are using lambda & other serverless offerings at their Re:invent state of the serverless union talk. I recommend watching it._

## In your opinion, who wins the most from the adoption of serverless technology?

_The devs using it._

_Having to not worry about scaling, load balancing, security patches etc. make serverless a fantastic way to build robust applications with minimal DevOps._

_Cost in the typical cost savings from a pay per execution pricing model of FAAS providers and you got a no-brainer._

## Who has the most to lose from the adoption of serverless technology?

_The container world & tooling around containers certainly will start seeing the effects as serverless tech gains more prominence._

_But that being said, there are a number of serverless FAAS providers that run on top of Docker/Kubernetes. There are also certain workloads that don't make sense in a FAAS world and containers + container orchestration tools, I believe, will be around for a long while yet._

## What's your boldest prediction for the state of serverless by the end of 2018?

_We will start to see dramatic reductions in "cold start" times and the developer tooling around many FAAS providers will become much more solid._

## How to get more people involved with serverless architecture?

_I think the easiest way to get people started with serverless is to have them identify something non-mission-critical to port into a FAAS provider of their choice._

_Once they see how easy it is, they can often take that POC and expand it into many facets of their organization._

_Approaching upper management with a proposal for a big bang rewrite on any tech is typically shut down within seconds. It's much more easier to start small, see the benefits from a smaller project, and expand serverless tech into other areas of the business._

_If you're interested in getting a baseline in how serverless works with AWS lambda, I have an <a href="https://github.com/DavidWells/serverless-workshop" target="blank"> open source step by step workshop for people to check out.<a/>_

## Bonus question: is there anything else you would like to share?

_Serverless to me is an auto-scaling, event-driven architecture, where you never pay for idle functions, the system is implicitly fault tolerant and functions are the unit of development & deployment._

_There is also this notion of offloading things that aren’t your businesses core competencies to third-party service. So you can focus on delivering value to your users._

_In my personal opinion, it gives developers a lot of power to ship more code with less of the lower level maintenance/up-keep/scaling burdens of yesteryear._

![Elliot Forbes, serverless architecture influencer](/images/blog/2018-05-16/elliot-forbes-dashbird.jpg)

# <a href="https://tutorialedge.net" target="blank"> Elliot Forbes</a>
**Author of "Learning Concurrency with Python"; Pythonista; Web Hacker; Owner of <a href="https://Tutorialedge.net" target="blank"> Tutorialedge.com<a/> ; Software Architect <a href="https://twitter.com/JPMorgan" target="blank"> @JPMorgan.<a/>**

## Do you think serverless computing will become the norm? If yes, when? If no, why?

_Serverless computing is going to revolutionize the way we build and deploy applications. The advantage of being able to deploy an endpoint or a series of endpoints that are incredibly resilient, as well as hugely scalable is massive._

## In your opinion, who wins the most from the adoption of serverless technology?

_Everyone._

## Who has the most to lose from the adoption of serverless technology?

_People who are unwilling to consider the use of serverless for their own applications._

## What's your boldest prediction for the state of serverless by the end of 2018?

_We are going to see a huge number of new startups popping up and leveraging serverless for their own gain. These startups will be able to compete with large, existing enterprises from the word go._

## How to get more people involved with serverless architecture?

_Serverless Framework is making the deployment and management of serverless functions an absolute breeze. You can check out my <a href="https://hackernoon.com/managing-your-lambda-empire-with-serverless-abb6a29c081e" target="blank"> article on how to manage your serverless functions here!<a/>_

## Bonus question: is there anything else you would like to share?

_Support me by subscribing to my <a href="https://youtube.com/tutorialedgeYouTube" target="blank"> Youtube channel.<a/>_

![Tom McLaughlin, serverless architecture influencer](/images/blog/2018-05-16/tom-mclaughlin-dashbird.jpg)

# <a href="https://www.serverlessops.io" target="blank"> Tom McLaughlin</a>
**Founder <a href="https://twitter.com/ServerlessOpsIO" target="blank">@ServerlessOpsIO<a/> / 1x engineer.**

## Do you think serverless computing will become the norm? If yes, when? If no, why?

_I believe it will become the norm but I'll skip giving a when._

_Why do I think it'll become the norm? It's watching the Kubernetes community develop serverless frameworks. It's watching Red Hat focus resources on Apache OpenWhisk. The infrastructure and platform management communities aren't stopping at containers._

_The question as I saw it a year ago was, "Do you adopt containers or do you adopt serverless?" It was a question about what technology to adopt and competing technical views. Seeing the serverless progress in the infrastructure management space makes me realize the future question will be, "Do you build your cloud platform or use someone else's?" Do you build or buy?... Which is just the same old basic question we've always been asking ourselves._

## In your opinion, who wins the most from the adoption of serverless technology?

_People who make the connection between technical effort not being an end goal, but as a means of producing value._

_Serverless, particularly public cloud serverless, let's you focus more on the code and less on the infrastructure. That doesn't mean you let code fill that new cognitive focus space. Move up the value chain and start focusing on the whether your code is a success. And by success, that means, "Did your code solve the problem it was intended to solve?"_

_Let's assume you've built something for a group of users to save time. Once your code is shipped, are users using it? Do users actually save time? And most of all, are your users actually happy?_

_Good companies get this connection between technical effort and producing value._

## Who has the most to lose from the adoption of serverless technology?

_People and organizations who cannot adequately connect technical effort with value will lose the most._

_If you're a company you'll be outpaced by the competitor that produces better value quicker._

_If you're an engineer you're going to be tasked with explaining and justifying technical decisions in business terms and owning its success or failure._

## What's your boldest prediction for the state of serverless by the end of 2018?

_We'll agree that serverless does in fact use servers and we'll move onto bigger and more important discussions. I expect to be wrong in this prediction._

## How to get more people involved with serverless architecture?

_There's a definite knowledge gap about serverless architecture. Containerization is just a new way to manage the same services we've been building for many years._

_Serverless is different. Complex event-driven architecture is new for many of us. Bundling code and architecture as one is also new for many of us._

![Yan Cui, serverless architecture influencer](/images/blog/2018-05-16/yan-cui-dashbird.jpg)

# <a href="https://twitter.com/theburningmonk" target="blank"> Yan Cui <a/>
**Principal Engineer at DAZN. International speaker, blogger, instructor of <a href="https://productionreadyserverless.com" target="blank"> Production-Ready Serverless <a/> and co-author of F# Deep Dives.**

## Do you think serverless computing will become the norm? If yes, when? If no, why?

_Yes, within 7 years._

## In your opinion, who wins the most from the adoption of serverless technology?

_Consumers._

## How to get more people involved with serverless architecture?

_More people sharing real-world experiences (both gains and pains) of their own adoption._

![Adnan Rahic, serverless architecture influencer](/images/blog/2018-05-16/adnan-rahic-dashbird.jpg)

# <a href="https://medium.com/@adnanrahic" target="blank"> Adnan Rahić <a/>
**Software engineer <a href="https://twitter.com/bookvar_co" target="blank"> @bookvar_co.<a/> Coding educator <a href="https://twitter.com/ACADEMY387" target="blank"> @ACADEMY387.<a/> Author <a href="https://twitter.com/PacktPub" target="blank"> @PacktPub.<a/> Local leader <a href="https://twitter.com/freeCodeCamp" target="blank"> @freeCodeCamp <a/> Sarajevo.**

## Do you think serverless computing will become the norm? If yes, when? If no, why?

_In some context, it will! But not every problem you face as a software engineer will be solvable by a single tool. Dedicated servers will still have their concrete use cases. However, these use cases will decline more and more in the coming few years, in turn giving serverless computing and tooling place to thrive, as I believe it deserves. Not only because of simplicity, but also because of the huge difference in price giving startups a fair chance to compete on the market._

## In your opinion, who wins the most from the adoption of serverless technology?

_Developers! Sadly, every day I see a decline in operations oriented engineers. I can understand why, simply because it's incredibly hard._

_Serverless architectures give devs the power to run and scale apps across the cloud and ensure maximum uptime without losing any sleep. The close second winner would be companies getting the competitive edge by not spending too much time on DevOps... unless they're super cool and choose to use Kubeless. :)_

## Who has the most to lose from the adoption of serverless technology?

_I can't see a real loser in this hype-train we call serverless architecture. All major cloud providers are following the trends and offer awesome services. We, Devs and DevOps engineers are high-demand merchandise, so I don't see any of us facing issues finding jobs in new fields._

## What's your boldest prediction for the state of serverless by the end of 2018?

_More than 70% of all newly founded startups will use serverless architecture in some form or another in their product._

## How to get more people involved with serverless architecture?

_Proper education! We need to make sure content is readily available. Educating the masses has always been an issue throughout history. We need to act smart and give devs a coherent pipeline through which to learn about the core principles of serverless architecture and what it really means to use serverless tech._

_Step one would be to explain why it is called serverless to all the internet trolls spewing hate on social media that it still uses servers. I think we all know that already. :)_

_Step two would be to get the major players in the field to work together towards a common goal through organizing workshops, courses, and events._

_Here's an idea, just as DigitalOcean and GitHub have been collaborating to create Hacktoberfest as a way to get the community to contribute to Open Source, why not do something similar with the goal to educate people about serverless!?_

## Bonus question: is there anything else you would like to share?

_Yes! Don't stick to your beliefs like they're religious dogmas. If you think serverless is bad, and heavily rely on dedicated servers, it's totally fine. But, feel free to consider both upsides and downsides._

_Same goes for serverless fanatics. If it makes sense to use a server, use it, don't be hard headed and push your will to use serverless to the extreme._

_Trends in tech exist because they make sense. Using serverless makes perfect sense in a huge variety of use cases, while in some it doesn't. The availability of learning this, again, needs to be open to the masses. It's our job to make it happen._

![Rupak Ganguly, serverless architecture influencer](/images/blog/2018-05-16/rupak-ganguly-dashbird.jpg)

# <a href="https://www.linkedin.com/in/rupakg/" target="blank"> Rupak Ganguly <a/>
**Works <a href="https://twitter.com/goserverless" target="blank"> @goserverless.<a/> Ruby, Golang, API Aficionado, Docker, Mesosphere, Serverless. BSA ASM. Photographer. Entrepreneur <a href="https://twitter.com/webintellix" target="blank"> @webintellix <a/>.**

## Do you think serverless computing will become the norm? If yes, when? If no, why?

_Serverless computing is the most exciting technology in the cloud computing. Yes, it will become the norm and the only way to realize maximum business value, and drive down operational costs._

_We have seen the cloud evolve since 2009, but serverless computing is how the cloud should have been in the first place._

_While cloud computing enabled us to move workloads off our data centers, share compute, storage, networking resources and make it cost effective, it just shifted the maintenance overhead to the cloud._

_Serverless computing takes away the overhead of DevOps teams from managing servers to focusing on operations that drive business value. It empowers developers to focus on delivering functionality that enhances business outcomes rather than worrying about managing infrastructure, deployments and scaling._

_The enterprises will benefit from the pay-per-execution pricing model and the large ecosystem of serverless services provided by multiple cloud and SaaS providers._

## In your opinion, who wins the most from the adoption of serverless technology?

_In my opinion, everyone wins - individual developers, small-medium businesses and large enterprises alike._

_The ones that are already on the cloud and run existing workloads on cloud providers like AWS, Azure and Google cloud have an upper hand. They are already past the “Why should I move to the cloud?” hump, and more aligned to take the next leap to going serverless._

_It is not too late for the ones that are still not on the cloud - they should adopt the "Serverless First” mantra, and evaluate incorporating serverless technologies starting at the periphery of their systems._

## Who has the most to lose from the adoption of serverless technology?

_The ones who don’t want to embrace the change, and not giving a serious look at the benefits that serverless computing offers. They need to start evaluating, and identifying areas that can be re-architected._

_It does not have to be an all-or-nothing deal. Businesses can start with non-critical systems to get started, and then set a longer adoption plan in motion._

## What's your boldest prediction for the state of serverless by the end of 2018?

_Rise of startups focusing on building tooling around managing functions, team collaboration, observability, monitoring, distributed tracing, debugging, security, logging, and auditing._

_Businesses taking a hard look at multi-cloud adoption freeing them from vendor lock-ins and utilizing services across multiple providers based on feature sets, quality and cost-effectiveness._

## How to get more people involved with serverless architecture?

_We need to talk and write more about it._

_Businesses and developers alike should share real use cases and publish case studies for others to learn from._

_The influencers and early adopters need to share code, examples, advice, learnings and their experiences._

_We need to unite as a community beyond our own products, irrespective of cloud platforms, and evangelize the business values & benefits of serverless architectures to the masses._

![John McKim, serverless architecture influencer](/images/blog/2018-05-16/john-mckim-dashbird.jpg)

# <a href="https://twitter.com/johncmckim" target="blank"> John McKim <a/>
**Head of Development at <a href="https://twitter.com/acloudguru" target="blank"> @acloudguru,<a/> Serverless enthusiast, writer, cyclist, terrible gardener.**

## Do you think serverless computing will become the norm? If yes, when? If no, why?

_Yes. Serverless is based on the philosophy of focusing on delivering value and avoiding undifferentiated heavy lifting. There is a strong business case for this philosophy and as a result I see that helping drive adoption to the point where it will be the norm. But, this will take a long time._

_Many companies are still unsure about the cloud or serverless due to a lack of understanding. Advocacy and education will play key roles in driving Serverless to become the norm._

## In your opinion, who wins the most from the adoption of serverless technology?

_There are many winners, businesses, developers, and vendors. Who wins the most is difficult to say. I’d say businesses that leverage serverless as a competitive advantage win the most from the adoption of the technology._

## Who has the most to lose from the adoption of serverless technology?

_Vendors that deliver technology or services for elements lower down the stack like servers and containers. For example, Digital Ocean and Docker._

## What's your boldest prediction for the state of serverless by the end of 2018?

_Serverless will become more normalised throughout the community. The big releases from AWS will be more focused on Serverless ML/AI services than data or messaging services._

## How to get more people involved with serverless architecture?

_Promote it by telling authentic stories to meetup groups and friends in the IT community._

_I should, of course say, <a href="https://acloud.guru" target="blank"> go watch one of our courses too! <a/>_

![Raymond Camden, serverless architecture influencer](/images/blog/2018-05-16/raymond-camden-dashbird.jpg)

# <a href="https://www.raymondcamden.com" target="blank"> Raymond Camden <a/>
**DevRel for Auth0 Extend, Star Wars nerd, Web/Serverless hacker, lover of good beer and good books. Oh, and cats.**

## Do you think serverless computing will become the norm? If yes, when? If no, why?

_I think there are a few ways to look at this question. One is - when will it become less the "hot new thing" and "just another option". I think that's becoming reality now. Serverless still has an incredible amount of hype around it, but in general, it feels like it is becoming mainstream and less bleeding edge. That's a great thing._

_The second way of looking at the question is in regards to serverless becoming the default for application development. I think serverless has some incredible benefits over traditional server-based architectures. While I don't think serverless makes sense everywhere, I definitely see it as the option developers should check *first*._

## In your opinion, who wins the most from the adoption of serverless technology?

_Developers!_

## Who has the most to lose from the adoption of serverless technology?

_PaaS offerings. While I definitely do not see them going away, I definitely see using those options less. Of course, companies that offer both will have their bases covered._

## What's your boldest prediction for the state of serverless by the end of 2018?

_Serverless deployment will be the default, the assumed route._


## How to get more people involved with serverless architecture?

_Education, advocacy, just spreading the word. As a developer advocate myself, it is my job to let people know not only the basics but to also inspire them._

## Bonus question: is there anything else you would like to share?

_The best serverless demos make use of cats. Anything else is simply wrong._

----


**We want to thank all the people who took the time to answer our questions and shared their thoughts!**



_If you have questions or topics in mind that we should cover next, let us know in the comments section. And, of course, don't forget to check out <a href="https://dashbird.io" target="blank">Dashbird for serverless monitoring and debugging!<a/>_
