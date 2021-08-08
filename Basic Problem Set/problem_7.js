/* Write a program that prints all prime numbers. (Note: if your programming language does not support arbitrary size numbers, 
    printing all primes up to the largest number you can easily represent is fine too.) */

const ps = require("../node_modules/prompt-sync");
const prompt = ps({ sigint: true });

var num = prompt("Enter a number : ");

for(let i=2;i<=num;i++){
    var count=0;
    for(let j=1;j<=num;j++){
        if(i%j==0){
            count++;
        }
    }
    if(count==2){
        console.log(i+" is Prime");
    }
}