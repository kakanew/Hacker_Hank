/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        s = s.split('').reverse().join('');
    } catch (e) {
        console.log('s.split is not a function')
    }
    console.log(s);
}
// Testes IDE Input
reverseString("1234");
reverseString("56789");
reverseString("54927348972");
// IDE Output
// 4321
// 98765
// 27984372945