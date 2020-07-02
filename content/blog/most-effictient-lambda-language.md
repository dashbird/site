---
title: Which AWS Lambda programming language should you use?
description: While the performance gain is subtle, you need to know all the details before making a decision.
date: 2019-07-06T12:00:00.000Z
frontImage: "2019-02-20/photo-1456824399588-844440089f4b.jpeg"
thumbnail: "images/blog/2019-02-20/photo-1456824399588-844440089f4b.jpeg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
blog: ["alerts", "Lambda"]
---
To me personally, when I think programming languages I think JavaScript and while 67% of the developers out there might think the same (at first) that does not imply it’s the most efficient language to use with AWS Lambda.

This article will be a two-parter. I’m going to explore the pros and cons of the most popular programming languages with Lambda and the second one will contain benchmarks of said languages on Lambda. Hopefully, this will end up shedding some light on this particular subject.

So without further ado, here we go, with great biased and no benchmark to back my claims off(but do check back the blog soon and we'll have those benchmarks ready for you).

## 1. Java
Java has been in service for decades and is, to this day, a reliable option when choosing the backbone of your stack. With AWS Lambda is no different as it makes a strong candidate for your functions.

### Java applications in AWS Lambda have the following merits.

**Reliable and well-tested libraries**. The libraries will make life easy for you through enhanced testability(test-ability?) and maintainability of AWS lambda tasks.

**Predictive performance**. While Java has slower spin up time, you can easily predict the memory needs of your functions and to counteract those dreaded colds starts you can just up your memory allocation.

**Tooling Support**. Java has a wide range of tooling support which includes Eclipse, IntelliJ IDEA, Maven, and Gradle among others.

If you’re wondering how Java remains an efficient AWS lambda language, here is the answer. Java has unique characteristics like multi-thread concurrency, platform independence, secure, and object-oriented.

## 2. Node.js 
I’m definitely biased but Node.js is probably the best one in this list. I know it has it’s minuses but the overwhelming support that node had in the past years has to have its merits.

### Why Node.js?

**Modules**. As of now, there are 1735 plugins on npm tagged “aws-lambda” which help developers with their applications in a lot of different ways from running Lambda locally to keeping vital functions warm to avoid clod-starts.

**Spinup times**. Node.js has better spin-up times than C# or Java which make it a better option for client facing applications that risk suffering from uneven traffic distribution.

**Community**. I’d be remiss if I wasn’t mentioning this as one of the major draw-ins of node is its community support on which you can always rely to find a solution to your problem.

## 3. Python 
Python applications are everywhere. From GUI based desktops, web frameworks, operating systems, and enterprise applications. In the past few years, we’ve seen a lot of developers adopting python and it seems like this trend is not stopping.

### The benefits of Python in AWS Lambda environments.

**Unbelievable spin up times**. Python is without a doubt the absolute winner when it comes to spinning up containers. It’s about **100 times faster than Java or C#**.

**Third party modules**. Like npm, python has a wide variety of modules available.  The feature helps ease interaction with other languages and platforms.

**Easy to learn and community support** If you are a beginner, programming languages can scare you. However, Python has extensive readability and a supportive community to help in its application. The Pythonistas have uploaded more than 145,000 support packages to help users.

**Simplicity**. With python you can void the overcomplicated arhitecture 

## 4. Go
Introduction of GO language was a significant move forward for AWS Lambda. Although Go has its share of problems, it’s suitable for a serverless environment and the merits of Go are not to be ignored.

### So, what is so outstanding about Go?

**Go has a remarkable tenacity of 1.x**. Unlike other languages like Java, C++, and others, Go has the highest tenacity. Such tenacity rate is a promise of a correct compilation of programs without constant alterations.

**Go uses static binaries**. It implies that the need for static linking is no more. Besides programming, AWS Lambda programs with Go would help enjoy forward compatibility.

**Go offers stability** It’s unique tooling, language design, and ecosystem makes the programming language shine.

**Goroutines**. Goroutines are a way of writing code which can run concurrently, whilst letting Go handle how many threads should actually be running at once which work amazingly in AWS Lambda.


## 5. Net.Core Language
Net.Core language popularity in programming stands out and it’s a welcomed addition to people already relying on AWS for running their .net applications.

**NuGet Support**. Just like all the other languages supported on Lambda, Net.core gets module support via NuGet which makes life for developers a lot easier.

**Consistent performance**. Net.Core has a more consistent performance result than Node.js or Python as a result of it’s less dynamic nature.

**Faster execution** Compared to Go, Net.Core has a faster execution time which is not something to be ignored.

## 6. Ruby
If you’re an AWS customer, then Ruby is familiar to you. Ruby programming language stands out as it reduces complexities for AWS lambda users.

### So, what are the benefits of Ruby in AWS lambda?

**Third party module support**. The language has unique modules that allow the addition of new elements of class hierarchy at runtime.
Strong and supportive community. It thus makes it simple to use.

**Clean Code**. It’s clean code improves AWS Lambda performance.

Ruby is a relatively new addition to the AWS Lambda roaster but there is a lot of interest around it already. I look forward to seeing how far we can push Ruby using AWS Lambda.

## Conclusion
At first glance performance in a controlled, similar environment, running the same kind of functions isn’t all that different and until you get these to production you won’t be able to get a definitive conclusion. Stay tuned for the follow up for this article which will contain an updated benchmark of all the Languages supported by AWS Lambda in 2019.
