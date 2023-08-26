const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ul = document.querySelector("#ingredients");
const list = ingredients.forEach(ingredient => {
  const result = document.createElement("li");
  result.textContent = ingredient;
  ul.append(result);
  return;
})

