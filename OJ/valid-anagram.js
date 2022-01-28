function validAnagram(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let arr1 = input[++lines].trim().split('');
        arr1.sort();
        let arr2 = input[++lines].trim().split('');
        arr2.sort();
        let bool = validAnagram(arr1, arr2);
        if (bool) {
            console.log('True');
        } else {
            console.log('False');
        }
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
  abcd
  dcab
  aa
  aaa`);
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
