/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a === 0) {
      throw Error("Zero Error");
    }
    if (a < 0) {
      throw Error("Negative Error");
    }
    return "YES";
}
// Testes IDE Input
// 3 1 2 3
// 3 2 0 6
// 2 -1 20

console.log(isPositive(0));

// IDE Output
// YES
// YES
// YES
// YES

// YES
// YES
// Uncaught Error: Zero Error
// YES

// YES
// Uncaught Error: Negative Error
// YES