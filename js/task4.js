const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const account = document.querySelector('#value');

let counterValue = 0;

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  account.textContent = counterValue;
});
decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  account.textContent = counterValue;
});
