function heightOfTrees(arr) {
    let cache = [];
    for (let i = 0; i < arr.length; i++) {
        cache[i] = 1;
    }

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                // cache[i] = cache[i] + 1;
                cache[i] = Math.max(cache[i], cache[j] + 1);
            }
        }
    }
    console.log(Math.max(...cache))
    // console.log(cache[cache.length - 1]);
    // 1 2 1 1 3
}

function runProgram(input) {
    input = input.trim().split("\n");
    let arr = input[1].trim().split(" ").map(Number);
    heightOfTrees(arr);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`9
    15 15 3 10 12 12 13 5 5 7`);
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
