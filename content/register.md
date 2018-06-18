---
title: Dashbird Signup - AWS Lambda Functions Monitoring Based On CloudWatch Logs
description: Dashbird is a platform that makes sense of all parts of Serverless. We are small but we think big and our users love us. Join the team and build something awesome!
date: 2018-06-17T11:50:03+02:00
---

<section class="container-fluid dark-bg pt-5 pb-5">
    <h2 class="text-center pb-5"><span class="h4 underlined roboto-mono">Sign up and start improving your Lambdas today!</span></h2>
    <div class="row justify-content-md-center align-items-center">
    <div class="col-lg-4 col-md-6 col-sm-10 col-xs-12">
        <div class="pt-2">
            <!-- <form method="post" action="https://app.dashbird.io/auth/register"> -->
            <form>
                <div class="input-group flex-column mb-15px">
                    <label for="email">Email</label>
                    <input type="email" class="form-control cta-input w-100-percent" placeholder='Eg. johndoe@email.com' name="email" required>
                </div>
                <div class="input-group flex-column mb-15px">
                    <label for="first-name">First name</label>
                    <input type="text" class="form-control cta-input w-100-percent" placeholder='Eg, John' name="first-name" required>
                </div>
                <div class="input-group flex-column mb-15px">
                    <label for="last-name">Last name</label>
                    <input type="text" class="form-control cta-input w-100-percent" placeholder='Eg. Doe' name="last-name" required>
                </div>
                <div class="input-group flex-column mb-15px">
                    <label for="password">Password</label>
                    <input type="password" class="form-control cta-input w-100-percent" placeholder='Eg. superdupersecret' name="password" required>
                </div>
                <div class="input-group flex-column mb-15px">
                    <label for="confirm-password">Confirm password</label>
                    <input type="password" class="form-control cta-input w-100-percent" placeholder='Please confirm it!' name="confirm-password" required>
                </div>
                <div class="input-group flex-column mt-40px">
                    <button type="submit" class="cta-btn cta-pink w-100-percent" id="register">Sign up</button>
                </div>
            </form>
            <p class="text-center gray small">No credit card required</p>
        </div>
    </div>
  </div>
</section>

<script>
    initRegister()

    function initRegister () {    
        var url_string = window.location.href
        var url = new URL(url_string)
        var email = url.searchParams.get('email')
        var emailElement = document.querySelector('input[type="email"][name="email"]')
        var firstNameElement = document.querySelector('input[type="text"][name="first-name"]')

        if (!email) { 
            emailElement.focus()
            return 
        }

        emailElement.value = email
        firstNameElement.focus()
    }
</script>
