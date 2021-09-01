// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    // Write your code here
    const date = new Date(dateString);
    const options = {
        weekday: 'long'
        //weekday: 'short'
    };

    return new Intl.DateTimeFormat('en-Us', options).format(date);
    //return new Intl.DateTimeFormat('pt-Br', options).format(date);
    }
// Testes IDE Input
console.log(getDayName('10/11/2009'));
console.log(getDayName('11/10/2010'));
console.log(getDayName('01/01/2047'));
console.log(getDayName('12/02/1977'));
// IDE Output
// Sunday
// Wednesday
// Tuesday
// Friday
