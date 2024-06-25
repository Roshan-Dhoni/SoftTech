/*            *************************************************************
              *  Name of the challenge  :                                  *
              *                                                            *
              *  Developed for          : VHITECH Training Program         *
              *               Maintenance History                          *
              *  Developer              :                                  *
              *  Creation date           :                Ticket No:        *
              ************************************************************* */

// Declaration
// Screen date and time declaration.
let displayDate = new Date();
document.getElementById("dateOutput").innerHTML = displayDate.toLocaleDateString();
document.getElementById("timeOutput").innerHTML = displayDate.toLocaleTimeString();
//Input declaration
//Code Statements
function inputValidation() {
        const studentName = document.getElementById("stringId").value.trim();
        const rollNumber = document.getElementById("rollId").value.trim();
        const courseName = document.getElementById("courseId").value.trim();

        // Regex patterns for validation
        const namePattern = /^[A-Za-z\s]+$/;
        const rollNumberPattern = /^\d+$/;

        // Validate student name
        if (!namePattern.test(studentName)) {
            alert('Student Name should only contain letters and spaces!');
            return false;
        }

        // Validate roll number
        if (!rollNumberPattern.test(rollNumber)) {
            alert('Roll Number should only contain numbers!');
            return false;
        }

        // Validate other fields are not empty
        if (!studentName || !rollNumber || !courseName) {
            alert('All fields are required!');
            return false;
        }

        // If validation passes, display the details
        const studentDetails = `Name: ${studentName}\nRoll Number: ${rollNumber}\nCourse Name: ${courseName}`;
        document.getElementById("resultId").value = studentDetails;

        alert('Form is valid!');
    }
    
    //function to reset the fields
    function reset() {
        document.getElementById('stringId').value = "";
        document.getElementById('rollId').value = "";
        document.getElementById('courseId').value = "";
        document.getElementById('resultId').value = "";
    }