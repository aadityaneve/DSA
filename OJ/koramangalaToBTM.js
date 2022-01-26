function koramangalaToBTM(arr) {
    let dp = [];
    for (let i = 1; i < arr.length; i++) {
        for (j = 0; j < i; j++) {
            if (arr[i] + j >= i) {
                dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
    }
    console.log(dp)
}

function runProgram(input) {
    input = input.trim().split('\n');
    let arr = input[1].trim().split(' ').map(Number);
    koramangalaToBTM(arr);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`11
    1 3 5 8 9 2 6 7 6 8 9`);
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
