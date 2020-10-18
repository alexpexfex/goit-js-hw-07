const textInput = document.querySelector('#name-input');
const textOutyput = document.querySelector('#name-output');

textInput.addEventListener('input', onTextInput);

function onTextInput(event) {
  if (event.currentTarget.value === ``) {
    textOutyput.textContent = `незнакомец`;
  } else {
    textOutyput.textContent = textInput.value;
  }
}
