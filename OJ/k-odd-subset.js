/* 
    K odd subset Ended
    Description

    Given an array A having N positive integers. Count the number of non-empty subsets of array A such that each subset has at least K odd numbers.


    Input
    First line: Single integer denoting the value of T - the number of test cases.

    For each test case:

    First line: Two single space-separated integers denoting the values of N and K.

    Next line: N single space-separated integers denoting the elements of array A.

    Constraints:

    1 <= T <= 100

    1 <= N, K <= 15

    1 <= A[ i ] <= 100


    Output
    For each test case, print in a new line, a single integer denoting the required count of subsets.


    Sample Input 1 

    2
    4 2
    4 3 2 1
    2 1
    2 3
    Sample Output 1

    4
    2
    Hint

    Given test cases:

    Test case 1:

    N = 4, K = 2, A: [ 4, 3, 2, 1 ].
    Subsets which has at least two odd numbers are:
    { 4,3,2,1 }, { 3, 2, 1 }, { 3, 1 },{4, 3, 1}.
    Test case 2:

    N = 2, A: [ 2, 3 ].
    Subsetswhich has at least one odd number are:
    {3}, {2, 3}.
*/

function kOddSubset(arr, K) {
    let count = 0;
    function getSubset(arr, newArr, curr) {
        if (curr === arr.length) {
            // console.log(newArr)
            if (newArr.length != 0) {
                let oddCount = 0;
                for (let i = 0; i < newArr.length; i++) {
                    if (newArr[i] % 2 != 0) {
                        oddCount++;
                    }
                }
                if (oddCount >= K) {
                    count++;
                }
            }
            return;
        }

        getSubset(arr, newArr, curr + 1);
        getSubset(arr, newArr.concat([arr[curr]]), curr + 1);
    }
    getSubset(arr, [], 0);
    console.log(count);
}

function runProgram(input) {
    input = input.trim().split("\n");
    var line = 0;
    var testCases = +input[line];
    for (let i = 0; i < testCases; i++) {
        var [size, K] = input[++line].trim().split(" ").map(Number);
        var arr = input[++line].trim().split(" ").map(Number);
        kOddSubset(arr, K);
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`2
    4 2
    4 3 2 1
    2 1
    2 3
    2 1
    4 4`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
