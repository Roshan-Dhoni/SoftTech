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

//Code Statements
function calculate() {
    let firstDomInput = document.getElementById("firstNumber");
    let secondDomInput = document.getElementById("secondNumber");
    let firstNum = parseInt(firstDomInput.value);
    let secondNum = parseInt(secondDomInput.value);
    let totalNumber = firstNum + secondNum;
    document.getElementById("resultId").value=totalNumber;
    document.getElementById("onMouseOver").innerHTML="Hover over the line to change the font color.";
}

//change line color when cursor is kept on the line
function mouseOver() {
  let mouseChange=document.getElementById("onMouseOver");
  mouseChange.style.color="green";
}

function mouseOut() {
  let mouseChange=document.getElementById("onMouseOver");
  mouseChange.style.color="yellow"; 
}