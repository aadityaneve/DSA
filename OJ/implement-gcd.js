/* 

Implement GCD -2:20:50
Description

Implement the GCD Function using recursion. Given two integers a and b, find the greatest common divisor of a and b.

The approach which uses logarithmic time complexity is expected here.


Input
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains two integers a and b (1 ≤ a, b ≤ 1000000000).


Output
For each test case, print the answer: GCD of the two numbers.


Sample Input 1 

2
6 9
2 25
Sample Output 1

3
1

*/

function implementGCD(num1, num2) {
    function getGCD(num1, num2) {
        if (num1 === num2) {
            // num = num1;
            return num1;
        }

        if (num1 !== num2) {
            if (num1 > num2) {
                return getGCD(num1 - num2, num2);
            } else {
                return getGCD(num1, num2 - num1);
            }
        }
    }
    let num = getGCD(num1, num2);

    console.log(num);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let testCases = +input[0];
    let lines = 0;
    for (let i = 0; i < testCases; i++) {
        let [num1, num2] = input[++lines].trim().split(' ').map(Number);
        implementGCD(num1, num2);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`10
        265974783 154274012
        699535256 895330594
        813164300 144820
        640771391 159913
        93805471 69718324
        999999999 999999998
        613523760 91955
        248799319 505008758
        707062645 91219220
        902791288 185836`);
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
