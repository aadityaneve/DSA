/* 
    TODO: Problem: 
    Find the subset in the array where the sum is 11.
    If present print yes/true or false/no
*/

let dp = [];
function subsetSumProblemKnapsackVariation(arr, sum) {
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
    // console.log('dp:', dp);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let arr = input[0].trim().split(' ').map(Number);
    let sum = +input[1];

    // * Array Initialization
    for (let i = 0; i < arr.length + 1; i++) {
        dp[i] = [];
        for (let j = 0; j < sum + 1; j++) {
            if (i === 0) {
                dp[i][j] = false;
            }
            if (j === 0) {
                dp[i][j] = true;
            }
        }
    }
    // console.log(dp);

    subsetSumProblemKnapsackVariation(arr, sum);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`4 1 10 12 5 2
    9`);
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
