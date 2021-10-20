/* 
    Description

    You are given a string, remove all the duplicates and print the unique string.


    Input
    Input Format

    The single line consists of string S.

    Constraints

    1<=Length of S <= 50


    Output
    Print string with no duplicate characters.


    Sample Input 1 

    aaaabbbbbcccccdddd
    Sample Output 1

    abcd
    Sample Input 2 

    my name is ankush
    Sample Output 2

    mynaeiskuh
    Hint

    Sample 1 Explanation

    S ="aaaabbbbbcccccdddd"

    here a, b, c and d present multiple times if more than one such occurrence is removed we will get a string with unique characters as "abcd"


*/


function runProgram(input) {

    var object = {};

    for (let i = 0; i < input.length; i++) {
        if(input[i] == " "){
            continue;
        }else{
            object[input[i]] = 1;
        }
    }
    console.log(Object.keys(object).join(''));

}
if (process.env.USERNAME === "aneve") {
    runProgram(`my name is ankush`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}