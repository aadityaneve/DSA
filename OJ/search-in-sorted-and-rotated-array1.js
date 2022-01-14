function minNumberSearch(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let mid = parseInt(start + (end - start) / 2);

        if (arr[mid] > arr[end]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start;
}
function binarySearch(arr, start, end, element) {
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);

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

function search(arr, K) {
    // let minNumberIndex = arr.indexOf(Math.min(...arr));

    let minNumberIndex = minNumberSearch(arr);
    // console.log('minNumberIndex:', minNumberIndex);

    let ans1 = binarySearch(arr, 0, minNumberIndex - 1, K);
    let ans2 = binarySearch(arr, minNumberIndex, arr.length - 1, K);

    if (ans1 != -1) {
        console.log(ans1);
    } else {
        console.log(ans2);
    }
}

function runProgram(input) {
    input = input.trim().split('\n');

    let [size, K] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);

    search(arr, K);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`10 3
    7 8 11 12 13 14 2 3 4 5`);
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
