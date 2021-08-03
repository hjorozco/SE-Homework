/*  Program that will:
1. Create an array of numbers.
2. Take an input from the user to look for in the array.
3. Find and display the total number of occurrences of the user input value in the array.
4. Display the positions in which they are found.*/ 

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 6, 5, 5, 4];
let positionsArray = [];
let numberOfOcurrences = 0;

let prompt = require('prompt-sync')();
console.log();
let n = Number(prompt("What number are you looking for?: "));
console.log();

// Search "n" by looping through "numbersArray"
for (let i = 0; i < numbersArray.length; i++) {
    // If "n" is found, increase "numberOfOcurrences" and push position to "positionsArray"
    if (n === numbersArray[i]) {
        numberOfOcurrences++;
        positionsArray.push(i+1);
    }
}

// Display the result of the search
console.log(`This is the array where you are searching: [${numbersArray}]`);
console.log(`The total number of ocurrences of ${n} on the array is: ${numberOfOcurrences}`);
if (numberOfOcurrences>0){
    console.log(`The positions on the array, where ${n} is located are: [${positionsArray}]`);
}