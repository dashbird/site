---
title: Serverless BigData Pipeline implementation
description: Recently I came across AWS India Summit 2016 summary where Purpelle.com showcased their model of implementation using Serverless architecture.
date: 2018-07-12T02:00:00.000Z
frontImage: "2018-07-12/serverless-big-data-cover.png"
thumbnail: "images/blog/2018-07-12/serverless-big-data-cover.png"
author: Bhaskar Das
category: "Serverless, BigData"
---

Recently, I came across the AWS India Summit 2016 summary, where [Purplle](https://www.purplle.com/) showcased their model of implementation using Serverless architecture. Quite surprisingly it was handled by one-man team and done with such efficiency that I decided to explore the architecture and how they implemented it in their organization.

![](/images/blog/2018-07-12/serverless-big-data-1.png)
Image source: www.iamwire.com
___

As what Big Data is known for the same challenges were faced by purplle.com team in implementing the pipeline. The challenges faced by team were:

1. Variety
2. Velocity
3. Veracity

Following are the definitions as per the general data pipeline architecture: 

- Collectors/Routers: They help to handle massive influx of data through streams like click-streams and ad impressions.
- [Data lake](https://aws.amazon.com/big-data/datalakes-and-analytics/): It is a data lake which is redundant and durable is able to handle I/O at high volumes and is available all the time.
- [Data warehouse](https://aws.amazon.com/data-warehouse/): It is flexible warehouse which allows experimentation with data modelling and allows continuous ingestion of raw data from data lake.
- Hot data tier (NoSQL/Cache): It can quickly read and write for unit and batch and has the ability to perform at uneven traffic flow.

Same architecture was implemented using [AWS Lambda](https://aws.amazon.com/lambda/).


![](/images/blog/2018-07-12/serverless-big-data-2.png)
Image source: iamwire.com
___

- Trackers ([Kinesis](https://aws.amazon.com/kinesis/) SDK and [API Gateway](https://aws.amazon.com/api-gateway/) with Lambda): Here Suitable candidate to fit in the role of trackers were Kinesis SDK and API Gateway with Lambda which were used to collect data from various sources such as apps, website, server, and CRM seamlessly. This ensured that there were no data leakage due to network or connection errors and people didn’t have to worry about managing exceptions and retries.
- Collectors (Kinesis, Lambda, [Kinesis Firehose](https://aws.amazon.com/kinesis/data-firehose/)): For collectors Kinesis played the role equivalent of Kafka which was used to buffer streaming data. Schema policing, validations, and enrichers were written on Node.js which ran when Lambda was triggered from Kinesis. Finally, Kinesis Firehose was used to stream the validated data into downstream sinks S3 and Redshift. A copy of data was also ingested in real-time prediction engine and eventually into DynamoDB.
- Data lake ([S3](https://aws.amazon.com/s3/)): AWS S3 is highly durable, widely available, and ridiculously cheap object store. It supports on-the-fly data encryption as well. It is a perfect data lake and is widely used in the industry for this very use case.
- Data warehouse ([Redshift](https://aws.amazon.com/redshift/)): AWS Redshift enables us to quickly model and query our data using standard SQL queries. Loading up raw data into a model can be easily done with a few clicks using the AWS data pipeline. It’s very powerful, cheap, and flexible in terms of changing the size of the cluster on the fly.
- NoSQL/Caching ([DynamoDB](https://aws.amazon.com/dynamodb/)): We use DynamoDB as our hot data store. It’s a fully-managed, scalable, low-latency NoSQL database.

Clearly, I could see the benefit and reason behind their leverage of AWS Lambda with other AWS capabilities for building their capabilities. As also mentioned by company CTO Suyash Katyayani.

> We could see the benefits of using serverless technologies.

- [Low cost of experimentation](https://dashbird.io/lambda-cost-calculator/), agility in development.
- [Pay per use](https://dashbird.io/api-gateway-cost-calculator/) — There is no need to commit to a particular infra specifications
- Highly scalable & available.
- Completely Managed - We could focus on building our core product

This not only saved developers from additional efforts but also was proved to be low cost solution for the startup firm. Obviously, we are eagerly waiting to see how such kind of stories start to evolve amongst the other startup organizations and soon among other big names. In my opinion such solutions would indeed help startup organizations to scale up their business at much faster pace without actually worrying about other infrastructure related issues.

*Hope you guys and girls enjoyed reading this as much as I enjoyed writing it. If you liked it, feel free to share this tutorial. Until next time, be curious and have fun.*
___

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about these improvements and new features! We would really appreciate it!_