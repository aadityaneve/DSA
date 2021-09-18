/* 
    Circular Traversal -6317:5:33
    Description

    Given a square matrix, you have to find the reverse U traversal of the matrix. Refer the sample I/O for better understanding. Refer the given figure for better understanding.

    Note: No element should be visited more than once.

    Image


    Input
    The first line of the input contains T, the number of test cases.

    The next line contains N, the size of the square matrix.

    The next N lines contains N space separated integers each denoting the values of the matrix.

    Constraints

    1 <= T <= 10

    1 <= N <= 50

    1 <= A[i][j] <= 50


    Output
    For each test case, print the elements that lie on the reverse U traversal, on a single line, on a new line.


    Sample Input 1 

    1
    3
    1 2 3
    4 5 6
    7 8 9
    Sample Output 1

    7 4 1 2 3 6 9 8 
    Hint

    The elements that lie on the circular traversal of the given matrix are - 7,4,1,2,3,6,9,8
*/

function circularTraversal(arr, size) {

    var left = 0, right = size - 1, top = 0, bottom = size - 1;
    var string = "";

    for (let i = bottom; i >= top; i--) {
        string += arr[i][left] + " ";
    }
    left++;

    for (let i = left; i <= right; i++) {
        string += arr[top][i] + " ";
    }
    top++;

    for (let i = top; i <= bottom; i++) {
        string+=arr[i][right]+" ";
    }
    right--;

    for(let i=right;i>=left;i--){
        string+=arr[bottom][i]+" ";
    }

    console.log(string);
}


function runProgram(input) {
    input = input.trim().split('\n');
    var line = 0;
    var arr = [];

    for (let i = 0; i < +input[0]; i++) {
        var size = +input[++line];
        for (let j = 0; j < size; j++) {
            arr.push(input[++line].trim().split(' ').map(Number));
        }
        // console.log(arr, size);
        circularTraversal(arr, size);
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