//  not working
// create a function for line no. 9 to 19

function getLowerBoundAndUpperBound(arr) {
    console.log(arr);
    let key = 1;
    let low = 0;
    let high = arr.length;
    while (low < high) {
        let mid = parseInt(low + (high - low) / 2);
        if (arr[mid] >= key) {
            high = mid;
        } else {
            low = mid + 1;
        }
        console.log(low + ":" + high);
    }
    console.log(high + ":" + low);
}

function runProgram(input) {
    var arr = input.trim().split(" ").map(Number);
    arr.sort((a, b) => a - b);
    getLowerBoundAndUpperBound(arr);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`1 5 7 7 9 11`);
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
