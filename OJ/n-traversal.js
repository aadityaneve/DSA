/* 
    N traversal -6316:44:1
    Description

    You are given a matrix of size n x n. Find theNtraversal of the matrix. Refer the following figure for better understanding.

    Image


    Input
    The first line contains T, the number of test cases. The first line of each test case contains N, the size of the square matrix.

    Next N lines contain N space separated integers, denoting the values of the matrix.



    Constraints

    1 <= T <= 10

    1 <= N <= 500

    1 <= A[i][j] <= 1000


    Output
    For each test case, print the N traversal of the matrix on a single line, on a new line.


    Sample Input 1 

    1
    3
    1 2 3
    4 5 6
    7 8 9
    Sample Output 1

    7 4 1 5 9 6 3 
*/

function nTraversal(arr, size) {

    var left = 0, right = size - 1, top = 0, bottom = size - 1;
    var string = "";

    for (let i = bottom; i >= top; i--) {
        string += arr[i][left]+" ";
    }
    left++;

    for (let i = left; i <= right; i++) {
        string += arr[i][i]+" ";
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
        string += arr[i][right]+" ";
    }

    console.log(string);
}

function runProgram(input) {
    input = input.trim().split('\n');
    var line = 0;
    var arr = [];
    for (let i = 0; i < +input[0]; i++) {
        var size = +input[++line].trim();
        for (let j = 0; j < size; j++) {
            arr.push(input[++line].trim().split(' ').map(Number));
        }
        // console.log(arr, size);
        nTraversal(arr, size);
        arr = [];
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`2
    3
    1 2 3
    4 5 6
    7 8 9
    3
    1 2 3
    4 5 6
    7 8 9`);
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