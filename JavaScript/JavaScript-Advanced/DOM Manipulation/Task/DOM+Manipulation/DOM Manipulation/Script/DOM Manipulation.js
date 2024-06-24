  /*************************************************************************************
 *  Name of the Task       : DOM Manipulation                                        *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *     
 *                        Maintenance History                                        *
 *                                                                                   *
 *************************************************************************************/
//Code Statements
let inputElementId=document.getElementById("arrayItems");
let displayElements=document.getElementById("displayArray");
let elementAfterRemoved=document.getElementById("orderId");
let count=0, elementArray=[];

//function to add the items into the list
function addItems() {
  displayElements.value="";
  let inputElement=inputElementId.value;

  elementArray[count]=inputElement;
  ++count;

  for(let i=0;i<count;i++) {
    displayElements.value+=`${elementArray[i]}\n`;
  }
}

//function to remove the items from the list
function remove() {
  elementAfterRemoved.value="";
  --count;

  for(let i=0;i<count;i++) {
    elementAfterRemoved.value+=`${elementArray[i]}\n`
  }
}

//function to reset the values in all the fields
function reset() {
  inputElementId.value="";
  displayElements.value="";
  elementAfterRemoved.value="";
  count=0;
  elementArray=[];
}