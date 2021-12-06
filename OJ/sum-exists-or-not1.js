function sumExistsOrNot(arr, K) {
    let flag = false;

    function getSubset(arr, sum, curr) {
        if (curr === arr.length) {
            if (sum === K) {
                console.log("yes");
                flag = true;
                return;
            }
            return;
        }

        if (flag === false) {
            getSubset(arr, sum, curr + 1);
            getSubset(arr, (sum += arr[curr]), curr + 1);
        }
    }
    getSubset(arr, 0, 0);

    if (flag === false) {
        console.log("no");
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    let K = +input[2];
    sumExistsOrNot(arr, K);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`9
  1 2 3 4 5 6 7 8 9
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
