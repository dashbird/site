# Lambda Metrics -- Monitoring what matters
___
Even in the simplest of applications the number of events and function calls are many. As a DevOp you can't take care
of every single factor out there, you need to constrain the number of *relevant* facts and ask the right questions
from your system. So that when the situation is less than ideal you can troubleshoot in no time.

Every organization is unique and every workload has its own utility.
That said, we can still have a generalized approach and start by listing a few desirable qualities that you may want
from your AWS application.  
  * Performance
  * Responsiveness
  * Lower bills

## AWS Lambda Pricing  
The pricing is very straight-forward. The billable factors include:  
  * Number of requests
  * Compute time
  * Amount of memory used  

The compute time and memory and coupled together and we will come to them in a moment. The first 1 million requests are
free, every month, and after that you will be charged $0.20 per million requests for the remainder of that month.

Independent of the number of requests, you also pay for the memory allocated to your function along with the time taken by
that function. The memory allocation is decided by you when you deploy a function but time varies from one invocation to the next.
Suppose, your function runs for 2000ms (2 seconds) and has been allocated 512MB of memory then you will be billed for
2 * 512MB = 1GB-s of utilization.  

The first 400,000 GB-seconds are free, every month. After this limit is reached you pay $0.00001667 per GB-second (roughly $1.7
per 100,000GB-seconds) for the rest of that month. On top of this you may incur additional charges for resources like S3 bucket,
VPC or DynamoDB, etc.

Amazon's *Pay-for-what-you-use* business model relies not on your needs but on the success of your business. If your apps are
accessed more often, your organization benefits more, along with a slightly greater AWS bill. This, in turn, benefits Amazon.  

But its not all sunshine and roses...

## Enter Cold Start
Each lambda function runs inside a container. When it is invoked for the first time, AWS first spins up a new container and then
starts function execution within it. This increases latency and may make your application seem slow to the user initially.
After this, the function is kept 'warm' for a period of time. During that period, new invocations don't suffer similar latencies
and hence feel much more responsive to the end user.  

Think of it as accessing files that are within a high-speed cache, when the files are not used for long periods of time they're
flushed out of the cache and when you go back for those file it takes longer to open them.


>Dashbird has recently introduced the cold start monitoring feature which tells you which invocations involved a cold start and
which were the subsequent calls.

The period for which the function stays warm is speculated to be between 5 and 30 minutes but there's not much said by Amazon
on this regard. Also functions that try to talk to other services like a VPC may suffer additional latencies because now AWS has
to establish networking between the function and the VM.

There's one additional complicacy and that's the concurrency issue,
wherein, if you receive a burst of traffic simultaneously AWS scales the function by spinning up more containers to handle all
the requests. This gives rise to a whole different sequence of cold starts which has nothing to do with resources being left
idle for too long.

## Optimizing the right resource
Amazon's "Pay for what you use policy" involves two factors (other than the number of requests) the time and the memory.
With Dashbird you can not only see how often do you encounter these cold starts but all the toll they take on your resource.


Okay, so we have listed quite a few problems, now let's solve them one after another. Some combination of the following solutions
can help you with this annoying problem at a lower cost:

###  1. Increase your memory resource
Increasing the memory usage may result in faster execution of your function, and that may reduce the time of execution significantly
enough to accommodate for the latencies caused by cold starts. This results in a happier user experience. Moreover, this is the
easiest hypothesis to test. The first line of defense for your DevOps team. It may sound counter-intuitive but it can also reduce your
AWS bill.

>Increasing the amount of memory allocated may reduce the billable time of the function. The trade off between memory and time can
be beneficial despite many cold starts, simply because the main execution is a lot quicker. It can result in both lower bills and
lower latencies.

### 2. Keep the functions warm
You can have a cron job running, whose only task would be to invoke many instances of your function just before the time of expected
bursts in traffic. For example, you can analyse your Dashbird metrics to infer such periodic bursts for a particular function.
That gives you enough information to configure a simple cron job that'd warm up the functions beforehand. It also solves the
concurrency issue because if you artificially invoke a many instances of the function when the real users arrive they won't repeat
the same.


>Dashbird can help you see the patterns hiding in the users' behavior. Use it to accurately time your warm up calls and you will save
significant amount on your bills, since making numerous requests is often cheaper than increasing memory.

### 3. Optimize your code
Possibly the cruelest option would be to ask your developers to optimize their code. This doesn't necessarily involve making changes
in the actual logic or functionality but one can often trim down the dependencies and make the function a bit more lightweight.

If possible, you should stick to languages like Node.js, Go or Python since they have significantly lower cold start time than their
C# or Java counter-parts.

> If possible stick to Python or Node.js for your Lambda functions.


## Conclusion

To make anyone of the above inferences plausible you need to know the specific pathology of your misbehaving and cost-inefficient function.
That is then followed by asking the right questions and then making an educated guess about the solution.

Dashbird helps you on every step of the way, from keeping track of subtleties like cold start to knowing whether or not a new solution makes
any difference. Of course, there are more parameters to consider. Concurrency and synchrony would need a much deeper dive.
Sign up to know more.
