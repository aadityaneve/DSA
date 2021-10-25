/* 
    All Twice Except One Ended
    Description

    Given an array A of n elements, every element appears twice in the array except for one element. Find the element that is uniquely present in the array.

    In other words, there is one value that has a frequency of 1 whereas the rest has a frequency of 2. Find that particular element.

    Added Constraint -> Do in O(1) auxiliary space and linear time complexity.


    Input
    The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

    The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) — the size of the array A.

    The second line of each test case contains n integers (1 ≤ n ≤ 100000) - The elements of the array A.


    Output
    For each test case, print the answer: The unique element.


    Sample Input 1 

    2
    1
    5
    5
    1 2 1 3 2
    Sample Output 1

    5
    3
*/





function allTwiceExceptOne(arr, size) {

    var object = {};
    for (let i = 0; i < arr.length; i++) {
        if (object.hasOwnProperty(arr[i])) {
            // object[arr[i]] = object[arr[i]] + 1;
            delete object[arr[i]];
        } else {
            object[arr[i]] = 1;
        }
    }

    console.log(Object.keys(object).join(' '));
}

function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        var size = +input[++line];
        var arr = input[++line].trim().split(' ').map(Number);
        allTwiceExceptOne(arr, size);
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`2
    1
    5
    5
    1 2 1 3 2`);
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