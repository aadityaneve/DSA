function springBoard(matrix, row, col) {
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = Math.max(
                matrix[i][j] != undefined && matrix[i - 1][j - 1] != undefined
                    ? matrix[i][j] + matrix[i - 1][j - 1]
                    : 0,
                matrix[i][j] != undefined && matrix[i - 1][j] != undefined
                    ? matrix[i][j] + matrix[i - 1][j]
                    : 0,
                matrix[i][j] != undefined && matrix[i - 1][j + 1] != undefined
                    ? matrix[i][j] + matrix[i - 1][j + 1]
                    : 0
            );
        }
    }
    console.log(Math.max(...matrix[matrix.length - 1]));
}

function runProgram(input) {
    input = input.trim().split('\n');
    let testCases = +input[0];
    let line = 0;
    let matrix = [];
    for (let i = 0; i < testCases; i++) {
        matrix = [];
        var [row, col] = input[++line].trim().split(' ').map(Number);
        for (let j = 0; j < row; j++) {
            let arr = input[++line].trim().split(' ').map(Number);
            matrix.push(arr);
        }
        springBoard(matrix, row, col);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`3
    4 6
    10 10 2 0 20 4
    1 0 0 30 2 5
    0 10 4 0 2 0
    1 0 2 20 0 4
    4 5
    12 44 8 1 2
    1 4 5 2 3
    2 5 8 7 6
    2 5 8 9 6
    6 5
    3 1 7 4 2
    2 1 3 1 1
    1 2 2 1 8
    2 2 1 5 3
    2 1 4 4 4
    5 2 7 5 1`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding('ascii');
    let read = '';
    process.stdin.on('data', function (input) {
        read += input;
    });
    process.stdin.on('end', function () {
        read = read.replace(/\n$/, '');
        read = read.replace(/\n$/, '');
        runProgram(read);
    });
    process.on('SIGINT', function () {
        read = read.replace(/\n$/, '');
        runProgram(read);
        process.exit(0);
    });
}
