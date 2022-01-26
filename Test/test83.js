function arrayToString(arr) {
    let string = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            string += '0';
        } else {
            string += arr[i];
        }
    }
    console.log(string);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let size = +input[0];
    let arr = input[1].trim().split(' ').map(Number);
    arrayToString(arr);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`5
  2 -4 6 8 -9`);
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
