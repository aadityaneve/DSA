/* Given an array of n elements, Find all even and odd number from an array. */

const ps = require("../node_modules/prompt-sync");
const prompt = ps({ sigint: true });

var arr = [];
for(let i=0;i<101;i++){
    arr[i] = (i+1);
}

var oddArr = [];
var evenArr = [];

for(let i=0;i<arr.length;i++){
    if(i%2==true){
        //console.log(i%2);
        evenArr.push(arr[i]);
    }else if(i%2==false){
        //console.log(i%2);
        oddArr.push(arr[i]);
    }
}

console.log("Odd Numbers : ",oddArr);
console.log("Even Numbers : ",evenArr);