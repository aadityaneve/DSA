function canTheyBeEqual(arr, number) {
    let obj = {};
    for (let x in arr) {
        let count = 0;
        let string = String(arr[x]);
        for (let i = 0; i < string.length; i++) {
            if (string[i] == number) {
                count++;
            }
        }
        obj[arr[x]] = count;
    }
    // console.log('obj:', obj)

    let ans = Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
    console.log(ans);

    /* let key = Object.keys(obj).reduce((a, b) =>
        obj[a] > obj[b] && arr[a] > arr[b] ? a : b
    );
    console.log(arr[key]);
    console.log(obj); */
}

function runProgram(input) {
    input = input.trim().split('\n');
    let testCases = +input[0];
    let lines = 0;
    for (let i = 0; i < testCases; i++) {
        let [size, number] = input[++lines].trim().split(' ').map(Number);
        let arr = input[++lines].trim().split(' ');
        canTheyBeEqual(arr, number);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`1
    62 7
    5882 9779 2254 3601 8467 6483 1515 765 9631 211 3497 8299 7622 4307 5364 4306 9706 7710 5667 2216 2685 2029 7758 8047 5761 8031 4197 5164 9863 9710 7085 2097 4955 9338 2049 9773 5820 9916 537 1802 126 4034 100 4100 4692 1815 8405 4397 9525 423 2964 2209 2451 721 6607 8212 5103 803 9727 1317 6864 6811`);
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
