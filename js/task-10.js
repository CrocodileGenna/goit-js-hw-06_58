function getRandom() {
  return `${Math.floor(Math.random(100) * 100 - 1)}`;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
const input = controls.children[0];
const create = controls.children[1];
const destroy = controls.children[2];

const box = document.querySelector("#boxes");
box.style.display = "flex";
box.style.flexWrap = "wrap";

destroy.addEventListener("click", () => {
  location.reload();
});

function createBoxes(el) {
  let size = 30;
  let div = ``;
  for (let i = 0; i < el; i++) {
    size += 10;
    div += `<div style="background-color:${getRandomHexColor()}; height:${size}px; width:${size}px; margin:10px"></div>`;
  }
  return div;
}

create.addEventListener("click", () => {
  box.insertAdjacentHTML("beforeend", createBoxes(input.value));
});

// function createBoxes(amount) {
//   const divEl = document.createElement("div");
//   divEl.style.margin = `10px`;
//   divEl.style.height = `30px`;
//   divEl.style.width = `30px`;
//   divEl.style.backgroundColor = `${getRandomHexColor()}`;

//   amount.appendChild(divEl);
// }

// input.addEventListener("input", (el) => {
//   el = input.value;
//   create.addEventListener("click", () => {
//     for (let key = 0; key < el; key++) {
//       createBoxes(box);
//     }
//     console.log(box.style.margin);
//   });
// });
