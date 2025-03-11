const formDate = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
  if (event.target.name) {
    formDate[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formDate));
  }
});

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const parsedData = JSON.parse(savedData);
  formDate.email = parsedData.email || '';
  formDate.message = parsedData.message || '';
  form.elements.email.value = formDate.email;
  form.elements.message.value = formDate.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const { email, message } = formDate;
  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  } else {
    console.log(formDate);
    localStorage.removeItem('feedback-form-state');
    formDate.email = '';
    formDate.message = '';
    form.reset();
  }
});
