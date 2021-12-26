function longestCommonSubsequence(x, y, n, m) {
    // Base condition
    if (n === 0 || m === 0) {
        return 0;
    }

    // Choices
    if (x[n - 1] === y[m - 1]) {
        return 1 + longestCommonSubsequence(x, y, n - 1, m - 1);
    } else {
        return Math.max(
            longestCommonSubsequence(x, y, n, m - 1),
            longestCommonSubsequence(x, y, n - 1, m)
        );
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let x = input[++lines].trim().split('');
        let y = input[++lines].trim().split('');
        let ans = longestCommonSubsequence(x, y, x.length, y.length);
        console.log(ans);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`1
    eziowiomkvrrdzx
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
