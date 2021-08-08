/**
 * 4. Define a function sumArray and a function multiplyArray that sums and multiplies
 * (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should
 * return 10, and multiplyArray([1,2,3,4]) should return 24.
 */

const sumArray = numbersArray => numbersArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue);

const multiplyArray = numbersArray => numbersArray.reduce(
    (accumulator, currentValue) => accumulator * currentValue);

// Code that uses the funtions "sumArray" and "multiplyArray":
let array = [1, 2, 3, 4];
array.length > 0 ?
    console.log(`\nFor the array: [${array}], the sum of its elements is ${sumArray(array)}, and ` +
        `the multiplication of its elements is ${multiplyArray(array)}.`) :
    console.log("\nThe array provided is empty. No sum or multiplication of its elements can be " +
        "performed.");

// *************************************************************************************************

/**
 * 7. Write a function findLongestWord that takes an array of words and returns the length of the 
 * longest one.
 */

const findLongestWord = wordsArray => wordsArray.reduce(
    (accumulator, currentValue) => Math.max(accumulator, currentValue.length), wordsArray[0].length);

// Code that uses the funtion "findLongestWord":
let wordsArray = ["apple", "banana", "cucumber", "pineapple", "onion"];
wordsArray.length > 0 ?
    console.log(`\nThe length of the longest word in [${wordsArray}] is ${findLongestWord(wordsArray)}.`) :
    console.log("\nThe array provided is empty.");

// *************************************************************************************************

/**
 * 8. Write a function filterLongWords that takes an array of words and a number i and returns the 
 * array of words that are longer than i characters long.
 */

const filterLongWords = (wordsArray, i) => wordsArray.reduce(
    (accumulator, currentValue) => (currentValue.length > i) ?
        accumulator.concat(currentValue) :
        accumulator, new Array());

// Code that uses the funtion "filterLongWords":
wordsArray = ["cat", "lion", "dolphin", "elephant", "dog"];
let i = 3;
console.log(`\nThe words with a length greater than ${i} in [${wordsArray}] are ` +
    `[${filterLongWords(wordsArray, i)}].`);