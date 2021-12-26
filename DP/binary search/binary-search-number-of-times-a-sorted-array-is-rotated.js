function binarySearchSortedArrayIsRotated(arr) {
    let start = 0;
    let end = arr.length - 1;
    let n = arr.length;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        let next = (mid + 1) % n;
        let prev = (mid + n - 1) % n;
        console.log('Prev Mid Next : ', prev, mid, next);
        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return mid;
        } else if (arr[mid] <= arr[end]) {
            end = mid - 1;
        } else if (arr[start] <= arr[mid]) {
            start = mid + 1;
        }
    }
    return -1;
}

function runProgram(input) {
    let arr = input.trim().split(' ').map(Number);
    let index = binarySearchSortedArrayIsRotated(arr);
    console.log('index:', index);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`7 9 11 12 15`);
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
