---
title: Serverless Security Trends to Considerations
description: Security is always going to be a concern for big companies and with serverless things, while different, present the same problem
date: 2019-08-1T12:00:00.000Z
frontImage: "2018-07-12/pexels-photo-1198325.jpg"
thumbnail: "images/blog/2018-07-12/pexels-photo-1198325.jpg"
authorlink: 'https://www.grabmyessay.com/research-papers'
author: Estelle Liotard
blog: ["microservices"]
---
Fourteen billion dollars.

That’s the projected global market size for the serverless architecture market, which is supposed to grow by about 23 percent annually in the next few years, according to the recent[ Global Serverless Architecture Market report,](https://www.kbvresearch.com/serverless-architecture-market/) published by KBV research.

The fast pace of adoption of serverless is hardly surprising because the technology can save significant costs for companies. For example, it can enable them to build and deploy software and digital products without the need to provide and maintain any virtual or physical servers (this task is done by the cloud provider, which is responsible for dynamic management of allocation and provision of servers).

As a result, the companies using serverless architecture also eliminate such complex tasks as maintaining security by continuous application of patches and other solutions, therefore, can focus more on the functionality of their digital product.

Surprisingly, IT professionals are taking a cautious approach to adopting the technology of serverless architecture right now. For example,[ according to this ZDNet article citing the latest research](https://www.zdnet.com/article/serverless-computing-growth-hits-a-plateau-at-least-for-now/), the adoption has slowed down at the beginning of 2019. After interviewing more than 500 IT professionals, a study found that only 15 percent of them were actually using it, and the share of those evaluating the technology fell to 36 percent compared to 42 percent in September 2018.

![alt_text](/images/blog/2019-08-01/edit1.png "image_tooltip")


However, this may suggest that the companies just need more time to get to know serverless architectures and learn how to properly deploy it across an organization, which is not an easy task. On top of that, plans or intentions for serverless implementations may also be slowed down by evaluations of security risks associated with the new technology.

Indeed, there are quite a few security risks that should be considered when securing serverless applications as well as using the technology itself. As more organizations adopt serverless, this issue may become more impactful, so let’s review the biggest hazards as well as trends in this area that any adopter of this technology should be aware of.

**Major Hazards of Serverless for 2019**

In this section, let’s see what risks may be ahead for serverless technology and what factors will drive its development in the next years. Begin with risks, shall we?


## Major Security Risks associated with Serverless Technology

Given the relatively new nature of the technology, serverless-based architectures run a number of security risks that should be considered by the owners, including the following.

**1. Complicated Security Scanning**

The recency of the technology is the main reason for this. Compared to standard applications, doing security testing for serverless architecture is much more complex because almost everything has to be done manually. Since almost all currently available automated scanning tools lack adaptability and compatibility with serverless applications, it’s reasonable to assume that the problem will persist until adequate security testing solutions are developed.

For example, SAST (Static Application Security Testing) works great with standard applications but has some issues with serverless. Specifically, this tool relies heavily on control flow and data flow analysis to identify security issues in software, but since serverless apps have a range of functions that are connected with cloud services and event triggers, performing this security check would be prone to false positives.

Also, the users of serverless architectures may also run into problems with conducting standard security protections, including Firewall, IDS, and WAF. For example, the technology may restrict or eliminate the access to both virtual and physical servers, which means that the users won’t be able to take advantage of the abovementioned traditional protections as well as endpoint protection and host-based intrusion detection systems.

**2. Expanded Potential Attack Surface**

As it was mentioned in the previous section, serverless architectures limit the use of application firewalls and other standard protections, which means that they’re prone to more threats. For example, these architectures use data from an expanded range of event sources (APIs, cloud storage, HTTP, IoT devices, and others), which increases the attack surface.

On top of that, the attack surface gets even more complex. For example, it can be quite challenging to understand all the involved risks, as the technology is still relatively new for many. For businesses, this could present a lot of challenges; for example, while content companies can outsource writing and proofreading to a plethora of online tools like[ Supreme Dissertations](https://supremedissertations.com/),[ Grammarly](https://www.grammarly.com/),[ Wowgrade](https://wowgrade.net/research-papers-for-sale), and[ Studicus](https://studicus.com/do-my-paper), security risks are something that must be considered and monitored for at all times.

**3. Dependencies on Third-Party Software Packages**

To complete a specific task, serverless functions require a piece of code. Typically, these functions heavily rely on software developed by third parties, and in some cases, even open-source libraries and remote services. This means that the risk of obtaining something dangerous during the import of code from a vulnerable third-party dependency is high.

On top of that, there’s a risk involved in using third-party libraries. For example, when you deploy a serverless app and move on, it begins to age, so it needs regular security updates to ensure a proper protection of the data. If you don’t update them, the risk of being hacked becomes a real issue; in fact,[ that’s what happened to Capital One several years ago](https://www.idtheftcenter.org/capital-one-reports-inside-job-data-breach/), when the company lost the data of millions of customers because of an outdated third-party library.

Avoiding this security risk requires the users of serverless to use a number of methods, including:

●       Removal of unnecessary dependencies

●       Regular upgrade of outdated package versions

●       Software scanning for known vulnerable dependencies (typically comes in the form of a security platform)

●       Keeping the list of the available dependencies and their versions.

**4. Unsafe Storage of Access and Configuration Files**

Storage and maintenance of configuration settings, access files, API keys, database credentials, encryption keys, and other “app secrets” becomes a concern for users of serverless architectures as their apps grow in complexity. In conventional applications, these files are typically stored in one centralized and encrypted file or database that developers cannot access because of the role-based access control (RBAC), which limits their rights to their role (deployment, etc.)

On the other hand, one can’t store “the secrets” in one centralized file because each function is packaged separately. As a result, they need to rely on environmental variables to access it. The storage as an environmental variable, e.g. as a plain text, means that the users who deploy an app are likely to obtain access to sensitive data.

The best way to mitigate this risk is to ask your vendor about the possibility of storing sensitive data in an encrypted environment. They should provide you with secure APIs that are fully-compatible with serverless.


## Major Serverless Trends

Now that we know the potential risks involved with migrating to serverless architectures, let’s now talk about the hottest trends that will define the future of the technology.

**1. Adopting and Securing Serverless Apps will become Easier**

As we’re just read, there’s a number of serious security considerations that come with serverless architectures, so a lot of people are working on eliminating them. As more and more companies adopt serverless, the need to address them will become even more urgent. That’s why we see big companies like Google and IBM (read about that below) are working to make sure that the technology is secure and ready to use.

Another important trend is the development of tools that help with adopting serverless. Since the adoption of the technology essentially means rethinking almost everything that the users are used to do with the traditional architectures, they will need helpful tools for tasks like monitoring.

For example, adopters of serverless architectures can use Dashbird for[ monitoring and troubleshooting of serverless applications](https://dashbird.io/features/). The tool is specifically designed to help users detect all potential failures in the apps, including crashes, timeouts, configuration errors, and early exits. To make the adoption of serverless even easier, the tool supports all runtime languages available on AWS and doesn’t need the user to make changes to the existing code.

**2. Standardized Serverless Development**

“There’s little standardization across serverless vendors, which means that the online community can’t quite realize the full potential of the technology,” says Ashley Stockwell, a developer from[ Trust My Paper](https://www.trustmypaper.com/). “Currently, many players push for standardization measures that can make a single experience for deploying functions across all providers of serverless.”

For example, the Cloud Native Computing Foundation (CNCF) is at the forefront of the standardization effort together with Oracle. According to[ this SDX report,](https://www.sdxcentral.com/articles/news/cncf-oracle-boost-serverless-standardization-efforts/2018/05/) the two organizations are working on the first draft specification “targeted at interoperability for generating a serverless function.” Reportedly, the main purpose of the project is to provide tools for building, testing, and managing the lifecycle of serverless architectures.

“One thing is quite clear – as a new technology there is a lack of standardization and interoperability between cloud providers that may lead to vendor lock-in,” SDX quoted CNCF’s recent document on the progress of the standardization project. “There is a need for quality documentation, best practices, and more importantly, tools and utilities. Mostly, there is a need to bring different players together under the same roof to drive innovation through collaboration.”

In addition to this collaboration, there’s another open-source framework project pushing for standardization called Knative. Leveraging Kubernetes’ experience, Knative seeks to make the building and deploying serverless applications easier.[ The project was started by Google](https://cloud.google.com/blog/products/containers-kubernetes/knative-bringing-serverless-to-kubernetes-everywhere)<span style="text-decoration:underline;"> </span>- with the latest version released not so long ago - but many others are already on board,[ including IBM](https://www.eweek.com/cloud/ibm-embraces-knative-to-drive-serverless-standardization).

**3. Serverless will also become Hybrid**

It’s safe to suggest that many enterprise users of applications will have requirements that can only be met with hybrid serverless solutions; for example, this means that some apps will run on data centers while others on AWS Lambda and public clouds. By making that happen, the serverless technology will become even more popular among enterprise users, and get more useful integrations and features.

This trend is supported by reputable sources. For example,[ this Deloitte report](https://www2.deloitte.com/content/dam/Deloitte/tr/Documents/technology-media-telecommunications/Serverless%20Computing.pdf)<span style="text-decoration:underline;"> </span>claims the following:

“Not all application or service can be delivered in a serverless model – we believe the future enterprise IT landscape will be a hybrid landscape.”

The report also suggests that serverless computing is a lot more attractive for enterprise users than traditional infrastructure models, but taking full advantage of the technology would be impossible without “the right software architecture.”


## Becoming Mainstream

Even though serverless comes with some security considerations, big players are working on making sure that this technology is as secure as possible. Like any other emerging technology, serverless is at the improvement stage, as all of the challenges - including those described in this article - are totally surmountable.

It’s safe to assume that serverless will become mainstream in the next several years, as more and more companies are becoming interested in this new building and architecting applications that eliminate the need to manage them.