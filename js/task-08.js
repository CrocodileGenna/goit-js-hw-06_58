const form = document.querySelector('.login-form');
console.log(form);
form.addEventListener('submit', (element)=>{
    element.preventDefault();
    const { elements: { 
        email, 
        password
    } } = element.currentTarget;
    email.value === '' || password.value === ''?
    alert('Bсі поля повинні бути заповнені'):
    console.log(`email: ${email.value}; passvord: ${password.value}`);
    form.reset()
})
