function spidermanInPatna(arr) {
    // 1 Jump || 2 Jump
    function getWays(arr, curr) {
        if (curr === arr.length) {
            return arr[curr];
        }

        for (let i = curr; i < arr.length; i++) {
            return Math.abs(
                getWays(arr[i + 1], curr + 1) - getWays(arr[i + 2], curr + 2)
            );
        }
    }
    console.log(getWays(arr, 0));

    // let minSum = 999999999999;
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i; j < arr.length; j*=2) {
    //         let sum = Math.abs(arr[i] - arr[j]);
    //         console.log('sum:', sum)
    //         if (sum < minSum) {
    //             minSum = sum;
    //         }
    //     }
    // }
    // console.log(minSum);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let size = +input[0];
    let arr = input[1].trim().split(' ').map(Number);
    spidermanInPatna(arr);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`4
    10 30 40 20`);
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
