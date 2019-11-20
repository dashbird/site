---
date: 2019-11-18T18:10:00-03:00
title: "Lambda Versioning"
description: "Managing AWS Lambda versions and aliases"
learning: ["ABasic Concepts"]
learning_weight: 1100
draft: true
---

# Lambda Versioning

A version of a Lambda function is exactly what the name suggests. Every time new code is deployed or the function configuration needs to be changed, it's possible to create a new version and test before distributing the changes to function consumers.

That is useful because the function consumers can continue using a previous version without any disruption. The function publisher can let consumers know about the newest version. Each consumer can test and plan accordingly before upgrading. Or the publisher can conduct tests and upgrade to the `$LATEST` version.

Each function version has a unique ARN[^1]. The version's ARN will coincide with the function's, except for the last term, the `resource-id`. The ARN will have a format such as: `arn:aws:lambda:us-east-1:1234567890:function:my-function:1`. The number `1` at the end of the ARN indicates the version.

It is also possible to refer to a function's latest version: `arn:aws:lambda:us-east-1:1234567890:function:my-function:$LATEST`. Consumers relying on the latest version will automatically use a new version once promoted to `$LATEST`.

## Using Versions

Using the AWS command line interface, a version is published with the following command:

```shell
aws lambda publish-version --function-name hello-world-function
```

Functions can be referred to with or without the ARN version term. When the version is included, it's called a **qualified ARN**:

`arn:aws:lambda:us-east-1:1234567890:function:my-function:$LATEST`

Or:

`arn:aws:lambda:us-east-1:1234567890:function:my-function:1`

When the version is omitted, the ARN is said to be **unqualified**:

`arn:aws:lambda:us-east-1:1234567890:function:my-function`

For teams that decide not to use the AWS Lambda versioning system, the qualified or unqualified versions won't make any difference.

## Access Policies

When granting access to a Lambda function, it is important to observe the versioning options.

If a qualified ARN is used (`function:my-function:1` or `function:my-function:$LATEST`, for example), the consumer can only access that particular version (`1` or `$LATEST`).

Permissions that use an ****unqualified** version allows consumers to refer only to the **unqualified** ARN. If the consumer refer to a **qualified** ARN (even the `$LATEST`), it will result in a access error.

If the permission refer to the latest version (`function:my-function:$LATEST`), only the **qualified** ARN will be valid. Requests referring to the **unqualified** ARN will result in access error.

# Lambda Aliases

A function alias is similar to a pointer. Each alias points to a certain function version. The version to which the alias points can be updated as needed. The version pointer is transparent to consumers, so that publishers can upgrade functions without the need to update consumer requests[^2].

An alias cannot point to another alias, only to a function version.

Similarly to versions, each alias also has its unique ARN.

Aliases can be useful in routing traffic to new versions after proper testing. A function can have a `TEST` and `PROD` aliases, for example. The development team deploys a new version, test it appropriately and then point the `PROD` alias to the new stable version.

## Using Aliases

To create an Alias with the AWS command line interface[^3]:

```shell
aws lambda create-alias --function-name hello-world-function --function-version version 1 --name hello-alias --description "This is a 'Hello World' Alias"
```

Updating the version to which an alias points (to version `2`, for example)[^4]:

```shell
aws lambda update-alias --function-name hello-world-function --name hello-alias --function-version 2
```

## Routing Traffic

Aliases can be used to implement a Rolling or Canary deployment strategy. Instead of upgrading all requests to use a new Lambda version at once, the current and new versions can coexist, each receiving part of the traffic.

As new traffic is routed to the new version, the development team can monitor and identify any possible issues with the new code. When confident about it, the team can swith 100% of the traffic to the new version and deprecate the old one.

Each Alias can point to two versions. Both must have the same IAM execution role, the same Dead-Letter-Queue (or no DLQ set up) and both must be published versions (not `$LATEST`).

The following command (AWS CLI) updates an Alias to route 95% of traffic to the current version, and 5% of the traffic to version 2:

```shell
aws lambda update-alias --name hello-alias --function-name hello-world-function --routing-config AdditionalVersionWeights={"2"=0.05}
```

It's possible to increase the volume of traffic to the new version (`2`) gradually:

```shell
aws lambda update-alias --name hello-alias --function-name hello-world-function --routing-config AdditionalVersionWeights={"2"=0.25}
```

In this second example, 25% of traffic will be routed to the new version. To route **all traffic** to the new version, simply update the alias pointer and empty the traffic weighting parameter:

```shell
aws lambda update-alias --name hello-alias --function-name hello-world-function --function-version 2 --routing-config AdditionalVersionWeights={}
```

---

# Footnotes

[^1]:
     Please refer to the [ARN - Amazon Resource Name](/knowledge-base/aws-cloud/arn-amazon-resource-name/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda) page.]

[^2]:
     [AWS Documentation about Lambda Aliases](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html)

[^3]:
     [AWS CLI documentation: Create Alias](https://docs.aws.amazon.com/cli/latest/reference/lambda/create-alias.html)

[^4]:
     [AWS CLI documentation: Update Alias](https://docs.aws.amazon.com/cli/latest/reference/lambda/update-alias.html)
