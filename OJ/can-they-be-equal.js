function canTheyBeEqual(arr1, arr2) {
    arr1.sort();

    if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let testCases = +input[0];
    let lines = 0;
    for (let i = 0; i < testCases; i++) {
        let size = +input[++lines];
        let arr1 = input[++lines].trim().split('');
        let arr2 = input[++lines].trim().split('');
        canTheyBeEqual(arr1, arr2);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
  2
  ab
  ac
  3
  aba
  aab`);
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
