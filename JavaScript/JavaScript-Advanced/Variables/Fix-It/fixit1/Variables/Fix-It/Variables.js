  /*************************************************************************************
 *  Name of the challenge  : Variables (Simple Counter App)                           *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                                                                                   *
 *                                                                                   *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/
  //Date and Time declaration
  let displayDate = new Date();
  document.getElementById("dateOutput").innerHTML = displayDate.toLocaleDateString();
  document.getElementById("timeOutput").innerHTML = displayDate.toLocaleTimeString();
  let outputMessage = document.getElementById("outputvariableId");
  let outputResult = document.getElementById("outputfunctionId");
  
  // Variable Hoisting
  var counter = 1; // Variable declaration and initialization
  outputMessage.innerHTML = "Counter Variable: " + counter+"<br>";
  
  // Variables letnumber and constnumber
  let letnumber = 5;
  const constnumber = 3;
  
  // Logging the values of letnumber and constnumber after declaration
  outputMessage.innerHTML+="let number: " + letnumber+"<br>";
  outputMessage.innerHTML+="const number: " + constnumber;
  
  // Function Hoisting
  displayMessage();
  function displayMessage() {
      outputResult.innerHTML="MS Dhoni";
  }