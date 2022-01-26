function largestNumberInRotatedList(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let mid = parseInt(start + (end - start) / 2);
        /* if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return arr[mid];
        } else if (arr[mid] >= arr[mid - 1]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        } */
        /* if (arr[mid] >= arr[mid + 1] && arr[mid] >= arr[mid - 1]) {
            return arr[mid];
        } else if (arr[mid] >= arr[end]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        } */

        if (arr[mid] <= arr[start]) {
            end = mid - 1;
        } else {
            start = mid;
        }
    }
    return start;
}

function runProgram(input) {
    input = input.trim().split('\n');
    let size = +input[0];
    let arr = input[1].trim().split(' ').map(Number);
    let ans = largestNumberInRotatedList(arr);
    console.log(arr[ans]);
   /*  if (ans !== -1) {
    } else {
        console.log(ans);
    } */
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`7
    4 5 6 7 1 2 3`);
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
