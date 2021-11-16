/* 
    Counting Occurences of Digits 1 Ended
    Description

    You are given a number of N digits, from 0 to 9.

    You need to print count of occurrences of each digits in ascending order.

    [Use Key-Value pair based data structure]


    Input
    First line contains T, no of test cases.

    First line of each test case contains N, total digits of number.

    Second line of each test case contains the number of N digits.

    Constraints

    1 <= T <= 10

    1 <= N <= 10^6


    Output
    For each test case, print count of occurrences of each digit in ascending order on new line.



    Sample Input 1 

    2
    5
    21321
    6
    235452
    Sample Output 1

    0 2 2 1 0 0 0 0 0 0 
    0 0 2 1 1 2 0 0 0 0
    Hint

    For test case 1

    Count of 0 is 0, 1 is 2, 2 is 2, 3 is 1, 4 is 0, 5 is 0, 6 is 0, 7 is 0, 8 is 0, 9 is 0.
*/

function countingOccurencesOfDigits1(arr, size) {
    var object = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
    };

    for (let i = 0; i < arr.length; i++) {
        if (object.hasOwnProperty(arr[i])) {
            let prevValue = object[arr[i]];
            object[arr[i]] = prevValue + 1;
        }
    }
    console.log(Object.values(object).join(" "));
}

function runProgram(input) {
    input = input.trim().split("\n");
    var line = 0;
    var testCases = input[line];
    for (let i = 0; i < testCases; i++) {
        var size = +input[++line];
        var arr = input[++line].trim().split("").map(Number);
        countingOccurencesOfDigits1(arr, size);
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`2
    5
    21321
    6
    235452`);
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
