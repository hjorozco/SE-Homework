class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    rectangle_area = () => this.length * this.width;
    rectangle_perimeter = () => (this.length * 2) + (this.width * 2);
}

// Create some "Rectangle" objects and display a description of each one on the webpage.
let rectangleParagraphs = document.getElementsByClassName("rectangleParagraph");
Array.from(rectangleParagraphs).forEach(element => {
    let length = Math.ceil(Math.random() * randomNumberUpperLimit);
    let width = Math.ceil(Math.random() * randomNumberUpperLimit);
    let rectangle = new Rectangle(length, width);
    element.innerHTML = `\nThe area of a rectangle with length ${length} and width ${width} is ` +
        `${rectangle.rectangle_area()} and its perimeter is ` +
        `${rectangle.rectangle_perimeter()}`;
});