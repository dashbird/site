---
title: The Threats and Opportunities of Going Serverless
description: There are a lot of opportunitis but also certain threats when going Serverless. Here's a breakdown of what you should keep in mind.
date: 2018-02-09
frontImage: "09-02-2018/threats-of-going-serverless.jpg"
thumbnail: "images/blog/09-02-2018/threats-of-going-serverless.jpg"
author: Ali Raza 
---

![Threats of going serverless](/images/blog/09-02-2018/threats-of-going-serverless.jpg)

Abstraction is a developer’s dreamland, where no one needs to work through the art of IT Ops processes such as infrastructure resource planning and management throughout the application lifecycle. Fortunately, AWS came up with an answer in 2014 by introducing the Lambda compute service that transformed the way backend infrastructure is managed in response to changing in-app events and code execution processes. 


Instead of defining, planning, provisioning and managing the underlying infrastructure to execute app requests, Lambda lets developers upload their code to AWS and automatically takes care of the infrastructure management processes. The resources are provisioned only in response to the app execution requests and terminated when the request is served – and users are typically charged for the compute time consumed or the number of compute requests.


In simple terms, developers write the application logic without thinking about the servers – hence the serverless architecture. On the surface, serverless computing drastically reduces the cost, complexity and efforts in managing applications. Developers can work to write the best software products, focus on innovation and improve time to market. At the same time, going serverless has its limitations and doesn’t eliminate the need to observe the application development lifecycle from a holistic perspective. To overcome these limitations, developer tools such as <a href='https://dashbird.io' target='_blank'>Dashbird</a> have emerged.

Here are a few pointers to get you thinking:

## Opportunities:

  * **Automated Infrastructure Management:** An entire chain of manual infrastructure management processes is eliminated as users no longer need to coordinate and manage resource for increasingly distributed software components that constitute modern apps.
  * **Cost and Time Saving:** The operational costs and time is reduced as no system administration processes are required to package and deploy the apps.
  * **High Scalability and Optimized Resource Utilization:** The cost barrier to scale apps is also reduced as serverless IT workloads don’t require dedicated resources. Every application request is met with continuous and independent scalability requirements, yet the users are charged only during the period that requests are served.
  * **Truly Agile Business Processes:** Since the application deployment process is (apparently) decoupled from the underlying infrastructure, Agile and DevOps-driven organizations are can maintain flexible IT operations and business processes. The constraints due to hardware complexity and infrastructure configuration limitations have less impact and role in dictating IT-driven business operations or app functionality. Agile teams can aim for faster development sprints and deploy iterative improvements or changing app functionality with fewer constraints.
  * **Reliability and Performance:** Services like AWS are inherently resilient and can guarantee performance SLAs most of the times. Serverless architecture offers the convenience of reducing the opportunities of hardware misconfigurations that potentially lead to performance degradation with traditional app deployment practices.


## Threats and Considerations:

  * **Cost Efficiency for Prolonged Computing:** The longer the computing tasks run, the more you pay. For highly scaled applications with data-intensive workload processing requests, a detailed cost analysis of usage-based serverless computing services is required to ensure optimal cost efficiency. Costs could spike unpredictably for unforeseen increase in usage demands and may require organizations to tradeoff the traffic they can accommodate in a bid to reduce the IT expense. Additionally, developing apps and services as a collection of functions may add to the complexity and development cost.
  * **Additional Functions and Microservices Calls:** Additional overhead is introduced to initiate compute requests with every function and microservice since the workloads may not be reside on the same server instance. This information may be required to plan for accurate total cost of ownership. Furthermore, every server invocation has its inherent latency that may impact app performance. Most serverless providers enforce time limits on how long the request can consume computing resources before it’s terminated. For instance, the execution time limit for Lambda is set at 5 minutes per invocation.
  * **Vendor Lock-In:** As a trade-off for developing apps to run on a third-party serverless architecture, developers naturally lose control over the underlying infrastructure and platform that power the app. It is likely that developers cannot move the app to other infrastructure service providers or in-house infrastructure without incorporating significant (forced) changes to the app. And if they don’t migrate the apps, the underlying platform API and costs can change unexpectedly.
  * **Limitations – Errors and Monitoring:** Errors are a commonplace with app execution during the development process. Especially with the ever-evolving functionality development process, developers need to keep an eye on the errors and respond to alerts appropriately. But for high-volume systems, sifting through the noise and performing accurate alerts becomes challenges without adequate visibility and control into the infrastructure. The basic log metrics reporting with Lambda for instance, is usually insufficient and inconsistent to address this concern.

That’s not it – we’ve yet to highlight the software testing concerns but that’s a complete new topic on its own! But don’t let the tradeoffs and considerations (sometimes presented as drawbacks) keep you blindfolded toward the disruptive, transformative and game-changing platform that serverless architecture offers. It’s important to note a key fact: the world of IT is in a continuous state of development and evolution. Resisting the change doesn’t help. It’s more about taming the beast and maximizing the value potential of new technologies.


With this philosophy, <a href='/' target='_blank'>Dashbird</a> lets IT teams navigate the monitoring challenges associated with Lambda and serverless architecture. The monitoring solution offers a holistic overview of all functions, tracks errors in real-time and alerts for the most impactful events before it’s too late. All of this through an intuitive control panel and interface so that IT teams spend more time innovating and less time merely to keep the systems alive.

Take a look at more product features <a href='/features' target='_blank'>here</a>.
