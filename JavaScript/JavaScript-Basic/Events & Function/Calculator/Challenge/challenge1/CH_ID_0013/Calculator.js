//Date and Time declaration
let displayDate = new Date();
document.getElementById("dateOutput").innerHTML =
  displayDate.toLocaleDateString();
document.getElementById("timeOutput").innerHTML =
  displayDate.toLocaleTimeString();

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

//code Statements
function addFunction() {
    let firstNum = parseInt(document.getElementById("firstNumber").value);
    let secondNum = parseInt(document.getElementById("secondNumber").value);
    let totalNumber = firstNum + secondNum;
    document.getElementById("resultId").value=totalNumber;
    if(!firstNum || !secondNum){
      alert("Number must be filled");
    }
}
function subFunction() {
    let firstNum = parseInt(document.getElementById("firstNumber").value);
    let secondNum = parseInt(document.getElementById("secondNumber").value);
    let totalNumber = firstNum - secondNum;
    document.getElementById("resultId").value=totalNumber;
    if(!firstNum || !secondNum){
      alert("Number must be filled");
    }
}
function mulFunction() {
    let firstNum = parseInt(document.getElementById("firstNumber").value);
    let secondNum = parseInt(document.getElementById("secondNumber").value);
    let totalNumber = firstNum * secondNum;
    document.getElementById("resultId").value=totalNumber;
    if(!firstNum || !secondNum){
      alert("Number must be filled");
    }
}
function divideFunction() {
    let firstNum = parseInt(document.getElementById("firstNumber").value);
    let secondNum = parseInt(document.getElementById("secondNumber").value);
    let totalNumber = firstNum / secondNum;
    document.getElementById("resultId").value=totalNumber;
    if(!firstNum || !secondNum){
      alert("Number must be filled");
    }
}
function reset() {
    document.getElementById("firstNumber").value="";
    document.getElementById("secondNumber").value="";
    document.getElementById("resultId").value="";
}