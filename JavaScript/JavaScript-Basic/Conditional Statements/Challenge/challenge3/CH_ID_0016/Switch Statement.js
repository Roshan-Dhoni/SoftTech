// Screen date and time declaration.
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

//Variables declaration
let studentName = document.getElementById("nameId");
let languageSubject = document.getElementById("langId");
let physicsSubject = document.getElementById("physicsId");
let mathsSubject = document.getElementById("mathsId");
let chemistrySubject = document.getElementById("chemistryId");
let biologySubject = document.getElementById("bioId");
let total = document.getElementById("totalId");
let average = document.getElementById("avgId");
let grade = document.getElementById("gradeId");
let pass = document.getElementById("passId");
let cutoff = document.getElementById("cutoffId");
let eligiblity = document.getElementById("eligibleId");

//Constant declaration
const MAX_MARK = 100;
const MIN_MARK = 0;

//code statements
function calculate() {
    let languagemark = parseInt(languageSubject.value);
    let physicsmark = parseInt(physicsSubject.value);
    let mathsmark = parseInt(mathsSubject.value);
    let chemistrymark = parseInt(chemistrySubject.value);
    let biologymark = parseInt(biologySubject.value);
    let totalmark;
    let avgmark;
    let cutoffmark;

    if (languagemark>=MIN_MARK && 
    languagemark<=MAX_MARK &&
    physicsmark>=MIN_MARK &&
    physicsmark<=MAX_MARK &&
    mathsmark>=MIN_MARK &&
    mathsmark<=MAX_MARK &&
    chemistrymark>=MIN_MARK &&
    chemistrymark<=MAX_MARK &&
    biologymark>=MIN_MARK &&
    biologymark<=MAX_MARK) {
        totalmark=languagemark+physicsmark+mathsmark+chemistrymark+biologymark;
        total.value=totalmark;
        avgmark=totalmark/5;
        average.value=avgmark;
    switch(true) {
        case avgmark>90:
            grade.value = "A";
            break;
        case avgmark>60 && avgmark<=90:
            grade.value = "B";
            break;
        case avgmark>40 && avgmark<=60:
            grade.value = "C";
            break;
    }
    cutoffmark=mathsmark+physicsmark/2+chemistrymark/2;
    cutoff.value=cutoffmark;
    
    if (
        languagemark>40 && 
        physicsmark>40 &&
        mathsmark>40 &&
        chemistrymark>40 &&
        biologymark>40 ) {
            pass.value="Pass";
            if (cutoffmark>=180) {
                eligiblity.value="Medicine";
            }
            else if (cutoffmark<180 && cutoffmark>160) {
                eligiblity.value="Engineering";    
            }
            else if(cutoffmark<160) {
              eligiblity.value="";
            }
        } else {
            pass.value="Fail";
            eligiblity.value="";
        }
    } else {
        alert("Enter marks value only ranging from 0 to 100");
    }
}

function reset() {
    studentName.value="";
    languageSubject.value="";
    physicsSubject.value="";
    mathsSubject.value="";
    chemistrySubject.value="";
    biologySubject.value="";
    total.value="";
    average.value="";
    grade.value="";
    pass.value="";
    cutoff.value="";
    eligiblity.value="";
}