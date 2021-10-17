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











/* 
    Fibonacci - Recursive
    Difficulty: Easy

    Prerequisite: Recursion

    Problem Statement:

    Given an Integer n, you need to compute the nth fibonacci number using following reccurence relation

    F(n) = F(n-1) + F(n-2) ; n>1

    F(n) = 1 ; n==1

    F(n) = 0 ; n==0

    Hint:

    None

    Short Explanation:

    None

    Detailed Explanation:

    just check for the base case, if n==0 then simply return 0 or if n==1 then return 1
    other wise, take the sum of return values of functions which called with n-1 and n-2 recursively.
    Pseudo code:

    //n: integer
    function nthFibonocci(n)
        {
            if (n==0)
                return 0;
            if (n==1)
                            return 1;
            return nthFibonocci(n-1) + nthFibonocci(n-2)
        }
    Time Complexity:

    total 2^nfunction calls will be made, so at each and every call one addition is happening which is constant time. so the time complexity will beO(2^n)

    Space Complexity:

    Each and every function call one activation record is going to be created in stack, so here the space complexity willnot beO(2^n).

    actual the space complexity will be O(2^n)

    so while calculating space complexity of any recursive program, we should see at any point of time what will be the maximum size of stack, which is equal to the maximum depth of recursion tree. Hence space complexity isO(n)

    Alternate Solution:

    None
*/