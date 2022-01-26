function conflict(r, c) {
    for (let i = 0; i < n; i++) {
        if (arr[r][i]) return true;
    }
    for (let i = 0; i < n; i++) {
        if (arr[i][c]) return true;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i + j == r + c && arr[i][j]) return true;
            if (i - j == r - c && arr[i][j]) return true;
        }
    }
    return false;
}

function solve(num) {
    if (num == 0) return true;
    for (let i = 0; i < n; i++) {
        if (conflict(i, j)) continue;
        arr[i][j] = true;
        if (solve(num - 1)) return true;
        arr[i][j] = false;
    }
    return false;
}

function runProgram(input) {
    input = input.trim().split("\n");
    var line = 0;
    var arr = [];
    for (let i = 0; i < input.length; i++) {
        arr.push(input[i].trim().split(" "));
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`0 4 0 0 0 0 1 7 9 
    0 0 2 0 0 8 0 5 4 
    0 0 6 0 0 5 0 0 8 
    0 8 0 0 7 0 9 1 0 
    0 5 0 0 9 0 0 3 0 
    0 1 9 0 6 0 0 4 0 
    3 0 0 4 0 0 7 0 0 
    5 7 0 1 0 0 2 0 0 
    9 2 8 0 0 0 0 6 0`);
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
