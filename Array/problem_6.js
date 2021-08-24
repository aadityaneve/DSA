/* Given an array of n elements, Find all prime number from an array. */

const ps = require("../node_modules/prompt-sync");
const prompt = ps({ sigint: true });
var date = new Date();

var arr = [];
for(let i=0;i<101;i++){
    arr[i] = (i+1);
}


//console.log(date.getSeconds()+" : "+date.getMilliseconds());
console.time("Execution Time");
var count = 0;
for(let i=0;i<arr.length;i++){
    count=0;
    for(let j=1;j<=arr[i];j++){
        if(arr[i]%j==0){
            count++;
            //console.log(arr[i]);
        }
    }
    if(count==2){
        console.log("Its a prime number : ",arr[i]);
    }
}
console.timeEnd("Execution Time");
//console.log(date.getSeconds()+" : "+date.getMilliseconds());