var throttle = require('lodash.throttle');

// const refs = {
//   form: document.querySelector('js-form'),
//   textarea: document.querySelector('js-form-2'),
//   name: document.querySelector('js-form-name'),
// };

// populateTextarea();

// refs.textarea.addEventListener('input', trottle(onTextAreaInput, 500));
// refs.form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventdefault();
//   event.currentTarget.reset();
//   localStorage.removeItem('feedback-form-state');
// }

// function onTextAreaInput(event) {
//   const msg = event.target.value;
//   localStorage.setItem('feedback-form-state', msg);
// }

// function populateTextarea() {
//   const savedMasage = localStorage.getItem('feedback-form-state');

//   if (savedMasage) {
//     refs.textarea.value = savedMasage;
//   }
// }

//================================================
const formEl = document.querySelector('.feedback-form');
const formEmailEl = formEl.querySelector('input[name="email"]');
const formMessageEl = formEl.querySelector('textarea[name="message"]');

const refs = {
  formEl2: document.querySelector('.feedback-form'),
  formMessageEl2: formEl.querySelector('textarea[name="message"]'),
  formEmailEl2: formEl.querySelector('input[name="email"]'),
};

console.log(refs.formMessageEl2);
console.log(refs.formEmailEl2);
console.log(refs.formEl2);

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormElInput, 500));
const STORAGE_KEY = 'feedback-form-state';
const feedbackForm = {
  email: '',
  message: '',
};

populateFormElements();

function onFormElInput(event) {
  feedbackForm[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackForm));
}

function populateFormElements() {
  const ParsedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (ParsedFormData) {
    feedbackForm.email = ParsedFormData.email;
    feedbackForm.message = ParsedFormData.message;
    formMessageEl.value = ParsedFormData.message;
    formEmailEl.value = ParsedFormData.email;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log('feedbackForm: ', feedbackForm);
  localStorage.removeItem(STORAGE_KEY);
}
