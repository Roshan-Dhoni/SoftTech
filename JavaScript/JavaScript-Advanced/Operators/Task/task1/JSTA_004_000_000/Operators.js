  /*************************************************************************************
 *  Name of the Task       : Operators                                               *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/
   
  //Code Statements
  let firstProduct=document.getElementById("firstItem");
  let secondProduct=document.getElementById("secondItem");
  let discountMoney=document.getElementById("discountPrice");
  let resultOutputId=document.getElementById("resultId");

  //function to calculate the result
  function calculate() {
    let productOne=parseInt(firstProduct.value);
    let productTwo=parseInt(secondProduct.value);
    let offerPrice=parseInt(discountMoney.value);
    
    if(!productOne || !productTwo || !offerPrice) {
      alert("Please enter the item price and and discount price");
      return;
    }
    let totalPrice=productOne+productTwo;
    let discountAmount=(totalPrice*(offerPrice/100));
    let finalPrice=totalPrice-discountAmount;
    resultOutputId.value=finalPrice;
  }

  //function to reset the fields
  function reset() {
    firstProduct.value="";
    secondProduct.value="";
    discountMoney.value="";
    resultOutputId.value="";
  }