---
date: 2019-11-13T19:30:00-03:00
title: "Lambda: Application Objects"
description: "How to log objects and classes from the Lambda application code"
learning: ["MLogging"]
learning_weight: 300
---

# Overview

Logging application objects from a Lambda function code can be useful in a variety of cases:

* Being able to identify every contextual information involved in a possible application failure
* Check data points that might have been exposed in a security breach
* What was the state of a given object before and after a certain action was executed

# How-to

As discussed in the AWS Lambda Programming Model[^1] page, AWS Lambda logs are stored in CloudWatch Logs. It can automatically detect a JSON string and format it for easy visualization in the AWS Console.

External debugging platforms - such as [Dashbird](https://dashbird.io/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=logging) - will offer enhanced visualization for JSON strings, with support to expand and collapse object nodes.

For that reason, it is recommended to create a JSON-serializable version of all relevant objects and classes in the code. This way they can be easily logged and inspected in any debugging tool. Having a method for JSON-serialization (e.g. `object.to_json()`) would be ideal to standardize the implementation across the application functions.


---

# Footnotes

[^1]:
     [AWS Lambda Programming Model](https://dashbird.io/knowledge-base/aws-lambda/programming-model/)

