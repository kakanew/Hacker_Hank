/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var maiorX = nums.sort(function (a,b) {
        return a - b;
    });
    var maiorY = maiorX.filter(function(elm, index, self) {
        return index == self.indexOf (elm);
    });
    return maiorY[maiorY.length - 2];
}
// Testes IDE Input
console.log(getSecondLargest([2,3,6,6,5]));
console.log(getSecondLargest([8,7,4,3,2]));
// IDE Output
// 5
// 7