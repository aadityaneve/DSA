function differentWaysAsASum(number) {
    let cache = {};
    function getWays(number) {
        if (number < 0) {
            return 0;
        } else if (number === 0) {
            return 1;
        } else if (cache[number] === undefined) {
            cache[number] =
                getWays(number - 1) + getWays(number - 3) + getWays(number - 4);
        }
        return cache[number];
    }
    console.log(getWays(number));
}

function runProgram(input) {
    differentWaysAsASum(+input);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`50`);
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
