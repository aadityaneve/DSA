let dp = [];
function lcsTopDownDp(x, y, n, m) {
    for (let i = 1; i < x.length + 1; i++) {
        for (let j = 1; j < y.length + 1; j++) {
            if (x[i - 1] === y[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }
    // console.log('dp:', dp);
    console.log(dp[n][m]);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let x = input[0].trim().split('');
    let y = input[1].trim().split('');

    for (let i = 0; i < x.length + 1; i++) {
        dp[i] = [];
        for (let j = 0; j < y.length + 1; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            }
        }
    }
    lcsTopDownDp(x, y, x.length, y.length);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`eziowiomkvrrdzx
    orugiebaolddavd`);
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
