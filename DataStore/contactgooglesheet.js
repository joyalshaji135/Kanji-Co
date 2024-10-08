const scriptURL = 'https://script.google.com/macros/s/AKfycbyVstOg_m8ufTMj-r9FkShI_6kIYkN8DgiCuj_V124Hq3ZRmS02zcSSTni7fBWm0bR6VQ/exec'


const form = document.forms['contact-submit']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you .........." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})