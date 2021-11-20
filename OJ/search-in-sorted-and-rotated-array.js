function searchInSortedAndRotatedArray(arr, K) {
    let index = -1;
    function getIndex(arr, low, high) {
        if (low > high) {
            return;
        } else {
            let mid = parseInt(low + (high - low) / 2);
            if (arr[mid] === K) {
                index = mid;
            }
            getIndex(arr, low, mid - 1);
            getIndex(arr, mid + 1, high);
        }
    }
    getIndex(arr, 0, arr.length);
    console.log(index);
}

function runProgram(input) {
    input = input.trim().split("\n");
    var [size, K] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    searchInSortedAndRotatedArray(arr, K);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`5 1
    3 4 5 1 2`);
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
