const count = document.querySelector('#counter');
const minusBtn = count.children[0];
const values = count.children[1];
const plusBtn = count.children[2];
console.log(plusBtn);
console.log(values);
console.log(minusBtn);

minusBtn.addEventListener('click', ()=>{
    values.textContent -= 1
});
let counterValue = 0
plusBtn.addEventListener('click', ()=>{
    counterValue += 1
   values.textContent = counterValue
});
