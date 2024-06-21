//variable declaration
let string=document.getElementById("stringId");
let resultId=document.getElementById("searchResult");

// function to find the first position of vowel in a string
function stringFunction() {
  let str=string.value;
  if (!str) {
    alert("Please enter a string.");
    return;
}
  let result=str.indexOf("o");
  document.getElementById("searchResult").value=result;
}

//function to reset the input fields
function reset() {
  string.value="";
  resultId.value="";
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
        navigator.clipboard.writeText(
          document.querySelector("#successCode").value
        );
        copyText.textContent = "copied";
        setTimeout(() => {
          copyText.innerHTML = `<span>&#128203; </span>copy`;
        }, 2000);
      });


