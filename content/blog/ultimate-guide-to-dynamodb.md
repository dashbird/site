---
title: "The Ultimate Guide to AWS DynamoDB"
description: This guide takes you through everything you need to know about AWS DynamoDB, including pricing, set up, queries, scans and more, so you can rest assured you're using the service in its best way and reaping all of the benefits.
date: 2020-10-01T00:00:00.000Z
frontImage: "2020-05-vacation-buffer/ultimate-guide-aws-dynamodb.png"
thumbnail: "images/blog/2020-05-vacation-buffer/ultimate-guide-aws-dynamodb.png"
canonical: "https://dashbird.io/blog/ultimate-guide-to-dynamodb"
author: Taavi Rehemägi
author_image: '/images/team/taavi.jpg'
authorLink: "https://twitter.com/rehemagi"
blog: ["DynamoDB", "serverless"]
---

[AWS DynamoDB](https://dashbird.io/knowledge-base/dynamodb/overview-and-main-concepts/) changed the database game in Serverless and continues to do so, as its design repeatedly proves its huge value. This guide takes you through everything there is to know about DynamoDB so you can rest assured you're using the service in its best way and reaping all of the benefits.

## What is AWS DynamoDB? 

DynamoDB is a key-value and document database with single-digit millisecond response times at any scale. It's a fully managed durable database with built-in security, backup and restore capabilities.

A keyword you'll often hear with DynamoDB is that it is a NoSQL database, which simply means it doesn't use the traditional SQL query language used in [relational databases](https://aws.amazon.com/relational-database/). Its design is to reduce complexity between tables by consolidating objects into a common collection or "schemaless" table in a NoSQL database. These objects are then grouped together based on common themes, which will meet the conditions of the common queries of the application that you set.


## Key Concepts:

__Table__: as a collection that can hold a virtually infinite number of items, it may also have secondary indexes associated

__Secondary Index__: duplicates table items using a different primary-key and sort-key

__Primary Key__: a special form of attribute that is used to reference items, similarly to an item ID

__Sort Key__: another special form of attribute that is used to organize items in a different sorting order

__Item__: the most basic unit in AWS DynamoDB, it holds the data attributes structured in a JSON

__Attribute__: a key value pair that contains informational data-points about an item in the database table

__Streams__: a constant stream of state-changing operations executed against a table

__Query__: operation to retrieve a particular item (or set of items)

__Scan__: operation to scan the entire table or a section of it

__Filter__: rules to apply after a query or scan has executed, but before results are returned to the requester


## Relational Database Systems (RDBMS) vs NoSQL Database

While a relational database still has its place such as when flexibility is needed, as computing costs have increasingly become the main consumer of a business' budget, the world needs faster speeds to match scaling demands. RDBMS can also see query performance become unpredictable and highly variable, and as more data is loaded in, it can also degrade.

When it comes to NoSQL design, data can be queried efficiently however only in a finite amount of ways. Therefore, it's important to understand the specific questions it'll be answering before any design takes place. Also to note, unlike with RDBMS, your aim should be to have __as few tables as possible__.


## How does DynamoDB store data? 

Although there is some rigidity within the service, DynamoDB supports two data models allowing for slightly different needs and some flexibility.

First is the key-value store, a scaled-up distributed hash table. The items within the table are uniquely identifiable by a key-value pair of attributes, which is used to __GET__, __SET__, __UPDATE__ and __DELETE__. There are two types of attributes: the Primary Key, which works similarly to an item ID, and the Sort Key, which allows for ordering the items.

As we know, hash tables are reliable, consistent and fast whatever their size, however their drawback is that only one record can be retrieved at a time.

To combat this, DynamoDB can also be used as a wide-column store meaning that each row can have any number of columns at any time. This B-tree data structure and secondary index provides the option to find an item while also allowing for range queries. They can be used to reference and order items by different Primary Keys and Sort Keys. It's also important to remember that DynamoDB is a schema-less database, in which items can have different sets of attributes.


## What is DynamoDB autoscaling and how does it work? 


One of the biggest benefits of serverless computing is the hands off approach developers can take when it comes to time and budget-consuming aspects, and one of these is ensuring that capacity is never limited or underused. DynamoDB automatically scales to manage surges in demand without throttling issues or slow response, and then conversely reduces down so resources aren't wasted.

The service does this using AWS Application Auto Scaling, which allows tables to increase read and write capacity as needed using your own scaling policy. This policy specifies whether you want to scale these capacities, and the minimum and maximum provisioned capacity unit settings. It also includes a target utilization (the percentage of consumed provisioned throughput), which, along with a target tracking algorithm, ensures the throughput matches as near to the set target no matter the workload.


## What is DynamoDB used for, and when is it used?


DynamoDB can handle more than 10tr requests per day and can support peaks of more than 20m requests per second, making it one of AWS' top services for applications needing low latency data access at any scale.

The service was born out of Amazon's own need for a more advanced database, after it's Black Friday sales started. RDBMS features, such as joins, were slow at scale, and they found that other features, namely, strict consistency functionality weren't always necessary and so could be relaxed. In both cases, the RDBMS features were adding cost and with NoSQL, CPU and memory could be vastly reduced.

As speed is of the essence and from a technical standpoint, we need shorter initialization steps while still maintaining high security, DynamoDB is perfect as access is over HTTP and the service uses AWS IAM. These two elements mean that your database is always protected and that the requests are authenticated and validated quickly without the need for complex network configuration, such as network partitioning.


## Use Cases

There are endless [use cases](https://aws.amazon.com/dynamodb/?trk=ps_a134p000003yOhzAAE&trkCampaign=pac_q2_0520_paidsearch_dynamodb_b_prosp_d_ukir&sc_channel=ps&sc_campaign=pac_q2_2020_paidsearch_dynamodb_ukir&sc_outcome=PaaS_Digital_Marketing&sc_geo=EMEA&sc_country=mult&sc_publisher=Google&sc_category=database&sc_detail=dynamodb&sc_matchtype=e&sc_segment=447305944533&sc_content=dynamodb_e&sc_medium=PAC-PaaS-P%7CPS-GO%7CBrand%7CDesktop%7CPA%7CDatabase%7CDynamoDB%7CUKIR%7CEN%7CText&s_kwcid=AL!4422!3!447305944533!e!!g!!dynamodb&ef_id=CjwKCAjwkoz7BRBPEiwAeKw3q9omDONkHmpI6TpJqe6LgIalXQQIraj91yJCrVDsyFLze2l6bJRskhoCJfEQAvD_BwE:G:s&s_kwcid=AL!4422!3!447305944533!e!!g!!dynamodb) for DynamoDB as it's a service that is needed in a huge amount of situations. Growing companies such as Lyft and AirBnb as well as long-standing enterprises, such as Capital One and Nike use the service within their architecture.


Most of the systems that make Dashbird work run on DynamoDB. We use it to store customer’s data such as integrations settings, delegations and others. We trust DynamoDB to be able to handle high throughput loads, therefore we use it for storing detected errors and insights. To operate with confidence [we use our own system](https://dashbird.io/features/) to also monitor read and write table capacities as well as to detect possible throttles, high latency periods or tables that are nearing the capacity limits.

![Monitoring DynamoDB on Dashbird](/images/blog/2020-05-vacation-buffer/Dashbird-aws-dynamodb-monitoring.png "Monitoring DynamoDB on Dashbird")

## DynamoDB Pricing

DynamoDB charges for reading, writing, and storing data in your DynamoDB tables, and for any additional features you choose to add. DynamoDB has two capacity modes and those come with specific billing options for processing reads and writes on your tables, these are:

-   On Demand

As you'd expect, this mode means there isn't a need to specify the read and write throughput as it'll scale up and down as needed. This is a good option if there is an element of unpredictability within your tables or traffic volumes.

-   Provisioned

Conversely with a provisioned capacity, you specify the number of reads and writes per second that you expect will be needed. Auto scaling is available here to automatically adjust based on the specified utilization rate ensuring high performance and budget management.

For both options, costs vary depending on the region you're using, so it's worth using the calculator to give an estimate.

### AWS Free Tier 

The following DynamoDB benefits are included as part of the AWS Free Tier. Each benefit is calculated monthly on a per-region, per-payer account basis.

-   25 WCUs and 25 RCUs of provisioned capacity

-   25 GB of data storage

-   25 rWCUs for global tables deployed in two AWS Regions

-   2.5 million stream read requests from DynamoDB Streams

-   1 GB of data transfer out (15 GB for your first 12 months), aggregated across AWS services


### Read and Write Requests

DynamoDB charges one write request unit for each write (up to 1 KB) and two write request units for transactional writes. For reads, DynamoDB charges one read request unit for each strongly consistent read (up to 4 KB), two read request units for each transactional read, and one-half read request unit for each eventually consistent read

For On-Demand mode, these are charged per million units, while for Provisioned mode, these are charged per unit, per hour.

Within the Provisioned mode is the additional option for Reserved Capacity. Using this can help save costs, and works by paying a one-time upfront fee and committing to paying the hourly rate for a minimum throughput level for the duration of the reserved capacity term. It's worth noting however that any unused capacity will not roll over into the following month.


## Data Storage 

Data doesn't need to be provisioned on either capacity mode as the service will be constantly monitored to determine charges. As with most storage solutions on AWS, there is a free tier here also, which includes 25GB per month - anything after this is charged monthly on a per GB basis.

Additional features available are charged on top of these basics. Once again, pricing for these can vary depending on the capacity mode so the calculator is a worthwhile use of time.

Other features include, backup and recovery, global storage, DynamoDB Accelerator (DAX), DynamoDB Streams and data transfer.


## How to save money on your DynamoDB Tables?

While the On Demand mode offers a more hands-off approach, it can result in being up to seven times more costly than the Provisioned mode. Meanwhile, using the Provisioned mode can mean comparatively more burden on developers to predict capacity, and it can have some drawbacks on scalability. Here are three quick tips to save and optimize your tables, and to choose the right features for your application.

1.  The auto-scaling feature requires benchmarking and can struggle to adapt quickly to sharp changes in demand. It's therefore important to run tests with a distribution as close as possible to what your system sees, to really judge whether auto-scaling will work adequately for you. 

2.  DAX may be a good economical alternative if you're looking at On Demand for a read-intensive table, but usage is key. A small DAX instance (t2.medium) would cost the same as more than 200m read operations in On Demand mode, meaning savings will only really be felt in high-throughput scenarios. 

3.  For write-intensive workloads, SQS is a good alternative to manage high throughput and unpredictable traffic spikes. The messages are polled by another Lambda function responsible for writing data on DynamoDB; throttling allows for better capacity allocation on the database side, offering up the opportunity to make full use  of the Provisioned capacity mode.


> You can find out more about [how to run cost-effective DynamoDB tables in this article](https://dashbird.io/blog/cost-efficient-ways-to-run-dynamodb-tables/).


## Setting up AWS DynamoDB

Setting up DynamoDB is incredibly simple. In this example, we are going to use parameters and features available in the AWS Free Tier so you're able to replicate a similar version, if you're just starting out.

### To create a NoSQL Table

1.  Head over to DynamoDB console, and click Create Table. 

2.  You'll then need to name the table itself. 

3.  The Primary Key or Partition Key is used to spread data across partitions for scalability, so use a feature that has a range of values and will have evenly distributed access patterns. 

4.  The Sort Key, allows just that, the ability to sort the data above. Another value that works across your data and can help dig into the table further is necessary here. 

5.  To enable Auto Scaling, the Default Settings box needs to be unticked. By doing this, an AWS IAM role will automatically be created called DynamoDBAutoScaleRole, which will manage the auto scaling process.

6.  Lastly, scroll all the way down and click Create.*

### Adding Data

1.  Under the Items tab, click Create Item. 

2.  Add in the data for both the Primary and Sort Keys for each data entry, remembering to click Save each time.


## DynamoDB Streams 

DynamoDB Streams is a great feature that captures changes to a table at the point in time when the change happened, storing these changes in a log kept for 24hours.

This stream record is written with the primary key attributes of the items that were changed, ensuring that all modifications are recorded in the same sequence they occurred. It can also be configured to capture additional data such as the states before and after the change.

DynamoDB Streams writes in near to real-time allowing other applications to consume and take action on the stream records. Some good examples of use cases are:

-   Aggregating metrics from multiple operations, i.e. buffering social media "likes" for a certain time period, aggregating the total value only once to save resources. 

-   A customer adds data into a DynamoDB table, which triggers an email confirming the additional data entry is correct. 

-   A mobile app has data that changes in a table, up to a thousand times a minute. Another application stores the details of these updates and provides real-time metrics, such as engagement, for the app.

It's important to remember that AWS uses different endpoints for DynamoDB and DynamoDB Streams, however both must remain in the same region.


## DynamoDB Query

You're able to query an item or a set of items in your tables based on the Primary Key, and retrieve them quickly. 

Querying The Table using Query Operations

1.  Under the Items tab, choose Query from the dropdown box. 

2.  Using either one or both Primary and Sort keys, you're able to type in the search boxes and adapt your query as needed.


## DynamoDB Scan

A DynamoDB Scan reads every item in the table or secondary index and returns a set of results. By using the Sort Key, you can decide in which order the scan takes place. Additionally, a filter expression can be used to determine which items are returned from the scan.

Running a scan can be expensive so where possible, avoid them and use queries instead, unless it's absolutely necessary to read through each individual item.


## Monitoring DynamoDB

Monitoring your Serverless application is key for performance, managing costs and debugging, particularly as your application scales. You can use tools like [Dashbird](https://dashbird.io/register) to easily keep track of your DynamoDB, Lambda functions, SQS ques and more. Dashbird also cross-references our architecture against industry best practices to suggest performance improvements, cost reduction opportunities, and anticipate potential points of failure. [Get your free account now](https://dashbird.io/#register) and see the performance of your entire serverless environment visualised in a real-time 3D map view in detail immediately after set up and start debugging with speed and confidence - no code changes or credit card required.

![Dashbird Atlas](/images/blog/2020-05-vacation-buffer/Dashbird-Atlas.png "Dashbird Atlas")
