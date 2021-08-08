#### Week2_HW2_Functions ####
Per Scholas. Software Engineer program.  

**All functions on the solutions are one-line arrow functions (which means no curly brackets and** 
**no explicit use of the return keyword)**

Solution to the homework problems are grouped into 4 JavaScript files.
1. **Week2_HW2_Functions_(5).js** contains solution to problem 5, which deals with function arguments.
2. **Week2_HW2_Functions_Arrays_(4,7,8).js** contains solution to problems 4, 7 and 8, which deals 
with Arrays.
3. **Week2_HW2_Functions_Numbers_(1,2).js** contains solution to problems 1 and 2, which deals 
with Numbers.
4. **Week2_HW2_Functions_Strings_(3,6).js** contains solution to problems 3 and 6, which deals 
with Strings.

- - - -

*Detailed instructions for the exercises:*

Please write code that implements various functions, following the requirements in the list below:

1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns 
true if it is a vowel, false otherwise.
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) 
all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and 
multiplyArray([1,2,3,4]) should return 24.
5. Write a function that returns the number of arguments passed to the function when called.
6. Define a function reverseString that computes the reversal of a string. For example, 
reverseString("jag testar") should return the string "ratset gaj".
7. Write a function findLongestWord that takes an array of words and returns the length of the longest 
one.
8. Write a function filterLongWords that takes an array of words and a number i and returns the 
array of words that are longer than i characters long.
 

BONUS: 

Convert as many of the functions above into one-line arrow functions (which means no curly brackets 
and no explicit use of the return keyword)

Example:

Turn...

function sum(num1, num2) {
    return num1 + num2
}

Into...

const sum = (num1, num2) => num1 + num2
