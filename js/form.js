// extra donation checkbox
document.getElementById("additional_donation").style.display = "none";
document.getElementById("yescheck").addEventListener("change", () => {
  if (document.getElementById("yescheck").checked == true) {
    document.getElementById("additional_donation").style.display = "block";
  } else {
    document.getElementById("additional_donation").style.display = "none";
    document.getElementById("edonation").value = "";
    calculateTotal();
  }
});
// calc total due
document.getElementById("edonation").addEventListener("change", () => {
  calculateTotal();
});
document.getElementById("tickets").addEventListener("change", () => {
  calculateTotal();
});

function calculateTotal() {
  let pricedon = document.getElementById("edonation").value;
  let pricetic = document.getElementById("tickets").value * 250;
  let total = +pricedon + +pricetic;
  document.getElementById("gtotal").innerHTML = "Total: $" + total;
}
// form validation
let sbutton = document.querySelector(".formsubmit");
let donateAmount = 0;
sbutton.addEventListener("click", () => {
  if (document.getElementById("gform").checkValidity() == true) {
    document.getElementById("fail").style.display = "none";
    location.hash = "#success";
    document.getElementById("success").style.display = "block";
    setTimeout(() => {
      document.getElementById("success").style.display = "none";
    }, 5000);

    gform.reset();
    document.getElementById("gtotal").innerHTML = "Total: $0.00";
    document.getElementById("additional_donation").style.display = "none";
  } else {
    document.getElementById("success").style.display = "none";
    location.hash = "#fail";
    document.getElementById("fail").style.display = "block";
    setTimeout(() => {
      document.getElementById("fail").style.display = "none";
    }, 5000);
  }
});

function setAmount(amount) {
  donateAmount = amount;
  document.getElementById("totalDonate").innerHTML = donateAmount;
}
