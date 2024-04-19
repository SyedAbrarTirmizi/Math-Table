document.getElementById("table").addEventListener("click", function (event) {
  event.preventDefault();
  let getData = document.getElementById("number").value;
  let putData = document.getElementById("display");
  putData.innerHTML = "";
  for (i = 1; i <= 10; i++) {
    putData.innerHTML += getData + " X " + i + " = " + getData * i + "<br>";
  }
});
