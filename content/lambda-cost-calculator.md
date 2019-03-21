---
title: AWS Lambda Cost Calculator, Pricing Estimation - Dashbird
description: Estimate the cost of using AWS Lambda functions. This AWS Lambda cost calculator is based on Amazon's pricing info.
thumbnail: images/lambda-cost-calculator.png
date: 2017-12-18T10:50:03+02:00
scripts:
 - '/js/cost-calculator.js'
---


<section class="container-fluid dark-bg justify-content-center">
  <div class="row">
    <div class="col text-center mt-5 d-md-block">
      <h1>AWS Lambda Cost Calculator</h1>
    </div>
  </div>

  <div class="row justify-content-center mt-4">
    <div class="col-xs-12 col-sm-5 col-md-4 mt-5 d-md-block">
      <label class="input-group mt-3">
        <input type="number" class="form-control align-middle" placeholder='Number of executions (month)' min="0" name="executions" required>
      </label>

      <select class="form-control mt-4" name='memory' id='lambda-memory'>
        <option value="0" disabled selected>Memory allocation</option>
      </select>

      <label class="input-group mt-4">
      <input type="number" class="form-control" placeholder='Estimated average duration (ms)' name="duration" min="1" max="300000" required>
      </label>


      <div class="mt-4">
        Include free tier? <br>
        <label class="form-check-label ml-4 mr-4">
          <input class="form-check-input" type="radio" name="freeTier" id='freetier-checked'  checked>
          Yes
        </label>

        <label class="form-check-label ml-3">
          <input class="form-check-input" type="radio" name="freeTier">
          No
        </label>
      </div>
    </div>

    <div class="col-sm-5 col-md-4 d-none d-md-block mr-4 mt-3 text-right">
      <img src="/images/dashbird-illustration.svg">
    </div>

  </div>

  <div class="row justify-content-center mt-4">
    <div class="col-xs-12 col-sm-10 col-md-8 text-left mt-5 d-md-block mb-5">
      <h3>Results</h3>
      <h5>Request costs: <span id='requests-cost' class='float-right'>$0/month</span></h5>
      <h5>Execution costs: <span id='executions-cost' class='float-right'>$0/month</span></h5>
      <hr/>
      <h5>Total AWS Lambda costs: <span id='total-cost' class='float-right text-green'>$0/month</span></h5>

    </div>
  </div>

  <div class='row justify-content-center'>
    <div class='col-9 text-center'>
      <div class='row justify-content-center'>

        <div class='col-6 imgs-fluid'>
          <img src="/images/cost.png" >
        </div>

        <div class='col-6'>
          <a href='https://dashbird.io/' target='_blank' class='btn btn-primary mb-4 mt-3'>Sign up for free</a>
        </div>

      </div>
    </div>
  </div>

</section>
