let dp = [];
function uniqueWaysOfCoinChange(coin, sum) {
    for (let i = 1; i < coin.length + 1; i++) {
        for (let j = i - 1; j < sum + 1; j++) {
            if (coin[i - 1] <= j) {
                dp[i][j] = dp[i - 1][j - coin[i - 1]] + dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    // console.log('dp:', dp);
    console.log(dp[dp.length - 1][dp[dp.length - 1].length - 1]);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let [sum, size] = input[0].trim().split(' ').map(Number);
    let coin = input[1].trim().split(' ').map(Number);
    coin.sort((a, b) => a - b);
    dp = new Array(coin.length + 1).fill(new Array(sum + 1));

    for (let i = 0; i < coin.length + 1; i++) {
        for (let j = 0; j < sum + 1; j++) {
            if (i === 0) {
                dp[i][j] = 0;
            } else if (j === 0) {
                dp[i][j] = 1;
            } else {
                break;
            }
        }
    }
    console.log('dp:', dp);
    uniqueWaysOfCoinChange(coin, sum);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`5 3
    1 2 3`);
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
