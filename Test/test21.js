function everythingRelatedToBinarySearch(arr, K) {
    let low = 0;
    let high = arr.length - 1;
    let lowerBound = -1;
    let upperBound = -1;
    while (low <= high) {
        let mid = parseInt(low + (high - low) / 2);
        if (arr[mid] === K) {
            lowerBound = mid;
            high = mid - 1;
        } else if (arr[mid] > K) {
            high = mid - 1;
        } else if (arr[mid] < K) {
            low = mid + 1;
        }
    }

    low = 0;
    high = arr.length - 1;
    while (low <= high) {
        let mid = parseInt(low + (high - low) / 2);
        if (arr[mid] <= K) {
            upperBound = mid;
            low = mid + 1;
        } else if (arr[mid] > K) {
            high = mid - 1;
        }
    }
    console.log(lowerBound, upperBound, (upperBound - lowerBound)+1);
}

function runProgram(input) {
    input = input.trim().split("\n");
    let line = 0;
    let size = +input[line];
    let arr = input[++line].trim().split(" ").map(Number);
    let K = +input[++line];
    everythingRelatedToBinarySearch(arr, K);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`5
    1 2 3 4 5
    5`);
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
