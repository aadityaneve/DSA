function arraySumMaximization(arr) {
    let sum = 0;
    let finalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        // console.log('I:', i);
        sum = 0;
        for (let j = 0; j < arr.length; j++) {
            // if (j === i) continue;
            if (arr[j] >= arr[i]) {
                sum += arr[i];
            } else if (arr[j] < arr[i]) {
                sum -= arr[j];
            }
        }
        // console.log('sum:', sum);

        if (sum > finalSum) {
            finalSum = sum;
        }
    }
    sum = 0;

    console.log(finalSum);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let testCases = +input[0];
    let line = 0;
    for (let i = 0; i < testCases; i++) {
        let size = +input[++line];
        let arr = input[++line].trim().split(' ').map(Number);
        arraySumMaximization(arr);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
    3
    2 3 1
    5
    1 6 7 1 5`);
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
