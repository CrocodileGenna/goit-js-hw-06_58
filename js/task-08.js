const form = document.querySelector('.login-form');
console.log(form);
// form.addEventListener('submit', (element)=>{
//     element.preventDefault();
//     const { elements: { 
//         email, 
//         password
//     } } = element.currentTarget;
//     email.value === '' || password.value === ''?
//     alert('Bсі поля повинні бути заповнені'):
//     console.log(`email: ${email.value}; passvord: ${password.value}`);
//     form.reset()
// });
form.addEventListener('submit', (values)=>{
    values.preventDefault();
    const formData = new FormData(values.currentTarget);
    formData.forEach((email, password)=>{
        email === '' || password === ""?
        alert('Bсі поля повинні бути заповнені'):
        console.log('email: ', email);
        console.log('password: ', password);
        form.reset()
    })
})