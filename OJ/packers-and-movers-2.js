function packersAndMovers2(arr, K) {
    let flag = false;

    function getWays(arr, K, count) {
        if (K == 0) {
            min = arr[K];
            max = count;
            flag = true;
            return;
        }

        if (K <= 0) {
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            getWays(arr, K-1, count + 1);
        }
    }
    getWays(arr, K, 0);

    if (flag == true) {
        console.log(min, max);
    } else {
        console.log("-1");
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var [K, size] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    packersAndMovers2(arr, K);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`39 3
    8 10 2`);
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
