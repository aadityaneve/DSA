/* 
    Digit Sum Array -1:19:22
    Description

    You are given an arrayA, containingNintegers. Find the digit sum array for the given array.

    The digit sum array for a given arrayA, contains the sum of the digits present in a given number, stored at the corresponding index inA.

    Refer the sample I/O for better understanding.


    Input
    The first line of the input containsT, the number of test cases.

    The first line of each test case, contains N, the number of elements in the array.

    Next line containsNspace separated integers, denoting the elements of the array

    Constraints

    1 <=T<= 10

    1 <=N<= 10000

    1 <=A[i]<= 10000


    Output
    For each test case, print the elements in the digit sum array, on a single line, on a new line.


    Sample Input 1 

    2
    5
    12 14 16 17 29
    6
    1 2 3 4 5 51
    Sample Output 1

    3 5 7 8 11 
    1 2 3 4 5 6 
    Hint

    In the first sample test case, the sum of digits for various values, is as given below

    12 -> 1 + 2 = 3

    14 -> 1 + 4 = 5

    16 -> 1 + 6 = 7

    17 -> 1 + 7 = 8

    29 -> 2 + 9 = 11

    Therefore, the output is '3 5 7 8 11'.

    Similarly, the output in the second test case is1 2 3 4 5 6
*/

------ output not getting 100% correct ------

function digitSumArray(arr, size){

    var newArr = [];

    for(let i=0;i<size;i++){
        var tempNumber = JSON.stringify(arr[i]);
        var sum = 0;
        for(let j=0;j<tempNumber.length;j++){
            sum += Number(tempNumber[j]);
        }
        newArr.push(sum);
    }
    console.log(newArr.join(' '));
}

function runProgram(input) {
    
    input = input.trim().split('\n');
    var line = 0;
    for(let i=0;i<+input[0];i++){
        var size = +input[++line];
        var arr = input[++line].trim().split(' ').map(Number);

        digitSumArray(arr, size);
    }

}
if (process.env.USERNAME === "aneve") {
    runProgram(`2
    5
    12 14 16 17 29
    6
    1 2 3 4 5 51`);
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