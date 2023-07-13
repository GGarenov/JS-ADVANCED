class Rectangle{
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {
        return this.width * this.height;
    }
}

let react = new Rectangle(10, 35, 'blue');
console.log(react.width);
console.log(react.height);
console.log(react.color);
console.log(react.calcArea());

let rect2 = new Rectangle(3, 7, 'gray')
console.log(rect2.width);
console.log(rect2.height);
console.log(rect2.color);
console.log(rect2.calcArea());