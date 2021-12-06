function lifeOfCTO(arr) {
    let low = 0;
    let high = arr.length - 1;
    let bugIndex;
    while (low <= high) {
        let mid = parseInt(low + (high - low) / 2);
        if (arr[mid] === 1) {
            bugIndex = mid;
            high = mid - 1;
        } else if (arr[mid] > 1) {
            high = mid - 1;
        } else if (arr[mid] < 1) {
            low = mid + 1;
        }
    }
    if (bugIndex === undefined) {
        console.log(-1);
    } else {
        console.log(bugIndex);
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    var size = +input[0];
    var arr = input[1].trim().split(' ').map(Number);
    lifeOfCTO(arr);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`5
    0 0 0 0 0 `);
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
