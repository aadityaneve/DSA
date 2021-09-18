/* 
    Odd Sum in Rows -6317:18:29
    Description

    You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

    The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

    The 2D array is stored in a variable with the namearr

    For all rows, you have to print the sum of odd elements present in the row

    For example, consider the value stored inN = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

    4  (Odd numbers in the row are, [1,3]. Therefore, the sum becomes 4)
    5  (Odd numbers in the row are, [5]. Therefore, the sum becomes 5) 
    16 (Odd numbers in the row are, [7,9]. Therefore, the sum becomes 16)


    Input
    The first line of the input contains the value stored inNandM

    The nextNlines containMvalues each denoting the value stored inarr


    Output
    For each row, print the sum of even numbers present in the row, line by line

    Sample Input 1 

    3 3
    1 2 3
    4 5 6
    7 8 9
    Sample Output 1

    4
    5
    16
    Hint

    In the sample test case, the value stored inN = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

    4  (Odd numbers in the row are, [1,3]. Therefore, the sum becomes 4)
    5  (Odd numbers in the row are, [5]. Therefore, the sum becomes 5) 
    16 (Odd numbers in the row are, [7,9]. Therefore, the sum becomes 16)
*/


function oddSumInRows(arr, row, column) {
    var sum = 0;
    for (let i = 0; i < row; i++) {
        sum = 0;
        for (let j = 0; j < column; j++) {
            if (arr[i][j] % 2 != 0) {
                sum += arr[i][j];
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
    oddSumInRows(arr, row, column);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`3 3
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