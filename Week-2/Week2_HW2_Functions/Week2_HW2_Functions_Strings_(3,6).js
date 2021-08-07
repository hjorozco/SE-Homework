// 3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

/**
 * Function that checks if a character is a vowel.
 * @param {String} char A character (String of length 1)
 * @returns {Boolean}  true if the character is a vowel, false otherwise.
 */
const isCharacterAVowel = char => char.toLowerCase().charCodeAt(0) === 97 ||
    char.toLowerCase().charCodeAt(0) === 101 ||
    char.toLowerCase().charCodeAt(0) === 105 ||
    char.toLowerCase().charCodeAt(0) === 111 ||
    char.toLowerCase().charCodeAt(0) === 117 ? true : false;


// Code that uses "isCharacterAVowel" function
let char = "E";
let isVowel = isCharacterAVowel(char);
console.log(`\nIs the character "${char}" a vowel? ${isVowel}`);


// 6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

/**
 * Function that computes the reversal of a string.
 * @param {String} string A String to be reversed (i.e. "jag testar")
 * @returns {String} The reversed String. (i.e. "ratset gaj")
 */
const reverseString = string => string.split("").reverse().join(""); 

// Code that uses "reverseString" function.
let string = "jag testar";
let reversedString = reverseString(string);
console.log(`\nThe text "${string}" reversed is "${reversedString}".`);

