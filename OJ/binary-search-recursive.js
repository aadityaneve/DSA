/* 
    Binary Search - Recursive -2:1:53
    Description

    Given n distinct numbers, implement a recursive binary search to check the presence of target number k.

    In case k is present among those n numbers, print 1

    Else print -1


    Input
    Input Format :

    First line of input contains n and k separated by a space

    Next line contains n space separated integers

    Constraints:

    n<1000


    Output
    In casekis present among those n numbers, print 1

    Else print -1


    Sample Input 1 

    5 0
    2 -2 0 3 4
    Sample Output 1

    1
*/

function binarySearchRecursive(arr, K) {
    arr.sort((a, b) => a - b);
    function search(K, low, high) {
        if (low > high) {
            return false;
        } else {
            let mid = parseInt(low + (high - low) / 2);
            // console.log(mid);
            if (arr[mid] === K) {
                return true;
            } else if (arr[mid] > K) {
                return search(K, low, mid - 1);
            } else if (arr[mid] < K) {
                return search(K, mid + 1, high);
            }
        }
    }
    if (search(K, 0, arr.length)) {
        console.log(1);
    } else {
        console.log(-1);
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var line = 0;
    var [size, K] = input[line].trim().split(" ").map(Number);
    var arr = input[++line].trim().split(" ").map(Number);
    binarySearchRecursive(arr, K);
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
