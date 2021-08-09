/* Write a program to reverse the given number. */

const ps = require("../node_modules/prompt-sync");
const prompt = ps({ sigint: true });

var num = prompt("Enter a number : ");
var reverse_num = 0
function reverse(num){
    while(num>0){
        let remainder = num % 10;
        reverse_num = (reverse_num*10)+remainder;
        num = parseInt(num / 10);
    }
    return reverse_num;
}

console.log(reverse(num));