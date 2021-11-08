/* 
    Opp Quick Sort Ended
    Description

    Given a list of n integers. Write a program for quick sort algorithm such that it reverses the list in descending order.  You must not write any other sorting algorithm



    Input
    First line contains n which is the number of elements present in the array

    Second line contains n space-separated integers


    Output
    Output the elements present in the array sorted in descending order



    Sample Input 1 

    5
    2 3 1 4 5
    Sample Output 1

    5 4 3 2 1
*/

function merge(left, right) {
    let arr = [];

    while (left.length && right.length) {
        if (left[0] > right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    return [...arr, ...left, ...right];
}

function mergeSort(arr) {
    let halfArrLength = arr.length / 2;

    if (arr.length < 2) {
        return arr;
    }

    let left = arr.splice(0, halfArrLength);
    return merge(mergeSort(left), mergeSort(arr));
}

function runProgram(input) {
    input = input.trim().split("\n");
    var size = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    console.log(mergeSort(arr).join(" "));
}
if (process.env.USERNAME === "aneve") {
    runProgram(`5
    2 3 1 4 5`);
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
