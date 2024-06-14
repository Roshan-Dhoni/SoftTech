// variable Declaration
let actorInput1=document.getElementById("actorNameInput1");
let actorInput2=document.getElementById("actorNameInput2");
let actorInput3=document.getElementById("actorNameInput3");
let resultOutput1=document.getElementById("variableResultsId");

// function to print variable actor names
function printActorNames() {
  resultOutput1.innerHTML="";
  let actorname1=actorInput1.value;
  let actorname2=actorInput2.value;
  let actorname3=actorInput3.value;
  resultOutput1.innerHTML=`${actorname1} ${actorname2} ${actorname3}`;
}

//function to reset variable actor names
function resetVariableInputs() {
  actorInput1.value="";
  actorInput2.value="";
  actorInput3.value="";
  resultOutput1.innerHTML="";
}

//array declaration
let actorNamesInput=document.getElementById("actorsNameArrayInput");
let actorNameOutput=document.getElementById("arrayResultId");
let numberOfActors=document.getElementById("numberOfActorsAdded");

//function to add the no. of actors
let actorsArray=[];
let i=0;
function addActorsName() {
  actorsArray[i]=actorNamesInput.value;
  i++;
  numberOfActors.innerHTML=`No. of Actors added: ${i}`;
  actorNamesInput.value="";
}

//function to print the array actor names
function printArrayActorNames() {
  actorNameOutput.innerHTML="";
  for(let index=0;index<i;index++){
    actorNameOutput.innerHTML+=actorsArray[index]+"<br>";
  }
}

//function to reset array actor names
function resetArrayInputs() {
  actorNamesInput.value="";
  actorNameOutput.innerHTML="";
  numberOfActors.innerHTML="No. of Actors added : 0";
  i=0;
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