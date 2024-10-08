const scriptURL = 'https://script.google.com/macros/s/AKfycbyqMvL2KtCpTmxOk_Q33U1tpP2pMk7YV6J4bWywWyouMF5AX8zFxlYmYUXjAti_qoUIHg/exec'


const form = document.forms['email-submit']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you .........." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})