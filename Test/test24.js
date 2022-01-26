function danceNight(boysArray, girlsArray) {
    boysArray.sort((a, b) => a - b);
    girlsArray.sort((a, b) => a - b);

    // let flag = true;
    // for (let i = 0; i < boysArray.length; i++) {
    //     if (!(boysArray[i] > girlsArray[i])) {
    //         flag = false;
    //         break;
    //     }
    // }

    // console.log(boysArray);
    // console.log(girlsArray);
    let girlsPointer = 0;
    let boysPointer = 0;
    let count = 0;
    while (
        !(boysPointer >= boysArray.length) &&
        !(girlsPointer >= girlsArray.length)
    ) {
        if (boysArray[boysPointer] > girlsArray[girlsPointer]) {
            girlsPointer++;
            boysPointer++;
            count++;
        } else if (boysArray[boysPointer] < girlsArray[girlsPointer]) {
            girlsPointer++;
        } else if (boysArray[boysPointer] === girlsArray[girlsPointer]) {
            girlsPointer++;
        }
    }

    let min = Math.min(boysArray.length, girlsArray.length);
    // console.log(min);
    // console.log(count);

    if (count === min) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var line = 0;
    var testCases = +input[0];
    for (let i = 0; i < testCases; i++) {
        var [boysArraySize, girlsArraySize] = input[++line]
            .trim()
            .split(" ")
            .map(Number);
        var boysArray = input[++line].trim().split(" ").map(Number);
        var girlsArray = input[++line].trim().split(" ").map(Number);
        danceNight(boysArray, girlsArray);
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`1
    4 5
    2 5 6 8
    3 8 5 1 7`);
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
