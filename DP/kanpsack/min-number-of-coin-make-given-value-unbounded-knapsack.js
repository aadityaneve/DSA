let dp = [];
function minNumberOfCoin(coin, sum) {
    for (let i = 1; i < coin.length + 1; i++) {
        for (let j = 1; j < sum + 1; j++) {
            if (coin[i - 1] <= j) {
                dp[i][j] = Math.min(
                    1 + dp[i][j - coin[i - 1]],
                    dp[i - 1][j]
                );
            } else if (coin[i - 1] > j) {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    console.log(dp[coin.length][sum])
}

function runProgram(input) {
    input = input.trim().split('\n');
    let sum = +input[0];
    let coin = input[1].trim().split(' ').map(Number);

    /* DP initialization */
    for (let i = 0; i < coin.length + 1; i++) {
        dp[i] = [];
        for (let j = 0; j < sum + 1; j++) {
            if (j === 0) {
                dp[i][j] = 0;
            }
            if (i === 0) {
                dp[i][j] = Number.MAX_VALUE - 1;
            }
        }
    }

    /* DP second row initialization */
    for (let j = 0; j < sum + 1; j++ ) {
        if (j % coin[0] === 0) {
            dp[1][j] = j / coin[0];
        } else if (j % coin[0] != 0) {
            dp[1][j] = Number.MAX_VALUE - 1;
        }
    }

    minNumberOfCoin(coin, sum);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`11
    9 6 5 1`);
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
