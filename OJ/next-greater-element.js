/* 
    Next Greater Element Ended
    Description

    Given an array of N elements, find the next greater element for each element in the array, print -1 if it does not exists. Refer to the sample I/O for better understanding

    Note : You have to take the input yourself

    Input
    The first line contains T, the number of test cases.

    The first line of each test case contains N, the number of elements in the array. The next line contains N space separated integers denoting the elements of the array

    Constraints

    1 <= T <= 10

    1 <= N <= 10^5

    0 <= A[i] <= 10000


    Output
    For each test case, print N space separated integers, denoting the next greater element for each element,  on a new line.


    Sample Input 1 

    1
    4
    1 3 2 4
    Sample Output 1

    3 4 4 -1
    Hint

    In the sample test case, the value stored inN = 4, and the array is1 3 2 4

    For the first element, the next greater element is

    1 -> 3
    3 -> 4
    2 -> 4
    4 -> -1
    Therefore, the required answer is3 4 4 -1
*/

function nextGreaterElement(arr, size) {

    var stack = [];
    var top = -1;
    var newArr = [];

    for (let i = size-1; i >= 0; i--) {
        while (stack.length > 0 && stack[top] <= arr[i]) {
           stack.pop();
           top--;
        }        
        if(stack.length > 0){
            newArr[i] = stack[top];
        }else{
            newArr[i] = -1;
        }
        top++;
        stack[top] = arr[i];
    }
    console.log(newArr.join(' '));
}

function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        var size = +input[++line];
        var arr = input[++line].trim().split(' ').map(Number);
        nextGreaterElement(arr, size);
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`1
    4
    1 3 2 4`);
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