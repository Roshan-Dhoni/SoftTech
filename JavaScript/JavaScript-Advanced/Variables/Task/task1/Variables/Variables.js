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
  //Code Statements
  //Global Scope Declalration
  var firstNumber=5;
  let secondNumber=5;
  const thirdNumber=5; 
  let outputMessage=document.getElementById("outputId");
  //Local Scope Declaration
  {
    outputMessage.innerHTML+="Addition: "+(firstNumber+secondNumber+thirdNumber)+"<br>";
    outputMessage.innerHTML+="Subtraction: "+(firstNumber-secondNumber-thirdNumber)+"<br>";
    outputMessage.innerHTML+="Multiplication: "+(firstNumber*secondNumber*thirdNumber)+"<br>";
    outputMessage.innerHTML+="Division: "+(firstNumber/secondNumber/thirdNumber)+"<br>"; 
  }

