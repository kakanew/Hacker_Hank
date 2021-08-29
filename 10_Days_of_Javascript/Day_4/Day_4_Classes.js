class Polygon {
    constructor(args) {
        this.values = args;
    }

    perimeter() {
        return (this.values || []).reduce((target, item) => target + item);
    }
}
// Testes HackerHank Input
const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
// HackerHank Output
// 60
// 40
// 143
