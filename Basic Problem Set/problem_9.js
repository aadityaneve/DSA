/* Write a program that prints the next 20 leap years. */

var date = new Date();
var year = date.getFullYear();

console.clear();
for(let i=year;i<(year+20);i++){
    if(i%4==0 || i%400==0){
        console.log("Leap Year : "+i);
    }
}