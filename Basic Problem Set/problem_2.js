/* Modify the previous program such that only the users Alice and Bob are greeted with their names. */

const ps = require("../node_modules/prompt-sync");
const prompt = ps({ sigint: true });

let name = prompt("Enter your name : ");
console.log(`Hello ${name}`);

let name1 = "Alice";
let name2 = "Bob";
console.log(`Hello ${name1}`);
console.log(`Hello ${name2}`);