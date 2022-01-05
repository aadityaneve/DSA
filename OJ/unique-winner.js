function uniqueWinner(arr) {
    let obj = {};
    for (let x in arr) {
        if (obj.hasOwnProperty(arr[x])) {
            obj[arr[x]] += 1;
        } else {
            obj[arr[x]] = 1;
        }
    }
    // console.log('obj:', obj)

    let ans = 9999999999;
    for (let x in obj) {
        if (obj[x] === 1 && +x < ans) {
            ans = +x;
        }
    }

    // console.log('ans:', ans)

    if (ans === 9999999999) {
        console.log(-1);
    } else {
        console.log(arr.indexOf(ans) + 1);
    }

    /* if (ans != 9999999999) {
        console.log(arr.indexOf(ans) + 1);
    } else {
        console.log(-1);
    } */
}

function runProgram(input) {
    input = input.trim().split('\n');
    let testCases = +input[0];
    let lines = 0;
    for (let i = 0; i < testCases; i++) {
        let size = +input[++lines];
        let arr = input[++lines].trim().split(' ').map(Number);
        uniqueWinner(arr);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`4
    2
    1 1
    3
    2 1 3
    4
    2 2 2 3
    1
    1`);
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
