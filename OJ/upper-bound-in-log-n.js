function upperBoundInLogN(arr, K) {
    let index = 999999999999;
    function search(K, low, high) {
        if (low > high) {
            return;
        } else {
            let mid = parseInt(low + (high - low) / 2);
            // console.log(mid);
            if (arr[mid] > K) {
                if (mid < index) {
                    index = mid;
                }
            }
            search(K, low, mid - 1);
            search(K, mid + 1, high);
        }
    }
    search(K, 0, arr.length);
    if (index === 999999999999) {
        console.log(-1);
    } else {
        console.log(index);
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var [size, K] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    arr.sort((a, b) => a - b);
    upperBoundInLogN(arr, K);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`10 4
    0 2 4 4 5 5 7 7 9 10`);
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
