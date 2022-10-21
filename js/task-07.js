const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', ()=>{
    const controlVal = input.value;
    span.style.fontSize = `${controlVal}px`;
    console.log(controlVal);
})
