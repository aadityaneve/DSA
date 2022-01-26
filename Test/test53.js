function similarText(virat, rohit) {
    // console.log(virat, rohit);

    let count = 0;
    function getSubsequence(virat, newArr, curr) {
        console.log(newArr);
        // console.log(curr)

        if (rohit.indexOf(newArr[curr - 1]) >= 0) {
            // console.log(rohit.indexOf(newArr[curr - 1]));
            count++;
        }

        if (curr === virat.length) {
            return;
        }

        for (let i = curr; i < virat.length; i++) {
            newArr.push(virat[i]);
            getSubsequence(virat, newArr, i + 1);
            newArr.pop();
        }
    }
    getSubsequence(virat, [], 0);
    console.log(count);
}

function runProgram(input) {
    input = input.trim().split("\n");
    let virat = input[0].trim().split("");
    let rohit = input[1].trim().split("");
    virat.sort();
    rohit.sort();
    similarText(virat, rohit);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`AEDFHR
    ABCDGH`);
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
