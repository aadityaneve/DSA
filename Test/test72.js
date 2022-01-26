function allExceptOne(arr) {
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        /* first occurrences */
        let start = 0;
        let end = arr.length - 1;
        let firstOccurrence = -1;
        while (start <= end) {
            var mid = parseInt(start + (end - start) / 2);

            if (element === arr[mid]) {
                firstOccurrence = mid;
                end = mid - 1;
            } else if (element < arr[mid]) {
                end = mid - 1;
            } else if (element > arr[mid]) {
                start = mid + 1;
            }
        }

        /* last occurrences */
        start = 0;
        end = arr.length - 1;
        let lastOccurrence = -1;
        while (start <= end) {
            var mid = parseInt(start + (end - start) / 2);

            if (element === arr[mid]) {
                lastOccurrence = mid;
                start = mid + 1;
            } else if (element < arr[mid]) {
                end = mid - 1;
            } else if (element > arr[mid]) {
                start = mid + 1;
            }
        }

        if (firstOccurrence - lastOccurrence + 1 === 1) {
            console.log(arr[firstOccurrence]);
        }
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        ++lines;
        let arr = input[++lines].trim().split(' ').map(Number);
        arr.sort((a, b) => a - b);
        allExceptOne(arr);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`1
    5
    1 2 1 3 4 4 5 2 3`);
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
