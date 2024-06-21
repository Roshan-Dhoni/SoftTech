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
let age = document.getElementById("ageId");
let male = document.getElementById("maleId");
let female = document.getElementById("femaleId");
let output = document.getElementById("checkId");

function validate() {
  //Code Statements
  if (age.value =="") {
    alert("Please enter your age.");
    return;
}
  if (!male.checked && !female.checked) {
    alert("Please select a gender.");
    return;
}
  if (
    (male.checked && age.value >= 21) ||
    (female.checked && age.value >= 18)
  ) {
    output.innerHTML = "Eligible for Marriage";
  } else {
    output.innerHTML = "Not Eligible for Marriage";
  } 
}
function reset() {
    age.value = "";
    male.checked = false;
    female.checked = false;
    output.innerHTML = "";
}