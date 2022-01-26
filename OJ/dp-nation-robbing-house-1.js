/* 100% Working... */
let dp;
function dpNationRobbingHouse(arr) {
    dp[0] = arr[0];
    dp[1] = Math.max(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        dp[i] = Math.max(arr[i] + dp[i - 2], dp[i - 1]);
    }

    console.log(dp[dp.length - 1]);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let testCases = +input[0];
    let lines = 0;
    for (let i = 0; i < testCases; i++) {
        let size = +input[++lines];
        dp = new Array(size);
        let arr = input[++lines].trim().split(' ').map(Number);
        dpNationRobbingHouse(arr);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`3
2
1 100
3
2 100 99
4
100 1 1 100`);
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
