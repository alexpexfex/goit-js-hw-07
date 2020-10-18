const allCategoriesNameEl = document.querySelectorAll('li.item');
console.log(`В списке ${allCategoriesNameEl.length} категории.`);
allCategoriesNameEl.forEach(categoriesEl => {
  const categoriesName = categoriesEl.querySelector(`h2`);
  const categoriesAll = categoriesEl.querySelectorAll('li.item ul li');

  console.log(`Категория: ${categoriesName.textContent}`);
  console.log(`Количество элементов: ${categoriesAll.length}`);
});
