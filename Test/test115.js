function majorElements(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] = obj[arr[i]] + 1;
        }
    }
    // console.log('obj:', obj)

    let count = parseInt(arr.length / 2);
    let flag = false;
    for (let x in obj) {
        if (obj[x] > count) {
            console.log(x);
            flag = true;
        }
    }
    if (flag === false) {
        console.log(-1);
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let size = +input[++lines];
        let array = input[++lines].trim().split(' ').map(Number);
        majorElements(array)
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`3
  3
  1 1 2
  4
  1 1 1 2
  2
  1 2`);
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
