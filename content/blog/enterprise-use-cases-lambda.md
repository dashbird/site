---
title: Enterprise use cases for AWS Lambda
description: Lambda is not just for small tasks anymore. Enterprises make use of AWS Lambda for critical tasks throughout their system
date: 2019-05-02T12:00:00.000Z
frontImage: "2019-05-02/imgix-391813-unsplash.jpg"
thumbnail: "images/blog/2019-05-02/imgix-391813-unsplash.jpg"
authorlink: 'https://medium.com/@martlaul'
author: Mart Laul
author_image: '/images/team/mart.jpg'
featpop: most-popular
blog: ["AWS", "Serverless", "Other"]
---


<p pid="4">Last year we covered the <a href="https://dashbird.io/blog/biggest-serverless-pain-points/">top enterprise serverless use cases</a> for AWS Lambda. To refresh our memory, according to the <a href="https://www.itopstimes.com/cloud/10-use-cases-for-serverless/">CNCF (Cloud Native Computing Foundation)</a>, most commonly AWS Lambda is used for REST APIs, multimedia/image processing, CRON jobs, and stream processing. Today I’d like to cover some more complex ways some of our enterprise customers use Lambdas. &nbsp;</p>

<p pid="5"><br>
</p>

<p pid="6">During the AWS re:Invent back in 2017 <a href="https://www.linkedin.com/in/raghu-chandra-bb1a861/">Raghu Chandra</a>, the Global Delivery Leader for Cognizant Technology Solutions presented the six most popular use cases they implemented with their customers over the years. We’re going to look into three of them.</p>

<p pid="7"><br>
</p>

<p pid="37"><img alt="Image title" class="fr-fin fr-dib" src="/images/blog/2019-05-02/image1.png" width="830"></p>

<p pid="9"><br>
</p>

<p pid="10"><strong>Data lakes</strong></p>

<p pid="11">Today, many companies are implementing AWS just for the data lake situation. Amazon S3 provides an optimal foundation for a data lake because of its virtually unlimited scalability.&nbsp;</p>

<p pid="13"><br>
</p>

<p pid="41"><img alt="Image title" class="fr-fin fr-dib" src="/images/blog/2019-05-02/image3.png" width="830"></p>

<p pid="39"><br>
</p>

<p pid="16">Let’s look into the sample data lake’s architecture above. When copying the files to the S3 from the on-premises data sources, you would want to set up a Lambda function to check the file size that has just come in before sending it to the staging layer through either DataPipeline or S3 upload. The second lambda will be used to bring up the EMR clusters to process the data to do the normalization and ETL (extract, transform, load) before we persist that into a DynamoDB or AuroraDB.</p>

<p pid="17"><br>
</p>

<p pid="18">So a very classic use case – two lambda functions in a data lake scenario to detect the source file and to work with the EMR clusters or any other ETL jobs that we want to invoke to process the data.</p>

<p pid="19"><br>
</p>

<p pid="20"><strong>Microservices</strong></p>

<p pid="21"><br>
</p>

<p pid="22">The second sample architectural pattern for enterprises is microservices. Depending on the certain use case, the services can be short running or long running. For a long-running service, you can deploy it onto a container on ECS but for a short running service, you can use the Lambda through an API Gateway. The REST API endpoints can be managed by API Gateway which can invoke those services on Lambda.</p>

<p pid="40"><br>
</p>

<p pid="38"><img alt="Image title" class="fr-fin fr-dib" src="/images/blog/2019-05-02/image2.png" width="830"></p>

<p pid="14">&nbsp;</p>

<p pid="26"><strong>Disaster recovery</strong></p>

<p pid="27"><br>
</p>

<p pid="28">There are several ways to leverage AWS Lambda to construct a DR plan. Often when making changes to primary data center configuration like changing code, jar files or database tables it’s recommended to do a backup and restore. Lambdas can be used to automate tasks like EBS snapshot and AMI creation to backup your resources to S3 when configuring EC2 instances. As in every disaster recovery scenario, you would have a primary and a secondary data center, so once the new code is available in S3 you would want to have a Lambda function to copy that code into a secondary data center and to invoke the CloudFormation scripts build the AMI and deploy it on the secondary data center.</p>

<p pid="29"><br>
</p>

<p pid="30">So in the fewest possible words, lambda is used to listen to the events of changes in code (in our use case S3) and in a database and to sync both with the secondary data center.</p>

<p pid="31"><br>
</p>

<p pid="32">&nbsp;<img alt="Image title" class="fr-fin fr-dib" src="/images/blog/2019-05-02/image4.png" width="830"></p>

<p pid="33"><br>
</p>

<p pid="34"><strong>Conclusion</strong></p>

<p pid="35"><br>
</p>

<p pid="36">As we know, serverless can never replace the whole stack when dealing with larger enterprises – it just isn’t reasonable, but it can bring a whole lot of value when combining Lambdas and other serverless services with the infrastructure in the right way. To make sure these Lambdas won’t fail when doing a critical job, <a href="https://dashbird.io/">Dashbird</a> can help you to ensure reliability by providing end to end observability into your stack.</p>