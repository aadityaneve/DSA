/* 

A -> B Possible ? -0:57:4
Description

Given two integers A and B, we need to figure out whether we can go from A to B using the following operations -

-> We can multiply A by 2 (like 6 -> 12).

-> We can append 1 at the end of A (like 6 -> 61).

Print "Possible" if it is, else "Not Possible".


Input
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains 2 integers A and B (1 ≤ A, B ≤ 1000000).


Output
For each test case, print the answer.


Sample Input 1 

4
6 242
3 3
6 3
10 30
Sample Output 1

Possible
Possible
Not Possible
Not Possible

*/

function aToBPossible(num1, num2) {
    let count = 0;
    let prod = 0;
    while (num1 <= num2) {
        if (num1 === num2) {
            count++;
            break;
        }

        prod = num1 * 2;

        if (prod == num2) {
            count++;
        } else if (prod > num2) {
            break;
        }

        prod = String(prod);
        prod += 1;

        if (prod == num2) {
            count++;
        } else if (prod > num2) {
            break;
        }
        num1 = prod;
    }
    // console.log('count:', count);

    if (count == 1) {
        console.log('Possible');
    } else {
        console.log('Not Possible');
    }
}

function runProgram(input) {
    input = input.trim().split('\n');

    let testCases = +input[0];
    let lines = 0;
    for (let i = 0; i < testCases; i++) {
        let [num1, num2] = input[++lines].trim().split(' ').map(Number);
        aToBPossible(num1, num2);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
        72 288
        37 3711`);
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
