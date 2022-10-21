const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for(let key of ingredients){
  const addUl = document.querySelector('#ingredients');
  const createLi = document.createElement('li');
  createLi.classList = 'li'
  createLi.textContent = `${key}`

  addUl.appendChild(createLi)
}