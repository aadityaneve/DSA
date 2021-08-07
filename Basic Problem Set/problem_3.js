/* Write a program that asks the user for a number n and prints the sum of the numbers 1 to n */

const ps = require("../node_modules/prompt-sync");
const prompt = ps({sigint: true});

console.log("Program for printing sum of n numbers.");
let num = prompt("Enter a Number : ");

var sum = 0;
for(var i=1;i<=num;i++){
    sum+=i;
}

console.log(sum);