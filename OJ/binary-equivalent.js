/* 
    Binary Equivalent - Recursive Ended
    Description

    Given an integer n, you need to find out its binary representation using recursion.

    Here multiple test cases exist and the expected time complexity is - O(t*logn) where is t is the number of test cases.


    Input
    The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

    The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) — the number.


    Output
    For each test case, print the answer: The binary representation of the integer.


    Sample Input 1 

    2
    15
    128
    Sample Output 1

    1111
    10000000
*/


function binaryEquivalent(num) {

    var string = "";
    function getBinary(num) {

        if (num == 0) {
            return;
        }

        getBinary(parseInt(num / 2));
        // console.log(num%2);
        string += num % 2;
    }
    getBinary(num)
    console.log(string);
}

function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        binaryEquivalent(+input[++line]);
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`1
    128`);
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
    Binary Equivalent - Recursive - Editorial
    Difficulty: Easy
    Prerequisite: Recursion
    Problem Statement:
    Given an integer n, you need to find out its binary representation using recursion.

    Here multiple test cases exist and the expected time complexity is - O(t*logn) where is t is the number of test cases.

    Hint:
    Simple straight forward implementation problem to get to know how to use recursion.

    Short Explanation:
    Simulate the manual process and try to get the recursion function out of it. The recurrence relation is explained below.

    Detailed Explanation:
    The manual process involves storing the remainders of the number when divided by 2 and then divide the number by 2 until it is no more divisible. For example, let's take the number 12

    12 % 2 -> 0 and 12 is divided by 2.
    6 % 2 -> 0 and 6 is divided by 2.
    3 % 2 -> 1 and 3 is divided by 2.
    1 % 2 -> 1 and the process halts.
    The answer would 1100 (bottom to top).

    So the recurrence relation would be to go to the bottom of the recurrence tree and then start printing the remainders as seen above and the base case would be when the number becomes 0 after getting divided by 2.

    The time complexity would be O(logn) since the number is getting divided by 2 during recursion.

    Time Complexity:
    O(log (n)) per testcase.

    Space Complexity:
    No extra space required for processing, therefore O(1) space per testcase.

    Alternate Solutions:
    There may exist various other forms of the recursive solution but the main thought process would be the same.
*/