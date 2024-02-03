// aos
AOS.init();

// mobile menu
let bars = document.querySelector(".hamburger");
let close = document.querySelector("#closemenu");

bars.addEventListener("click", () => {
  document.getElementById("mobilemenu").style.display = "block";
});
close.addEventListener("click", () => {
  document.getElementById("mobilemenu").style.display = "none";
});
