/*            *************************************************************
 *  Name of the challenge  : Pincode Validation               *
 *  Developed for          : VHITECH Training Program         *
 *               Maintenance History                          *
 *  Developer               :                                 *
 *  Creation date           :     Ticket No:                  *
 **************************************************************/

// Declaration
// Screen date and time declaration.
let displayDate = new Date();

//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});

//copy to clipboard
const copyText = document.querySelector("#copy");
copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(document.querySelector("#successCode").value);
  copyText.textContent = "copied";
  setTimeout(() => {
    copyText.innerHTML = `<span>&#128203; </span>copy`;
  }, 2000);
});

//Code Logic
const pinInputId=document.getElementById("pinId");
const resultId=document.getElementById("resultId");
const pin=parseInt(pinInputId.value);
const result=parseInt(resultId.value);
function stringFunction(pin) {
  const pinPattern=/^(\d{4}|\d{6})$/;
  return pinPattern.test(pin);
}
if(stringFunction(result)) {
  result.innerHTML="True";
} else {
  alert("Pin is Not Valid");
}

//function to reset the fields
function reset() {
  pinInputId.value="";
}