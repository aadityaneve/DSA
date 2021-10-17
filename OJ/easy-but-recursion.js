/* 
    Easy but recursion -2:24:30
    Description

    This is an easy question. You just have to find the sum of an array given the elements of the array.

    The only constraint is that you have to write a recursive code


    Input
    Input Format :

    There are several test cases within a test case.

    First line contains t which is the number of test cases

    First line of each test case contains n which is the number of integers

    Second line of each test case contains n space separated integers

    Constraints :

    n <= 100000

    arr[i] <= 10


    Output
    Output t lines where each line contains sum of all the elements in that test case


    Sample Input 1 

    3
    5
    6 3 8 2 -4
    5
    -10 -7 10 2 -2
    5
    -4 -5 6 -3 9
    Sample Output 1

    15
    -7
    3
*/


function easyButRecursion(arr, size) {

    var sum = 0;
    function getSum(arr, i) {

        if (i > size - 1) {
            return
        }
        sum += arr[i];

        getSum(arr, i + 1);
    }
    getSum(arr, 0);

    console.log(sum);
}

function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        var size = +input[++line];
        var arr = input[++line].trim().split(' ').map(Number);
        easyButRecursion(arr, size);
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`3
    5
    6 3 8 2 -4
    5
    -10 -7 10 2 -2
    5
    -4 -5 6 -3 9`);
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
    Easy but recursion
    Difficulty: Easy

    Prerequisite: Recursion

    Problem Statement:

    Given an array of elements, you need to write a program to find sum of all elements in an array using recursion

    Hint:

    None

    Short Explanation:

    None

    Detailed Explanation:

    If the array size is 0, then simply return 0
    other wise, take the sum of last element of array with the return value of function calling recursively by n-1 elements
    Pseudo code:

    // A[] : array of integers
    // N   : number of elements in the array
    function findSum(A[], N)
        {
            if (N <= 0)
                return 0;
            return (findSum(A, N - 1) + A[N - 1]);
        }
    Time Complexity:

    Since all the elements of array has to be accessed once so the time complexity will beO(n),wherenis number of elements in the array

    Space Complexity:

    For each and every recursive call is going to be present in the call stack of memory, so if you observe approximatelyncalls will be made during the execution of program, hence space complexity will beo(n).

    Alternate Solution:

    None
*/