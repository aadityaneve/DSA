function evenCountReturns(arr) {
    let countArr = [];
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) {
            count++;
            countArr[i] = count;
        } else {
            countArr[i] = count;
        }
    }
    console.log(countArr.join(' '));

    /*
    let count = [];
    for (let i = 0; i < arr.length; i++) {
        let tempCount = 0;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] % 2 === 0) {
                tempCount++;
            }
        }
        count.push(tempCount);
    }
    console.log(count.join(' '));
    */
}

function runProgram(input) {
    let arr = input.trim().split('').map(Number);
    evenCountReturns(arr);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`574674546476`);
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
