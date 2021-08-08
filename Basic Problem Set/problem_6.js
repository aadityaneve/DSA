/* Write a program that prints a multiplication table for numbers up to 12. */

const ps = require("../node_modules/prompt-sync");
const prompt = ps({ sigint: true });

var num = prompt("Enter a number : ");

console.log("============");
for(let i=1;i<=12;i++){
    console.log(`${num} * ${i} = ${num*i}`);
}
console.log("============");