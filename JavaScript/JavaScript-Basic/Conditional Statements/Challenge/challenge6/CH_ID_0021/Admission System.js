//Date and Time Declaration
let displayDate = new Date();
document.getElementById("datOutput").innerHTML = displayDate.toLocaleDateString();
document.getElementById("timOutput").innerHTML = displayDate.toLocaleTimeString();
const copyText = document.querySelector("#copy");
copyText.addEventListener("click", () => {
navigator.clipboard.writeText(document.querySelector("#successCode").value);
copyText.textContent = "copied";
setTimeout(() => {
copyText.innerHTML = `<span>&#128203; </span>copy`;
}, 2000);
});

//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
if (event.target === successModal) successModal.classList.remove("active");
if (event.target === errorModal) errorModal.classList.remove("active");
});

// Variable Declaration
let maths=document.getElementById("maths");
let physics=document.getElementById("physics");
let chemistry=document.getElementById("chemistry");
let cutoff=document.getElementById("cutoff");
let eligibility=document.getElementById("result");

// COnstant Declaration
const MIN_MARK=0;
const MAX_MARK=100;

//Function to find eligible college based on cutoff mark
function findCutOff() {
    let mathsMark=parseInt(maths.value);
    let physicsMark=parseInt(physics.value);
    let chemistryMark=parseInt(chemistry.value);
    let cutoffMark;

    cutoffMark=mathsMark+physicsMark+chemistryMark;
    cutoff.value=cutoffMark;

    if (
        mathsMark>=MIN_MARK &&
        mathsMark<=MAX_MARK &&
        physicsMark>=MIN_MARK &&
        physicsMark<=MAX_MARK &&
        chemistryMark>=MIN_MARK &&
        chemistryMark<=MAX_MARK
    ) {
        if (cutoffMark>=195) {
            eligibility.innerHTML="Level 1 Government Engineering College";
        } else if(cutoffMark>=190 && cutoffMark<195) {
            eligibility.innerHTML="Level 2 Government Engineering College";
        } else if(cutoffMark>=185 && cutoffMark<190) {
            eligibility.innerHTML="Level 1 Private Engineering College";
        } else if(cutoffMark>=180 && cutoffMark<185) {
            eligibility.innerHTML="Level 2 Private Engineering College";
        } else {
            eligibility.innerHTML="No College";
        }
    } else {
        alert("Enter mark raging between the values 0 to 100");
    }
}

function reset() {
    maths.value="";
    physics.value="";
    chemistry.value="";
    cutoff.value="";
    eligibility.innerHTML="";
}