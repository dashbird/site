---
title: Dashbird's Lessons Learned from Launching a SaaS Application
description: Dashbird recently launched a new version, we collected really good lessons learned from our development team
date: 2020-05-11T00:00:00.000Z
frontImage: "2020-05-11/dashbird-lessons-learned-launching-saas-application.png"
thumbnail: "images/blog/2020-04-16/dashbird-lessons-learned-launching-saas-application.png"
author: "Mariliis Retter"
author_image: "/images/team/mari.png"
blog: ["launch", "product", "lessons-learned"]
---

From the development and operations side, launching a new software application can be quite challenging. Deciding which tools to use, how to organize the task pipeline, managing collaboration among team members, monitoring performance and potential issues after launch, etc. It's not easy to get it done right.

Dashbird recently went through all of this. Behind the scenes, our amazing development team worked really hard to overcome all challenges and deliver the best value to our users. We decided to organize and share those learnings into this article. We hope it will contribute with ideas for other development teams as well.

Below we share the perspectives from our team members, in no particular order:

## Marek (CTO)

<div class="text-justify">
    <div style="float: left; max-width: 180px; margin: 10px 20px 10px 0px;">
        <img style="border-radius: 50%; max-width: 170px;" src="/images/team/marek.jpg" alt="Marek (CTO)">
    </div>
    We used Feature Flags (a.k.a. Feature Toggles) to manage the development and deployment. This technique required some changes in development mindset and process, but proved to be very useful in allowing us to safely deploy new features while having every developer on board with everything. First we implemented an MVP and gathered feedback, which helped make sure we're on the right track. Internal communication about exactly what is going to be launched and how features will work in detail is important. That brings more clarity to everyone when the news come out and support is ready to answer any questions.
</div>

## Dmitrijs (Software Architect)

<div class="text-justify">
    <div style="float: left; max-width: 180px; margin: 10px 20px 10px 0px;">
        <img style="border-radius: 50%; max-width: 170px;" src="/images/team/dmitrijs.png" alt="Dmitrijs (Software Architect)">
    </div>
    We created a check-in plan for the pipeline of tasks, with a toggle to enable new features and disable old ones. We continued to use Jira to handle our develeopment lifecycle. There was a bit of pressure with bug fixes closer to the launch, but nothing extraordinary. The responsibility of making big changes that would affect all customers was high. In future iterations, I would leave the last week to polish the new features and make sure they will deliver the best experience.
</div>

## Jelena (Software Developer)

<div class="text-justify">
    <div style="float: left; max-width: 150px; margin: 10px 20px 10px 0px;">
        <img style="border-radius: 50%; max-width: 140px;" src="/images/team/jelena.jpg" alt="Jelena (Softwaare Developer)">
    </div>
    To prioritize our tasks, we looked at what would bring the most value to our users. These decisions were made together as a team. I also focused a lot of my time on testing and fixing everything as much as possible, instead of just developing new features leaving broken or unoptimized ones behind. Testing scalability capacity was also very important. We used our own monitoring system extensively for the new features. There was an increase in some metrics, but overall the system handled the load gracefully.
</div>

## Reigo (Software Developer)

<div class="text-justify">
    <div style="float: left; max-width: 150px; margin: 10px 20px 10px 0px;">
        <img style="border-radius: 50%; max-width: 140px;" src="/images/team/reigo.jpg" alt="Reigo (Softwaare Developer)">
    </div>
    We considered what was really possible to deliver within the timeframe and checked the pace every two weeks to adjust our expectations. We found it was better not to make changes at the last minute or during the launch campaign (apart from bug fixing). Testing everything on the days prior to the launch was fundamental.
</div>

## Alex (Software Developer)

<div class="text-justify">
    <div style="float: left; max-width: 150px; margin: 10px 20px 10px 0px;">
        <img style="border-radius: 50%; max-width: 140px;" src="/images/team/alex.jpg" alt="Alex (Softwaare Developer)">
    </div>
    Marek, our CTO, was maintaining a roadmap of features, which we had decided beforehand. One top priority was to fix existing bugs and make the system as stable as possible. There was a scalability problem in one internal service that is a central part of the system. Improving this service architecture was a priority and paid off well. For me, it didn't feel like too much pressure. Although I had to put extra effort into my work, it was actually fun fixing different bugs etc. My advice would be to collaborate more and tackle problems together with colleagues. We had some changes from previous month still pending to be pushed into production. In the future, I would push anything pending first, then start working on a new launch version.
</div>

## Toomas (Software Developer)

<div class="text-justify">
    <div style="float: left; max-width: 150px; margin: 10px 20px 10px 0px;">
        <img style="border-radius: 50%; max-width: 140px;" src="/images/team/toomas.jpg" alt="Toomas (Softwaare Developer)">
    </div>
    We planned our tasks on a weekly basis. Personally, I started the week by selecting the more difficult ones assigned to me. That is because those tasks are harder to estimate, so getting them done early would help identify any deviations from our plans. I was new to the team, so one thing I did was to get familiar with the system and the code already in place, which helped me work with more confidence on the new features. Although I haven't felt any extraordinary pressure, I see the team accomplished a lot, because everyone was collaborative and motivated to get as much as possible done for the scheduled launch. We didn't have any major issues after launching. Nevetheless, I would invest more time in testing in future releases.
</div>

<br>

<hr>

<br>

Dashbird is the most widely adopted serverless monitoring platform, with over 600,000 cloud resources being tracked. It provides observability over several managed services, such as AWS Lambda, SQS, DynamoDB, API Gateway, ECS clusters and containers.

### [Go check out Dashbird's newly launched features now for free](https://dashbird.io/#register), no credit card required.

