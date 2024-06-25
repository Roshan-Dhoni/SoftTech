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
function stringFunction() {
  const pinPattern=/^\d{4}$|^\d{6}$/;
  const pinInputId=document.getElementById("pinId").value;
  const resultId=document.getElementById("resultId");
  
  if(pinPattern.test(pinInputId)) {
    resultId.value="True";
    resultId.style.color="Green";
  } else {
    resultId.value="Not Valid";
    resultId.style.color="Red";
  }
}

//function to reset the fields
function reset() {
  document.getElementById("pinId").value="";
  document.getElementById("resultId").value="";
}