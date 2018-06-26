/* eslint-env jquery */
$(function () {
  // init values
  const $formArray = $('form[name="trial-form"]')
  if (!$formArray.length) { return }

  console.log(typeof $formArray)

  const $trialForm = $formArray[0]
  const emailElement = $trialForm[0]

  $trialForm.addEventListener('submit', function (e) {
    e.preventDefault()
    
  })
})
