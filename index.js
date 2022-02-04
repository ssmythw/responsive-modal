let modal = document.getElementsByClassName("modal")[0];
let button = document.getElementsByClassName("open-modal")[0];
let escp = document.getElementsByClassName("escape")[0];

escp.addEventListener("click", (e) => {
  modal.classList.toggle("toggle");
});

button.addEventListener("click", (e) => {
  modal.classList.toggle("toggle");
});
