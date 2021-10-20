/* 
    Power Function - Recursive -0:42:39
    Description

    Given two integers a and b, we need to find the value of a^b recursively.

    Expected Time Complexity - O(logb).


    Input
    The first line of the input contains two integers a and b (1 ≤ a ≤ 10) and (0 ≤ b ≤ 9).


    Output
    For each test case, print the answer: The value of a^b.


    Sample Input 1 

    2 4
    Sample Output 1

    16
*/


function runProgram(input) {

    var [a, b] = input.trim().split(' ').map(Number);

    var ans = 1;
    function powerFunctionRecursive(a, b) {

        if (b == 0) {
            return 1;
        }else {
            return a * powerFunctionRecursive(a, b - 1);
        }
    }
    
    console.log(powerFunctionRecursive(a, b));
}
if (process.env.USERNAME === "aneve") {
    runProgram(`2 2`);
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