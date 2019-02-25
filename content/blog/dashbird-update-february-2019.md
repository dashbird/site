---
title: Dashbird product update - February 2019
description: Over the past year, we've seen Dashbird grow up into a great product service. Here's the latest updates we've made to the service
date: 2019-02-21T00:00:00.000Z
frontImage: "2019-02-21/rawpixel-780496-unsplash.jpg"
thumbnail: "images/blog/2019-02-21/rawpixel-780496-unsplash.jpg"
authorlink: 'https://twitter.com/johndemian'
author: 'John Demian'
author_image: '/images/team/john.jpg'
category: "Product, Serverless, update"
blog: ["Product", "Serverless", "update"]
---

<a href="https://twitter.com/kolmas">Mikk</a> and the rest of the dev team at Dashbird have been working overtime this past month, in an effort to rehaul the user experience in the app based on the feedback we are constantly getting. We believe in having an honest and open, two-way street when it comes to communication so I advise each and every one of you to either write us an email via support@dashbird.io or to join <a href="https://join.slack.com/t/thedashbird/shared_invite/enQtNDU4MTkzNzQxNzI4LWEyYjJlYmJmYWQ4YWEyMDZhYzY3YTY2ZTVmOTQxMWQ2Y2FkMTY3OGMxMmRlYTE4ZmE3NTk1ZjM0OGE4NWE4Mzk">our slack channel</a>.

Alright, now back to the point. 

We reworked our global search and added different graphs that indicate keywords hits in the past 7 days. Just hover your mouse over each day to see how many occurrences you had at any particular time during this past week. 
<img src="/images/blog/2019-02-21/eXRmBd52.png">

Invocations view had a bit of a touch up last week when the team added a timestamp that indicates the time of the invocation. Our old clients might remember having this in an old version of the app but got misplaced during an update. Nevertheless, it's back once more!

The API Gateway view finally got metrics based on Lambda functions activity. This update is experimental, meaning that while we've run A LOT of tests to check different scenarios before launching, it might see some modifications over the coming months. Needless to say but we'd really appreciate some feedback on this.

The client and user page got an update too. From your <a href="https://app.dashbird.io/settings/profile">settings</a> page you can view all the users, add new ones or deactivates them as you see fit.

We've also worked on the way data is displayed throughout the app.  Starting today the app will display sparse data, thus making it easier for our developers to understand what's happening behind the scenes of their Lambdas.

<img src="/images/blog/2019-02-21/xHsykXOg.png">

One of the biggest changes we've made was to the onboarding. Up until now whenever a user onboards he would have to create a Cloudformation on their stack. That Cloudformation would contain two things, an IAM policy for delegation and a Lambda function that would connect to our service every 5 minutes. That resulted in a bit of cost to our user and while that amounted to a negligible $1 to your bill if you were having millions and millions of invocations so we changed it up. 

Starting today, whenever a new customer onboards the Cloudformation will only have the IAM policy for delegation and the whole Lambda logic is moved to our backend making the whole process a lot more efficient.

---

We had a very busy couple of weeks and we'll keep working on improving our service, creating a better experience for our users but in the meantime, I'd love to hear your feedback. What do you think of the latest changes and what can we do to improve it even better? Hit us up with an email or drop a comment below!