/* 
    Z Traversal -6316:30:54
    Description

    Given a square matrix of size N x N. Print the Z traversal of the matrix. Refer the figure given below for better understanding.

    Image


    Input
    The first line of the input contains T, the number of test cases. The first line of each test case contains N, the dimension of the square matrix.

    Next N lines contains N space separated integers, denoting the values of the matrix.

    Constraints

    1 <= T <= 10

    1 <= N <= 500

    1 <= A[i][j] <= 1000


    Output
    For each test case, print the elements that occur in the Z traversal of the matrix, on a new line.


    Sample Input 1 

    1
    3
    1 2 3
    4 5 6
    7 8 9
    Sample Output 1

    1 2 3 5 7 8 9 
*/


function nTraversal(arr, size) {

    var left = 0, right = size - 1, top = 0, bottom = size - 1;
    var string = "";
    
    if(size == 1){
        console.log(arr[0].join(''));
    }else{
        for (let i = left; i <= right; i++) {
            string += arr[top][i]+" ";
        }
        top++;
    
        var j = right;
        for (let i = top; i < bottom; i++) {
            j--;
            string+=arr[i][j]+" ";
        }
    
        for(let i=left;i<=right;i++){
            string+=arr[bottom][i]+" ";
        }
    
        console.log(string);
    }
    
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
    runProgram(`4
    3
    1 2 3
    4 5 6
    7 8 9
    4
    1 2 3 4
    4 5 6 4
    7 8 9 4
    4 4 4 4
    2
    3 5
    6 8
    1
    5`);
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