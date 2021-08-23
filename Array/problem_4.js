/* Given an array of n elements, Search a number in an array */

const ps = require("../node_modules/prompt-sync");
const prompt = ps({ sigint: true });

var arr = [];
for(let i=0;i<20;i++){
    arr[i] = (i+1);
}

console.log(arr);

var number = prompt("Enter what you want to search : ")

for(let i=0;i<arr.length;i++){
    if(arr[i] == number){
        console.log("The number you entered found... : "+arr[i]);
        break;
    }
}