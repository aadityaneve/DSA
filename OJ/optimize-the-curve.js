function optimizeTheCurve(A, B, C, K) {
    // let flag = false;
    // for (var i = 1; i < K; i++) {
    //     let ans = (A * (i ** 2)) + (B * i) + C;
    //     if (ans >= K) {
    //         flag = true;
    //         console.log(i+":"+ans)
    //         break;
    //     }
    // }

    let left = 0;
    let right = K;

    while (left < right) {
        let mid = parseInt(left + (right - left) / 2);
        let ans = A * mid ** 2 + B * mid + C;
        if (ans >= K) {
            right = mid;
        } else if (ans < K) {
            left = mid + 1;
        }
    }
    if(left > 0){
        console.log(left);
    }else {
        console.log(-1)
    }

    // if(flag){
    //     console.log(i);
    // }else{
    //     console.log(-1);
    // }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var testCases = +input[0];
    var line = 0;
    for (let i = 0; i < testCases; i++) {
        var [A, B, C, K] = input[++line].trim().split(" ").map(Number);
        optimizeTheCurve(A, B, C, K);
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`2
    3 2 4 15
    9 79 36 16`);
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
