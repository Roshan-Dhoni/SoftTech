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

// Declaration
let selectedDegree = document.getElementById("degree");
let finalResult = document.getElementById("result")

//Code Logic
function findEligiblity() {
  let Degree=selectedDegree.value;
  if (Degree === "") {
    alert("Please select a degree.");
    return;
}
  if (
    Degree=="bca" || 
    Degree=="bscCs" ||
    Degree=="beCs" ||
    Degree=="beIt" ) 
    {
    finalResult.innerText="Eligible for Junior Software Developer";
  } else if(
    Degree=="mca" ||
    Degree=="mscCs" ||
    Degree=="meCs" ||
    Degree=="meIt"
  ) 
  {
    finalResult.innerText="Eligible for Senior Software Developer";
  }
}

function reset() {
  selectedDegree.value = "";
  finalResult.innerText="";
}
