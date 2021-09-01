function getMaxLessThanK(n, k) {
    let max = 0;

    for (let i = 1; i <= n; i++) {
        for (let b = i + 1; b <= n; b++) {
            let bw = (i & b);

            (bw < k && bw > max) && (max = bw);
        }
    }
 
    return max;
}
// Testes IDE Input
console.log(getMaxLessThanK(5,2));
console.log(getMaxLessThanK(8,5));
console.log(getMaxLessThanK(2,2));
console.log("-----------------------");
console.log(getMaxLessThanK(9,2));
console.log(getMaxLessThanK(8,3));
// IDE Output
// 1
// 4
// 0
// -----------------------
// 1
// 2
