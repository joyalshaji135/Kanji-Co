const scriptURL = 'https://script.google.com/macros/s/AKfycbwQGQFxu-Qa-Rna75CV6Ddl7O48YmliIU7R6ph0A78YsvVhSnJtHW0RUhvAfyW8e54O/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Order Submitted Successfully" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})