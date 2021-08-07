/* Write a program that asks the user for their name and greets them with their name. */

"use strict";

const ps = require("../node_modules/prompt-sync");
const prompt = ps({ sigint: true });

/* const prompt = require("prompt-sync")({ sigint: true }); */

let name = prompt("Enter your name : ");
console.log(`Hello ${name}`);