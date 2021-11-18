/* 
    Lower bound in logn -0:55:58
    Description

    You are given n different numbers and an integer k. Write a program that finds lower bound of k in log(n) time complexity. Lower bound of a number k in a sorted list is the index of the first number which is same as k, in case the number is not present, print -1 (here the answer is given considering index to be starting from 0)

    NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION.

    WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TO TRY THE LOGN SOLUTION.

    USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, WOULD LEAD TO DISQUALIFICATION.


    Input
    Input Format

    First line contains N and K

    Second line contains N space separated sorted integers

    Constraints

    N<100


    Output
    Output lower bound


    Sample Input 1 

    5 2
    1 1 2 2 5
    Sample Output 1

    2
    Sample Input 2 

    5 3
    1 1 2 2 5
    Sample Output 2

    -1
*/

function lowerBoundInLogN(arr, K) {
    let index = 999999999999;
    function search(K, low, high) {
        if (low > high) {
            return;
        } else {
            let mid = parseInt(low + (high - low) / 2);
            // console.log(mid);
            if (arr[mid] === K) {
                if (mid < index) {
                    index = mid;
                }
            } 
            search(K, low, mid - 1);
            search(K, mid + 1, high);            
        }
    }
    search(K, 0, arr.length);
    if (index === 999999999999) {
        console.log(-1);
    } else {
        console.log(index);
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var [size, K] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    arr.sort((a, b) => a - b);
    lowerBoundInLogN(arr, K);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`10 3
    0 3 3 3 3 3 3 5 6 10`);
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
