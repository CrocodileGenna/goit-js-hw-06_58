const itemAll = document.querySelectorAll('.item');
console.log('Number of categories: ',itemAll.length);
for(let key of itemAll){
    console.log('Category: ', key.children[0].textContent)
    const len = key.children[1]
    console.log('Elements: ', len.children.length)
};