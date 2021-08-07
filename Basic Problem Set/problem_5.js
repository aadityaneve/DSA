/* Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n. */

const ps = require("../node_modules/prompt-sync");
const prompt = ps({ sigint: true });

let num = prompt("Enter a number : ");
console.log(`\n1. Sum of numbers \n2. Product of numbers \n`);

let choice = prompt("Enter your choice : ");

switch(parseInt(choice, 10)){
    case 1: let sum=0;
            for(let i=0;i<=num;i++){
                sum+=i;
            }
            console.log(`Sum of numbers are : ${sum}`);
            break;
    case 2: let product=1;
            for(let i=1;i<=num;i++){
                product*=i;
            }
            console.log(`Product of numbers are : ${product}`);
            break;
    default:console.log("Please enter valid choice.");
            break;
}
