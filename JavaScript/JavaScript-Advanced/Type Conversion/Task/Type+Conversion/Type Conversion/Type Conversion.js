  /*************************************************************************************
 *  Name of the Task       : Type Conversion                                         *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                            Maintenance History                                    *
 *                                                                                   *
//  *************************************************************************************/
//    Create an object named bookDetails with the following properties: BOOK NAME,AUTHOR NAME,PUBLISHED YEAR,PRICE.
//  1.Use the JSON.stringify method to convert the bookDetails object into a JSON-formatted string.
  
//Code Statements
let inputDetails=document.getElementById("displayResult")
  const bookDetails={
  bookName: "The Dhoni Touch",
  authorName: "Sundaresan Bharat",
  launchYear: 2018,
  price: 207
};
const displayDetails=JSON.stringify(bookDetails);
inputDetails.innerHTML=displayDetails;