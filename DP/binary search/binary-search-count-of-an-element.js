function binarySearchCountOfAnElement(arr, element) {
    /* First Occurrence of element*/
    let start = 0;
    let end = arr.length - 1;
    let firstOccurrence = -1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (element === arr[mid]) {
            firstOccurrence = mid;
            end = mid - 1;
        } else if (element < arr[mid]) {
            end = mid - 1;
        } else if (element > arr[mid]) {
            start = mid + 1;
        }
    }
    // console.log('firstOccurrence:', firstOccurrence);

    /* Last Occurrence of element */
    start = 0;
    end = arr.length - 1;
    let lastOccurrence = -1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (element === arr[mid]) {
            lastOccurrence = mid;
            start = mid + 1;
        } else if (element < arr[mid]) {
            end = mid - 1;
        } else if (element > arr[mid]) {
            start = mid + 1;
        }
    }
    // console.log('lastOccurrence:', lastOccurrence);

    console.log(
        'Count Of An Element is : ',
        lastOccurrence - firstOccurrence + 1
    );
}

function runProgram(input) {
    input = input.trim().split('\n');
    let element = +input[0];
    let arr = input[1].trim().split(' ').map(Number);
    binarySearchCountOfAnElement(arr, element);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`10
    2 4 10 10 10 10 18 20`);
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
