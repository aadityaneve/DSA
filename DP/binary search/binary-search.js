function binarySearch(arr, element) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        console.log('mid:', mid);
        if (element === arr[mid]) {
            return mid;
        } else if (element < arr[mid]) {
            end = mid - 1;
        } else if (element > arr[mid]) {
            start = mid + 1;
        }
    }
    return -1;
}

function runProgram(input) {
    input = input.trim().split('\n');
    let element = +input[0];
    let arr = input[1].trim().split(' ').map(Number);
    let index = binarySearch(arr, element);
    console.log('index:', index);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`9
    1 2 3 4 5 6 7 8 9 10`);
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
