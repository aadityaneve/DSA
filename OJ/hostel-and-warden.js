function hostelAndWarden(positions, rooms) {
    let timeTaken = 0;
    positions.sort((a, b) => a - b);
    rooms.sort((a, b) => a - b);
    for (let i = 0; i < positions.length; i++) {
        if (Math.abs(positions[i] - rooms[i]) > timeTaken) {
            timeTaken = Math.abs(positions[i] - rooms[i]);
        }
    }
    console.log(timeTaken);
}

function runProgram(input) {
    input = input.trim().split("\n");
    var size = +input[0];
    var positions = input[1].trim().split(" ").map(Number);
    var rooms = input[2].trim().split(" ").map(Number);
    hostelAndWarden(positions, rooms);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`2
    -2 4
    -2 0 `);
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
