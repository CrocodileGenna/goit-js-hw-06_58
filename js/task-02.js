const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addUl = document.querySelector("#ingredients");

const render = ingredients.map((t) => {
  const createLi = document.createElement("li");
  createLi.textContent = t;
  return createLi;
});

addUl.append(...render);
