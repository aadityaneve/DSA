function isItATriangle(arr) {
    if (
        arr[0] + arr[1] > arr[2] &&
        arr[1] + arr[2] > arr[0] &&
        arr[2] + arr[0] > arr[1]
    ) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let testCases = +input[0];
    let lines = 0;
    for (let i = 0; i < testCases; i++) {
        let arr = input[++lines].trim().split(' ').map(Number);
        isItATriangle(arr);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`4
  4 5 13
  7 1 8
  2 5 4
  2 2 2
  `);
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
