function semesterAttandance(arr, lines) {
    // dp

    let dp = [];

    dp[0] = arr[0];
    if (arr.length > 1) {
        dp[1] = Math.max(arr[1], arr[0]);
    }

    for (let i = 2; i < arr.length; i++) {
        dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1]);
    }
    // console.log(dp[dp.length - 1]);

    if (dp[dp.length - 1] != undefined) {
        console.log('Case ' + lines + ':' + ' ' + dp[dp.length - 1]);
    } else {
        console.log('Case ' + lines + ':' + ' ' + 0);
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    let line = 0;
    for (let i = 0; i < +input[0]; i++) {
        let size = +input[++lines];
        let arr = input[++lines].trim().split(' ').map(Number);
        line++;
        semesterAttandance(arr, line);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
  5
  1 2 3 4 5 6 7
  1
  10`);
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
