// variable Declaration
let actorInput1=document.getElementById("actorNameInput1");
let actorInput2=document.getElementById("actorNameInput2");
let actorInput3=document.getElementById("actorNameInput3");
let resultOutput1=document.getElementById("variableResultsId");

//function to print variable actor names
function printActorNames() {
  resultOutput1.innerHTML="";
  let actorname1=actorInput1.value;
  let actorname2=actorInput2.value;
  let actorname3=actorInput3.value;
  resultOutput1.innerHTML+=`${actorname1} ${actorname2} ${actorname3}`;
}

// function to reset variable actor names
function resetVariableInputs() {
  actorInput1.value="";
  actorInput2.value="";
  actorInput3.value="";
  resultOutput1.innerHTML="";
}

//array declaration
  let actorNamesInput1=document.getElementById("actorNameArrayInput1");
  let actorNamesInput2=document.getElementById("actorNameArrayInput2");
  let actorNamesInput3=document.getElementById("actorNameArrayInput3");
  let resultOutput2=document.getElementById("arrayResultId");

// function to print array actor names
function printArrayActorNames() {
  resultOutput2.innerHTML="";
  let actorArrayNames=[
  actorName1=actorNamesInput1.value,
  actorName2=actorNamesInput2.value,
  actorName3=actorNamesInput3.value
  ];
  for(let i=0;i<actorArrayNames.length;i++){
    resultOutput2.innerHTML+=actorArrayNames[i]+"\n";
  }
}

//function to reset array actor names
function resetArrayInputs() {
  actorNamesInput1.value="";
  actorNamesInput2.value="";
  actorNamesInput3.value="";
  resultOutput2.innerHTML="";
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
