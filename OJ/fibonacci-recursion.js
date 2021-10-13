/* 
    Fibonacci-Recursion Ended
    Description

    In mathematics, the Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is

    F (0) = 0 , F (1) = 1

    and

    F (n) = F (n − 1) + F (n − 2) ,

    for n > 1.

    Your task is to write a program that calculates n-th fibonacci numbers when you are provided with n


    Input
    Input Format

    First line of input contains n

    Constraints

    n<35


    Output
    Output Format

    Output the n-th fibonacci number


    Sample Input 1 

    4
    Sample Output 1

    3
*/


function fibonacciRecursion(number) {

    function getFibonacci(number) {

        if (number == 0) {
            return 0;
        } else if (number == 1) {
            return 1;
        } else {
            return getFibonacci(number - 1) + getFibonacci(number - 2);
        }

    }
    console.log(getFibonacci(number));
}

function runProgram(input) {

    fibonacciRecursion(+input);

}
if (process.env.USERNAME === "aneve") {
    runProgram(`4`);
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