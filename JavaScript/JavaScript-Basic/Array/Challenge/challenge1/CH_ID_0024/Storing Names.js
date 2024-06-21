// variable Declaration
let actornameId1=document.getElementById("actorNameInput1");
let actornameId2=document.getElementById("actorNameInput2");
let actornameId3=document.getElementById("actorNameInput3");
let resultOutput=document.getElementById("variableResultsId");

//function to print the names
function printNames() {
  if(!actornameId1.value || !actornameId2.value || !actornameId3.value){
    alert("Enter the name");
    return;
  }
  resultOutput.innerHTML="";
  let actorname1=actornameId1.value;
  let actorname2=actornameId2.value;
  let actorname3=actornameId3.value;  
  resultOutput.innerHTML+=`${actorname1} ${actorname2} ${actorname3}`;
}

//function to reset the input fields
function reset() {
  actornameId1.value="";
  actornameId2.value="";
  actornameId3.value="";
  resultOutput.innerHTML="";
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
