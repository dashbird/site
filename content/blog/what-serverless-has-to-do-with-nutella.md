---
title: What does Serverless have in common with Nutella and why it is here to Stay
description: Despite being relatively new, Serverless is built upon a decades-old, mature trend in the software industry
date: 2020-04-21T00:00:00.000Z
frontImage: "2020-04-21/cover-image-nutella.png"
thumbnail: "images/blog/2020-04-21/cover-image-nutella.png"
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["serverless", "trend", "cloud"]
draft: true
---

There is an interesting discussion going on around how Serverless is more of a [spectrum](https://read.acloud.guru/the-serverless-spectrum-147b02cb2292) rather than a binary choice.

The move towards the Serverless-end of the cloud spectrum builds upon a decades-old trend, which is why Serverless is here to stay.

![Cloud Spectrum](/images/blog/2020-04-21/spectrum-watermark.jpg "Cloud Spectrum")

_Source: [CloudZero](https://www.cloudzero.com/blog/serverless-is-not-a-bubble-its-a-spectrum)_


# "_It's the abstraction, stupid_"

As much as the [economy plays a key role in political developments](https://en.wikipedia.org/wiki/It%27s_the_economy,_stupid), abstractions are fundamental to the complex waters of software engineering.

The **need for abstraction** is what sparked the Serverless model in the Cloud. This is decades-old in our industry.

It has happened with programming languages. We went from the lower-level ones - Assembly, C, Java - to the higher-level and [increasingly popular](http://pypl.github.io/PYPL.html) JavaScript and Python. Also with paradigms, going from procedural to object-oriented and functional programming.

Yes, several factors were behind these evolutionary courses, but very few would deny the fundamental role played by the **need for abstraction**.

Think for a second: what would the web look like if every-single-developer had to understand and deal with memory allocation or parsing TCP/IP packages?

Abstraction delivers speed, simplicity, reusability, and collaboration. They scale much better and enable building complex systems out of simple, battle-tested building blocks. They are at the heart of the exponential growth of the internet industry as we know it.


# Shortage of resources

During World War II, chocolate became an expensive luxury in Europe. An Italian entrepreneur decided his fellow citizens deserved some affordable sweetness during such tough times and [invented Nutella](https://www.good.is/articles/history-of-nutella-instant-ramen).

![Nutella](/images/blog/2020-04-21/nutella.png "Nutella")
_[~Image credits](https://www.good.is/articles/history-of-nutella-instant-ramen)_

A shortage of resources always leads to searching for alternatives and solutions.

What shortage does the software industry face nowadays? CPU or memory? We have much higher and cheaper hardware capacity in an [earphone](https://www.tomsguide.com/us/samsung-galaxy-buds,review-6229.html) than in early [space rockets](https://youtu.be/dI-JW2UIAG0)!

Humans are in shortage. More precisely, brains that are able to write quality software code. And their time costs a lot. Tens - or hundreds - of thousands of dollars every year. For a single developer.

That is one of the key factors behind the popularity of higher-level programming languages. They are much [faster to develop with](http://www.tcl.tk/doc/scripting.html) and [save expensive brain time](http://www.connellybarnes.com/documents/language_productivity.pdf). It can be up to 3x faster to write a solution in Python than Java, for example (_I know, eyes will roll because of this statement - but you get the point here_).

This is also one of the key reasons behind the adoption of serverless: it makes developers more productive and speeds up time-to-market by abstracting away time-consuming infrastructure configuration and management.


# The internet is a giant gluing machine

Internet services are overwhelmingly just gluing tools.

Look at Google. It glues data from scraped web pages, past search intents, click-through streams, etc, and compiles into a list of relevant URLs for each of our interests. That’s it.

As lower-level languages are yielding space to their higher-level counterparts, server-based infrastructure is quickly being supplanted by serverless ones. It’s a no-brainer and non-stop trend.

Serverless is just more suitable for building solutions in a giant gluing industry that is short of developer brain time.


# What about the Spectrum?

When it comes to technology, it is rarely a binary choice.

Lower-level programming languages provide all values of being _closer to the metal_: a high degree of control over the hardware, super-fast processing speed, etc.

But [CPU is rarely a performance factor](https://static.googleusercontent.com/media/research.google.com/en//archive/sawzall-sciprog.pdf) for workloads that are heavy at parsing data and networking. Python and JavaScript are great for data gluing, and their slower performance is usually not a problem. Until it is...

Enters the spectrum: [Python can be combined with C](https://docs.python.org/3/extending/extending.html), for example, when we need the best of both worlds: abstraction, developer productivity, and performance.

The same rationale applies to Cloud infrastructure. Serverless is becoming ubiquitous for web back-ends, just as JavaScript and Python. But it will be combined with solutions leaning towards server-based when necessary.


![Serverless is an Operational Construct](/images/blog/2020-04-21/serverless-operational-construct.jpg "Serverless is an Operational Construct")


Source: [AWS re:Invent 2018: Accelerate Innovation & Maximize Business Value w/ Serverless Apps](https://youtu.be/XUkhubMFVZI?t=340)

The future of cloud applications looks to be a predominantly serverless stack that relies on some components running on server-based solutions for particular needs. Serverless comes with its own _way-of-doing-things_ and its challenges as well. Developers building cloud back-end systems should adapt and start mastering this new serverless mindset.
