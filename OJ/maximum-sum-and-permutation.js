function maximumSumAndPermutation(arr) {
    arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i] * i;
    }
    console.log(sum)
}

function runProgram(input) {
    input = input.trim().split("\n");
    var size = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    maximumSumAndPermutation(arr);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`4
    2 5 1 6`);
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
