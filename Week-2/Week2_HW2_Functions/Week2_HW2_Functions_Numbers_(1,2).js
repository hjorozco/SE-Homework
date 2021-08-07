// 1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.

/**
 * Function that returns the largest of two numbers.
 * @param {Number} num1 
 * @param {Number} num2 
 * @returns {Number} The largest of the two numbers.
 */
const maxOfTwoNumbers = (num1, num2) => num1 > num2 ? num1 : num2;

// Code that uses maxOfTwoNumbers function.
let num1 = 100;
let num2 = 10;
let max = maxOfTwoNumbers(num1, num2);
console.log(`\nThe largest of the numbers ${num1} and ${num2} is: ${max}.`);

// ******************************************************************************************************************

// 2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

/**
 * Function that returns the largest of three numbers.
 * @param {Number} num1 
 * @param {Number} num2 
 * @param {Number} num3 
 * @returns {Number} The largest of the three numbers.
 */
function maxOfThree(num1, num2, num3) {
    let max = num1;
    max = max < num2 ? num2 : max;
    max = max < num3 ? num3 : max;
    return max;
}

// Code that uses maxOfThree function.
num1 = 100;
num2 = 10;
let num3 = 200;
max = maxOfThree(num1, num2, num3);
console.log(`\nThe largest of the numbers ${num1}, ${num2} and ${num3} is: ${max}.`);

