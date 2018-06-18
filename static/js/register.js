/* eslint-env jquery */

$(function () {
  const urlString = window.location.href
  const url = new URL(urlString)
  const email = url.searchParams.get('email')
  const emailElement = document.querySelector('input[type="email"][name="register-email"]')
  const firstNameElement = document.querySelector('input[type="text"][name="register-first-name"]')
  const password = document.querySelector('input[name="register-password"]')
  const confirmPassword = document.querySelector('input[name="register-confirm-password"]')

  if (!password) { return }

  password.onchange = validatePassword
  confirmPassword.onkeyup = validatePassword

  initRegister()

  function initRegister () {
    if (!email) {
      emailElement.focus()
      return
    }
    emailElement.value = email
    firstNameElement.focus()
  }

  function validatePassword () {
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("Passwords Don't Match")
    } else {
      confirmPassword.setCustomValidity('')
    }
  }
})
