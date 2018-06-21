/* eslint-env jquery */
/* global ga */
$(function () {
  // init values
  const urlString = window.location.href
  const url = new URL(urlString)
  const email = url.searchParams.get('email')
  const $formArray = $('form[name="register-form"]')
  if (!$formArray.length) { return }

  const $registerForm = $formArray[0]
  const emailElement = $registerForm[0]
  const firstNameElement = $registerForm[1]
  const passwordElement = $registerForm[4]
  const confirmPasswordElement = $registerForm[5]

  // event handlers
  passwordElement.onchange = validatePassword
  confirmPasswordElement.onkeyup = validatePassword

  $registerForm.addEventListener('submit', function (event) {
    return handleRegisterEvent({ email: emailElement.value })
  })

  // init functions
  initRegister()

  // function declarations
  function initRegister () {
    if (!email) {
      emailElement.focus()
      return
    }
    emailElement.value = email
    firstNameElement.focus()
  }
  function validatePassword () {
    if (passwordElement.value !== confirmPasswordElement.value) {
      confirmPasswordElement.setCustomValidity("Passwords Don't Match")
    } else {
      confirmPasswordElement.setCustomValidity('')
    }
  }
  function handleRegisterEvent (params) {
    return ga('send', 'event', 'Signup', 'signup-successful', params.email)
  }
})
