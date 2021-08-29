/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = (a + b) * 2;
    this.area = a * b;
}

// Testes IDE Input
const teste = new Rectangle(4,5)
console.log(teste.length);
console.log(teste.width);
console.log(teste.perimeter);
console.log(teste.area);
console.log("-----------------------");
const teste1 = new Rectangle(8,10)
console.log(teste1.length);
console.log(teste1.width);
console.log(teste1.perimeter);
console.log(teste1.area);
console.log("-----------------------");
const teste2 = new Rectangle(5,10)
console.log(teste2.length);
console.log(teste2.width);
console.log(teste2.perimeter);
console.log(teste2.area);
// IDE Output
// 4
// 5
// 18
// 20
// -----------------------
// 8
// 10
// 36
// 80
// -----------------------
// 5
// 10
// 30
// 50
