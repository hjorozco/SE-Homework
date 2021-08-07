// 3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isCharacterAVowel = char => char.toLowerCase().charCodeAt(0) === 97 ||
    char.toLowerCase().charCodeAt(0) === 101 ||
    char.toLowerCase().charCodeAt(0) === 105 ||
    char.toLowerCase().charCodeAt(0) === 111 ||
    char.toLowerCase().charCodeAt(0) === 117 ? true : false;


// Code that uses "isCharacterAVowel" function
let char = "E";
console.log(`\nIs the character "${char}" a vowel? ${isCharacterAVowel(char)}`);


// 6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = string => string.split("").reverse().join(""); 

// Code that uses "reverseString" function.
let string = "jag testar";
console.log(`\nThe text "${string}" reversed is "${reverseString(string)}".`);

