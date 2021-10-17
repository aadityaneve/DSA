/* 
    Factorial-Recursion Ended
    Description

    The factorial of a positive integer N is the product of all positive integers less than or equal to n:

    Given a number N your task is to write a program that calculates factorial of N


    Input
    Input Format

    First and the only line contains N



    Constraints

    N<15


    Output
    Output the factorial value of N


    Sample Input 1 

    5
    Sample Output 1

    120
    Hint

    Sample Explanation

    Factorial of 5 = 5*4*3*2*1 = 120
*/


function factorialRecursion(number) {

    function getFactorialOf(number){

        if(number == 0 || number == 1){
            return 1;
        }        

        return number * getFactorialOf(number - 1);
    }
    let factorial = getFactorialOf(number);
    console.log(factorial);
}

function runProgram(input) {

    factorialRecursion(+input)

}
if (process.env.USERNAME === "aneve") {
    runProgram(`1`);
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
    Factorial-Recursion
    Difficulty: Easy

    Prerequisite: Recursion

    Problem Statement:

    Given an Integer, you need to compute the factorial of given number using recursion

    Hint:

    None

    Short Explanation:

    None

    Detailed Explanation:

    if the given integer is 1, simply return 1
    other wise, take the product of n and return value recursion function by calling with n-1
    Pseudo code:

    //n: integer
    function factorial(n)
        {
            if (n==1)
                return 1;
            return n * factorial(n-1);
        }
    Time Complexity:

    totalnfunction calls will be made, so at each and every call one multiplication is happening which is constant time, so like totalnmultiplications will be made, so the time complexity will beo(n).

    Space Complexity:

    For each and every recursive call is going to be present in the call stack of memory, so if you observe approximatelyncalls will be made during the execution of program, hence space complexity will beo(n).

    Alternate Solution:

    None
*/