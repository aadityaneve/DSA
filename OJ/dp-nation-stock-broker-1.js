function dpNationStrockBroker(arr) {
    let minNumber = Math.min(...arr);
    let minNumberIndex = arr.indexOf(minNumber);
    let maxProfit = 0;
    for (let i = minNumberIndex; i < arr.length; i++) {
        if (arr[i] - minNumber > maxProfit) {
            maxProfit = arr[i] - minNumber;
        }
    }

    console.log(maxProfit)
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let size = +input[++lines];
        let arr = input[++lines].trim().split(' ').map(Number);
        dpNationStrockBroker(arr);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
  6
  7 1 5 3 6 4
  4
  4 3 2 1
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
