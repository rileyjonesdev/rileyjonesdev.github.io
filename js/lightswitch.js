// checkbox lightswitch (donations)
document.getElementById("onecheck").addEventListener("change", () => {
  if (document.getElementById("onecheck").checked == true) {
    document.getElementById("twocheck").checked = false;
  } else {
    document.getElementById("onecheck").checked = false;
    document.getElementById("twocheck").checked = true;
  }
});

document.getElementById("twocheck").addEventListener("change", () => {
  if (document.getElementById("twocheck").checked == true) {
    document.getElementById("onecheck").checked = false;
  } else {
    document.getElementById("onecheck").checked = true;
    document.getElementById("twocheck").checked = false;
  }
});
// form validation
//p1
let donateAmount = 0;
document.getElementById("submitOne").addEventListener("click", () => {
  if (!document.getElementById("custom").value == "") {
    let amount = document.getElementById("custom").value;
    console.log(amount);
    setAmount(amount);
  }
  if (donateAmount == 0) {
    document.getElementById("success").style.display = "none";
    document.getElementById("fail").style.display = "block";
    setTimeout(() => {
      document.getElementById("fail").style.display = "none";
    }, 5000);
  } else {
    document.getElementById("fail").style.display = "none";
    document.getElementById("donateone").style.display = "none";
    document.getElementById("donatetwo").style.display = "block";
  }
});

// p2
let sbtn = document.querySelector("#submitTwo");
sbtn.addEventListener("click", () => {
  // success
  if (document.getElementById("ccForm").checkValidity() == true) {
    document.getElementById("donateone").style.display = "block";
    document.getElementById("donatetwo").style.display = "none";
    document.getElementById("success").style.display = "block";
    document.getElementById("fail").style.display = "none";
    document.getElementById("fail2").style.display = "none";
    donateAmount = 0;
    aaForm.reset();
    ccForm.reset();
    setTimeout(() => {
      document.getElementById("success").style.display = "none";
    }, 5000);
  } else {
    document.getElementById("fail2").style.display = "block";
    setTimeout(() => {
      document.getElementById("fail2").style.display = "none";
    }, 5000);
  }
});

function setAmount(amount) {
  donateAmount = amount;
  document.getElementById("totalDonate").innerHTML = "Total: $" + donateAmount;
}
