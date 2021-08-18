const randomNumberUpperLimit = 50;

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    circle_area = () => Math.PI * (this.radius ** 2);
    circle_circumference = () => 2 * Math.PI * this.radius;
}

// Create some "Circle" objects and display a description of each one on the webpage.
let circleParagraphs = document.getElementsByClassName("circleParagraph");
Array.from(circleParagraphs).forEach(element => {
    let radius = Math.ceil(Math.random() * randomNumberUpperLimit);
    let circle = new Circle(radius);
    element.innerHTML = `\nThe area of a circle with radius ${radius} is ≈ ` +
        `${circle.circle_area().toFixed(2)} and its circumference is ≈ ` +
        `${circle.circle_circumference().toFixed(2)}`;
});