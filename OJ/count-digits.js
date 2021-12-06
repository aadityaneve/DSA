function countDigits(arr) {
    let object = {};

    for (let i = 0; i < arr.length; i++) {
        if (object.hasOwnProperty(arr[i])) {
            let prevValue = object[arr[i]];
            object[arr[i]] = prevValue + 1;
        } else {
            object[arr[i]] = 1;
        }
    }
    console.log(Object.values(object).join(" "));
}

function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    countDigits(arr);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`10
  0 1 0 1 1 1 0 2 2 0 `);
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
