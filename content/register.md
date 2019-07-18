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
    <div style='max-width: 600px;' class='align-center mx-auto'>
      <h2 class="text-center pb-1"><span class="h4 underlined">It usually takes <b>less than 2 minutes</b>.</span></h2>
      <p><b>Dashbird requires no code changes to your Lambdas.</b> Instead, you'll need to connect Dashbird to your AWS account through a preconfigured CloudFormation stack.</p>
    </div>
    
    <div class="row justify-content-md-center align-items-center">
    <div class="col-lg-5 col-md-6 col-sm-10 col-xs-12 register-form">
        <div class="pt-2">
            <form id="register-form" name="register-form" method="post" action="https://api.dashbird.io/redirects/register">
                <div class="row align-items-center mb-15px">
                  <div class='col-md-3 text-center'>
                    <span>Company Email: <span class='text-danger'>*</span></label></span>
                  </div>
                  <div class='col-md-9'>
                    <input type="email" class="form-control cta-input w-100-percent" placeholder='dashbird@serverless-user.com' name="email" required>
                  </div>
                </div>

                <div class="row align-items-center mb-15px">
                  <div class='col-md-3 text-center'>
                    <span>First name: <span class='text-danger'>*</span></label></span>
                  </div>
                  <div class='col-md-9'>
                    <input type="text" class="form-control cta-input w-100-percent" placeholder='Bobby' name="firstName" required>
                  </div>
                </div>

                <div class="row align-items-center mb-15px">
                  <div class='col-md-3 text-center'>
                    <span>Last name: <span class='text-danger'>*</span></label></span>
                  </div>
                  <div class='col-md-9'>
                    <input type="text" class="form-control cta-input w-100-percent" placeholder='Drop-Tables' name="lastName" required>
                  </div>
                </div>

                <div class="row align-items-center mb-15px">
                  <div class='col-md-3 text-center'>
                    <span>Workspace: <span class='text-danger'>*</span></label></span>
                  </div>
                  <div class='col-md-9'>
                    <input type="text" class="form-control cta-input w-100-percent" placeholder="Dashbird-production" name="companyName" required>
                  </div>
                </div>

                <div class="row align-items-center mb-15px">
                  <div class='col-md-3 text-center'>
                    <span>Phone number:</span>
                  </div>
                  <div class='col-md-9'>
                    <input type="text" class="form-control cta-input w-100-percent" placeholder='+1 013 123 12' name="phoneNumber">
                  </div>
                </div>
                <div class="row align-items-center mb-15px">
                  <div class='col-md-3 text-center'>
                    <span>Password: <span class='text-danger'>*</span></label></span>
                  </div>
                  <div class='col-md-9'>
                    <input type="password" class="form-control cta-input w-100-percent" placeholder='*******' name="password" required>
                  </div>
                </div>

                <div class="row align-items-center mb-15px">
                  <div class='col-md-3 text-center'>
                    <span>Confirm: <span class='text-danger'>*</span></label></span></span>
                  </div>
                  <div class='col-md-9'>
                      <input type="password" class="form-control cta-input w-100-percent" placeholder='Confirm ********' name="confirmPassword" required>
                  </div>
                    
                </div>
                <div class="input-group flex-column mt-40px"> 
                    <button type="submit" class="cta-btn cta-pink mx-auto w-50" id="register-btn">Sign up</button>
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
