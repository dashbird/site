# Real-Time Debugging in AWS Lambda
___
With Dashbird.io we can integrate and manage AWS Lambda services through an informative and easy to use panel. The services offered are numerous but all of them have one thing in common- An easy to use UI and a clean visual representation of the activities.

The AWS as a cloud service and infrastructure is top-of-the-line. However, it has implementation so many features that the default UI fails at giving critical information, especially if you are new user. While this may seem like a subjective point, it most certainly is not, especially when your business is on the line.

To give you an example, one of the reasons Three Mile Island incident was a disaster was because of a UI error. A pressure valve was shown to be closed when, in fact, that was [not the case](https://en.wikipedia.org/wiki/Three_Mile_Island_accident#Confusion_over_valve_status). Software running businesses and banks world-wide are arguably as critical as a nuclear power plant. If there's an alert, a warning-sign, then we must have all hands on the deck trying ASAP. But it is not that simple, if we monitor every failed transaction, every 4XX error message we will drown in an unmanageable ocean of alerts.

So let's begin by first classifying the types of errors you would encounter.

|                 |                                Implicit                                         |                       Explicit                    |
| --------------- | ------------------------------------------------------------------------------- | ------------------------------------------------- |
| **Fatal**       |The process execution stops and you get a core dump (or you perform log analysis)| Process stops and gives you an error code         |
| **Non-Fatal**   |Process continues to run, without actually doing what it is supposed to do. Or does things inefficiently | Process gives a warning message, and continues running after that|
The errors that belong to the explicit category are easier to debug, regardless of whether or not they are fatal. The error message itself gives pretty clear indication of the exact cause of the problem which can then be dealt with, instantaneously.

The implicit fatal errors are a bit harder to debug.We know something's wrong because the process stopped unexpectedly. But you can get to the root cause of the problem by inspecting the snapshot of memory at the time of the crash. It is popularly known as the core-dump and is common while debugging low-level languages like C. Recently, similar features for Node.js and Go have been introduced as well.

The nastiest of bugs are the implicit non-fatal ones. This might mean that your function either runs successfully performing the wrong action, or it is just inefficient in terms of resources management you don't know which. This could occur if the developer didn't understand the end-goal of a functionality or if the wrong library or data structure was used for the purpose. These bugs fly under the radar for very long periods of time. They often hurt your cloud bills and leaves your customers unhappy because your apps are too slow. These bugs are often not reproducible outside the production environment and they need to be dealt with in situ. Most security vulnerabilities also fall under this category. For now, let's focus on resource utilization.

## Live tailing and Dashbird's visually intuitive graphs

Assuming you have a Dashbird console set up, we can start monitoring a Lambda function and look at the different pathologies that might arise in there. A similar set up is detailed [here](https://dashbird.io/blog/aws-lambda-overview-for-dummies/).

The function gets invoked by an HTTP GET request and takes a number as an input and returns a list of all the prime numbers less than or equal to that number as an output.
This is a fairly intensive task, in terms of resource utilization, so we really need to optimize the function and Dashbird will help us along the way. Let's start with a naïve implementation of the function in Python3.

>Dashbird integrates directly with the lambda function so if you don't want to set up a trigger event and simply run the function with a test event, that would work fine as well.

The function determines whether or not a number is prime by dividing it from all the positive integers less than itself. It also uses lists as a data structure of choice.

```python
import json
print('Loading function')

def lambda_handler(event, context):
    n = int(event["number"])
    primes = []
    for i in range(2,n):
        if i == 2:
            primes.append(i)
            continue
        for j in range(2,i):
            if i%j == 0:
                break
            elif i == j+1:
                primes.append(i)
    return primes
```

You can introduce an error to the code above and upon testing the function they immediately show up on Dashbird console.

![errors1](https://user-images.githubusercontent.com/11016565/38022853-510d23fa-329e-11e8-866f-fd274d04b179.PNG)

It even gives a detailed error message with the line number where the error was encountered.

![errorreport](https://user-images.githubusercontent.com/11016565/38022852-50d53972-329e-11e8-89a2-dec0664eed53.PNG)

The error says it is a crash, and it gives you an explicit reason as to why the crash occurred. Here, it was the line number 7 of the lambda_function.py, where, I intentionally removed a colon.

That's great! Now you can go to that location and correct the error. But there's a much greater flaw in the implementation that you might have already guessed. It is going to take an absurdly long time to give results when the input size is large. This would not be noticeable until we compare the resource utilization for different input sizes.

This is where the Live Tailing feature from Dashbird comes in. It shows lambda invocation in near real-time. This makes monitoring easy helps you debug before it's too late.
You can open the Live Tail menu and select the function(s) you want to see in action.

![livetailing1](https://user-images.githubusercontent.com/11016565/38022854-5148aea2-329e-11e8-8df2-89e9d7f1b9e6.PNG)

To start testing we set the baseline with an input of 1000, notice the duration of the lambda function:
```
START RequestId: 65255f85-325f-11e8-b77d-7548868d1991 Version: $LATEST

REPORT RequestId: 65255f85-325f-11e8-b77d-7548868d1991	Duration: 141.72 ms	Billed Duration: 200 ms 	Memory Size: 128 MB	Max Memory Used: 22 MB
```

And for an input of 2000 we ended up spending 540ms crunching numbers:
```
START RequestId: df5ff600-325f-11e8-aa6e-0789d54ef962 Version: $LATEST

REPORT RequestId: df5ff600-325f-11e8-aa6e-0789d54ef962	Duration: 544.82 ms	Billed Duration: 600 ms 	Memory Size: 128 MB	Max Memory Used: 22 MB
```
Lastly for the input of 4000 we can clearly see the trend. Doubling the input quadruples our computational expense.

```
START RequestId: 4babf5b6-3260-11e8-b19b-c1f179a5100a Version: $LATEST

REPORT RequestId: 4babf5b6-3260-11e8-b19b-c1f179a5100a	Duration: 1756.28 ms	Billed Duration: 1800 ms 	Memory Size: 128 MB	Max Memory Used: 22 MB	 
```

All this inefficiency would stay hidden if the inputs aren't large. However, they will have a significant impact on your AWS bills. The problem will only become apparent for larger inputs (like 8000) where the lambda function will timeout.

![timeout](https://user-images.githubusercontent.com/11016565/38022855-517f6208-329e-11e8-9306-ab0c5e83da26.PNG)

Only at this point would the alerts go off telling you that something is wrong. But not exactly what's wrong. This is dangerous, because you might consider increasing the maximum compute time from 3000ms to a larger value, further increasing your AWS bills.

Of course, in Dashbird's logs, you can clearly see the trend increasing steeply as you keep giving larger and larger inputs.

![usage_stats](https://user-images.githubusercontent.com/11016565/38022856-51b398d4-329e-11e8-8106-16ad7f46c59f.PNG)

In this example the data points are too few to plot a graph, but if your function gets invoked much more often than that, you will have a much more visually intuitive graph to infer from (we will see one of these, shortly).

## An efficient solution
What about our inefficient solution? Well, fortunately we have a simpler solution for that. Popularly known as [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes). Furthermore, we can use Python's dictionary to store data, which offers better speeds in searching data. Here's a simple implementation of the said algorithm in Python 3:

```python
import json
print('Loading function')

def lambda_handler(event, context):

    limitn = int(event["number"])+1
    primes = dict()
    for i in range(2, limitn): primes[i] = True

    for i in primes:
        factors = range(i,limitn, i)
        for f in factors[1:]:
            primes[f] = False
    return [i for i in primes if primes[i]==True]
```
Now we have a satisfyingly efficient solution which doesn't go beyond 300ms even when the input is as large as 8000. Here's the graph showing how the resource utilization decreased after the changes were made.
![efficient_solution](https://user-images.githubusercontent.com/11016565/38022851-508f202c-329e-11e8-874c-7c2b68fa30d2.PNG)

Over time, you can expect the function's health to improve as well, since it would timeout less often than before.

Alerts streamed as a JSON payload makes the job of a DevOps team much harder. With Dashbird's visually intuitive monitoring and live tailing, you can spend more time improving your product and less time sifting through data.
