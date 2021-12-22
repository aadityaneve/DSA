/* 

    Search Numbers Ended
    Description

    You are given an array a of N integers a1,a2,…,aN.

    Your task is to respond to the queries like "How many numbers' values are betweenlandrinclusive ?".


    Input
    Input Format

    The first line of the input containsN— the length of the array.

    The second line containsNspace-separated integers a1,a2,…,aN.

    The third line contains integerk— the number of queries.

    The followingklines contain a pair of integersl r— query, described above.

    Constraints

    1 <= N <= 10^5

    -10^9 <= a[i] <= 10^9

    1 <= k <= 10^5

    -10^9 <= l <= r <= 10^9


    Output
    The output must consist of k integers — responses for the queries.


    Sample Input 1 

    5
    10 1 10 3 4
    4
    1 10
    2 9
    3 4
    2 2
    Sample Output 1

    5 2 2 0
    Hint

    For the first query, there are 5 numbers (10,1,10,3,4) in an array that lie between 1 and 10 inclusive, so the answer is 5.

    For the second query, there are 2 numbers (3,4) in an array that lie between 2 and 9 inclusive, so the answer is 2.

    For the third query, there are 2 numbers (3,4) in an array that lie between 3 and 4 inclusive, so the answer is 2.

    For the fourth query, there are no numbers in an array that lie between 2 and 2 inclusive, so the answer is 0.

*/

let countArr = [];
function searchNumbers(arr, left, right) {
    /* For lower bound */
    let lowerBound = -1;
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = parseInt(low + (high - low) / 2);

        if (arr[mid] >= left) {
            high = mid - 1;
            lowerBound = mid;
        } else {
            low = mid + 1;
        }
    }

    /* For upper bound */
    let upperBound = -1;
    low = 0;
    high = arr.length - 1;
    while (low <= high) {
        let mid = parseInt(low + (high - low) / 2);

        if (arr[mid] <= right) {
            low = mid + 1;
            upperBound = mid;
        } else {
            high = mid - 1;
        }
    }
    // console.log('LB && UB : ', lowerBound, upperBound);

    if (lowerBound != -1 && upperBound != -1) {
        countArr.push(
            (lowerBound > upperBound) ? 
            0 : 
            upperBound - lowerBound + 1
        );
    }else {
        countArr.push(0);
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let arr = input[1].trim().split(' ').map(Number);

    arr.sort((a, b) => a - b);
    // console.log('arr:', arr);

    let testCases = +input[2];
    let line = 2;
    for (let i = 0; i < testCases; i++) {
        let [left, right] = input[++line].trim().split(' ').map(Number);
        searchNumbers(arr, left, right);
    }
    console.log(countArr.join(' '));
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`9
    -1 0 0 -4 10 1 10 3 -4
    10
    1 10
    2 9
    3 4
    2 2
    0 4
    -1 10
    -1 0
    -5 11
    -4 -4
    -5 -4`);
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
