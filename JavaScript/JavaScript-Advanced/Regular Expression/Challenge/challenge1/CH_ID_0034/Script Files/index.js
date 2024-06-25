/*************************************************************************************
 *  Name of the challenge  : Validation                                              *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                                                                                   *
 *                                                                                   *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/

// Declaration
//Code Statements
function stringFunction() {
  const nameInput=document.getElementById("stringId").value;
  const emailInput=document.getElementById("mailId").value;
  const creditCardInput=document.getElementById("creditId").value;
  const panNumInput=document.getElementById("panId").value;
  const gstNumInput=document.getElementById("gstId").value;

  const namePattern = /^[A-Za-z\s]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const creditCardPattern = /^\d{16}$/;
  const panPattern = /^[A-Z]{5}\d{4}[A-Z]$/;
  const gstPattern = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[1-9A-Z]{3}$/;

  if(!namePattern.test(nameInput)) {
    alert("Enter a valid name");
    return false;
  }
  if(!emailPattern.test(emailInput)) {
    alert("Enter a valid email address");
    return false;
  }
  if(!creditCardPattern.test(creditCardInput)) {
    alert("The credit card number is not matching 16 digits");
    return false;
  }
  if(!panPattern.test(panNumInput)) {
    alert("Pan Number should be of 10 digits");
    return false;
  }
  if(!gstPattern.test(gstNumInput)) {
    alert("GST Number should be 15 digits long");
    return false;
  }
  alert("All the inputs are valid! Congo!!");
}

//function to reset all the input fields
function reset() {
  document.getElementById("stringId").value="";
  document.getElementById("mailId").value="";
  document.getElementById("creditId").value="";
  document.getElementById("panId").value="";
  document.getElementById("gstId").value="";
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
