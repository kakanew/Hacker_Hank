function simpleArraySum(ar) {
    let sum = 0;
    for(let i = 0;  i < ar.length;  i++){
        sum+= ar[i];
    }
     return sum;
}
// Testes IDE Input
console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));
console.log(simpleArraySum([8, 5, 2, 6, 22, 47]));
// IDE Output
// 31
// 90