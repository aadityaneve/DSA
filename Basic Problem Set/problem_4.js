/* Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17 */

const ps = require("../node_modules/prompt-sync");
const prompt = ps({ sigint: true });

let num = prompt("Enter a number : ");

var sum=0;
for(let i=0;i<num;i++){
    if(i%3==0){
        sum+=i;
    }else if(i%5==0){
        sum+=i;
    }
}
console.log(sum);