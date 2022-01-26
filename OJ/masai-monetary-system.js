function masaiMonetarySystem(number) {
    let dp = [];
    function maxValue(number) {
        if (number <= 2) {
            return 0;
        }
        if (dp[number] != undefined) {
            return dp[number];
        } else {
            dp[number] = Math.max(
                maxValue(Math.floor(number / 2)) +
                    maxValue(Math.floor(number / 3)) +
                    maxValue(Math.floor(number / 4)),
                number
            );
        }
        return dp[number];
    }
    console.log(maxValue(number));

    // console.log(dp);

    /* ********** Used Recursion * Not Efficient * Gives TLE ******
        let afterBreak;
        function maxValue(number) {
            if (number <= 5) {
                return number;
            } else {
                afterBreak =
                    Math.floor(maxValue(number / 2)) +
                    Math.floor(maxValue(number / 3)) +
                    Math.floor(maxValue(number / 4));
            }

            return Math.max(afterBreak, number);
        }
        console.log(maxValue(number));
    */
}

function runProgram(input) {
    input = input.trim().split('\n');
    for (let i = 0; i < input.length; i++) {
        masaiMonetarySystem(+input[i]);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`504
    354`);
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
