/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width
    
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length + width)
    
    return perimeter;
}
// Testes IDE Input
console.log(getArea(3,4.5));
console.log(getPerimeter(3,4.5));

console.log(getArea(311.123,499.997));
console.log(getPerimeter(311.123,499.997));

console.log(getArea(611.123,999.997));
console.log(getPerimeter(611.123,999.997));
// IDE Output
// 13.5
// 15

// 155560.566631
// 1622.24

// 611121.166631
// 3222.24
