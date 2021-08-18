class Square {
    constructor(length) {
        this.length = length;
    }
    square_area = () => this.length ** 2;
    square_perimeter = () => this.length * 4;
}

// Create some "Square" objects and display a description of each one on the webpage.
let squareParagraphs = document.getElementsByClassName("squareParagraph");
Array.from(squareParagraphs).forEach(element => {
    let length = Math.ceil(Math.random() * randomNumberUpperLimit);
    let square = new Square(length);
    element.innerHTML = `\nThe area of a square with length ${length} is ` +
        `${square.square_area()} and its perimeter is ` +
        `${square.square_perimeter()}`;
});