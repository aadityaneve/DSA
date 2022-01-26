function loveOfSamosa(arr, K) {
    arr.sort((a, b) => a - b);
    let samosaCanEatCount = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= K) {
            K = K - arr[i];
            samosaCanEatCount++;
            // console.log(arr[i])
        }
    }
    console.log(samosaCanEatCount);
}

function runProgram(input) {
    input = input.trim().split("\n");
    var [size, K] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    loveOfSamosa(arr, K);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`4 10
    5 4 2 4`);
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
