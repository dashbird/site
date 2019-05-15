---
title: Dashbird product update - September 2018
description: Over the past year, we've seen Dashbird grow up into a great product service. Here's the latest updates we've made to the service
date: 2018-09-17T00:00:00.000Z
frontImage: "2018-07-20/pexels-photo-920115.jpeg"
thumbnail: "images/blog/2018-07-20/pexels-photo-920115.jpeg"
authorlink: 'https://twitter.com/kolmas'
author: 'Mikk Kirštein'
author_image: '/images/team/mikk.jpg'
category: "Product, Serverless, Lambda"
blog: ["Product", "Serverless", "Lambda"]
---

Over the past year, we've seen Dashbird providing increasingly better visibility for developers building serverless applications. One of our goals is to create a product service that gives end-to-end visibility into serverless architectures, one that aligns perfectly with the needs of our clients. 


## Keeping busy
We've been hustling hard for the last few weeks to improve our system. Much of what we've done has been focused on code performance and infrastructure optimization. We're happy to say we've revamped several features and added a couple of new ones you'll love for sure! Here's what we did.

## API Gateway integration
AWS' REST API service, [API Gateway](https://aws.amazon.com/api-gateway/), has proven to be one of the corner stones of serverless microservices. As an event trigger for AWS Lambda functions it's one of the most used in the serverless world. Hence us deciding to add it to our feature list. What did we actually build? We now have the functionality to show all API Gateway REST APIs and their resources in a users AWS account. We are actively developing this feature to get it progressively better. You can check it out [here](https://app.dashbird.io/apigw), or by pressing the tiny `API Gateways` button in the left side-navigation.

![](/images/blog/2018-09-17/api-gw.png)

## Showing all lambda functions
We've made significant improvements to the lambda listing view. It now allows you to grasp provisioning mistakes with ease by checking memory percentages (%). Giving better insight and general overview of your system.

![](/images/blog/2018-09-17/lambda-list.png)

## Invocation quick view
We've added a quick-view feature for an invocation on the function page. The quick-view gives you a way to quickly and painlessly check invocation logs and metadata without navigating away from the function page. Check it out by clicking the `looking glass zoom button`.

![](/images/blog/2018-09-17/quick-view-invocation.png)

## User Management
We decided to rewrite our `User Management` screen. How come? Well, our priority is to make the user experience as painless as possible for your whole development team. Inviting and managing users should be a breeze. The new user management screen is faster and more user friendly.

![](/images/blog/2018-09-17/user-management.png)


## Live Tailing
Our engineers re-wrote the whole tailing functionality. The new tailing is faster, more efficient and more user friendly. We cut the import latency significantly and now provide you a super fast feedback loop while debugging functions.

![](/images/blog/2018-09-17/live-tail.png)

## Reliability improvement
With the increase of traffic and after a few new large-scale clients onboarded, we had to rethink our infrastructure. We put in hard work to rewrite our database management logic and add more database clusters. This will improve our reliability, cluster connectivity and fallback logic in general. Our goal was to improve our sustainability and the overall security of our system.

## Acknowledgements
These past few months have been a true rollercoaster for us starting with our round of investing, the changes to the app and the addition of a few very impressive people to our team's roster. 

Perhaps one of the most important things we learned this past year is that if we are to succeed in our endeavor to create the best serverless monitoring tool on the market we will have to work closely with our community and to do so we will have to establish a communication channel that will keep everybody on the same page. 

This post is about just that, communication and we wish to extend an open invitation to you all to keep sending in your feedback, suggestions, and questions. 