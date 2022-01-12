/* 

Can They be Equal ? -1:43:2
Description

You are given two strings A and B of length n.

You can select any substring in the string A and reverse it. This operation can be performed as many times as you want.

For example - "abbbca" can be turned into "abcbba" if we select a substring from index 2 to index 4 (bbc).

You need to answer whether string A can be converted into string B using the above operation.

Print "Yes" if it is possible else "No".


Input
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains an integer n (1≤ n ≤ 1000) - The length of string A and B.

The second line of each test case contains a string A (1 ≤ |A| ≤ 1000).

The third line of each test case contains a string B (1 ≤ |B| ≤ 1000).


Output
For each test case, print the answer: "Yes" if it is possible else "No".


Sample Input 1 

2
2
ab
ac
3
aba
aab
Sample Output 1

No
Yes
Hint

In the first testcase, since the characters are different, no possible operation can make them equal.

In the second testcase, we can obtain B from A by reversing substring ba to ab.

*/

function canTheyBeEqual(arr1, arr2) {

    arr1.sort();

    if(JSON.stringify(arr1) === JSON.stringify(arr2)){
        console.log("Yes")
    }else {
        console.log("No")
    }

}

function runProgram(input) {
    
    input = input.trim().split('\n')
    let testCases = +input[0];
    let lines = 0;

    for(let i = 0; i < testCases; i++){
        let size = +input[++lines];
        let arr1 = input[++lines].trim().split('')
        let arr2 = input[++lines].trim().split('')

        canTheyBeEqual(arr1, arr2)
    }

}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
    2
    ab
    ac
    3
    aba
    aab`);
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
