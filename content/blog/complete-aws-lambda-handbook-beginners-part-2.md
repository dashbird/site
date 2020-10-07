---
title: "The Complete AWS Lambda Handbook for Beginners (Part 2)"
description: "In the second part of our Complete AWS Lambda Handbook for Beginners, we discuss AWS Lambda pricing, share some interesting Lambda facts and best use cases."
date: 2020-09-22T00:00:00.000Z
frontImage: "2020-05-vacation-buffer/complete-aws-lambda-handbook-beginners-2.png"
thumbnail: "images/blog/2020-05-vacation-buffer/complete-aws-lambda-handbook-beginners-2.png"
canonical: "https://dashbird.io/blog/complete-aws-lambda-handbook-beginners-part-2/"
author: Taavi Rehemägi
author_image: '/images/team/taavi.jpg'
authorLink: "https://twitter.com/rehemagi"
blog: ["AWS Lambda", "serverless"]
---

In [Part 1 of our Complete AWS Lambda Handbook for Beginners](https://dashbird.io/blog/complete-aws-lambda-handbook-beginners-part-1/), we gave a refresher on the fundamentals of AWS Lambda and what is AWS Lambda. In this post, we'll look at AWS Lambda pricing, some interesting Lambda facts and examples of great AWS Lambda use cases in your serverless application. 

> Read [Part 3](https://dashbird.io/blog/complete-aws-lambda-handbook-beginners-part-3/)

## AWS Lambda Pricing


With AWS Lambda, you only pay for what you use, factoring in the number of requests and duration of your code. Lambda considers;

-   a request to be the time it starts executing in response to a trigger, such as an event notification or an [invocation volume](https://dashbird.io/features/aws-lambda-serverless-monitoring/).

-   the duration of the code from the moment your code begins executing until it returns or is terminated.


AWS Lambda offers a Free Tier, which includes 1 million requests per month, and 400,000 GB-seconds of compute time on a monthly basis. The __Lambda Free Tier__ doesn't expire automatically at the end of the annual AWS Free Tier term, meaning it is available indefinitely to both existing and new AWS customers.


The __Requests Tier__ includes 1 million free requests per month. After they've been spent, this tier will cost $0.20 per 1 million requests or $0.0000002 per a single request.


The __Duration Tier__ comes free with 400,000 GB-seconds per month, which is up to 3.2 million seconds of computing time free of charge. After they've been spent, the tier costs will go to $0.00001667 per every GB-second used. The price is based upon the amount of memory allocated to the user's function.


To calculate the price you'd be paying, you can use this [AWS Lambda cost calculator](https://dashbird.io/lambda-cost-calculator/). The calculator will help allocate costs and set budgets for AWS Lambda services based on your unique usage.


To see some cost examples and how the smaller print adds up to additional cost, have a look at this post explaining [AWS Lambda pricing model](https://dashbird.io/blog/aws-lambda-pricing-model-explained/) with examples.


Lambda functions can get time-consuming and costly if you don't prioritize its optimization. One essential practice is prioritizing the functions that are contributing the most to the overall AWS bill.

It's understandable that many will overlook this obvious practice since AWS does not provide much granularity into our cloud spending at first glance. Specialized monitoring services can take care of that. With [Dashbird](https://dashbird.io/docs/), for instance, you can see your spending on a per-function basis, aggregated by time period and receive Well-Architected insights customized based on your data to further improve your applications reliability, scalability and cost-efficiency. Dashbird periodically polls your AWS account for data. All the data we receive is encrypted and stored safely. [Get your free account to test it out](https://dashbird.io/register/) or find out more [how to reduce AWS Lambda cost](https://dashbird.io/blog/how-to-reduce-costs-on-aws-lambda/).

![AWS Lambda cost monitoring on Dashbird](/images/blog/2020-05-vacation-buffer/lambda-cost-Dashbird.png "AWS Lambda cost monitoring on Dashbird")

## Interesting AWS Lambda Facts 


1\. Lambda supports the most popular programming languages

AWS Lambda has a large roster of programming languages that work with the system. This list includes Node.js, Python, Java, Go, and C# which are the [most used AWS Lambda programming languages](https://dashbird.io/blog/most-effictient-lambda-language/).

This means your programmers can hop into AWS Lambda and be comfortable getting started and while there are some differences for some of the stateful focused programmers to get used to, if you are more functional-programming focused, you will feel instantly at home.


2\. Only pay for what you use = more skillful development

AWS created Lambda with efficiency in mind, which is why AWS will only charge for the services required, leaving out any over-complicated and unhelpful bundles.

The exact billing calculated from invocations and duration is in 100 ms intervals meaning the more efficient your code is, the more money you could save. This rewards savvy business owners who can persuade their developers to the more potent programming forms.


3\. No infrastructure management needed

When it comes to the traditional way of computing, a large portion of time and resource goes towards managing the servers that handle the technology within a business, and this often leaves business owners and other developers without time for new development.

With serverless computing and AWS Lambda in particular, those issues are now gone.

Since there's no servers to maintain, upgrade or fix, developers get to spend their valuable time creating new features and products, and ultimately growing the business.


4\. Editing online

The traditional method of development and deployment for these services has worked the same way for a while. With AWS Lambda, these haven't changed but they do have company now.

If you use JavaScript or Python to do your programming, you can access the editing platform from any web browser. This allows you to access and edit your infrastructure from any computer or even a mobile phone. You can also save and secure these changes back into the source control for more thorough management.


5\. Environment variables

AWS Lambda gives you a powerful tool when dealing with various configurations. That tool is [environment variables](https://docs.aws.amazon.com/lambda/latest/dg/env_variables.html).

With environment variables, you can tag and categorize a massive amount of different configuration information, which can pass through to a variety of builds, areas, and other environments.

As long as you are diligent in setting the correct variables and keep track of which variable you need for the configuration at hand, the system will keep things organized and sorted.


6\. API Gateway and other connection points

AWS Lambda acts as a focal point for your entire infrastructure. Using API Gateway, your cloud services become an interconnected web of easy to access functions. As you create more custom processes, these will integrate with the rest of your application through the API Gateway. As your data flows through the variety of configurations and setups you have created, API Gateway interlinks them all.

You can use this wide-spread network to hone in, customize, and change your systems as needed. Use this to alter your other AI and cloud-based systems for their most efficient use.


7\. AWS Lambda runs locally

A relatively recent addition to the AWS Lambda repertoire is the ability to take your serverless infrastructure and run it on a local machine.

With SAM, the Serverless Architecture Model, you can create CloudFormation templates to define whatever application you will attempt to run at the local level. This allows you to access and configure all of your Lambda creations and setups from any localized machine. To then gain access to Lambda, all you have to do is use the SAM command line, "generate-event" or by passing a JSON file with static data. You can also access Lambda on a local level through a Serverless framework. However, both of these setups do come with some restrictions. The heaviest restrictions lie in the limit of languages you can use with the local setup. 


## AWS Lambda Use Cases 


There are endless use cases for AWS Lambda, whether they are central to your business or simply value-add elements. Here are a few of the best:


1\.  Serverless Chatbot: 

Considering how time-consuming, difficult and costly it is to build a chatbot, AWS Lambda allows you to run chatbot architecture that is scalable in just a few simple steps. You must set up your code to trigger when any commands are sent to the chatbot; these commands are requested via API (Messenger, Slack, etc.) and further routed from API Gateway to Lambda function.


2\.  Mass Mailing: 

AWS Lambda with SES (Simple Email Service) allows you to use "mass mailing". Combining the two services, you'll get a cost-effective and in-house serverless emailing platform.


3\.  Swift Document Conversion: 

For those providing documents to users, there is often the problem that there isn't a standard document format that will meet everyone's requirements. You can, of course, make and store copies of all document formats that are most likely to be requested; however, this soon stretches storage capacity and cost. AWS Lambda can swiftly retrieve the required document, format and convert it, and finally serve it back to the user for a download or a display in a page.


4\.  Processing Video: 

This case is useful for those of you who have stored video files in an S3 bucket. You may have an instance that polls the bucket on a regular basis. It sits until a new file is uploaded, then it downloads the file, manipulates it in some way, and drives it back to your origin server. The problem here is you have an instance that's sitting idle for a good part of the day with money and computer resources being used 24/7 for no valuable reason.

Using AWS Lambda allows you to upload your script (Java, JavaScript, Python, etc.) and design code to provoke an event when a new file is uploaded to the bucket, which will lead to the file being processed and pushed back to your origin server.


5\.  Operating Serverless Websites: 

This might be the best way to take advantage of the pricing model of Lambda and S3 hosted static websites.

Think about hosting the web frontend on S3, and accelerating content transmission with CloudFront caching. The web frontend can send requests to Lambda functions using the API Gateway HTTPS endpoints. Lambda can handle the application logic and persist data to a fully managed database service (RDS for relational, or DynamoDB for a non-relational database).

Your Lambda functions and databases can be hosted within a VPC to separate them from other networks. As for Lambda, S3 and API Gateway, you get charged after the traffic is incurred, and the only fixed expense will be running the database service.

6\.  Security Alerts: 

Do you need to be aware of any security breaches in your cloud infrastructure? Is it imperative to your overall cloud strategy to monitor your logs and to keep an audit trail? Most likely and Lambda can massively help in this situation.

You can create a Lambda function to send an alert on a specific event from your Cloudwatch/CloudTrail AWS activity logs to your designated on-call staff via email, or to call your phone.


7\.  Automated File Synchronization: 

If you have a repository that needs to be regularly synchronized to a number of locations several times a day you'll likely find AWS Lambda very useful.

Many people don't use a dedicated instance for things like this, instead they double or even triple up on another instance and assign this task to it. Depending on the security policy or contention for resources at specific periods during the day, this will prove not to be the best option.

Instead of keeping an instance up and running all day long, chewing away at your budget every month, you can use a Lambda function that will be triggered by a scheduled event, run your synchronization job, and then leave until the next cycle is needed to run.


8\.  Predictive Page Rendering: 

Are you using predictive page rendering to ready web pages for display based on the probability that the user will select them? You can use a Lambda-based application to retrieve documents and multimedia files, which might be used by the next page requested, and to conduct the beginning stages of rendering them for display.

If multimedia data is being served by an outside source, the AWS Lambda application can even check for its availability, and attempt to use alternate sources if they are not available.


## Wrapping up


In the end, AWS Lambda should be one of your [prime go-to resources](https://dashbird.io/blog/enterprise-use-cases-lambda/) for approaching repetitive or time-exhausting tasks, along with the other heavy lifting jobs of the data processing world. It frees your prime online services to target on crucial frontend tasks, such as responding promptly to user requests, and it allows you to offload a lot of processes that would otherwise significantly decelerate your system.

In our next and final installment of the Complete AWS Lambda Handbook for Beginners, we'll be addressing some common challenges and how to overcome them, and the importance of AWS Lambda monitoring.
