function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 25 && score <= 30) {
        grade = 'A';    
    }
    else if (score > 20 && score <= 25) {
        grade = 'B';
    }
    else if (score > 15 && score <= 20) {
        grade = 'C';
    }
    else if (score > 10 && score <= 15) {
        grade = 'D';
    }
    else if (score > 5 && score <= 10) {
        grade = 'E';
    }
    else {
        grade = 'F';
    }
    return grade;
}
//Testes IDE Input
console.log(getGrade(11));
console.log(getGrade(27));
console.log(getGrade(45));
console.log(getGrade(55));
console.log(getGrade(22));
console.log(getGrade(1));