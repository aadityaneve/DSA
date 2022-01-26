function dpNationIsItaSubsequence(arr1, arr2) {
    let flag = true;
    let prevIndex = 0;
    let nextIndex = 0;
    for (let i = 0; i < arr1.length; i++) {
        nextIndex = arr2.indexOf(arr1[i], prevIndex);
        if (nextIndex >= prevIndex) {
            prevIndex = nextIndex;
        } else {
            flag = false;
            break;
        }
    }

    if (flag) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let testCases = +input[0];
    let lines = 0;
    for (let i = 0; i < testCases; i++) {
        let arr1 = input[++lines].trim().split('');
        let arr2 = input[++lines].trim().split('');
        dpNationIsItaSubsequence(arr1, arr2);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
  abc
  dbace
  ax
  xaa`);
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
