/* 
    Binary Search - Iterative -2:27:16
    Description

    Given n distinct numbers, implement iterative binary search to check the presence of target number k.

    In case k is present among those n numbers, print 1

    Else print -1


    Input
    Input Format :

    First line of input contains n and k separated by a space

    Next line contains n space separated integers

    Constraints :

    n<1000




    Output
    In case k is present among those n numbers, print 1

    Else print -1


    Sample Input 1 

    5 0
    2 -2 0 3 4
    Sample Output 1

    1
*/

function binarySearchIterative(arr, K) {
    let low = 0;
    let high = arr.length-1;
    arr.sort((a, b) => a - b);
    while (low <= high) {
        let mid = parseInt(low + (high-low)/2);
        if (arr[mid] === K) {
            return true;
        } else if (arr[mid] > K) {
            high = mid - 1;
        } else if (arr[mid] < K) {
            low = mid + 1;
        }
        // console.log(low+":"+high)
    }
    return false;
}

function runProgram(input) {
    input = input.trim().split("\n");
    var line = 0;
    var [size, K] = input[line].trim().split(" ").map(Number);
    var arr = input[++line].trim().split(" ").map(Number);
    if (binarySearchIterative(arr, K)) {
        console.log(1);
    } else {
        console.log(-1);
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`5 0
    2 -2 0 3 4`);
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
