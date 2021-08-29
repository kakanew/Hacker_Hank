/*
 * Create the function factorial here
 */
function factorial(n) {
    if (n==1) {
        return 1;
    }
    else{
        var factorial=1
        for(var i=n; i > 1; i--){
            factorial=factorial * i;
        }
        return factorial
    }
}
// Testes IDE Input
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
// IDE Output
// 24
// 120
// 720


