---
title: 2018 in review - early days of Dashbird
description: What a year! It started with just me and Mikk, hacking away at our homes with an MVP and a handful of customers. Now, Dashbird is a team of 6 people with a lot of customers, global investors and a vision for the future.
date: 2019-01-08
frontImage: "2019-01-08/rocky-dashbird-office-dog.jpg"
thumbnail: "images/blog/2019-01-08/rocky-dashbird-office-dog.jpg"
author: Taavi Rehemägi
author_image: '/images/team/taavi.jpg'
authorLink: https://twitter.com/rehemagi
blog: ["reInvent", "serverless", "AWS", "news"]
---

What a year! It started with just me and Mikk, hacking away at our homes with an MVP and a handful of customers. Now, <a href='https://dashbird.io' target='_blank'>Dashbird</a> is a team of 6 people with a lot of customers, global investors and a vision for the future. Looking back at the year, we've had a lot of wins and also our fair share of failures/learning experiences. I'm very excited for the upcoming year, but before we get into that, let's look back at the year that just ended.

### Founding team
In January, Annika started working with us as a co-founder and a CMO. Coming from Teamweek and Toggl, she brought along valuable know-how in marketing and managing teams. Dashbird started gaining a lot of awareness and visibility due to her efforts and she proved an asset in managing operations, growing the team and pitching to investors.

### Seed round 

We closed our seed round in April this year from Passion Capital, Icebreaker.vc, Lift99 and some angel investors. Going into it, we really didn't know what to expect, but with the help of mentors and a lot of research and planning from our side, we got a hang of it pretty quickly. The fundraising period allowed us to get feedback and ideas from some of the most experienced investors and entrepreneuers in the world and I'm grateful for all the knowledge we got during that time - it
has helped us avoid a lot of mistakes we would have otherwise made. 

It also helped us plan for the future and made us think through a lot of product and growth decisions. I'm happy to say that today, Dashbird is advised and helped by some of those seasoned founders we met while fundraising. 

### Team

After closing the investment, the focus immediately shifted into putting together a world-class team to execute on the vision and provide more value for the customers.

Estonia is well known for its startups, and hiring a team here is a challenging task for any startup. There's simply so many opportunities to choose from, and whoever has the most compelling story and the grandest vision reaps the benefits of the talent and experience that has accumulated here by the previous startup success stories. Fortunately, building a developer tool with cutting-edge tech is something that a lot of developers find very interesting and I couldn't be happier about the team
we have managed to put together in the past year. By the way, we are still hiring, so <a href='https://dashbird.io/jobs' target='_blank'>check here</a> for new opportunities.

Early on, we decided that we're going to build Dashbird as a remote company. Today, our team is a mix of Estonians and other nationalities and we're hiring globally for every position. The amount and quality of people we're able to find this way is mind-blowing and it has proven itself as the best way to build a team. Especially since Estonia is a small country and the pool fol talent is limited for a lot of positions. Of course, you'll have to manage your team a bit differently and build processes that support remote work but the upside is well worth it. I'm glad that a lot of people involved with Dashbird come from a remote culture, so we have previous experience in operating such teams which has helped us succeed with it.

### Customers

Dashbird has more than 10 times more paying customers than we had in January last year and the increase of new customers is speeding up with each month, not to mention the ever-increasing amount of free users that has reached a couple of thousand by now. This is obviously a big win for us and we have no intent of slowing down. On the flip side, this puts pressure on both the team and the service infrastructure and it's something we've struggled a lot in the last 12 months.

Ingesting terabytes of logs and billions of invocations in real-time is a challenge for most data-processing and database technologies. We've tried a bunch of different ways to keep up with the load. Currently our stack consists of DynamoDB, MongoDB, ElasticSearch, InfluxDB and Aurora for storing data. We use Lambda, EC2, ECS and Spot Fleets for data-processing and stitch all together using various different services in AWS and outse it. All this deserves a separate blog post (or five) to fully explain but you get the idea. Massive props to our customers for supporting us through the hard times and the engineering team for keeping it together.

### Product

Even though our engineering and product team is small, we've managed to make a lot of progress building the product. So much so that stumbling on a screenshot from February feels like 5 years ago. If you haven't been in Dashbird for a while, you should check out our new alerting and API Gateway features (there's much more).

### Hardest lessons

In October, we parted ways with Annika. It came as a mutual decision and we've stayed friends since then but it is not to say that it was easy for the company and the team. In the end, nothing spetacular about the decision to part ways, it was due to vision misalignment and separate ideas on how to go forward. Three months later, I'm able to say we've recovered and at least as strong as when she left. It still serves as a mayor lesson for me personally and I think it has made me a better CEO for Dashbird.

## Going forward

We're obviously excited about what the future holds for Dashbird. The adoption of serverless is growing at a mind-blowing rate and a lot more companies are using it than there were a year ago. The pace of innovation from AWS and other cloud-providers also dictates that companies building observability and operations tools must keep up with new technologies. That is a challenge that we like and look forward to as we've always enjoyed playing with new technology and thinking along about the
future.

--- 

_If you haven't heard of <a href='https://dashbird.io'>Dashbird</a> before, it's a platform for managing and operating serverless applications._
