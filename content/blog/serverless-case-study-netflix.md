---
title: Serverless Case Study - Netflix
description: Netflix streams billions of hours of video ever month. Come see how they do it
date: 2018-07-05T12:00:00.000Z
frontImage: "2018-07-05/netflix-serverless.jpg"
thumbnail: "images/blog/2018-07-05/netflix-serverless.jpg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
category: "Serverless, Other"
---

A couple of days ago we published a case study on how Coca-Cola North America handles their <a target="_blank"  href="https://dashbird.io/blog/serverless-case-study-coca-cola/">vending machines systems with serverless</a>. Today we're going to talk about another titan that turned to serverless. As you may have guessed from the title, we are going to be talking about Netflix.

Netflix is a streaming service founded in 1997 and, believe it or not, started out as a Blockbuster alternative for renting and selling DVD through the mail. Yeah, it was such a long time ago. And while they are still renting about 3 million DVD's a year they are also the number one video streaming platform for TV-shows and Movies.

Netflix delivers 10 billion hours of videos to 125 million customers every quarter and to serve that kind of an audience they use a wide range of highly complex infrastructure that relies mostly on AWS. Imagine what the servers that run Netflix look like? Petabytes of data in hundreds of thousands of files changed daily, served millions of customers in 55 countries.

At the moment Netflix has moved completely to the AWS cloud infrastructure and while a full seven years to make the move from their own data center might seem a long time for most people, they wanted to make sure that the problems they were facing while using the self-managed data center would not get imported into the cloud so they ended up basically rewriting every aspect of their service to make Netflix a true cloud-native application. You can read more about the journey to the cloud in an article written by <a target="_blank" href="https://media.netflix.com/en/company-blog/completing-the-netflix-cloud-migration">Yury Izrailevsky</a>, vice president of cloud platform engineering.

<h3>So how does Netflix make use of Serverless</h3>
Publishers upload thousands of files to Netflix on a daily basis and every bit of those files need to be encoded and sorted before they end up being streamed to the user. Once the files get uploaded to S3, Amazon triggers an event calling an AWS Lambda function that splits the video into 5-minute chunks that get encoded into 60 different parallel streams that Netflix needs. Once the last part of video gets processed they get aggregated and deployed using a series of rules and events.

Another way that Netflix uses AWS Lambda is for their backup system. As thousands of files get changed and modified on a daily basis Lambdas are checking if the files need to be backed up, they check the validity and integrity of the files and if anything fails they can backtrack to the source of the problem and restart the process.

In the space of security, Netflix has thousands of processes that stop and start instances all the time and they use Lambda to validate that each no instance is constructed and configured in accordance with the system's rules and regulation. They also use Lambda to create alerts and shutdown in the event of a unauthorized access.

Next came efficiency improvements using better production monitoring and dashboards. This information was based on the events system that Netflix built for Lambda, through which events trigger validations to ensure that the configuration fits real-world needs.

The last step was to remove the responsibility of the servers that manage all of Netflix’s media. When Lambda is responsible for the server deployment, compliance, and configuration, Netflix can be confident that provisioning processes and responding to new business needs are fully handled.


---


<center><i>Amazon Kinesis Streams processes multiple terabytes of log data each day, yet events show up in our analytics in seconds. We can discover and respond to issues in real time, ensuring high availability and a great customer experience.</i><br><strong>-- John Bennett Senior Software Engineer, Netflix</strong></center>

---

That's it for today if you want to see more serverless case studies, signup for the newsletter!