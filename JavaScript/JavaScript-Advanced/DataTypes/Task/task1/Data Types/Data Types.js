  /*************************************************************************************
 *  Name of the Task       : Data Types(Object Creation)                             *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                                                                                   *
 *                                                                                   *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/
 //Create an Object with Book Details
  //Date and Time declaration
  let displayDate = new Date();
  document.getElementById("dateOutput").innerHTML = displayDate.toLocaleDateString();
  document.getElementById("timeOutput").innerHTML = displayDate.toLocaleTimeString();
  //Code Statements
  let inputDetails=document.getElementById("outputDetails")
  const bookDetails={
  bookName: "The Dhoni Touch",
  authorName: "Sundaresan Bharat",
  launchYear: 2018,
  price: 207
};
const displayDetails=`Book Name: ${bookDetails.bookName} <br>
                      Author Name: ${bookDetails.authorName} <br>
                      Book Launch Year: ${bookDetails.launchYear} <br>
                      Price: ${bookDetails.price}`;
inputDetails.innerHTML=displayDetails;