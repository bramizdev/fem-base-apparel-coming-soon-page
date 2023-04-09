'use strict';

const $ = (selector) => document.querySelector(selector);

const $emailInput = $('#email-input');
const $submitBtn = $('#submit-btn');
const $alertIcon = $('#alert-icon');
const $alertText = $('#alert-text');

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const showAlert = () => {
  $alertIcon.classList.remove('hidden');
  $alertText.classList.remove('hidden');
};

const hideAlert = () => {
  $alertIcon.classList.add('hidden');
  $alertText.classList.add('hidden');
};

$submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const email = $emailInput.value;
  if (!isValidEmail(email)) {
    showAlert();
    return;
  }
  hideAlert();
  $emailInput.value = '';
});
