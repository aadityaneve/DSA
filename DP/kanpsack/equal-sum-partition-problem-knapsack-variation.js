let dp = [];
function equalSumPartitionProblemKnapsackVariation(arr, sum) {
    for (let i = 1; i < arr.length + 1; i++) {
        for (let j = 1; j < sum + 1; j++) {
            if (arr[i - 1] <= j) {
                dp[i][j] = dp[i - 1][j - arr[i - 1]] || dp[i - 1][j];
            } else if (arr[i - 1] > j) {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    console.log(dp[dp.length - 1][sum]);
}

function runProgram(input) {
    let arr = input.trim().split(' ').map(Number);

    let sum = arr.reduce((prevValue, currValue) => {
        return prevValue + currValue;
    });

    if (sum % 2 !== 0) {
        return false;
    }

    sum = sum / 2;

    /* DP  Initialization */
    for (let i = 0; i < arr.length + 1; i++) {
        dp[i] = [];
        for (let j = 0; j < sum + 1; j++) {
            if (j === 0) {
                dp[i][j] = true;
            }
            if (i === 0) {
                dp[i][j] = false;
            }
        }
    }

    equalSumPartitionProblemKnapsackVariation(arr, sum);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`3 1 5 9 12`);
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
