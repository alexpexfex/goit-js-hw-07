const input = document.querySelector('#validation-input');

// const DataLength = document.querySelector('#validation-input.value.length');
// console.log(DataLength);

// input.addEventListener('focus', onFocusInput);
// function onFocusInput() {
//   console.log('отримав');
// }
input.addEventListener('blur', checkInput);

function checkInput() {
  if (input.value.length === Number(input.getAttribute(`data-length`))) {
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
