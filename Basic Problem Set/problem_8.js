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
var old_num = -1;
var flag = 0;

console.clear();
console.log("==========================================");
console.log("--- Guessing Game ---");
console.log("==========================================");
do {
    var user_num = parseInt(prompt("Guess The Number : "));
    if (left_tries >= 1) {
        left_tries--;
        if (user_num > rand_num) {
            console.log("\t\t\tToo Large.");
            if (old_num == user_num) {
                left_tries++;
            }
            console.log("Chances Left : " + left_tries);
        } else if (user_num < rand_num) {
            console.log("\t\t\tToo Small");
            if (old_num == user_num) {
                left_tries++;
            }
            console.log("Chances Left : " + left_tries);
        } else if (user_num === rand_num) {
            flag = 1;
        }
    } else {

        // break;
    }
    old_num = user_num;
    // console.log(old_num);

} while (user_num !== rand_num && left_tries != 0);

if (flag == 0) {
    console.log("==========================================");
    console.log("You Lost The Game!!");
    console.log("The Number Was " + rand_num);
} else {
    console.log(`You Guessed It Correctly!! The Number Is ${user_num}`);
}
console.log("==========================================");