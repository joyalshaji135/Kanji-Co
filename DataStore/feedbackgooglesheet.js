const scriptURL = 'https://script.google.com/macros/s/AKfycbycyri7fGhFLw4F5AHsEq60K7aTUN2iDYZHhq-9qzKDQj-X6ZHMCTAfgTlocN5aXJI-nQ/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you for helping us grow! Your insights are invaluable" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})