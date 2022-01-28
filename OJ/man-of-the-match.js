function manOfTheMatch(runs, overs) {
    // true: villiers, false: virat
    let flag = true;
    let villersRuns = 0;
    let viratRuns = 0;
    let ballCount = 0;
    for (let i = 0; i < runs.length; i++) {
        ballCount++;
        if (flag) {
            villersRuns += runs[i];
            // console.log('villersRuns:', villersRuns)
            if (runs[i] === 1 || runs[i] === 3) {
                flag = !flag;
            }
        } else {
            viratRuns += runs[i];
            // console.log('viratRuns:', viratRuns)
            if (runs[i] === 1 || runs[i] === 3) {
                flag = !flag;
            }
        }
        if (ballCount % 6 === 0) {
            flag = !flag;
        }
    }
    /* console.log('villersRuns:', villersRuns);
    console.log('viratRuns:', viratRuns); */
    if (villersRuns === viratRuns) {
        console.log('Tie');
    } else if (villersRuns > viratRuns) {
        console.log('AB de Villiers');
    } else {
        console.log('Virat Kohli');
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let overs = +input[++lines];
        let runs = input[++lines].trim().split(' ').map(Number);
        manOfTheMatch(runs, overs);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`3
    2
    1 2 0 0 1 1 6 6 4 1 6 1
    3
    0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
    1
    0 1 0 1 0 0`);
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
