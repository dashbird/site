---
title: Top 5 serverless platforms of 2018
description: Get to know the best serverless platforms of 2018
date: 2018-06-25T01:00:00.000Z
frontImage: "2018-06-25/abstract-alphabet-arrow-981294.jpg"
thumbnail: "images/blog/2018-06-25/abstract-alphabet-arrow-981294.jpg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
---

<!-- add this above the ---
# canonical: https://addcanonicalurlhere
-->

![Pick the right serverless platform](/images/blog/2018-06-25/abstract-alphabet-arrow-981294.jpg)

Serverless has been a word that's been buzzing around for the past year and it's no secret that we, the folks at Dashbird, are big fans of the technology. It's been a tremendous pleasure to see serverless technology gather such renown around the developer communities and the fact that so many big companies are adopting serverless it validates a fact that we already know to be true. Serverless is here to stay.

I wanted to take a little time to run down the most popular serverless platforms out there to help shed some light on the current options available to developers. So I'll just straight right in with our favorite one, AWS Lambda.


![AWS Lambda](/images/blog/2018-06-25/aws-lambda.jpg)

<h2><a href="https://aws.amazon.com/lambda/">1. AWS Lambda</a></h2>

For those living under a rock, AWS Lambda is a serverless compute service created by Amazon back in 2015. It runs a function triggered by an event and manages the compute resources automatically so you don't have to worry about what is happening under the hood. Right now AWS Lambda has about 80% of the function as a service market share and though there are other similar services that offer a service that cost just about the same it remains to this day the most popular serverless platform amongst developers. Not to mention the fact that it integrates flawlessly with the most awesome <a href="https://dashbird.io/blog/serverless-monitoring-tools-2018/">serverless monitoring tool</a> there is: <strong>Dashbird.io</strong>


![Microsoft Azure](/images/blog/2018-06-25/azure_functions_featured_image.png)

<h2><a href="https://azure.microsoft.com/en-us/">2. Microsoft Azure</a></h2>

Azure Functions is Microsoft's swift response to Amazon's Lambda. It offers a very similar product for basically the same exact cost down to the penny. It even offers the first million function invocations for free, just like AWS Lambda does. While there are a number of differences between Lambda and Azure, one of the biggest is the different ways these two services deal with the availability of the functions. If a Lambda has not been called for some time Amazon will create a new instance of said Lambda thus creating a noticeable delay. Microsoft uses Azure Web Jobs that also work in a similar fashion but the delay between hot cold invocations is less visible.

![Google App Engine](/images/blog/2018-06-25/GAE.png)

<h2><a href="https://cloud.google.com/appengine/">3. Google App Engine</a></h2>

In an effort of making the article as easy to understand as possible I'll compare GAE to AWS Lambda event though they are not that similar. Google App Engine is a solution that allows the developers to create fully fledged applications without having the worry of performance and scaling. At the other pole, there's Lambda, a service that allows you to create mostly event-driven applications that just like GAE scale gracefully without any problems what so ever.

![Google Cloud Functions](/images/blog/2018-06-25/google-cloud.jpg)

<h2><a href="https://cloud.google.com/functions/">4. Google Cloud Functions</a></h2>

This is pretty much the straightforward response to Amazon's and Microsoft's cloud computing solutions. It's a fully managed nodeJS environment that will run your code handling scaling, security and performance. It's event-driven and will trigger a function returning an event, very much in the same way AWS Lambda works. It's intended to be used for small units of code that are placed under heavy load.

![IBM OpenWhisk](/images/blog/2018-06-25/ibm2-1100x360.jpg)

<h2><a href="https://console.bluemix.net/openwhisk/">5. IBM OpenWhisk</a></h2>

I'd be remiss not to mention IBM OpenWhisk, an open source Function as a service solution that was launched back in 2016. It's part of IBM Bluemix which is a Platform as a service that runs on SoftLayer infrastructure. While IBM OpenWhisk is not as popular as the other platforms mentioned above one if it's key advantages is the fact that it can be installed on-premise thus providing a lot more control over your serverless applications. If you are into that.

There you have it, 5 of the most popular serverless platforms. The serverless computig technology is still in its infancy and I believe it's important to have a clear understanding of what your options are in order to make the right decision that would fit best your business and project.
___

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about these improvements and new features! We would really appreciate it!_

_Sign up to our newsletter to get all the latest news and tutorials on serverless._