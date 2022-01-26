function ashAndHisRedumption(ash, gary) {
    let flag = true;
    for (let i = 0; i < ash.length; i++) {
        if (ash[i] <= gary[i]) {
            flag = false;
        }
    }
    if (flag) {
        console.log('Ash Finally Wins');
    } else {
        console.log('Train Hard Again');
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let line = 0;
    for (let i = 0; i < +input[0]; i++) {
        let size = +input[++line].trim();
        let ash = input[++line].trim().split(' ').map(Number);
        ash.sort((a, b) => a - b);
        let gary = input[++line].trim().split(' ').map(Number);
        gary.sort((a, b) => a - b);
        ashAndHisRedumption(ash, gary);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
    3
    12 3 4
    5 4 1
    2
    1 5
    1 4`);
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
