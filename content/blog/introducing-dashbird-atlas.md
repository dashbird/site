---
title: "Introducing, Dashbird Atlas"
description: Dashbird Atlas, real-time 3D map view of your entire serverless environment, is finally here.
date: 2020-08-11T00:00:00.000Z
frontImage: "1mariliis/introducing-Dasbird-Atlas.png"
thumbnail: "1mariliis/introducing-Dasbird-Atlas.png"
canonical: https://dashbird.io/blog/introducing-dashbird-atlas/
author: "Mariliis Retter"
author_image: "/images/team/mari.png"
blog: ["serverless", "debugging"]
draft: true
---

<div class="text-justify">
    <div style="float: left; max-width: 160px; margin: 10px 20px 10px 0px;">
        <img style="border-radius: 50%; max-width: 170px;" src="/images/team/taavi1.jpg" alt="Marek (CTO)">
    </div>
    <p>_Introducing Dashbird Atlas: Real-time 3D map view of your entire serverless environment_</p>

    <p>We're pleased and honored to be part of the Serverless revolution - continuously innovating to make processes and day-to-day tasks for serverless users more efficient, seamless and enjoyable.</p>
</div>


So let's get right into the new and exciting stuff now! Earlier this year, Dashbird [launched the very well-received Insights Engine](https://bit.ly/2PtXbaz) designed to encourage a proactive approach when building and operating serverless applications. It works by cross-referencing your cloud resources, such as functions, queues, databases, against well-architected industry practices to detect potential issues and security concerns before they impact your application health.

Our users found this new feature highly valuable so we really wanted to take it to the next level and make the process of building and debugging large-scale, distributed applications on serverless environments even smoother, faster and easier for our Serverless developers.


Enter: Dashbird Atlas.


![Dashbird Atlas, real-time 3D map view of serverless environment](/images/blog/1mariliis/introducing-Dasbird-Atlas.png "Dashbird Atlas, real-time 3D map view of serverless environment")


Let us take you through this beast of a powerful real-time observability tool now. Get ready to see your serverless infrastructure in a whole different light and...dimension.

Dashbird Atlas visualizes individual components of your serverless environment and the connections and dependencies between them, entirely in real-time! All of your existing resources and their states are displayed in their live state in this 3D map.


<video width="100%" height="auto" controls style="width: 100%; max-height: 100%; height: auto;">
    <source src="/videos/blog/2020-08-10/introducing-atlas-video-juice.mp4" type="video/mp4">
    Your browser does not support the HTML video tag.
</video>


>Did you know...humans process images and visual data 60,000 times faster than words?*

In this visual and easy to digest format, within seconds you can identify which resources are under heavier load and risking failure, for example. It is also possible to drill down for full details in order to investigate the root causes for errors, specific warnings, or useful insights for architecture optimization and improvements.


Now, let's get into the details!


Red boxes indicate an error within a specific resource in your infrastructure. Zoom in and you'll quickly see what other resources are impacted, what the root cause is and the exact details of the error. It's then over to you to jump in and give it a quick fix.


![Dashbird Atlas error in serverless infrastructure](/images/blog/1mariliis/resource-error.png "Dashbird Atlas error in serverless infrastructure")


Yellow boxes are warnings of abnormalities in your environment. These provide early-stage signals to avoid issues from escalating into potential failures.

Blue boxes indicate informational (non-critical) messages about your resources configuration parameters and behavior.


Zoom into each box to see what resources it consists of, or to see your Lambda memory usage fill up in real-time.


<video width="100%" height="auto" controls style="width: 100%; max-height: 100%; height: auto;">
    <source src="/videos/blog/2020-08-10/introducing-atlas-video-memory-fill-up.mp4" type="video/mp4">
    Your browser does not support the HTML video tag.
</video>


Go ahead and give it a try yourself on [Dashbird app](https://bit.ly/2Pr5tQy) now!

If you're new to Dashbird,[ sign up for your free account](https://bit.ly/2DCYWQ7) in just 3 minutes - no code changes and no credit card required.

---

_(Source: Michael Gazzaniga (1992) and Allen Newell (1990), as cited by SAGE Handbook of Political Communication, 2012, via Amazon)_
