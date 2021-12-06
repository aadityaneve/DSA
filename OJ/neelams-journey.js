function neelamsJourney(arr) {
    let initialMoney = arr[0];
    let finalMoney = initialMoney;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= initialMoney) {
            finalMoney += initialMoney;
        } else if (arr[i] < initialMoney) {
            initialMoney = arr[i];
            finalMoney += initialMoney;
        }
    }

    console.log(finalMoney);
}

function runProgram(input) {
    input = input.trim().split("\n");
    var size = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    neelamsJourney(arr);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`5
    4 7 8 3 4`);
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
