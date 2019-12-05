---
title: How to Secure Your Data With Serverless Access Points
description: With Access Points policies in AWS S3, serverless applications can achieve higher data security without adding complexity
date: 2019-12-05T00:00:00.000Z
frontImage: "2019-12-05/s3-access-points.jpg"
thumbnail: "images/blog/2019-12-05/s3-access-points.jpg"
author: Renato Byrro
blog: ["S3", "Security", "Storage", "Data Privacy", "Data Security"]
---

As our application scales and many services are accessing a multitude of data points for each workload needed, it is difficult to ensure each part of the system has the right set of data access permissions.

In today's world, one of the worse nightmares of a software business is data leaking and data privacy issues. Not only it affects the brand reputation, but could also expose the company to heavy fines and other regulatory sanctions.

Thankfully, AWS has just announced at re:Invent a new feature to help in solving this problem: [S3 Access Points](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html).

An Access Point is a network hostname tied to a particular S3 Bucket. This hostname carries permissions indicating which operations requesters are allowed to perform and to which objects within the bucket.

Access Points allows to customize permissions based on object tags and prefixes, making it flexible enough to cover our use cases. Through an Access Point, requesters can only perform object-related operations, not any other S3-related operation.

This feature makes it much easier to control application data access permissions in comparison to a single bucket policy, especially for systems that have complex permission rules and policies. All requests to Access Points are logged and traced in CloudWatch and CloudTrail, which provides auditing capacity.

Each Access Point has a unique [ARN](https://dashbird.io/knowledge-base/aws-cloud/arn-amazon-resource-names/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=s3-access-points), which can be used to request operations on objects.

In the AWS CLI, for example, this is how we get a `report.pdf` document object using an Access Point:

```shell
aws s3api get-object --key report.pdf --bucket arn:aws:s3:us-east-1:123456789:accesspoint/documents downloaded-report.png
```

When using an AWS SDK, we should provide the Access Point ARN in the place of the bucket name.

To create an Access Point, use the AWS CLI like this:

```shell
aws s3control create-access-point --name my-access-point --account-id 1234567890 --bucket documents
```

It is possible to attach IAM policies to Access Points for fine-grained permission control.

To grant access for a particular user to get and put objects in a bucket:

```json
{
    "Version":"2008-10-17",
    "Statement": [
    {
        "Effect": "Allow",
        "Principal": {
            "AWS": "arn:aws:iam::123456789:user/UserName"
        },
        "Action": ["s3:GetObject", "s3:PutObject"],
        "Resource": "arn:aws:s3:us-east-1:123456789:accesspoint/my-access-point/object/UserName/*"
    }]
}
```

As we mentioned above, it is also possible to set permissions based on tags:

```json
{
    "Version":"2008-10-17",
    "Statement": [
    {
        "Effect":"Allow",
        "Principal" : {
            "AWS": "arn:aws:iam::123456789:user/JohnDoe"
        },
        "Action":["s3:GetObject"],
        "Resource" : "arn:aws:s3:us-east-1:123456789:accesspoint/my-access-point/object/*",
        "Condition" : {
            "StringEquals": {
                "s3:ExistingObjectTag/data": "emergency-room"
            }
        }
    }]
}
```

Consider an application that serves medical information. There are several departments: Emergency Room, Intense Care Unit, Medical Imaging, etc.

In the example above, we granted John Doe with access only to objects tagged with "emergency-room". This way we can protect patient's data whose John Doe shouldn't be interested in.

Access Points are a powerful way to control and distribute data access patterns through custom hostnames across your applications. Go ahead and read the full [AWS documentation](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html) for more info about it.
