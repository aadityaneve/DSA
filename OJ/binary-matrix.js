/* 
    Binary Matrix Ended
    Description

    You are given a binary matrix of size N x M. A binary matrix is one which consists of only 1's and 0's. You have to flip the matrix. Flipping the matrix means converting all 1's to 0's and all 0's to 1's.


    Input
    The first line of the input contains N and M, the dimensions of the matrix.

    The next N lines contain M space separated integers denoting the values of the matrix.

    Constraints

    1 <= N , M <= 100

    0 <= A[i][j] <= 1


    Output
    Print the matrix after flipping it, as shown in the sample test case.


    Sample Input 1 

    3 2
    1 0
    0 1
    1 1
    Sample Output 1

    0 1 
    1 0 
    0 0 
    Hint

    In the sample test case, we are given a 3 x 2 matrix. In the first row, the row is -> {1,0}. Flipping the 0's to 1's and 1's to 0's, the row becomes {0,1}. Similarly, the second row after flipping becomes

    {1,0}, and the third row after flipping becomes {0,0}.
*/

function binaryMatrix(matrix, row, column) {

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if(matrix[i][j] == 0){
                matrix[i][j] = 1;
            }else{
                matrix[i][j] = 0;
            }
        }
    }

    // console.log(matrix);

    for(let i = 0; i < row; i++){
        console.log(matrix[i].join(' '));
    }
}


function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    var matrix = [];
    var [row, column] = input[0].trim().split(' ');
    for (let i = 0; i < row; i++) {
        var arr = input[++line].trim().split(' ').map(Number);
        matrix.push(arr);
    }
    binaryMatrix(matrix, row, column);

}
if (process.env.USERNAME === "aneve") {
    runProgram(`3 2
    1 0
    0 1
    1 1`);
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