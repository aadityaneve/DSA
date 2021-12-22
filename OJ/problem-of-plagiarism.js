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


function problemOfPlagiarism(number, left, right) {
    let arr = [];
    for (let i = 0; i < number; i++) {
        arr.push(i + 1);
    }

    function swap(arr, i, j) {
        let temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        // return arr;
    }

    let count = 0;
    function getPermutations(arr, curr) {
        if (curr == arr.length) {
            // console.log(arr);
            let sum = 0;
            for (let i = left; i <= right; i++) {
                sum += arr[i];
            }
            if (sum % 2 != 0) {
                count++;
            }
            return;
        }

        for (let i = curr; i < arr.length; i++) {
            if (i !== curr) {
                // swap(arr, i, curr);
                [arr[i], arr[curr]] = [arr[curr], arr[i]];
            }
            getPermutations(arr, curr + 1);
            if (i !== curr) {
                // swap(arr, i, curr);
                [arr[i], arr[curr]] = [arr[curr], arr[i]];
            }
        }
    }
    getPermutations(arr, 0);
    console.log(count);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let number = +input[0];
    let [left, right] = input[1].split(' ').map(Number);
    problemOfPlagiarism(number, left, right);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`3
    0 1`);
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
