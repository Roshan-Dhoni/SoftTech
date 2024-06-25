  /*************************************************************************************
 *  Name of the challenge  : Date Validator (Regular Expression)                     *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/
   
  //Code Statements
  function validateDate() {
    const dateRegex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    const inputDate = document.getElementById("dateId").value;
    const resultField = document.getElementById("resultId");

    if (dateRegex.test(inputDate)) {
        resultField.value = "Valid";
        resultField.style.color = "green";
    } else {
        resultField.value = "Invalid";
        resultField.style.color = "red";
    }
}
function reset() {
  document.getElementById("dateId").value = "";
  document.getElementById("resultId").value = "";
}