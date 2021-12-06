function manageForumMallParking(K, arrivalTime, departureTime) {
    let parking = 0;
    for (let i = 0; i < arrivalTime.length; i++) {
        if (!(departureTime[i] <= arrivalTime[i + 1])) {
            parking++;
        }
    }
    // console.log(parking)
    if (parking <= K) {
        console.log("Possible");
    } else {
        console.log("Not Possible");
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var K = +input[0];
    var arrivalTime = input[1].trim().split(" ").map(Number);
    var departureTime = input[2].trim().split(" ").map(Number);
    manageForumMallParking(K, arrivalTime, departureTime);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`5
    1 2 3 5 4
    6 6 6 6 5`);
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
