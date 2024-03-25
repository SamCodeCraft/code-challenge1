// This function  to generate grade based on student marks

function generateGrade(marks) {
    let grade;

    // Check if marks are between 0 and 100

    if (marks >= 0 && marks <= 100) {

        // Determine the grade based on marks

        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60 && marks <= 79) {
            grade = 'B';
        } else if (marks >= 50 && marks <= 59) {
            grade = 'C';
        } else if (marks >= 40 && marks <= 49) {
            grade = 'D';
        } else {
            grade = 'E';
        }
    } else {
        // if the user inputs marks not in the range of between 0 and 100
        grade = 'Invalid input';
    }

    // Return the calculated grade
    return grade;
}
 

 

 

 

 
 
 
 
 
