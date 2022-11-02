const doc = document.querySelector("body");
const input = doc.children[1];
const styleAdd = document.querySelector("style");
console.log(styleAdd);
input.addEventListener("blur", () => {
  if (input.value.length === 6) {
    input.style.borderColor = "green";
  } else {
    input.style.borderColor = "red";
  }
});
