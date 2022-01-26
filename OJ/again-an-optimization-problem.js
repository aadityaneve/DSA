let dp = [];
function againAnOptimizationProblem(wt, val, w, n) {
    if (n === 0 || w === 0) {
        return 0;
    }

    if (dp[n][w] != -1) {
        return dp[n][w];
    }

    if (wt[n - 1] <= w) {
        return (dp[n][w] = Math.max(
            val[n - 1] +
                againAnOptimizationProblem(wt, val, w - wt[n - 1], n - 1),
            againAnOptimizationProblem(wt, val, w, n - 1)
        ));
    } else if (wt[n - 1] > w) {
        return (dp[n][w] = againAnOptimizationProblem(wt, val, w, n - 1));
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 1;
    let [w, totalQuery] = input[1].trim().split(' ');
    let wt = [];
    let val = [];
    for (let i = 0; i < totalQuery; i++) {
        let [weight, value] = input[++lines].trim().split(' ').map(Number);
        wt.push(weight);
        val.push(value);
    }

    // dp = new Array(wt.length + 1).fill(new Array(w + 1).fill(-1));

    /* initialization */
    for (let i = 0; i < wt.length + 1; i++) {
        dp[i] = [];
        for (let j = 0; j < w + 1; j++) {
            dp[i][j] = -1;
        }
    }
    // console.log('dp:', dp)

    console.log(againAnOptimizationProblem(wt, val, w, wt.length));
    // console.log(dp)
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`1
    4 5
    1 8
    2 4
    3 0
    2 5
    2 3`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding('ascii');
    let read = '';
    process.stdin.on('data', function (input) {
        read += input;
    });
    process.stdin.on('end', function () {
        read = read.replace(/\n$/, '');
        read = read.replace(/\n$/, '');
        runProgram(read);
    });
    process.on('SIGINT', function () {
        read = read.replace(/\n$/, '');
        runProgram(read);
        process.exit(0);
    });
}
