function upperboundInLogN(arr, element) {
    let start = 0;
    let end = arr.length - 1;
    let lastOccurrence = -1;
    let firstNumberGreater = -1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);

        if (element === arr[mid]) {
            lastOccurrence = mid;
            start = mid + 1;
        } else if (element < arr[mid]) {
            end = mid - 1;
        } else if (element > arr[mid]) {
            start = mid + 1;
            firstNumberGreater = mid;
        }
    }

    if (lastOccurrence != -1) {
        console.log(lastOccurrence + 1);
    } else {
        console.log(firstNumberGreater + 1);
    }
}

function runProgram(input) {
    input = input.trim().split('\n');

    let [size, K] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);

    upperboundInLogN(arr, K);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`10 6
    0 2 4 4 5 5 7 7 9 10`);
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
