---
title: The Origins of Serverless
description: Since being launched in 2014, AWS Lambda service has spread fast amongst developers and cloud architects, for it is easy to use and there is a significant cost benefit (pay-per-use basis).
date: 2018-06-06
frontImage: "2018-06-06/pexels-photo-886521.jpeg"
thumbnail: "images/blog/2018-06-06/pexels-photo-886521.jpeg"
authorlink: 'https://twitter.com/@johndemian'
author: Joshua Harding
---
![Origin of Serverless Software](/images/blog/2018-06-06/pexels-photo-886521.jpeg)  

## What is Serverless?
Serverless is a hot technology right now. However, what does it mean? The easiest way to define it is that it takes the “where” out of software deployment. To understand this concept a little more clearly, let’s look at the various ways in which software was deployed.


## The history of software deployment
![Origin of Serverless Software](https://lh5.googleusercontent.com/kRRIOns2h09Wd1AowqvAtzkMCI3KEWMCT2POODRXTKEraqkDiEDTNRAW_Wx4aEE20AGm9gHLSc9CfKswzD70ZEoi77BcyrVX6cKISVeHb_qDcYDdeiKi8XICsY31KV9SuQ)  
In the past, systems administrators would prepare physical servers for software to be deployed. This would involve installing the operating system, associated device drivers, making sure there was enough memory/disk/processor available, installing any prerequisites, etc. They would also take care of hardware upgrades and so forth. This is known as a “bare metal” environment. There is strong coupling between the physical hardware and the deployed software, since one strongly depends on the other. Here, the unit of deployment was an actual server.

The next type of deployment to emerge was a virtual machine. Now, instead of deploying right to a given piece of hardware, developers were able to target a simulated server. This led to a lot of flexibility with upgrades and migrations, as well as not having to worry about small hardware variations. This made deployments a lot more repeatable and flexible. This also enabled system administrators to begin decoupling software from hardware. Now, if there was a hardware failure, a system administrator could migrate the virtual machine to different hardware and avoid issues. Systems administrators could also host more than one virtual machine on a given physical server. However, virtual machines still had some limitations and overhead. For better or for worse, they pretended to be actual servers and this wasn’t always needed. Here, the unit of deployment is the virtual machine.


The follow-up to virtual machines was containerized deployment. Various containerization technologies like Docker, OpenVZ, LXC, FreeBSD zones and Solaris jails all emerged. These technologies enabled a system administrator to “section off” an operating system and have different applications running on the same system without them interfering with each other. It also let developers have a light-weight environment that closely matched the production environment, leading to more consistent operations between environments. Additionally, a lot of tooling has developed to ease creating and maintaining containers and many companies use this to improve their development and deployment cadence. Here, the unit of deployment is a container.
You will notice in each of these paradigms, there is concept of “where” the software is executing, whether that’s on a physical server on-site, or on a VM on a cloud host. Serverless promises to give us another level of abstraction: the code itself. With this new level of abstraction, we don’t need to be as concerned “where” our code is hosted.


## The beginnings of Serverless
Google released Google App Engine in 2008. For the first time, a developer was able to develop a program and launch it to run on Google’s cloud without having to be concerned with details like how the server was provisioned or if the operating system required patches. Amazon launched a similar service, Lambda in 2015. Now, developers could create software and not have to worry about hardware, operating system maintenance, scalability or locality. Although these are two of the bigger providers, there are a great number of serverless providers today, all supporting various technologies at different price points. Additionally, software is available for on-premises deployment for companies that don’t want to go to the cloud but want some additional flexibility.


## The developer experience
Although there are a great number of variations on how the different Serverless platforms work, they typically follow a workflow like this:
-   The software is developed and packaged following the guidelines of the chosen platform. Depending on the vendor, this may mean writing our software expressed as a JavaScript function, or it may even involve packaging it into a container.
-   Once the package is created, it is uploaded to the serverless provider’s platform.
-   The deployment is then live. The platform will decide when to create or destroy replicas of the software and will respond to increased load by creating more copies of the container or function.
This type of workflow tends to be pretty popular with developers – they only need be concerned with the creation of the software and the Serverless provider takes care of the details.


## Conclusion


The way software is delivered has continued to evolve, especially since the advent of affordable and reliable cloud hosting. Each new methodology brings new advantages as well as some disadvantages, so it’s best to be familiar with them all to enable yourself to select the most appropriate deployment method for a given project. Large deployments may find themselves needing to use a combination of these approaches. For example, it’s common for GPU compute to be done on bare-metal, instead of in a container or virtual machine. It is best to view these separate approaches as augmenting each other, rather than supplanting each other. As always, stay aware of project requirements and this will guide your hand in choosing the most efficient way to launch and maintain your software platform.


