# Error handling in Python over AWS Lambda
AWS Lambda has a terrific support for observability. Whether its an uncaught exception or a timeout AWS offers multiple ways to make your
code more observable. For the purpose of simplicity let's stick to Python3.6 runtime environment as our. A little digression into the errors and exceptions native to Python is warranted at this point. Later we will be also get into the AWS specific details.

# Errors and Exceptions

Python <a href="https://docs.python.org/3/tutorial/errors.html" target="\_blank">classifies</a> its failures into two broad categories:
    * Errors
    * Exceptions

## Errors
Errors constitute the bulk of failures in code execution. A majority of these, however, are either caught while the code is either being
written or tested initially. Errors are the blatant violation of Python programming language's syntax. Things like missing colons, wrong
indentations and unpaired parentheses all fall under this category.

```python
list = []
n = 10
for i in range(n)
  list.append(i)
```
This would give an error complaining about the missing colon and would also indicate the line number where the error occurred.

AWS Lambda, like the Python interpreter, whines in a very verbose manner until all the syntactically errors are resolved. Here's how
it looks in general.

![Syntax Error](images/docs/Python_Error/Syntax_Error.PNG)

## Exceptions
Exceptions are a bit more subtle than errors. Exceptions are those cases in which the code might be grammatically correct, as per the rules
which are defined by the Python programming language, but nonsensical in terms of its real-world utility. For example, if you have a function that takes two
arguments and divides one by another, you need to make sure that the divisor is not zero. The rules with which we humans have defined division breaks down when
the divisor is zero. Obviously, Python syntax doesn't accommodate this fact because it sees the operands belonging to Number class and that makes it a valid
division operation.  

However, the implementation of division operation has taken this into consideration. So you get the following message:
```
>>> 1/0
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
>>>
```

What is happening here is that, the division operation accepts that expression "1/0" as syntactically correct and proceeds. Down in the implementation of
division, however, it checks if the divisor is zero and, if that's the case, it throws an exception.

Python has a built-in concept of exceptions which you can use in your own code. Things such as negative number for monthly income, 30 days in February and
other violation of common place knowledge can be tucked away as edge cases or exceptions using this neat concept.

Having proper exception is only half the battle. Once caught, you must now tell the program how to proceed forward and mitigate the edge case.
Because we often use libraries and frameworks built on top of Python to write our own applications, we are quite likely to encounter exceptions and tell
our programs how to handle them. Rarely would you ever need to come up with your own exception case.

For example, in the above case, the exception caught was *ZeroDivisionError*. To deal with the exception you can do something like the following:
```Python
while True:
  try:
    dividend = int(input("Please Enter the dividend"))
    divisor = int(input("Please Enter the divisor"))
    print(dividend/divisor)
    break

  except ZeroDivisionError:
    print("The divisor can't be zero. Try again")

```

You can write your own custom exception cases too, for example, if you want your users to set a password that is secure you can have something similar to this:

```Python
while True:
  try:
    password = input("Please Enter a New Password")
    passwordCheck(password)
    break

  except PasswordTooSmall:
    print("The password must be at least 8 characters in lenght. Try again")

  except PasswordWithNoNumerics:
    print("The password must have at least one number in it. Try again")
```
Of course, the function passwordCheck() must be implemented in a way to recognize exceptions like PasswordTooSmall and PasswordWithNoNumerics and throw them
accordingly. You can learn more about user defined exceptions <a href="https://docs.python.org/3/tutorial/errors.html#user-defined-exceptions" target="\_blank"> here.</a>  
---

# AWS Specific Errors

## Handler Function
Function handlers are AWS Lambda's way of telling where to start.
![Handler](images/docs/Python_Error/handler.PNG)
The handler itself has two parts. The file name (in this case named lambda_function) and then inside that file we defined a function lambda_handler().
In the screenshot, you can see that the Handler section has an entry *lambda_function.lambda_handler* and it is this function that receives the event
and context parameters as we invoke the lambda instance.  

While you are writing your code, or testing it locally, it is easy to forget about the handler function. Your Python script would run one line of code
after another and give the intended result. Put the same code as your lambda function and you are never going to see a successful invocation. You
have to structure your code such that the starting point is the handler and every other necessary component or module is called from within the handler.  

> Handler Function is like the main function in programming languages, like Java, and without it the lambda function has no starting point.  

If you misconfigure your handler function, as shown below, you will notice two different indicators of the error:
![Handler Module](images/docs/Python_Error/handler_error.PNG)

  1. The function returns a response saying that the specified handler name (in the top right corner) is not present in the actual code
  ```
  {
  "errorMessage": "Handler 'lambda_handler' missing on module 'lambda_function'"
  }
  ```
  This response could then be handled by the agent (like S3 bucket, client making an API call or an EC2 instance) which was waiting for the response.

  2. Along with the response, AWS Lambda also emits detailed logs into Amazon CloudWatch, provided the permissions are set correctly.
  ```
  START RequestId: c15bc9f8-4858-11e8-a8fe-598557fbab17 Version: $LATEST
  Handler 'lambda_handler' missing on module 'lambda_function': module 'lambda_function' has no attribute 'lambda_handler'

  END RequestId: c15bc9f8-4858-11e8-a8fe-598557fbab17
  REPORT RequestId: c15bc9f8-4858-11e8-a8fe-598557fbab17	Duration: 0.38 ms	Billed Duration: 100 ms 	Memory Size: 128 MB	Max Memory Used: 22 MB
  ```
> Monitoring services like <a href="https://dashbird.io" target="\_blank"> Dashbird </a> can bring together the lambda responses along with other monitoring
services like Amazon CloudWatch or AWS X-Ray to give you a coherent idea of what's the issue.

## Missing modules
If your service involves a number of complex operations, it is easier to split it into a number of different modules. Each module can be a .py file of
its own and you can import the classes and functions defined in those files as different modules in your main handler function. For example, you can have a
simple hello-world application that takes first and last name and gives you a greeting message as a response. You may want to separate the greeting message
generator as a different function. This is easliy accomplished, as following:

You write the function in a different file, let's call it testmodule.py
```Python
def greetme(arg1, arg2):
    return "Hello," + arg1 + " " + arg2 + "!"

```
And then you import the module before your handler function and then use it as shown below:
This is the lambda_function.py file with an import statement followed by handler functions.

```Python
import testmodule
def lambda_handler(event, context):

    return testmodule.greetme(event["key1"],event["key2"])
```

The problem arises when you forget to import the module, or import the wrong module (it is an easy mistake to make since Python has a lot of built-in modules as well).
For example, if you skip the **import testmodule** statement in the above example, then the response message is going to be more obscure:

```
{
  "errorMessage": "name 'testmodule' is not defined",
  "errorType": "NameError",
  "stackTrace": [
    [
      "/var/task/lambda_function.py",
      4,
      "lambda_handler",
      "return testmodule.greetme(event[\"first\"],event[\"last\"])"
    ]
  ]
}
```
Even the CloudWatch logs would tell you that the error is in line 4, which is can be misleading.
```
START RequestId: 8cd7cb3b-4861-11e8-923b-4592e6364602 Version: $LATEST
name 'testmodule' is not defined: NameError
Traceback (most recent call last):
  File "/var/task/lambda_function.py", line 4, in lambda_handler
    return testmodule.greetme(event["first"],event["last"])
NameError: name 'testmodule' is not defined

END RequestId: 8cd7cb3b-4861-11e8-923b-4592e6364602
REPORT RequestId: 8cd7cb3b-4861-11e8-923b-4592e6364602	Duration: 1.44 ms	Billed Duration: 100 ms 	Memory Size: 128 MB	Max Memory Used: 22 MB
```

AWS extends <a href="https://gist.github.com/gene1wood/4a052f39490fae00e0c3" target="\_blank">the list of available modules </a> beyond the Python buit-in modules so that developers won't have to explicitly include them in their code base before deploying.

## Conclusion
When writing a new application or service. One really has to think about all the possible edge cases one might encounter. Especially, if you are dealing with
user input. A properly designed service minimizes the number of edge cases and then handles those edge cases eloquently. This point is poetically put in the
popular Zen of Python.

```Python
import this
```

```
The Zen of Python, by Tim Peters

...
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
...
```
Similarly, when writing Python code to serve as functions, one should think about the environment where the code will run, the modules you need to explicitly define
and the resource constraints like the time interval and the memory allocated to your function. You can learn more about failures and errors <a href="https://dashbird.io/blog/realtime-serverless-debugging-guide/" target="\_blank">here </a>. Or [sign up](https://dashbird.io/signup/) to know more about FaaS and how it can change the way your app works.
