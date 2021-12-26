let dp = [];
function zeroOneKnapsack(wt, val, w) {
    let n = wt.length;

    for (let i = 0; i < wt.length + 1; i++) {
        for (let j = 0; j < w + 1; j++) {
            if (wt[i - 1] <= j) {
                dp[i][j] = Math.max(
                    val[i - 1] + dp[i - 1][j - wt[i - 1]],
                    dp[i - 1][j]
                );
            } else if (wt[i - 1] > j) {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    console.log('dp:', dp);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let w = +input[0];
    let val = input[2].trim().split(' ').map(Number);
    let wt = input[3].trim().split(' ').map(Number);
    // dp = new Array(wt.length + 1).fill(new Array(w + 1));

    for (let i = 0; i < val.length + 1; i++) {
        dp[i] = [];
        for (let j = 0; j < w + 1; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            } else {
                break;
            }
        }
    }

    zeroOneKnapsack(wt, val, w);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`50 
    3
    60 100 120 
    10 20 30`);
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
