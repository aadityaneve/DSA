function runProgram(input) {
    input = input.trim().split('\n');
    let testCases = +input[0];
    let lines = 0;
    for (let i = 0; i < testCases; i++) {
        let number = +input[++lines];

        let flag = true;

        if (number < 0) {
            flag = false;
        } else {
            while (number > 1) {
                if (number % 2 != 0) {
                    // console.log('False');
                    flag = false;
                    break;
                }
                number = number / 2;
            }
        }

        if (flag) {
            console.log('True');
        } else {
            console.log('False');
        }
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`7
    -6155
    8
    8449
    524288
    -14965
    -128
    12524`);
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
