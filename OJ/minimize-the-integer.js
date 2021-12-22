/* 

    Minimize The Integer Ended
    Description

    Given an integer, rearrange the digits in such a manner that it is the minimum possible integer after rearrangement.

    Note that no integers having leading zeroes are present in the test cases and do not consider them as a minimum while presenting the output.


    Input
    The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

    The first line of each test case contains a single integer n ( - (10^(999)) < n < 10^(1000) ).


    Output
    For each test case, print the answer: The minimum possible integer


    Sample Input 1 

    2
    53334121
    -1002911
    Sample Output 1

    11233345
    -9211100

*/

function minimizeTheInteger(arr) {
    if (arr[0] == '-') {
        /* if (arr[1] == '0') {
            arr.shift();
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] == '0') {
                    arr.shift();
                } else {
                    break;
                }
            }
        } */
        arr.sort((a, b) => b - a);
        // arr.unshift('-');
    } else {
        let index;
        let newArr = [];
        arr.sort((a, b) => a - b);
        if (arr[0] == '0') {
            for (let i = 0; i < arr.length; i++) {
                if (arr[0] == '0') {
                    index = i;
                    newArr.push(arr.shift());
                    continue;
                } else {
                    break;
                }
            }
            // console.log(arr.slice(0, index))
            arr.splice(1, 0, ...newArr);

            // arr.splice(1, temp);
        }
    }
    console.log(arr.join(''));
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let arr = input[++lines].trim().split('');
        // console.log(arr)
        minimizeTheInteger(arr);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`5
    -0053334121001
    -001002911
    567342009756
    -987690098670
    000000000`);
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
