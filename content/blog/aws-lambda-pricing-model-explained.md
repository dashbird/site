---
title: AWS Lambda Pricing Model Explained With Examples
description: Money is the one thing that turns the world around. Unfortunately, it is the necessity in almost all spheres of life. You can live without it or with lesser amounts of it, but it makes it all harder...
date: 2018-06-19T00:00:00.000Z
frontImage: "2018-06-19/aws-lambda-pricing-model.jpg"
thumbnail: "images/blog/2018-06-19/aws-lambda-pricing-model.jpg"
author: Nemanja Novkovic
blog: ["Lambda", "Other"]
---

Money is the one thing that turns the world around. Unfortunately, it is the necessity in almost all spheres of life. You can live without it or with lesser amounts of it, but it makes it all harder. If you wish to have it, first, you need to give it, as always. Even AWS Lambda is not free. 

Simply put, you have an idea and are on a breakthrough to make it happen. You need to use AWS Lambda to make it easier, prettier or for whatever reason, easier to maintain. You need to pay for AWS Lambda. In that way your product will see the light of the day which will eventually bring the money back to you. To be able to earn, you need to invest first.

A good thing with AWS Lambda prices is that you will only pay for what you use. There are no pre-set packages of their service where you will end up paying for something that you might not use at all. That’s why AWS Lambda decided to make it as simple as possible, which is a fantastic feature.

### How Does AWS Lambda Charge For Their Services?

AWS Lambda is charging its users by the number of requests for their functions and by the duration, which is the time the code needs to execute. When code starts running in response to an event, [AWS Lambda](https://aws.amazon.com/lambda/) counts a request. It will charge the total number of requests across all of the functions used. Duration is calculated by the time when your code started executing until it returns or until it is terminated, rounded up near to 100ms. The AWS Lambda pricing depends on the amount of memory that the user used to allocate to the function.

### AWS Lambda Pricing Details And Tiers Explained

AWS Lambda offers [three different tiers](https://aws.amazon.com/lambda/pricing/) to choose from. The **Free Tier** includes 1 million requests per month, and 400,000 GB-seconds of compute time on a monthly basis. The Lambda Free Tier doesn’t expire automatically at the end of the annual AWS Free Tier term. It is available indefinitely to both existing and new AWS customers. 

In the upcoming example, we’ll show you some of the approximate prices per 100ms associated with different memory sizes in the free tier seconds. The lowest example would be to allocate 128 MB of memory within the limit of 3.2 million seconds per month. The price per 100ms would be $US 0.000000208. 

Another example will lead us somewhere around the middle price. Let’s say that you allocate 1600 MB of memory inside the 256,000 seconds per month limit in the free tier. Choosing these parameters would cost you $US 0.000002605 per 100ms. 

A third example would probably be the highest in cost but let us show it to you. Considering that you choose to allocate 3008 MB of memory with the limit of 136,170 seconds per month in the free tier. You’d need to pay for this $US 0.000004897 per 100ms. There are many more choices to choose from with more or less allocated memory, leading to more or less free tier seconds, and finally, a different price per 100ms used.

The **Requests Tier** includes 1 million free requests per month. After they’ve been spent, this tier will cost $0.20 per 1 million requests or $0.0000002 per a single request.

The **Duration Tier** comes free with 400,000 GB-seconds per month, which is up to 3.2 million seconds of computing time that are free of charge. After they’ve been spent, this tier costs will go to $0.00001667 per every GB-second used. The price is based upon the amount of memory allocated to the user’s function.

If this information was helpful, but it still gives you a hard time to calculate the price you’d need to pay, use our [AWS Lambda cost calculator](https://dashbird.io/lambda-cost-calculator/). The calculator might help you in figuring out the costs you need to pay for AWS Lambda services based on personal usage. Follow [this link](https://dashbird.io/lambda-cost-calculator/) and calculate your own AWS Lambda prices.

### Additional Charges Within AWS Lambda Pricing

People mostly do not like the “small text on the bottom,” and usually they do not read it through. That is why we at [Dashbird](https://dashbird.io/) have read it all, and we wish to deliver it to you. That way you will avoid any unnecessary and unpleasant experiences.

To avoid unnecessary situations, you need to know everything there is to know about pricing models, additional charges, etc. Are there any additional charges in AWS Lambda pricing models? Yes, there are. Read this carefully, and there will be no unpleasant surprises.

The possibility of additional costs to incur is significantly higher if you have used any other AWS services or data transfers. You will be charged regardless of the chosen tier. In the example, if your function is reading and writing data to or from Amazon S3, you will be charged for the read/write requests and all of the data that is stored within [Amazon S3](https://aws.amazon.com/s3/). 

We will list some of the cases that will be charged additionally and that way you can follow up with all the changes made. If your Lambda function starts the external data transfers, you will be billed at the [EC2](https://aws.amazon.com/ec2/) data transfer rate. 

Also, something worth mentioning is that [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) charges for data storage, as well as for throughput capacity and data transfer. On the other hand, Amazon S3 is charging for storage, requests and data transfers.

### AWS Lambda Pricing Examples

The AWS Lambda pricing example will be presented in this section made by the AWS Lambda prices already mentioned. 

Let say, if you allocated **512 MB of memory** to your function and executed it **3 million times** during one months time. Considering that it ran for 1 second each time, you’d be billed upon monthly compute time (in this case = $18.34) and by monthly requests (in this case = $0.40). Therefore, the **total billed sum would be $18.74 per month**.

Knowing what you need and how much it might cost are the first steps to fulfilling your ideas and bring them to life successfully. 

_Let us know if there is something you wish to discuss this topic or if you have an opinion you want to share. Be free to leave a comment in the section below._

___

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about these improvements and new features! We would really appreciate it!_