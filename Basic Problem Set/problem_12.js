/* Check Whether a number is palindrome or not. */
// The number that remains the same when reversed

const ps = require("../node_modules/prompt-sync");
const prompt = ps({ sigint: true });

var num = parseInt(prompt("Enter a number : "));
var reverse_num = 0;

var reverse = function (num) {
    var remainder = 0;
    while (num > 0) {
        remainder = num % 10;
        reverse_num = (reverse_num * 10) + remainder;
        num = parseInt(num / 10);
    }
    return reverse_num;
}

if (num === reverse(num)) {
    console.log(`${num} is palindrome`);
} else {
    console.log(`${num} is not palindrome`);
}
