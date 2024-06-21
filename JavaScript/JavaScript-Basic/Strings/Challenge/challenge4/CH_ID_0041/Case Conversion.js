/*            *************************************************************
 *  Name of the challenge   : Case Conversion                *
 *  Developed for           : VHITECH Training Program       *
 *               Maintenance History                         *
 *  Developer               :                                *
 *  Creation date           :               Ticket No:       *
 ************************************************************ */

// variable Declaration
let string=document.getElementById("stringId");
let result=document.getElementById("resultId");
// let result1=document.getElementById("resultId");

//function to convert uppercase into lowercase and vice-versa
function caseConversion() {
  let str=string.value;
  if (!str) {
    alert("Please enter a string.");
    return;
}
  for(let i=0;i<str.length;i++) {
    if(str[i]==str[i].toLowerCase()) {
      result.value+=str[i].toUpperCase();
    }
    else {
      result.value+=str[i].toLowerCase();
    }
  }
}

//function to reset the input fields to empty
function reset() {
  string.value="";
  result.value="";
}

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

//Input declaration
