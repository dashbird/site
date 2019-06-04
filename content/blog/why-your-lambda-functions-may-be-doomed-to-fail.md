---
title: Why Your Lambda Functions May Be Doomed To Fail
description: "AWS Lambda has a cool feature that can be both a blessing and a nightmare for a serverless application: the retry behavior."
date: 2019-05-17T12:00:00.000Z
frontImage: "2019-05-10/joel-filipe-260016-unsplash.jpg"
thumbnail: "images/blog/2019-05-10/joel-filipe-260016-unsplash.jpg"
authorlink: 'https://medium.com/@byrro'
author: Renato Byrro
author_image: '/images/team/renato.jpg'
featpop: most-popular
blog: ["AWS", "Serverless", "Best Practices", "Lambda Retry", "Idempotence"]
---

AWS Lambda has a cool feature that can be both a blessing and a nightmare for a serverless application, depending on whether it’s properly handled by our code: the retry behavior.

A retry occurs when an invocation of a Lambda function results in an error and the AWS Lambda platform automatically invokes the function again, with the same event payload.

*Before we get deeper, make sure you are familiar with the [AWS documentation](https://docs.aws.amazon.com/lambda/latest/dg/retries-on-errors.html) on the subject.*

![Jellyfish](/images/blog/2019-05-10/joel-filipe-260016-unsplash.jpg)

<p class="caption">Photo by <a href="https://unsplash.com/photos/_AjqGGafofE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Joel Filipe</a> on <a href="https://unsplash.com/search/photos/storm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a></p>

# The Nightmare

Let’s say you’re operating an e-commerce site and AWS Lambda is being used to process customer orders. A person purchases an item and you have a function taking care of the following steps, all in a single run:

1. Making sure the item is available in stock
2. Processing credit card
3. Removing item from stock
4. Sending confirmation email

Now consider the first three steps completed successfully, but there was a momentaneous issue in sending the email and your application raised an error. Lambda platform automatically invokes the function again, with the same parameters, and the email is sent successfully. Awesome, isn’t it?

Well, not so fast. Our system just registered a second, unintended purchase for the same customer… and charged his credit card twice!

Houston… we have a problem!

![We Have a Problem](/images/blog/2019-05-10/houston-we-have-problem.jpeg)

<p class="caption">Photo by <a href="https://unsplash.com/photos/jzTQVxCyKYs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Sebastian Herrmann</a> on <a href="https://unsplash.com/search/photos/houston-problem?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a></p>

*Seldom this process would be implemented exactly like this, but it serves as an illustrative example.*

# Why on earth would AWS do this to me?

Lambda retry behavior is actually a very cool feature, don’t get it wrong. In a distributed system, many things can go wrong. In fact, when things can go wrong, rest assured they *will* go wrong at some point. AWS takes care of making sure these errors aren’t left buried and the operation has a few more chances to succeed. We surely don’t want to miss the revenue of a sale due to a technical issue.

# The Solution

All right, we see value in the retry behavior, but how can we avoid the headaches such as the double charge example?

There’s a concept called [idempotence](https://en.wikipedia.org/wiki/Idempotence) that comes to our rescue. Wikipedia defines it as a “*property of certain operations in mathematics and computer science whereby they can be applied multiple times without changing the result beyond the initial application*”.

A good practice to combine with idempotency is the [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns). In the previous example, we had several different operations bundled together. If possible, it would be good to have different functions taking care of each operation. One of the reasons is that idempotency needs to be analyzed and implemented from the perspective of the operation.

Read operations usually do not produce any side effects, they’re idempotent by nature. In our example, operation #1 (check if an item is available in stock) would be an example of that. In most cases, you won’t need to worry about these, so having them implemented separately will make it easier to manage the rest of your stack.

Storing and deleting a value aren’t idempotent operations by nature, but they can be _if we have a unique identifier (UID)_ for that resource. In our e-commerce scenario, if the customer order has a UID, the storing operation can be performed multiple times without creating multiple different order placements.

The order UID could be, for instance, a hash of the customer email or username, the purchase timestamp, and a list of items purchased. These variables would be sent as a parameter to our API when the site receives the order request. If the function fails at some point and the invocation is retried, the same order UID would be generated again, meeting the idempotency requirement. Again, *this is just for illustration purposes* — each circumstance will require proper analysis to find a stable and resilient idempotent implementation.

For the credit card charging part, most platforms will support idempotent requests. [Stripe](https://stripe.com/), for example, will provide an [idempotency key](https://stripe.com/docs/api/idempotent_requests), so that you can safely retry a request if something goes wrong in transit.

Usually, if the operation takes place in the realm of your stack, it will be fully on your hands to meet idempotency requirements. The unique identifier principle explained above will usually be enough. But if you’re relying on third-party APIs, it might be tricky to ensure idempotency and you might need help from the other party to accomplish this goal, in case this kind of operation isn’t supported out of the box. If you can’t get the third party to work with you, there’s always the possibility to run all operations on your end first, create a separate process to check whether everything ran successfully, then interact with the external API. This wouldn’t be the ideal implementation but could be as good as one can get in some circumstances.

# Managing Lambda retries like a PRO

A serverless developer needs a tool that automatically identifies when an invocation is actually a retry from a previous execution. That is why we created [Dashbird](https://dashbird.io/#register) and offer it [for free](https://dashbird.io/pricing/) to all serverless developers. The first execution and subsequent retries are linked by our system, so they are easily navigable. This makes it a lot easier to understand why a function is failing and whether the idempotency strategy implementation is working properly.
