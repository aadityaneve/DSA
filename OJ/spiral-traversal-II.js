/* 
Spiral Traversal II (Rectangular Matrix) -6322:15:15
Description

You are given a matrix of size N x M.

Print the spiral traversal of the matrix.

Refer the image given below, for better understanding.

Screenshot (117).png


Input
The first line of the input contains T, the number of test cases.

The first line of each test case contains N and M, the number of rows and columns in the given matrix.

The next N lines contain M values each denoting the elements of the matrix.

Constraints

1 <= T <= 10

1 <= N, M <= 200

1 <= A[i][j] <= 200


Output
For each test case, print the spiral traversal of the matrix, on a single line, on a new line.


Sample Input 1 

2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
4 3
1 2 3
4 5 6
7 8 9
10 11 12
Sample Output 1

9 5 1 2 3 4 8 12 11 10 6 7 
10 7 4 1 2 3 6 9 12 11 8 5 
Sample Input 2 

1
4 3
4 5 6
3 12 7
2 11 8
1 10 9
Sample Output 2

1 2 3 4 5 6 7 8 9 10 11 12

Hint
The spiral traversal of the elements given in the matrix, is printed in the sample output.
*/


function spiralTraversalII(arr, rows, columns){

    var left = 0, right = columns-1; top = 0, bottom = rows-1;
    var count = 0;
    var newArr = [];

    while(count < (rows*columns)){
        for(let i=bottom;i>=top && count < (rows*columns);i--){
            count++;
            // console.log(arr[i][left]);
            newArr.push(arr[i][left])
        }
        left++;
    
        for(let i=left;i<=right && count < (rows*columns);i++){
            count++;
            // console.log(arr[top][i]);
            newArr.push(arr[top][i]);
        }
        top++;
    
        for(let i=top;i<=bottom && count < (rows*columns);i++){
            count++;
            // console.log(arr[i][right]);
            newArr.push(arr[i][right]);
        }
        right--;
    
        for(let i=right;i>=left && count < (rows*columns);i--){
            count++;
            // console.log(arr[bottom][i]);
            newArr.push(arr[bottom][i]);
        }
        bottom--;
    }    
    // console.log('---');
    console.log(newArr.join(' '));
}


function runProgram(input) {
    
    input = input.trim().split('\n');
    var line = 0;
    for(let i=0;i<+input[0];i++){
        var [rows, columns] = input[++line].trim().split(' ').map(Number);
        var arr = [];
        for(let i=0;i<rows;i++){
            arr.push(input[++line].trim().split(' ').map(Number));            
        }
        // console.log(row, column);
        // console.log(arr);
        spiralTraversalII(arr, rows, columns);        
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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