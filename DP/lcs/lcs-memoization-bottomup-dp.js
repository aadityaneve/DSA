let dp;
function lcsMemoization(x, y, n, m) {
    // Base Condition
    if (n === 0 || m === 0) {
        return 0;
    }

    if (dp[n][m] !== -1) {
        return dp[n-1][m-1];
    }

    // Choices
    if (x[n - 1] === y[m - 1]) {
        return (dp[n][m] = 1 + lcsMemoization(x, y, n - 1, m - 1));
    } else {
        return (dp[n][m] = Math.max(
            lcsMemoization(x, y, n, m - 1),
            lcsMemoization(x, y, n - 1, m)
        ));
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let x = input[0].trim().split('');
    let y = input[1].trim().split('');

    dp = new Array(x.length + 1).fill(new Array(y.length + 1).fill(-1));

    let ans = lcsMemoization(x, y, x.length, y.length);
    console.log(ans);
    // console.log('dp:', dp);
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
