/*            *************************************************************
              *  Name of the challenge   : Percentage Calculation         *
              *  Developed for           : VHITECH Training Program       *
              *               Maintenance History                         *
              *  Developer               :                                *
              *  Creation date           :               Ticket No:       *
              ************************************************************ */


// Declaration
// Screen date and time declaration.
let displayDate = new Date();

 //copy to clipboard
 const copyText = document.querySelector("#copy");
 copyText.addEventListener("click", () => {
   navigator.clipboard.writeText(
     document.querySelector("#successCode").value
   );
   copyText.textContent = "copied";
   setTimeout(() => {
     copyText.innerHTML = `<span>&#128203; </span>copy`;
   }, 2000);
 });

 //Modal
 const toggleSuccessModal = () => successModal.classList.toggle("active");
 const toggleErrorModal = () => errorModal.classList.toggle("active");
 window.addEventListener("click", function (event) {
   if (event.target === successModal)
     successModal.classList.remove("active");
   if (event.target === errorModal) errorModal.classList.remove("active");
 });

 function calculate() {
  let firstDomInput = document.getElementById("firstNumber");
  let secondDomInput = document.getElementById("secondNumber");
  let firstNum = parseInt(firstDomInput.value);
  let secondNum = parseInt(secondDomInput.value);
  let totalNumber = firstNum % secondNum;
  document.getElementById("resultId").value=totalNumber;
}
 function result() {
      document.getElementById("firstNumber").value=0;
      document.getElementById("secondNumber").value=0;
      document.getElementById("resultId").value=0;
 }