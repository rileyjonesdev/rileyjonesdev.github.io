let galatext = document.querySelector(".galadays");
let date = new Date();
let due = new Date("2024-05-01");
let daydiff = due - date;
galatext.innerHTML = Math.ceil(daydiff / (1000 * 60 * 60 * 24));
