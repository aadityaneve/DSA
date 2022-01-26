function partyOrNot(arr, F, R) {
    let friendCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= R) {
            R = R - arr[i];
            friendCount++;
        }
    }
    if (friendCount === F) {
        console.log("Party");
    } else {
        console.log("Sad");
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var [size, F, R] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    partyOrNot(arr, F, R);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`4 4 10
    2 2 5 1`);
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
