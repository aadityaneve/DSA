/* Given an array of n elements, Insert a number to any random position in an array. */

const ps = require("../node_modules/prompt-sync");
const prompt = ps({ sigint: true });

var num = parseInt(prompt("Enter length of array : "));
var arr = [];

while (arr.length < num) {
    var r = Math.ceil(Math.random() * num);
    if (arr.indexOf(r) === -1){
        arr.push(r);
    }
    console.log(arr);
}

arr[9] = 90;

console.log(arr);