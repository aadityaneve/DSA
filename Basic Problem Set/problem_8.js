/* 
    Write a guessing game where the user has to guess a secret number. 
    After every guess the program tells the user whether their number was too large or too small. 
    At the end the number of tries needed should be printed. 
    It counts only as one try if they input the same number multiple times consecutively.
*/

const ps = require("../node_modules/prompt-sync");
const prompt = ps({ sigint: true });

var rand_num = Math.ceil(Math.random() * 9);
var left_tries = 3;

console.clear();
console.log("=====================");
console.log("--- Guessing Game ---");
console.log("=====================");
do {
    var user_num = parseInt(prompt("Guess The Number : "));
    left_tries--;
    if (left_tries > 0) {
        if (user_num > rand_num) {
            console.log("Too Large.");
            console.log("Chances Left : "+left_tries);
        } else if (user_num < rand_num) {
            console.log("Too Small");
            console.log("Chances Left : "+left_tries);
        } else if (user_num === rand_num) {
            console.log(`You Guessed It Correctly!! The Number Is ${user_num}`);
        }
    } else {
        console.log("You Lost The Game!!");
        console.log("The Number Was " + rand_num);
        break;
    }

} while (user_num !== rand_num);
console.log("=====================");