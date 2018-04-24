---
date: 2017-06-05
title: Tracing Lambda Functions with Dashbird
linktitle: Tracing
description: Tracing
kbSeries: ["CUser Guide"]
kbSeries_weight: 300
---


Mikk's feedback: 

- With x-ray enabled its possible to see whats the function is actually doing and where the time is lost. It also gives you a overview what other resources have been called from inside the function.

Taavi's feedback:

- Tracing propagating requests across microservices and event sources. Ideally drawing out the invocation flow. In a single request context, this is a great debugging tool. The other awesome prospect would be to aggregate traces and show common flows across the infrastructure. This will enable optmiziation of the architecture.

Ideas:

- Seamless Tracing of Invocations
    - X-ray integration
    - insights of what your invocation actually does
- Live Function Tailing
    - makes debugging easy
    - receive logs for your functions in real-time
