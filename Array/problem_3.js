/* Given an array of n elements, Delete a number from any given position in an array. */

const ps = require("../node_modules/prompt-sync");
const prompt = ps({ sigint: true });

var arr = [];

var position = prompt("Enter any given position : ");

for (let i = 0; i < 20; i++) {
    arr[i] = (i + 1);
}

function deleteFromArray(index) {
    delete arr[index-1];
    return arr;
}

console.log(`Before Delete : ${arr.join("__")}`);

console.log("After Delete : "+deleteFromArray(position).join("__"));