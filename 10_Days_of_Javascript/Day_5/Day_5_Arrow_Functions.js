function modifyArray(nums) {
    for (let i = 0; i < nums.length; i++) {
        const result = nums[i] % 2 === 0;
        if (result) {
            nums[i] = nums[i] * 2;
        } else {
            nums[i] = nums[i] * 3;
        }
    }
    return nums;
}

// Testes IDE Input
console.log(modifyArray([1, 2, 3, 4, 5]));
// console.log(modifyArray([2, 6, 10, 14]));
// IDE Output
// (5) [3, 4, 9, 8, 15]