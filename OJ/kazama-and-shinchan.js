function kazamaAndShinchan(arr, K) {
    let index = arr.indexOf(K);
    if (index !== -1) {
        console.log(index);
    } else {
        arr.push(K);
        arr.sort((a, b) => a - b);
        console.log(arr.indexOf(K));
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    let K = +input[2];
    kazamaAndShinchan(arr, K);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`4
    1 3 5 6
    2`);
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
