
function submitRegistrationForm (token, event) {
  let emailInput = document.getElementById('email').value
  let splitFormEmail = emailInput.split('@')
  let isForbiddenEmail = mailserversBlacklist.includes(splitFormEmail[1])
  grecaptcha.ready(function () {
    grecaptcha.execute('6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', {action: 'submit'}).then(function() {
      if (isForbiddenEmail) {
        document.getElementById('email').classList.add('is-invalid')
      } else {
        var recaptchaResponse = document.getElementById('recaptchaResponse');
        recaptchaResponse.value = token;
        document.getElementById('register-form').submit()
      }
    });
  })
}
