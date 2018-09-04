---
title: Dashbird Signup - Free AWS Lambda Monitoring Tool
description: Dashbird is a visibility and troubleshooting platform that makes sense of all parts of serverless. It covers AWS Lambda, API Gateway, AWS X-Ray and doesn't require any code changes for the use.
date: 2018-06-17T11:50:03+02:00
aliases:
    - /signup/
---

<script>
  const sig = document
    .querySelectorAll('.sign-up')

  sig.forEach(function (el) {
    el.classList.add('active')
  })

    // .classList
</script>

<section class="container-fluid dark-bg pt-5 pb-5">
    <h2 class="text-center pb-5"><span class="h4 underlined">Sign up and start improving your serverless applications today!</span></h2>
    <div class="row justify-content-md-center align-items-center">
    <div class="col-lg-4 col-md-6 col-sm-10 col-xs-12">
        <div class="pt-2">
            <form id="register-form" name="register-form" method="post" action="https://app.dashbird.io/auth/register">
            <!-- <form name="register-form"> -->
                <div class="input-group flex-column mb-15px">
                    <label for="email">Email</label>
                    <input type="email" class="form-control cta-input w-100-percent" placeholder='johndoe@email.com' name="email" required>
                </div>
                <div class="input-group flex-column mb-15px">
                    <label for="firstName">First name</label>
                    <input type="text" class="form-control cta-input w-100-percent" placeholder='John' name="firstName" required>
                </div>
                <div class="input-group flex-column mb-15px">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control cta-input w-100-percent" placeholder='Doe' name="lastName" required>
                </div>
                <div class="input-group flex-column mb-15px">
                    <label for="companyName">Company name</label>
                    <input type="text" class="form-control cta-input w-100-percent" placeholder="John's company" name="companyName" required>
                </div>
                <div class="input-group flex-column mb-15px">
                    <label for="password">Password</label>
                    <input type="password" class="form-control cta-input w-100-percent" placeholder='superdupersecret' name="password" required>
                </div>
                <div class="input-group flex-column mb-15px">
                    <label for="confirmPassword">Confirm password</label>
                    <input type="password" class="form-control cta-input w-100-percent" placeholder='please confirm it!' name="confirmPassword" required>
                </div>
                <div class="input-group flex-column mt-40px">
                    <button type="submit" class="cta-btn cta-pink w-100-percent" id="register-btn">Sign up</button>
                </div>
            </form>
            <p class="text-center gray small">No credit card required</p>
        </div>
    </div>
  </div>
</section>

<script>
  fbq('track', 'ViewContent', {
    content_ids: 'register',
  });
</script>
