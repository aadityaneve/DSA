/* 
    Count With Condition Ended
    Description

    Given an array of length N and an integer X, the task is to find the number of subsets with a sum equal to X.


    Input
    Input Format

    First line consists of N and X separated by space.

    Second line consists of N integers separated by spaces.

    Constraints

    1 <= N <= 20

    1 <= X <= 100


    Output
    Print the count in a single line.


    Sample Input 1 

    4 10
    1 2 3 4
    Sample Output 1

    1
    Hint

    Sample 1 Explanation

    The possible subsets with sum 10 are : [1,2,3,4]
*/

function countWithCondition(arr, K) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let newArr = [];
        for (let j = i; j < arr.length; j++) {
            newArr.push(arr[j]);
            // console.log(newArr.join(' '));
            let sum = 0;
            for (let x of newArr) {
                sum += x;
            }

            if (sum == K) {
                // console.log(newArr)
                count++;
            }
        }
    }
    // console.log("Count: ",count);
    console.log(count)
}

function runProgram(input) {
    input = input.trim().split("\n");
    var [size, K] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    countWithCondition(arr, K);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`4 10
    1 2 3 4`);
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
