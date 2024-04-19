let getData = document.querySelector("#number");
let putData = document.querySelector("#display");
let inputForm = document.querySelector("#table-form");

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let tableOf = input.value;

  display.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const msg = `${tableOf} X ${i} = ${tableOf * i}`;
    display.innerHTML += `${msg} <br>`;
  }
});
