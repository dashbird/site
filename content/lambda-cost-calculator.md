---
title: AWS Lambda Cost Calculator, Pricing Estimation - Dashbird
description: AWS Lambda Cost Calculator
thumbnail: images/lambda-cost-calculator.png
date: 2017-12-18T10:50:03+02:00
scripts: 
 - '/js/cost-calculator.js'
---


<section class="container-fluid dark-bg justify-content-center">
  <div class="row">
    <div class="col text-center mt-5 d-none d-md-block">
      <h1>AWS Lambda Cost Calculator</h1>
    </div>
  </div>

  <div class="row justify-content-center mt-4">
    <div class="col-4 mt-5 d-none d-md-block">
      <label class="input-group mt-3">
        <input type="text" class="form-control align-middle" placeholder='Number of executions (month)' name="executions" required>
      </label>

      <select class="form-control mt-4" name='memory'>
        <option value="0" disabled selected>Memory allocation</option>
        <option value="128">128 MB</option>
        <option value="192">192 MB</option>
        <option value="256">256 MB</option>
        <option value="320">320 MB</option>
        <option value="384">384 MB</option>
        <option value="448">448 MB</option>
        <option value="512">512 MB</option>
        <option value="576">576 MB</option>
        <option value="640">640 MB</option>
        <option value="704">704 MB</option>
        <option value="768">768 MB</option>
        <option value="832">832 MB</option>
        <option value="896">896 MB</option>
        <option value="960">960 MB</option>
        <option value="1024">1024 MB</option>
        <option value="1088">1088 MB</option>
        <option value="1152">1152 MB</option>
        <option value="1216">1216 MB</option>
        <option value="1280">1280 MB</option>
        <option value="1344">1344 MB</option>
        <option value="1408">1408 MB</option>
        <option value="1472">1472 MB</option>
        <option value="1536">1536 MB</option>
      </select>

      <label class="input-group mt-4">
        <input type="text" class="form-control" placeholder='Estimated average duration (ms)' name="duration" required>
      </label>


      <div class="form-check mt-4">
        Include free tier?
        <label class="form-check-label ml-3">
          <input class="form-check-input" type="radio" name="freeTier" id='freetier-checked'  checked>
          Yes 
        </label>

        <label class="form-check-label ml-3">
          <input class="form-check-input" type="radio" name="freeTier">
          No
        </label>
      </div>
    </div>
    <div class="col-md-4 d-none d-md-block mr-4 mt-3 text-right">
      <img src="/images/dashbird-illustration.svg">
    </div>

  </div>

  <div class="row justify-content-center mt-4">
    <div class="col-8 text-left mt-5 d-none d-md-block mb-5">
      <h3>Results</h3>
      <h5>Request costs: <span id='requests-cost' class='float-right'>$0/month</span></h5>
      <h5>Execution costs: <span id='executions-cost' class='float-right'>$0/month</span></h5>
      <hr/>
      <h5>Total costs: <span id='total-cost' class='float-right text-green'>$0/month</span></h5>

    </div>
  </div>

</section>
