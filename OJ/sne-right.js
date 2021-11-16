/* 
    SNE Right Ended
    Description

    Andy and Mark are playing a game of arrays.

    The game involves finding the smallest neighbor element to the right side for each element in the array

    Andy counts the number of elements which do not have a smaller neighbor element to the right side. Help Andy find the count


    Input
    Input Format:

    First line contains an integer N denoting the number of elements in the array (not necessarily distinct).

    Second line contains N space separated integers denoting the elements of the array.

    Constraints:

    N <= 100000


    Output
    Print a single integer denoting the number of elements which do not have a smaller neighbor element to the right side


    Sample Input 1 

    5
    4 2 1 3 7
    Sample Output 1

    3
    Hint

    The element at index2, 3 and 4, do not have a value smaller to the right side. Therefore, the answer is 3.
*/

function sneRight(arr, size) {
    var stack = [];

    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length > 0) {
            if (stack[stack.length - 1] < arr[i]) {
                count++;
                break;
            } else {
                stack.pop();
            }
            // console.log(stack)
        }

        stack.push(arr[i]);
    }
    console.log(size - count);
}

function runProgram(input) {
    input = input.trim().split("\n");
    var size = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    sneRight(arr, size);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`5
    4 2 1 3 7`);
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
