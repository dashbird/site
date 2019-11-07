---
date: 2017-06-05
title: "Getting Started with AWS Lambda."
description: "Learn the first steps of writing, deploying and running Lambda functions."
learning: ["BAWS Lambda"]
learning_weight: 200
---

## Anatomy of a Lambda function

Every function consists of the following elements:

**Handler function** takes two arguments: `Event object` and `context` and an optional `callback` function as the third parameter.
