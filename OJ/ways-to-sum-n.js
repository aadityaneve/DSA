/* 
    Ways to sum N Ended
    Description

    Given an integer N. In how many ways you can add numbers 1, 2, and, 5 such that the summation equals N. (Check sample input for more clarity)


    Input
    First line: Single integer denoting the value of T - the number of test cases.

    For each test case:

    First line: Single integer denoting the value of N.

    Constraints:

    1 <= T <= 100
    1<= N <= 30


    Output
    For each test case, print in a new line, a single integer denoting the required number of ways.


    Sample Input 1 

    1
    5
    Sample Output 1

    9
    Hint

    No of the ways for N=5 are:-

    1 + 1 + 1 + 1 + 1
    1 + 1 + 1 + 2
    1 + 1 + 2 + 1
    1 + 2 + 1 + 1
    2 + 1 + 1 + 1
    1 + 2 + 2
    2 + 1 + 2
    2 + 2 + 1
    5
*/

function waysToSumN(N) {
    function getWays(way) {
        if (way < 0) {
            return 0;
        }
        if (way == 0) {
            return 1;
        }

        return getWays(way - 5) + getWays(way - 2) + getWays(way - 1);
    }
    console.log(getWays(N));
}

function runProgram(input) {
    input = input.trim().split("\n");
    var line = 0;
    var testCases = input[line];
    for (let i = 0; i < testCases; i++) {
        var N = input[++line];
        waysToSumN(N);
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`1
    7`);
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
