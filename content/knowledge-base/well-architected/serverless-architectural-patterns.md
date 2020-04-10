---
date: 2020-04-06T00:00:00+03:00
title: "Serverless Architectural Patterns"
description: "Battle-tested serverless patterns to make sure your cloud architecture is ready to production use"
learning: ["AWell Architected"]
learning_weight: 300
---

<div class="youtube-embed-container">
    <iframe src="https://www.youtube.com/embed/1tQpsXHM8KU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


### Video Script

In this video, we are covering Serverless architectural patterns within three categories:

* Availability
* Authorization
* Orchestration

This is the "Serverless Architectural Patterns" video. My name is Renato and I welcome you to our Serverless Well-Architected series. Our purpose is to give a short overview of each pattern
and cover details in the next videos. Make sure to [subscribe](https://dashbird.io/subscribe) and do not miss anything.

Let's start with the Circuit Breaker, in the Availability category. When there is an internal service and requests start fail or slow down. A separate storage keeps track of how many issues occurred in the last 60 seconds, for example.

When there are too many failures, communication with the service is shut down to avoid overloading it. The Serverless function short-circuits to respond API calls with an error or it falls back to a secondary backup service.

After some time, when the service performance has improved the API resumes communication and normalizes the workflow.

Other Availability patterns we will cover in next videos are:
* Function Warmer
* Eventually consistente
* Read-heavy engine

Now moving to the Orchestration category, we have the Queue-based Load Leveling pattern. This pattern can help avoid an over-loading of components that don't scale rapidly, such as Databases. 

Suppose this process receives information from various clients and stores it in a database. The serverless function backend can scale very fast but the Database cannot.

Using a queue allows to keep the database load within a certain level, regardless of how many requests the Serverless function receives.

This solution is only viable when the scale mismatch is temporary, otherwise the queue can grow indefinitely and become a bottleneck.

Other Orchestration patterns we will cover in next videos are:

* Fan-in/Fan-out
* API Interfaces and all its variations
* As well as: [c]
    * Data Lake
    * Function Chain
    * Proxy Function
    * State Machine
    * And more...

Moving into the Authorization category, this is the Gatekeeper pattern. Every request coming through an API, for example goes through an authorizer before reaching any underlying service. This authorizer Serverless function is called "the Gatekeeper".

This function performs identify authentication and validates whether the client is authorized to access the underlying resources. Another Authorization pattern we will cover in next videos is the *Valet Key*, which solves some issues with the Gatekeeper

This video was based on a literature review published recently by a team of researchers from Finland and Italy. Go [check their work](https://researchgate.net/publication/340121613
) to learn more about the subject.

In the next videos we will cover all Serverless patterns and dive into more details about their implementation as well as pros and cons. Stay tuned and [subscribe](https://dashbird.io/subscribe) to make sure you will not miss anything. Thank you!
