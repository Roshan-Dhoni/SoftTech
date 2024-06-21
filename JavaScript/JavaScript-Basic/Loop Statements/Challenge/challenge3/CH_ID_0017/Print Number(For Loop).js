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

// variable declaration
let firstNumberId=document.getElementById("firstNumber");
let secondNumberId=document.getElementById("secondNumber");
let Result=document.getElementById("resultId");

function forLoop() {
  // Code statements
  if (!firstNumberId.value || !secondNumberId.value) {
    alert("Please enter both numbers.");
    return;
}
  let firstNumberValue=firstNumberId.value;
  let secondNumberValue=secondNumberId.value;
  let initialize;
  for(initialize=firstNumberValue;initialize<=secondNumberValue;initialize++) {
    Result.value+=` ${initialize} `;       
  }
}