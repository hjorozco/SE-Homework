// 1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.

const maxOfTwoNumbers = (num1, num2) => num1 > num2 ? num1 : num2;

// Code that uses "maxOfTwoNumbers" function.
let num1 = 100;
let num2 = 10;
console.log(`\nThe largest of the numbers ${num1} and ${num2} is: ${maxOfTwoNumbers(num1, num2)}.`);

// ******************************************************************************************************************

// 2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = (num1, num2, num3) => Math.max(num1, num2, num3);

// Code that uses "maxOfThree" function.
num1 = 100;
num2 = 10;
let num3 = 200;
console.log(`\nThe largest of the numbers ${num1}, ${num2} and ${num3} is: ${maxOfThree(num1, num2, num3)}.`);

