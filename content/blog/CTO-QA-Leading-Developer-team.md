---
title: "Q&A with Marek Tihkan, CTO at Dashbird: Leading and managing a Developer team"
description: We sat down with our CTO, Marek Tihkan, to have a chat about managing a team of developers to product development and lessons learned and, of course, serverless.
date: 2020-08-10T00:00:00.000Z
frontImage: "1mariliis/qanda-with-marek.png"
thumbnail: "1mariliis/qanda-with-marek.png"
canonical: https://dashbird.io/blog/CTO-QA-Leading-Developer-team/
author: "Mariliis Retter"
author_image: "/images/team/mari.png"
blog: ["business"]
---

<div class="text-justify">
    <div style="float: left; max-width: 180px; margin: 10px 20px 10px 0px;">
        <img style="border-radius: 50%; max-width: 170px;" src="/images/team/marek1.png" alt="Marek (CTO)">
    </div>
    As we enter into our 4th year, we've decided to get up close and personal with our team to share with you their passion, drivers, lessons learned and significant moments of the past year. We're a young company dedicated to adding value in all corners that we reach, so we hope you find the upcoming series useful!

    Today's interview is with Marek Tihkan, CTO at Dashbird talking all about DevOps team leadership and management.
</div>

_Hey Marek, so can you tell us how long you've been at Dashbird and where you were before?_

M: I've been at Dashbird for two years now. I worked with Taavi (CEO) at Testlio previously, where I was the Lead Architect for the core team. I built and managed the infrastructure there, and also provided guidance for the shift to microservices.


_Can you tell us a bit about your team at Dashbird?_

M: Sure, I lead a team of 6 developers now. For now, we manage without any divisions or specific roles per project so it's very much an 'everyone mucks in' approach, which works incredibly well. This will likely change as we grow and expand our product offerings though.

It's been a conscious decision for me to give each individual a good level of autonomy when it comes to our work; this means that anyone can be a feature lead owing to their experience and ideas on its progression. When it comes to putting features through their paces, we work in two different ways: blackbox testing style (testing by a dev who's not been involved, so they QA its journey from a completely unbiased state), and through manual and detailed testing. Only as a team can we decide if the new feature is ready to launch or not.


_How do you keep your team motivated, particularly during these times?_

M: For myself and my team, continuous learning, growth and preparation for new challenges is the main motivator. It's an open forum for mistakes to be made and lessons to be learned!

Especially during the height of the Covid-19 crisis, it was important to keep the morale and motivation high with as much business as usual. The great thing about us developers is that we love a challenge and problem solving - this never changes - and at Dashbird, we have a huge amount of data to play with and utilize so the team is always able to attempt different technical solutions for many anticipated and already experienced scenarios and issues. We also work on plenty of Proof of Concepts (POCs), for example at the moment we are testing and exploring different ways to store data dependent on differing needs. This sees us trying different AWS services such as S3, Kinesis, and Neptune, so there's plenty to keep us busy.

Working at Dashbird is a fast track into the serverless world because of the deep-dive environment we surround ourselves in. With the substantial experience gained here, you're safe in the knowledge that you'll be incredibly valuable to any other company you move on to.


_Looking back on the year just finished, what were your goals and were they achieved?_

M: My goal this year was focused all around expansion and growth. I wanted to grow the engineering team, expand the product offering to integrate with more AWS services and increase and improve the existing features and observability. I'm very happy to say all three goals were successfully achieved!


_Excellent! Let's discuss the product a bit more - how have things changed here?_

M: The biggest change has been the introduction of the Inventory and [Insights features](https://dashbird.io/features/insights-engine/). We were previously focused on Lambda logs only but have now expanded to support further managed AWS services meaning we have more metrics to look after.

I'm so pleased we're able to offer this now as, believe it or not, in my previous role I didn't like serverless at all! The lack of tooling and visibility meant parts of my role were ineffective and the responsibilities I held were harder to manage. These new features provide critical support and knowledge to anyone working with serverless architecture, including us!


We've always used our platform for our own architecture, but with the latest version, we can fully monitor our own infrastructure to its fullest. For example, we avidly use queuing alerts to monitor for any that grow too fast enabling us to spot delays earlier and resolve issues more quickly.

The launch of Inventory and Insights is by far my proudest moment of the year because of the huge involvement I had and the way we managed to execute it as a team!


_What has been the biggest challenge as CTO?_

M: It's been a big learning curve for me as I've adjusted to wearing many hats! Doubling the team has been phenomenal but not without its challenge of managing all the aforementioned hats; DevOps, Product, Software Developer/Architect, and CTO who needs to hire and manage a team, while also writing code from time to time!

My leadership role sees me more engaged with other areas of the business and as a result, I'm in more meetings than before so not as available as I'm used to being when it comes to supporting my team. I have some way to go in getting the balancing act perfect, but the approach I've found most useful so far is learning to let go at the right time.


Due to time constraints and my own capacity, I've had to reflect on what is a priority for me. Take coding or new tech for example, I've had to understand that some of it is simply no longer my core responsibility and that in some cases where I don't agree with certain concepts, it's still likely the best option; I'm not the feature lead, it's not the flow or my job and so whoever's it is, it probably makes more sense for them and their own work to use them.

Leading a team is the priority however, and so my availability to guide and mentor them must still be there, which includes taking the extra time for explanations if needed.


_And what's your biggest achievement as CTO so far?_

M: The way the engineering team has evolved is absolutely my biggest achievement. We have ironed out a lot of processes and have created a safe, nurturing environment for everyone to excel.

Successful onboarding is crucial for a good start and so we give access to A Cloud Guru which provides video training and users with their own AWS playground to explore and run with. We also encourage AWS certifications from the beginning, as after all, knowledge is power.

As a team, we hold weekly technical chats where anyone can explain new tech, solutions or infrastructure principles or ideas to the rest of the group; this could be an area of existing expertise, or an area they've just recently learnt about and immersed themselves in. We also have no such thing as a pre-defined solution when it comes to product innovation. All approaches and solutions are encouraged, considered, talked through and tested where possible.

Remaining humble, open to all ideas and learning together helps create a solid group dynamic where we actively want to squeeze as much out of each other as possible!


_What's to come next year?_

M: In the coming year and beyond, we will be adding more AWS services to the platform as well as more logs and tracing data for analysis to really step up the Insights we can gather and take advantage of. As cloud technology continues to evolve and grow, we will be making greater strides to understand the architecture and its systems to ensure our offering is relevant and to the point.

We are also looking to eventually add more third party integrations and support different cloud providers, but we're not sure if we can squeeze all of that into one year!


_Sounds exciting, and finally, how would you sum up the past year in one sentence?_

M: Plenty of growth and preparation leading to successful execution.


[Get your free account with Dashbird](https://dashbird.io/#register) to check out the new features Marek and the team have been working on yourself. (Psst, we're announcing another awesome powerful feature this week, so get your foot in the door now to be the first one to try it out.)
