// Example starter JavaScript for disabling form submissions if there are invalid fields


function checkFormInputs (token, event) {
  console.log('starting to run this function')
  let emailInput = document.getElementById('email').value
  console.log(emailInput)
  let splitFormEmail = emailInput.split('@')
  console.log(splitFormEmail)
  let isForbiddenEmail = mailserversBlacklist.includes(splitFormEmail[1])
  console.log(isForbiddenEmail)
  if (isForbiddenEmail) {
    grecaptcha.ready(function() {
      grecaptcha.execute('6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', {action: 'submit'}).then(function(token) {
        document.getElementById('email').classList.add('is-invalid')
      });
    });
  }
  if (!isForbiddenEmail) {
    grecaptcha.ready(function() {
      grecaptcha.execute('6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', {action: 'submit'}).then(function(token) {
        console.log('starting to submit')
        document.getElementById('register-form').submit()
      });
    });
  }
}