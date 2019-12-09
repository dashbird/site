---
date: 2019-11-18T15:40:00-03:00
title: "Global Infrastructure"
description: "The strategy and practical considerations about AWS physical infrastructure"
learning: ["BAWS Cloud"]
learning_weight: 100
---

# Overview

Two concepts are key in understanding how the AWS physical infrastructure is architected:

1. Region
2. Availability Zone (AZ)
3. Edge 

AWS infrastructure planning implements an elaborate strategy to offer highly availabile, resilient[^1] and scalable[^2] services. AWS abstracts away most infrastructure management tasks from its users: from renting data center real estate to wiring up multiple machines in a local network.

Inspite of following a distributed model and many levels of replication (hardware, data, software, network), different parts of this infrastructure fail occasionally and it's difficult to predict which ones, when and how they will fail.

When these systems do fail, having different Regions and AZs enables AWS to continue providing services to its customers with minimal to zero disruption. This model isn't completely fail-safe. Some failures might still be disruptive, but it's rare.

# Availability Zone (AZ)

A collection of data centers representing a partition of the <a href="https://dashbird.io/knowledge-base/aws-cloud/global-infrastructure/">AWS infrastructure</a> and services. Each data center is hosted in a separate facility and may have hundreds of thousands of machines.

AZs are interconnected within each Region with maximum throughput and low-latency communications. AWS uses a fully redundant network with dedicated metro fiber[^3]. By replicating application resources across different AZs, AWS provides redundancy against from natural events and disasters (lightning strikes, tornadoes, flooding, etc).

# Region

An AWS Region corresponds to a geographical area[^4] that contains multiple AZs (typically 3). AWS offers more than 20 geographical Regions across the globe[^5].

# Replication Options

## Cross-Region Replication

Although a single Region offers a great level of redundancy with multiple AZs, some risks still apply. Political instability, social unrest or military conflicts are some ot the factors that may strike down an entire Region.

To ensure maximum availability and resilience, though, applications can benefit from cross-region replication. In this case, if an entire Region goes offline, the application can continue to serve its users from another Region of the planet. Latency might increase slightly to users that were previously served by the unavailable Region, but services won't be disrupted.

Some services will provide an easy way to implement Cross-Region, such as [DynamoDB Global Tables](/knowledge-base/dynamodb/global-tables/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-cloud) and [S3 Replication](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html), while others will require developers to implement their own logic.

## Multi-AZ Replication

Managed services usually will provide multi-AZ replication by default. This is the case of all serverless systems, such as [Lambda](/knowledge-base/aws-lambda/introduction-to-aws-lambda/), [DynamoDB](/knowledge-base/dynamodb/overview-and-main-concepts/), and [S3](https://aws.amazon.com/s3/).

Not all AWS services will provide multi-AZ redundancy automatically, though. It is possible to enabled the feature relatively easily. This is the case of Relational Database Service (RDS) instances[^6] and File Systems[^7], for example. There are tutorials for other services, such as Elastic Compute Cloud (EC2)[^8].

## Controlling Multi-AZ

For compute workloads running on EC2[^9], AWS offers partition placement groups[^10]. It allows developers to control services that must be running on a single AZ, as well as distribute services inside a single Data Center.

Cluster placement groups[^11] will keep multiple EC2 instances clustered together to reduce network latency, typically required by High-Performance Computational (HPC) workloads. Services such as Kafka, Hadoop and HBase may benefit from this feature.

Spread placement groups[^12] allows to distribute critical instances on different server racks, reducing the exposure to correlated failures.

---

# Footnotes:

[^1]:
     Refer to the [Reliability](/knowledge-base/basic-concepts/reliability/) page.

[^2]:
     Refer to the [Sclability](/knowledge-base/basic-concepts/scalability/) page.

[^3]:
     [AWS Availability Zones](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/#Availability_Zones)

[^4]:
     Not necessarily following any [political borders](https://en.wikipedia.org/wiki/Border#Political_borders), but more aligned with business and commercial practices (e.g. "_Asia Pacific_", "_Middle East_").

[^5]:
     List of AWS [Regions and AZs](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)

[^6]:
     [AWS RDS Multi-AZ Deployments](https://aws.amazon.com/rds/details/multi-az/)

[^7]:
     [Deploying Multi-AZ File Systems](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/multi-az-deployments.html)

[^8]:
     [Increase the Availability of Your Application on Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-increase-availability.html)

[^9]:
     [EC2: Elastic Compute Cloud](https://aws.amazon.com/ec2/)

[^10]:
     [Using partition placement groups for large distributed and replicated workloads in Amazon EC2](https://aws.amazon.com/blogs/compute/using-partition-placement-groups-for-large-distributed-and-replicated-workloads-in-amazon-ec2/)

[^11]:
      EC2 [Cluster Placement Groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#placement-groups-cluster)

[^12]:
      EC2 [Spread Placement Groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#placement-groups-spread)
