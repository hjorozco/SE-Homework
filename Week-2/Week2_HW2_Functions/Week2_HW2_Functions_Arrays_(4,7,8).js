// 4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, 
// sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

/**
 * Function that returns the sum of all the numbers in an array.
 * @param {Array} numbersArray An array of numbers. 
 * @returns {Number} The sum of all the numbers in the array. For example, sumArray([1,2,3,4]) should return 10.
 */
function sumArray(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }
    return sum;
}

/**
 * Function that returns the multiplication of all the numbers in an array.
 * @param {Array} numbersArray An array of numbers.
 * @returns {Number} The multiplication of all the numbers in the array. For example, multiplyArray([1,2,3,4]) should return 24.
 */
function multiplyArray(numbersArray) {
    let multiplication = 1;
    for (let i = 0; i < numbersArray.length; i++) {
        multiplication *= numbersArray[i];
    }
    return multiplication;
}

// Code that uses "sumArray" and "multiplyArray" functions.
let array = [1, 2, 3, 4];
let sum = sumArray(array);
let multiplication = multiplyArray(array);
console.log(`\nThe array of numbers is [${array}]. The sum of its elements is ${sum}, and the multiplication of its elements is ${multiplication}.`)

// **************************************************************************************************************************

// 7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.

/**
 * Function that returns the length of the longest word in an array.
 * @param {Array} wordsArray An array of words (Strings).
 * @returns {Number} The length of the longest word (String) in the array. -1 if the array is empty.
 */
function findLongestWord(wordsArray) {
    if (wordsArray.length === 0) {
        return -1;
    } else if (wordsArray.length === 1) {
        return wordsArray[0].length;
    } else {
        // Compares the length of the first element with the length of the second, then the greater of those two lengths 
        // with the length of the third element, and so on until the end of the array.
        let longestLength = wordsArray[0].length;
        for (let i = 1; i < wordsArray.length; i++) {
            if (wordsArray[i].length > longestLength) {
                longestLength = wordsArray[i].length;
            }
        }
        return longestLength;
    }
}

// Code that uses "findLongestWord" function.
let wordsArray = ["apple", "banana", "cucumber", "pineapple", "onion"];
let longestLength = findLongestWord(wordsArray);
if (longestLength < 0) {
    console.log("\nThe array is empty.");
} else {
    console.log(`\nThe length of the longest word in [${wordsArray}] is ${longestLength}.`);
}

// **************************************************************************************************************************

// 8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.

/**
 * Function that selects words with a length greater than a given number in an array.
 * @param {Array} wordsArray An array of words (Strings) 
 * @param {Number} i The number that will filter the words. 
 * @returns {Array} Array of words (Strings) with a length greater that "i" 
 */
function filterLongWords(wordsArray, i) {
    let wordsLonger = [];
    for (let j = 0; j < wordsArray.length; j++) {
        if (wordsArray[j].length > i) {
            wordsLonger.push(wordsArray[j]);
        }
    }
    return wordsLonger;
}

// Code that uses "filterLongWords" function.
wordsArray = ["apple", "banana", "cucumber", "pineapple", "onion"];
let i = 6;
let longWords = filterLongWords(wordsArray, i);
console.log(`\nThe words with a length greater than ${i} in [${wordsArray}] are [${longWords}].`);