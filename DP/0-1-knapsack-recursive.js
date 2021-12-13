var dp;
function zeroOneKnapsack(weightArr, valueArr, totalWeight, size) {
    if (size === 0 || totalWeight === 0) {
        return 0;
    }

    if (dp[size - 1][totalWeight - 1] != -1) {
        return dp[size - 1][totalWeight - 1];
    }

    if (weightArr[size - 1] <= totalWeight) {
        return (dp[size][totalWeight] = Math.max(
            valueArr[size - 1] +
                zeroOneKnapsack(
                    weightArr,
                    valueArr,
                    totalWeight - weightArr[size - 1],
                    size - 1
                ),
            zeroOneKnapsack(weightArr, valueArr, totalWeight, size - 1)
        ));
    } else if (weightArr[size - 1] > totalWeight) {
        return (dp[size][totalWeight] = zeroOneKnapsack(
            weightArr,
            valueArr,
            totalWeight,
            size - 1
        ));
    }

    /* ******** With Recursion ****** Not Effective TLE ***
    if (size === 0 || totalWeight === 0) {
        return 0;
    }

    if (weightArr[size - 1] <= totalWeight) {
        return Math.max(
            valueArr[size - 1] +
                zeroOneKnapsack(
                    weightArr,
                    valueArr,
                    totalWeight - weightArr[size - 1],
                    size - 1
                ),
            zeroOneKnapsack(weightArr, valueArr, totalWeight, size - 1)
        );
    } else if (weightArr[size - 1] > totalWeight) {
        return zeroOneKnapsack(weightArr, valueArr, totalWeight, size - 1);
    }
    */
}

function runProgram(input) {
    input = input.trim().split('\n');
    let totalWeight = +input[0];
    let weightArr = input[1].trim().split(' ').map(Number);
    let valueArr = input[2].trim().split(' ').map(Number);
    // var A = Array(12).fill(Array(81).fill('q'));
    dp = Array(weightArr.length + 1).fill(Array(totalWeight + 1).fill(-1));
    console.log(
        zeroOneKnapsack(weightArr, valueArr, totalWeight, weightArr.length)
    );
    console.log(dp);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`50
    10 20 30
    60 100 120`);
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
