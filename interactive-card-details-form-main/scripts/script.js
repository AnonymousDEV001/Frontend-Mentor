// FOR SELECTING ELEMENTS FROM DOM
let submit = document.getElementById("submit");
let rightContainer = document.getElementById("rightContainer");
let form = document.getElementById("form");
let appreciate = document.getElementById("appreciate");
let cardName = document.getElementById("cardName");
let cardHolder = document.getElementById("cardHolder");
let cardNumber = document.getElementById("cardNumber");
let cardNo = document.getElementById("cardNo");
let mm = document.getElementById("mm");
let vcardMM = document.getElementById("vcard-mm");
let yy = document.getElementById("yy");
let vcardyy = document.getElementById("vcard-yy");
// For Changing Card Holder Name
cardHolder.addEventListener("keyup", (e) => {
  cardName.innerHTML = e.target.value.toUpperCase();
  if (cardName.innerText == "") {
    cardName.innerHTML = "JANE APPLESEED";
  }
});

//For Changing Card Number
cardNumber.addEventListener("keyup", (e) => {
  let arr = [];
  let count = 0;
  e.target.value = e.target.value.slice(0, 16);

  for (let i = 0; i < 16; i++) {
    arr.push(e.target.value[i]);
    count++;
    if (count == 4) {
      count = 0;
      arr.push(" ");
      cardNo.innerHTML = arr.join("").toUpperCase();
    }
  }
  if (cardNo.innerText == "") {
      cardNo.innerHTML = "0000 0000 0000 0000";
    }
});
//For changing years
yy.addEventListener("change", (e) => {
  e.target.value = e.target.value.slice(0, 2);
  vcardyy.innerHTML = e.target.value.toUpperCase();
  if (vcardyy.innerText == "") {
    vcardMM.innerHTML = "00";
  }
});
//For Changing months
mm.addEventListener("change", (e) => {
  e.target.value = e.target.value.slice(0, 2);
  vcardMM.innerHTML = e.target.value.toUpperCase();
  if (vcardMM.innerText == "") {
    vcardMM.innerHTML = "00";
  }
});

//For Submition
submit.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.opacity = "0";
  setTimeout(() => {
    form.style.display = "none";
    appreciate.style.display = "flex";
    appreciate.style.opacity = "1";
  }, 200);
});
