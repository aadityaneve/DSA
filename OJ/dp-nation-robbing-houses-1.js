function dpNationRobbingHouses(arr) {
    let maxSum = 0;
    for (let i = 1; i < arr.length; i+=2) {

        maxSum += Math.max(arr[i-1], arr[i+1]);

        /* if (arr[i + 1] > arr[i] && arr[i + 1] > arr[i + 2]) {
            maxSum += arr[i + 1];
            i + 2;
        } else if (arr[i] > arr[i + 1]) {
            maxSum += arr[i];
            i++;
        } else if (arr[i + 1] > arr[i]) {
            maxSum += arr[i + 1];
            i++;
        } */
    }

    console.log(maxSum);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let testCases = +input[0];
    let lines = 0;
    for (let i = 0; i < testCases; i++) {
        let size = +input[++lines];
        let arr = input[++lines].trim().split(' ').map(Number);
        dpNationRobbingHouses(arr);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`3
    2
    1 100
    3
    2 100 99
    4
    100 1 1 100`);
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
