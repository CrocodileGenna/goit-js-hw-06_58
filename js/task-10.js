function getRandom() {
  return `${Math.floor(Math.random(100) * 100-1)}`;
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector('#controls');
const input = controls.children[0];
const create = controls.children[1];
const destroy = controls.children[2];

const box = document.querySelector('#boxes');
box.style.display = 'flex';
box.style.flexWrap = 'wrap';

console.log(input);
console.log(create);
console.log(destroy);

function createBoxes(amount){
  const divEl = document.createElement('div');
  divEl.style.margin = `10px`;
  divEl.style.height = `30px`;
  divEl.style.width  = `30px`;
  divEl.style.backgroundColor = `${getRandomHexColor()}`;

  box.appendChild(divEl);
};

create.addEventListener('click', (el)=>{
  el.preventDefault();
  input.value = `${getRandom()}`;
  for(let key = 0; key < input.value; key ++){
    createBoxes(key);
  }
});

destroy.addEventListener('click', ()=>{
  location.reload()
});
