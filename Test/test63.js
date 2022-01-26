function qualifyingCandidates(scores, K) {
    let ranks = [];
    for (let i = 0; i < scores.length; i++) {
        if (i === 0) {
            ranks.push(1);
        } else if (scores[i] === scores[i - 1]) {
            ranks.push(ranks[i - 1]);
        } else {
            ranks.push(ranks.length + 1);
        }
    }

    let count = 0;
    for (let i = 0; i < ranks.length; i++) {
        if (ranks[i] < K) {
            count++;
        }
    }
    console.log(count);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let line = 0;
    for (let i = 0; i < +input[0]; i++) {
        let [size, K] = input[++line].trim().split(' ').map(Number);
        let scores = input[++line].trim().split(' ').map(Number);
        scores.sort((a, b) => b - a);
        qualifyingCandidates(scores, K);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`1
    5 3
    2 2 2 2 1`);
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
