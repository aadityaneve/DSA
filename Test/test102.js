function arrayTraversalAndCondition(arr) {
    let count = 0;
    let c1 = 0,
        c2 = 0,
        c3 = 0,
        c4 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 5 === 0) {
            c1++;
        } else if (arr[i] % 3 === 0) {
            c2++;
        } else if (arr[i] % 2 === 0) {
            c3++;
        } else {
            c4++;
        }
    }
    let newArr = [c1, c2, c3, c4];
    console.log(newArr.join(' '))

    /* let newArr = [];
    let count = 0;
    let numbers = [5, 3, 2];
    for (let i = 0; i < numbers.length; i++) {
        count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] % numbers[i] === 0) {
                count++;
            }
        }
        newArr.push(count);
    }

    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && arr[i] % 3 !== 0 && arr[i] % 5 !== 0) {
            count++;
        }
    }
    newArr.push(count);

    console.log(newArr.join(' ')); */
}

function runProgram(input) {
    input = input.trim().split('\n');

    let size = +input[0];
    let arr = input[1].trim().split(' ').map(Number);

    arrayTraversalAndCondition(arr);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`4
  1 2 3 4`);
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
