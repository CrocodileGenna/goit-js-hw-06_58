function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector('.change-color')
button.addEventListener('click', (element)=>{
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  const span = document.querySelector('.color');
  span.textContent = `${getRandomHexColor()}`;
})