/*
    Odd subset Ended
    Description

    Given an integer array, return the count of all the subsets of the array, where the sum of all the elements in the subset is odd.


    Input
    The first line of the input contains N, the size of the array.

    The next line contains N space separated integers denoting the elements of the array.



    Constraints

    1 <= N <= 20

    -20 <= A[i] <= 20


    Output
    Print the count of all the subsets where the sum of all the elements in the subset is odd.


    Sample Input 1

    3
    1 2 3
    Sample Output 1

    4
    Sample Input 2

    2
    2 4
    Sample Output 2

    0
    Hint

    In the sample test case, the size of the array is 3, and the all the possible subsets of the array are,

    []

    [1]

    [2]

    [1, 2]

    [3]

    [1, 3]

    [2, 3]

    [1, 2, 3]

    The subsets with odd sum are [1],[3],[2,3], and [1,2], therefore, the count of subsets with odd sum are 4.
*/



function getOddSubset(arr, size) {

    let count = 0;
    function getAns(arr, size, newArr, index) {

        if (index == size) {
            // console.log(newArr);
            let sum = 0;
            for (let i = 0; i < newArr.length; i++) {
                sum += newArr[i];
            }
            if (sum % 2 != 0) {
                count++;
            }
        } else {
            newArr.push(arr[index]);
            getAns(arr, size, newArr, index + 1);
            newArr.pop();
            getAns(arr, size, newArr, index + 1);
        }
    }
    getAns(arr, size, [], 0);
    console.log(count);
}


function runProgram(input) {

    input = input.trim().split('\n');

    var size = +input[0];
    var arr = input[1].trim().split(' ').map(Number);
    getOddSubset(arr, size);

}
if (process.env.USERNAME === "aneve") {
    runProgram(`3
    1 2 3`);
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