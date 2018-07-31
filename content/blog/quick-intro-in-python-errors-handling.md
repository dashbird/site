---
title: A quick introduction to Python errors and exceptions
description: It doesn't matter if you are fluent in python or just dipping your toes in the scripting language sooner or later you will encounter an error. Here's what you do
date: 2018-07-25T12:00:00.000Z
frontImage: "2018-07-25/pexels-photo-1040489.jpeg"
thumbnail: "images/blog/2018-07-25/pexels-photo-1040489.jpeg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
blog: ["python,serverless"]
---
Serverless is slowly becoming the new norm and with that much traction around this all-new-way to run applications is only normal that developers from all over have been jumping at the chance to test it out. However, not every programming language is the same and some have some distinct pitfalls one will want to avoid. Here is what you need to look out for if you are going to snake yourself into using serverless. Get it? Python is a kind of snake. No? Fine, I'll stop.

It doesn't matter if you are fluent in python or just dipping your toes in the scripting language sooner or later you will encounter an error. <a href="https://dashbird.io/python-lambda-optimization-error-handling/">Python error handling</a> might seem hard to most newbies but once you get used to what you need to look at you'll be fine. 

<h2>Syntax error</h2>
One of the most common errors you will get is called a parsing error. The more common term is "syntax error". It happens to everyone once in a while: you type a code and misplace a comma or forget to add a colon in the print() function. Seems simple yet that dreaded comma has plagued developers since the beginning of time.

<h2>Exceptions</h2>
Then there are the errors caused by the execution of a python script. In this case, the python error comes in the form of a so-called "exception". One such example is KeyError which appears at execution if a mapping key is not found among existing keys. Another python error handling output is MemoryError which is invoked when you run out of memory while running a python script.

<h2>ModuleNotFoundError </h2>
Error messages that constitute exceptions in python are added with almost each new and improved version. The ModuleNotFoundError error made its appearance in version 3.6 of the scripting language. Sometimes error messages are redefined for better understanding. Until python version 3.5, whenever a recursion depth limit was exceeded, the user would receive a simple RuntimeError message. Which was vague, at best. Since version 3.5 the exception has been redefined as RecursionError so that a programmer won't have to dig through python error handling manuals and compare them to the written code as to determine where the code segment causing said error could be.

<h2>User-defined errors</h2>
Then there are errors that are user-defined. Say - for example - you are using a set of open-source GitHub scripts for AWS memory monitoring. You need them for the monitoring of disk inode usage, for memory buffer monitoring or load monitoring for each individual CPU. The scripts require python 2.6 or better or 3.3 or better. In such cases, the python scripts you use might output user-defined errors which could be hard to interpret since they are defined by using classes. <strong>class Error(Exception)</strong>: is such an example. <strong>class TransitionError(Error)</strong>: is another. They are followed by a message that has been defined by the author of the script and it depends on its coherence to make sense of it. If one is lazy, the output could be as simple as "error". Most, however, annotate their code or specify clear instructions as to make python error handling as easy as possible. A <strong>class InputError(Error)</strong>: exception could - for example - clearly specify that the input the user typed is faulty and output a list of available attribute options for the command.

<h2>Exception("Invalid character: " + char)</h2>
It's easy to write a simple calculator in python. The code is short and self-explanatory: you define the operations as lambda expressions ("x" and "y") and specify the permitted operations ("+": and "-": and "/": and "*":). In this case, python error handling could be done with the help of raise Exception() whenever a character that was not previously defined is being used as input. 
A simple calculator uses number units and widely-known symbols for divisions, adding, subtracting. In such a case, a user should use only numbers and the four predefined operators: "+", "-", "/" and "*". If anything else is used in the input field, error handling goes into effect and the simple script of the calculator will display an "Invalid character:" thanks to the raise Exception("Invalid character: " + char) line.

<h2>Raise Error</h2>
As a Python developer, you can also force errors to appear via the raise statement. For example, raise NameError('My error occurred') inserted in the code will output NameError: My error occurred. The raise exception forces predefined errors to occur and can be useful when you want any input to be forced upon the user except the predefined ones. Furthermore, to better clarify things for the user you could make use of a simple print('You typed it wrong') or print('This error occurred because you did this'). This clears the confusion caused by user-defined python errors and better informs the user about what he or she did wrong.

<center>![Python Developer](/images/blog/2018-07-25/python-developer.jpg)
<i>A python developer in his natural habitat</i></center>

<h2>Python error tracking in serverless enviroments</h2>
Exceptions and syntax errors in python 3.x can be easily understood by reading the python documentation or by simply taking a look at the annotated code.  The problem with <a href="https://dashbird.io/python-lambda-optimization-error-handling/">Python error handling</a> in serverless environments like AWS Lambda is the lack of observability in your application. This makes for a lot of mucking around with your code and spending hours in AWS CloudWatch, which is never fine. 

Here is where Dashbird comes into play. With Dashbird you'll be able to track your python errors while getting an overall view of the status of your application. Once you have finished setting up your account you'll be able to see every function invocation, live tailing, error reports, cost breakdown and much much more. 
Check out our [Python AWS Lambda Performance Tracking](https://dashbird.io/python-lambda-performance-tracking/) to learn more.