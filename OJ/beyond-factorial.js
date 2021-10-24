/* 
    Beyond Factorial! Ended
    Description

    Given an integer N, you have to find the natural logarithmic value of the given integer's factorial i.e., ln(n!).

    You have to print the result up to 4 digits after the decimal point.

    Note:- You should not be supposed to do like " finding n! and apply direct inbuilt log on top that ". Instead of that, you can use Math.log() if applicable.Also, you can't use any direct formula or perform the task iteratively - Try achieving the output recursively.

    Java Script:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed




    Input
    Input format

    Single line consists an integer N

    Constraints

    1 <= N <= 50


    Output
    Print the result in a single line.


    Sample Input 1 

    3
    Sample Output 1

    1.7918`
    Hint

    ln(x ∙ y) = ln(x) + ln(y)
*/


function beyondFactorial(number) {

    function getLog(num) {

        if (num == 1) {
            return 0;
        }

        return Math.log(num) + getLog(num - 1);
    }
    console.log(getLog(number).toFixed(4));
}

function runProgram(input) {

    beyondFactorial(+input);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`15`);
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
    Beyond Factorial - Editorial
    Difficulty: Easy
    Prerequisite: Recursion
    Problem Statement:
    Given a numberN, find the value of ln(N!), wherelnrefers to log to the basee, or in other natural log

    Hint:
    ln(x*y) =ln(x) + ln(y)

    Short Explaination
    In this question, we are given a numberN, and we have to find the value ofln(N!). Now, since the problem statement says that we cannot apply the log function directly on the numberN!, we can make use of the propertyln(x*y) = ln(x) + ln(y). Therefore,ln(N!) = ln(1) + ln(2) + .... + ln(N). We can make a recursive function, such that the base case exists, when the value for which the log is to be found is1, asln(1) = 0

    Detailed Explanation:
    In this question, we are given a numberN, and we have to find the value ofln(N!).

    Now, since the problem statement says that we cannot apply the log function directly on the numberN!, we can make use of the propertyln(x*y) = ln(x) + ln(y).

    Therefore,ln(N!) = ln(1) + ln(2) + .... + ln(N). We can make a recursive function, such that the base case exists, when the value for which the log is to be found is1, asln(1) = 0

    For example, consider the following test case

    N = 4

    Therefore, we have to find the value of ln(N!) = ln(4!)

    Now, 4! = 1*2*3*4

    Therefore, ln(4!) = ln(1*2*3*4) and according the property of log, "ln(x*y) = ln(x) + ln(y)", 

    ln(1*2*3*4) = ln(1) + ln(2) + ln(3) + ln(4)

    Pseudo Code
    function beyondFactorial(N){
        if (n == 1) return 0;
        return Math.log(n) + beyondFactorial(n-1);
    }
    Alternate Solution:
    None
*/