---
title: Building Battle-Tested Well-Architected Apps: Learnings from Real Life
description: Dashbird's lessons learned in building reliable Well-Architected serverless applications and the highest impact areas to focus on no matter where you are in the Serverless journey.
date: 2020-07-20T00:00:00.000Z
frontImage: "2020-05-vacation-buffer/building-battle-tested-reliable-serverless-applications.png"
thumbnail: "images/blog/2020-05-vacation-buffer/building-battle-tested-reliable-serverless-applications.png"
canonical: https://dashbird.io/blog/building-battle-tested-well-architected-serverless-apps-lessons/
author: Taavi Rehemägi
author_image: '/images/team/taavi.jpg'
authorLink: https://twitter.com/rehemagi
blog: ["well-architected", "serverless"]
---
In this article I'll be sharing my own lessons learned with Dashbird in building reliable Well-Architected serverless applications and the highest impact areas to focus on no matter where you are in the Serverless journey.


## Using The Right AWS Services 

Something that took me a long time to realise and appreciate was that it's worth investing the time to choose the right AWS services; the impacts later down the line can be huge as you scale. From my experience, the biggest factors ensuring long term performance, cost efficiency, reliability and robustness are time spent on choosing the best services and using the best architectural patterns.

Most well-built serverless applications are like a puzzle, piecing services together by trying to see which ones fit in the most logical way. This often means that while creativity is needed so is the knowledge of what each service offers, including the compromises you'll face in exchange for their strengths. It's important therefore to identify and research all possible tools that can do the job for your application's needs. Assess latency, cost, scalability, operational overheads and monitoring and failure scenarios for these services, and then look at the reasonable compromises you're able to make. My personal areas to review are:

-   Cost

-   Performance

-   How robust it is

-   How it scales

-   How quick it would be to build using that service.

_So, how do I decide on these?_

Well, before I look at AWS services I map out the product requirements. In my earlier and less patient days, I would have simply done a Proof of Concept (PoC) and then built as soon as possible. Today though, I properly assess the requirements and dial into areas such as the desired latency and expected amount of requests, which often helps make my decision for me. For example, if I need sub-5ms latency which is non-negotiable, this would limit the services I'm able to use and also has knock-on effects on the choice of data storage.

![Common dilemmas with Serverless](/images/blog/2020-05-vacation-buffer/common-dilemmas-serverless.png "Common dilemmas with Serverless") 

There are a few common service choice dilemmas that I often see come up too so these are my thoughts.

-   When it comes to databases, there is a vast choice so I would recommend any developer to think deeply about this. 

-   When it comes to API Gateway versus Application Load Balancer, I see: specificity and plenty of capability versus simpler, quicker and cheaper. It's important to remember that the latter doesn't necessarily make a bad choice or service. 

-   For the compute platform, it doesn't always need to be Lambda. Things can be serverless and not use Lambda. The compute platform is undeniably an important area to navigate and assess according to your own requirements each time. For example, for high scale data processing, things are less abstracted.

Check out this [list of 5 AWS services everyone should have in their starter toolkit](https://dashbird.io/blog/5-core-aws-serverless-tools-starterkit/), to help you get started. 


## Underused Concepts and Common Challenges 

Architectural patterns are one of the main factors for mistakes and challenges, mainly because serverless is so different to server-centric architecture. In addition, so much of serverless is pushed towards managed services and therefore the surface area that would use code and functions is now reduced.

We can often gloss over these but some incredibly valuable concepts are unfortunately underused and lead to difficulties that can be avoided. 

### Decoupling and Async Patterns

By not using async messaging patterns in your architecture as Lambda scales, the services downstream might not, causing throttling and exhausting database connections. This will be one of the first things you'll run into. Instead, by adding SQS, dead letter queues, and reserving the concurrency of functions that protect the services down stream, you'll see better and more consistent loads with no big spikes.

> This is one of the most important concept shifts in building serverless applications that are truly scalable and robust.

### Avoid Orchestration in Code

Orchestration and waiting in code means you're driving up costs unnecessarily with no real gain and instead reducing availability, reliability and speed. This is where [Step Functions](https://dashbird.io/knowledge-base/step-functions/what-is-aws-step-functions/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=insights&utm_content=kinesis-stepfunctions) comes in as a real hero. Using Step Functions, you're able to implement retry and drawback mechanisms and build in error handling. Separate to this, one of the best benefits of Step Functions is the ability to cue single purpose services into your workflow, by taking pieces of code that can be replaced and inserting pieces into a database more easily. The good news is that [Dashbird Insights now support Step Functions monitoring](https://dashbird.io/blog/dashbird-supports-aws-kinesis-step-functions/) and enables you to quickly detect errors related to state machine definitions or task execution failures.

### Don't Build What You Can Reuse

I now live by this idea. Using [Serverless Application Repository](https://aws.amazon.com/serverless/serverlessrepo/), most pre-built applications are well thought out and reliable so there really is no need to spend time on undifferentiated value by building your own. You'll save time and resources, and get to market much faster.

### Developer Workflow and Operational Tools

At Dashbird, we see a lot of time and effort spent on navigating data, digging through logs and essentially trying to understand what is going in an app.

Complexity has shifted away from code level to the infrastructure level, meaning the patterns used and the ways applications are built are more difficult to understand, as they work in an entirely different way, particularly as a large part (if not all) is a managed service. In addition, there are multiple services to understand, including the way they can fail. With what can feel like so much going on, scaling and understanding your application gets harder and as the developer, you can feel less in control than before. But, there are solutions and tools, like [Dashbird,](https://dashbird.io/features/) so fear not!


## Improving and Learning

![Serverless monitoring and debugging solutions](/images/blog/2020-05-vacation-buffer/monitoring-debugging-serverless-solutions.png "Serverless monitoring and debugging solutions")

[Monitoring](https://dashbird.io/blog/ultimate-guite-monitoring-serverless-applications/) and debugging is critical to successful serverless applications. Essentially through successful monitoring and debugging, we want to decrease the time to discovery which is the time from the break itself to the time the failure is realised. I therefore make this a priority and set it within my KPIs, stating clearly what cannot afford to fail and setting alarms for endpoints.

> You can learn more about monitoring, debugging, logging, architectural patterns and frameworks in this [free Serverless Best Practices e-book](https://sls.dashbird.io/en/serverless-best-practices).

AWS tools such as CloudWatch are a great starting point and I'd always recommend investing the time here to learn about its capabilities as well as your own specific requirements. When your application starts to scale or it becomes important to its users, whether clients or developers, adopting a third party monitoring and operational tool such as [Dashbird](https://dashbird.io/features/) is key. For your reference, here's a quick [comparison table between CloudWatch's and Dashbird's solutions](https://dashbird.io/blog/dashbird-vs-aws-cloudwatch/). My top priorities for a serverless monitoring tool are:

-   Good data availability

-   Automated alert coverage 

-   Actionable insights.

The local development environment is something to think about early on, and to continue to consider. As we know, while Lambda can quite easily run locally, databases aren't the same meaning it's not easy to simulate the entire cloud environment locally. However, there are still some good options:

1.  Connect local resources to cloud resources. We can connect local Lambda to development stage DynamoDB tables or have them interact with an SQS queue in the cloud. 

2.  Use "CloudLocally", which allows you to deploy function code each time to the cloud and test, pushing out a small change each time. Understandably, this will mean that your local environment will never exactly mirror the cloud environment and elements can still fail, but it's an option we've used well before. 

3.  Implement test driven development, which sees a small chunk to be tested using unit testing to cut down iteration speed.

When it comes to learning in the Serverless world, we must remain humble and continuously invest the time in learning and experimenting. Learn about new services as they're released and continuously put them into the context of best practice, and how they tie in with both the Serverless Framework and the [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/?wa-lens-whitepapers.sort-by=item.additionalFields.sortDate&wa-lens-whitepapers.sort-order=desc).

Serverless is constantly evolving with new services from AWS continuously being released so we are in the best position to get smarter about our future and best practices. If we look back just two or three years, the problems were very different with no mature tooling, but today, everything exists already to build high class applications.

Here are my favourite resources whether beginner or a seasoned Serverless developer to visit and keep revisiting.

![Recommended serverless AWS resources](/images/blog/2020-05-vacation-buffer/serverless-resources-AWS-Dashbird.png "Recommended serverless AWS resources")

[AWS - This is My Architecture](https://aws.amazon.com/this-is-my-architecture/)

[AWS customer case studies](https://aws.amazon.com/lambda/resources/customer-case-studies/)
