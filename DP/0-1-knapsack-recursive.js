function zeroOneKnapsack(weightArr, valueArr, totalWeight, size) {
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
}

function runProgram(input) {
    input = input.trim().split('\n');
    totalWeight = +input[0];
    weightArr = input[1].trim().split(' ').map(Number);
    valueArr = input[2].trim().split(' ').map(Number);
    console.log(
        zeroOneKnapsack(weightArr, valueArr, totalWeight, weightArr.length)
    );
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
