function runProgram(input) {
    input = input.trim().split('\n');

    let size = +input[0];
    let arr = input[1].trim().split(' ').map(Number);

    let obj = {};
    for (let i = 0; i < size; i++) {
        obj[arr[i]] = 1;
    }

    let sum = 0;
    for (let x in obj) {
        sum+=Number(x);
    }

    console.log(sum);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`5
    2 2 2 1 1`);
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
