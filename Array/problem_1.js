/* Given an array of n elements, Find the sum of elements of an array */

const ps = require("../node_modules/prompt-sync");
const prompt = ps({ sigint: true });

var num = prompt("Enter a number : ");
var arr = [];
var sum = 0;

for (let i = 0; i < num; i++) {
    arr[i] = parseInt(prompt(`Enter ${i + 1} Element : `));
}

for (let i = 0; i < num; i++) {
    sum += arr[i];
}
console.log(sum);