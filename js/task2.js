const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsEl = document.querySelector('#ingredients');

const allIngredients = ingredients.map(ingredient => {
  const listEl = document.createElement(`li`);
  listEl.textContent = ingredient;
  return listEl;
});
console.log(allIngredients);
ingredientsEl.append(...allIngredients);
