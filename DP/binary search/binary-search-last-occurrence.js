function binarySearchLastOccurrence(arr, element) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;
    while (start <= end) {
        let mid = start + (end - start) / 2;
        if (element === arr[mid]) {
            result = mid;
            start = mid + 1;
        } else if (element < arr[mid]) {
            end = mid - 1;
        } else if (element > arr[mid]) {
            start = mid + 1;
        }
    }
    console.log(result);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let element = +input[0];
    let arr = input[1].trim().split(' ').map(Number);
    binarySearchLastOccurrence(arr, element);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`10
    2 4 10 10 10 18 20`);
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
