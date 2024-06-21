//variable declaration
let string=document.getElementById("stringId");
let searchString=document.getElementById("searchId");
let searchedString=document.getElementById("searchResult");
let palindrome=document.getElementById("palindromeId");
let reverseString=document.getElementById("reverseId");

//function to add the string
function stringFunction() {
  let str=string.value;
  let searchStr=searchString.value;
  if (!str || !searchStr) {
    alert("Please enter both a string and a search string.");
    return;
}
  let reverseStr="";
  let searchedStr=str.includes(searchStr);
  if(searchedStr==true) {
    searchedString.value=searchStr;
    for(let i=searchStr.length-1;i>=0;i--) {
      reverseStr+=searchStr[i];
    }
    if(searchStr==reverseStr) {
      palindrome.value="Palindrome";
    }
    else {
      palindrome.value="Not Palindrome";
    }
    reverseString.value=reverseStr;
  }
}
//function to reset the input fields
function reset() {
  string.value="";
  searchString.value="";
  searchedString.value="";
  palindrome.value="";
  reverseString.value="";
}
//Date and Time declarations
  let displayDate = new Date();

  //copy to clipboard
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
  //Code Logic