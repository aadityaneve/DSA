/* Write a program to swap two numbers. */

const ps = require("../node_modules/prompt-sync");
const prompt = ps({sigint:true});

var num1 = prompt("Enter 1st number : ");
var num2 = prompt("Enter 2nd number : ");

var temp = num1;
    num1 = num2;
    num2 = temp;

console.log(`Swaped Numbers Are :: Num-1 : ${num1}, Num-2 : ${num2}`);
