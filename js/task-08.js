const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", (values) => {
  values.preventDefault();

  let result = {};
  const email = values.target[0].value;
  const passvord = values.target[1].value;

  email === "" || passvord === ""
    ? alert("Bсі поля повинні бути заповнені")
    : (result = { email, passvord });
  console.log(result);

  form.reset();
});
