var board = new Array(10);
for (let i = 0; i < 10; i++) {
    board[i] = new Array(10);
    for (let j = 0; j < 10; j++) {
        board[i][j] = 0;
    }
}
// console.log(board[10][10]);
// console.log(board);
function followTheKnight(row, col, X) {
    console.clear();

    function numberOfBlocks(steps, i, j) {

        if (i < 0 || i > 9 || j < 0 || j > 9) {
            return;
        }

        // Base Case
        if (steps == 0) {
            board[i][j] = 1;
            return;
        }

        numberOfBlocks(steps - 1, i - 2, j + 1);
        numberOfBlocks(steps - 1, i - 2, j - 1);
        numberOfBlocks(steps - 1, i - 1, j + 2);
        numberOfBlocks(steps - 1, i - 1, j - 2);
        numberOfBlocks(steps - 1, i + 2, j + 1);
        numberOfBlocks(steps - 1, i + 2, j - 1);
        numberOfBlocks(steps - 1, i + 1, j - 2);
        numberOfBlocks(steps - 1, i + 1, j + 2);
    }
    numberOfBlocks(X, row, col);

    // console.log(board);

    var count = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (board[i][j] == 1) {
                count++;
            }
        }
    }

    console.log(count);
}

function runProgram(input) {

    var [row, col, X] = input.trim().split(' ').map(Number);
    followTheKnight(row-1, col-1, X);

};
if (process.env.USERNAME === "aneve") {
    runProgram(`3 3 1`);
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