/* Check Whether a number is armstrong or not. */
// Number that is equal to the sum of cubes of its digits

const ps = require("../node_modules/prompt-sync");
const prompt = ps({ sigint: true });

var num = parseInt(prompt("Enter a number : "));

var remainder = 0;
var cube = 0;
var armstrong = function(num){
    while(num>0){
        remainder = num % 10;
        cube+=(remainder*remainder*remainder);
        num = parseInt(num / 10);
    }
    return cube;
}

if(num === armstrong(num)){
    console.log(`${num} is Armstrong Number.`);
}else{
    console.log(`${num} is not a Armstrong Number.`);
}