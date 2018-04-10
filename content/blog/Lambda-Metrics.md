# Lambda Metrics -- Monitoring what matters
___

Your application does not need to be huge for it to have plenty of functions, and abstraction for you to get lost in it.
As a DevOps engineer you can't cover every single factor out there. Showing **relevant** facts and asking the right questions is crucial! So when there's a fire, you can troubleshoot in no time.

Every organization is unique and every workload has its own utility.
That said, we can still have a generalized approach and start by listing a few desirable qualities that you may want
from your AWS application.  
  * Performance
  * Responsiveness
  * Lower bills

## AWS Lambda Pricing  
Lambda pricing is very straightforward, and the billable factors include:  
  * Number of requests
  * Compute time
  * Amount of memory provisioned  

Compute time and memory provision are coupled together. We'll mention this in more detail further below. But, let's start with the number of requests. The first 1 million requests are free, every month. After that you will be charged $0.20 per million requests for the remainder of that month. That's stupid cheap.

Independent of the number of requests, you also pay for the memory allocated to your function along with the compute time that the function takes to do its job. You specify the memory allocation when you deploy a function. The compute time can vary from one invocation to the next.

Suppose your function runs for 2000ms (2 seconds) and has been allocated 512MB of memory then you will be billed for
2 * 512MB = 1GB-second of utilization. This is called GB-seconds billing, where you pay for the compute time based on the memory allocation and time. If your function has 1GB of memory allocated, and runs for 1000ms (1 second) you pay for 1GB-second.

The first 400,000 GB-seconds are free, every month. After this limit is reached you pay $0.00001667 per GB-second (so totally not worth scratching your head over, use our <a href="example.com" target="\_blank">cost calculator</a> instead ) for the rest of that month. On top of this you may get some additional charges for resources like an AWS S3 bucket, VPC, DynamoDB, etc.

Amazon's <a href="https://aws.amazon.com/lambda/pricing/" target="_blank">Pay-for-what-you-use</a> business model does not rely on your needs, but on the success of your business. If your apps are accessed more often, your organization benefits more, along with a slightly greater AWS bill. This, in turn, benefits Amazon.  

But it's not all sunshine and roses...

## Enter Cold Start
Each Lambda Function runs inside a Docker container. When it's invoked for the first time, AWS first spins up a new container and then executes the function inside it. This increases latency and may make your application seem slow to the user initially.
After this initial latency, the function is kept 'warm' for a period of time. During that period, new invocations don't suffer similar latencies and hence feel much more responsive to the end user.  

Think of it as accessing files that are within a high-speed cache, when the files are not used for long periods of time they're flushed out of the cache. When you request those files again it takes longer to open them.

> <a href="https://dashbird.io/" target="_blank">Dashbird</a> has recently introduced the cold start monitoring feature which tells you which invocations were cold starts and which were the subsequent calls.

The period for which the function stays warm is speculated to be between 5 and 30 minutes but there's not much said by Amazon on this regard. Also, if the function relies on <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html" target="_blank">ENI</a> to talk to other services then that adds another layer of latency.

There's one additional complication and that's the concurrency issue. If you receive a burst of traffic simultaneously, AWS scales the function by spinning up more containers to handle all the new requests. This causes a whole different sequence of cold starts which has nothing to do with resources being left idle for too long.

## Optimizing the right resource
Okay, so we have listed quite a few problems, now let's solve a few of them. We hope that some combination of the following strategies 
can help you achieve a desirable balance between responsive applications and lower bills. 

###  1. Increase your memory resource
Increasing the memory allocation is accompanied by an implicit increase in CPU allocation. This may very well result in <a href="https://github.com/epsagon/lambda-memory-performance-benchmark" target="_blank">faster execution</a> of your function. Reducing the time of actual execution to accommodate for the latencies caused by cold starts can directly improve the user experience. Moreover, this is the easiest hypothesis to test, in case of higher latencies. The first line of defense for your DevOps team.

> AWS allocates more CPU power, if you allocate more memory to your Lambda function.

### 2. Keep the Functions warm
Another way to tackle this issue is to artificially and periodically cold start your Lambdas, so when the real-world work load comes in, there are hundreds of tiny little Lambda instances prepared for a mighty battle. There's a <a href="https://github.com/FidelLimited/serverless-plugin-warmup" target="_blank">plugin</a> that automates this for you.  

> Dashbird can help you see patterns hiding in users' behavior. Use it to time your warm up calls. Making numerous requests is often cheaper than increasing memory.

### 3. Optimize your code
Possibly the cruelest option would be to ask your developers to optimize their code. This doesn't necessarily involve making changes in the actual logic or functionality but one can often trim down the dependencies and make the function a bit more lightweight.

If possible, you should stick to languages like <a href="https://read.acloud.guru/comparing-aws-lambda-performance-of-node-js-python-java-c-and-go-29c1163c2581" target="_blank">Node.js and Python</a> since they have significantly lower cold start time than their C# or Java counter-parts.

> If possible stick to Python or Node.js for your Lambda functions.

## Conclusion

To make any of the above inferences plausible you need to know the specific pathology of your misbehaving and cost-inefficient function.
This is then followed by asking the right questions and then making an educated guess about the solution.

Dashbird helps you every step of the way, from keeping track of subtleties like cold starts to knowing whether or not a new solution has made any difference. Of course, there are more parameters to consider like concurrency and synchrony. They would need a much deeper dive. More about that in one of my next articles!

Stay tuned and feel free to [Sign up](https://dashbird.io/signup/) to learn more.
