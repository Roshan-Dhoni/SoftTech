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
  // let discountMoney=document.getElementById("discountPrice");
  let resultOutputId=document.getElementById("resultId");

  //function to calculate the result
  function calculate() {
    let productOne=parseInt(firstProduct.value);
    let productTwo=parseInt(secondProduct.value);
    // let offerPrice=parseInt(discountMoney.value);
    // let finalResult=parseInt(resultOutputId.value);
    productOne+=productTwo;
    console.log(productOne);
    resultOutputId.innerHTML=productOne;
  }