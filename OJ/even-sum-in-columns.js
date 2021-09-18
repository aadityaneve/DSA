/* 
    Even Sum in Columns -6317:40:37
    Description

    You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

    The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

    The 2D array is stored in a variable with the namearr

    For all columns, you have to print the sum of even elements present in the column

    For example, consider the value stored inN = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

    4  (Even numbers in the column are, [4]. Therefore, the sum becomes 4)
    10 (Even numbers in the row are, [2,8]. Therefore, the sum becomes 10) 
    6  (Even numbers in the row are, [6]. Therefore, the sum becomes 6)


    Input
    The first line of the input contains the value stored inNandM

    The nextNlines containMvalues each denoting the value stored inarr


    Output
    For each column, print the sum of even numbers present in the column, line by line

    Sample Input 1 

    3 3
    1 2 3
    4 5 6
    7 8 9
    Sample Output 1

    4
    10
    6
    Hint

    In the sample test case, the value stored inN = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

    4  (Even numbers in the column are, [4]. Therefore, the sum becomes 4)
    10 (Even numbers in the row are, [2,8]. Therefore, the sum becomes 10) 
    6  (Even numbers in the row are, [6]. Therefore, the sum becomes 6)
*/

function evenSumInColumns(arr, row, column) {
    // console.log(row, column);
    var sum = 0;
    for (let i = 0; i < column; i++) {
        sum = 0;
        for (let j = 0; j < row; j++) {
            // console.log(arr[j][i]);
            if (arr[j][i] % 2 == 0) {
                sum += arr[j][i];
            }
        }
        console.log(sum);
    }
}


function runProgram(input) {
    input = input.trim().split('\n');
    var [row, column] = input[0].trim().split(' ').map(Number);
    var line = 0;
    var arr = [];
    for (let i = 0; i < row; i++) {
        arr.push(input[++line].trim().split(' ').map(Number));
    }
    // console.log(arr);
    evenSumInColumns(arr, row, column);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`3 4
    1 2 3 4
    4 5 6 4
    7 8 9 4`);
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