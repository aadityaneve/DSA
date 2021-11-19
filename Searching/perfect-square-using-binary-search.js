function perfectSquareUsingBinarySearch(number) {
    let low = 0;
    let high = parseInt(number / 2);
    while (low <= high) {
        let mid = parseInt(low + (high - low) / 2);
        // console.log(mid)
        if (mid ** 2 === number) {
            return [true, mid];
        } else if (mid ** 2 > number) {
            high = mid - 1;
        } else if (mid ** 2 < number) {
            low = mid + 1;
        }
    }
    return [false];
}

function runProgram(input) {
    var number = +input;
    var [doExist, result] = perfectSquareUsingBinarySearch(number);
    if (doExist) {
        console.log(`Perfect Square Exist : ${result}`);
    } else {
        console.log("Perfect Square Does Not Exist");
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`36`);
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
