/* 
    Pair less than K Ended
    Description

    You are given an array A of N integers, and an integer K. Find the maximum value of S, such S that S = a[i] + a[j], and S < K. If no such value exists, then print -1.

    Refer the sample test case for better understanding.

    Note : You have to take the input yourself

    Input
    The first line of the input contains T, the number of test cases.

    The first line of each test case contains N, the number of elements in the array.

    The next line contains N space separated integers, denoting the values in the array.

    The next line contains the value K.

    Constraints

    1 <= T <= 10

    1 <= N <= 10^4

    1 <= A[i] <= 10^4


    Output
    Print the maximum value of S, according to the conditions given in the problem statement, on a new line.


    Sample Input 1 

    2
    5
    1 2 3 4 5
    7
    3
    30 10 20
    15
    Sample Output 1

    6
    -1
    Hint

    In the sample test case, the value stored inN = 5, and array is1 2 3 4 5, and the value stored inK = 7

    The maximum sum that can be made by using elements of the array which is lesser than K is 6, using the elements1 and 5

    Therefore, the answer is6

    In the next sample test case, the value stored inN = 3, and the array is30 10 20, and the value stored inK = 15

    There is no sum lesser than K, which is lesser than K. Therefore, the answer is-1
*/


function pairLessThanK(arr, n, k) {

    var count = 0;
    var maxValue = 0;
    arr.sort((a, b) => a-b);
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j] < k){
                count++;
                if(maxValue < arr[i]+arr[j]){
                    maxValue = arr[i]+arr[j];
                }
            }
        }
    }
    if(count == 0){
        console.log(-1);
    }else{
        console.log(maxValue);
    }
}

function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        var n = +input[++line];
        var arr = input[++line].trim().split(' ').map(Number);
        var k = +input[++line];
        pairLessThanK(arr, n, k);
    }

}
if (process.env.USERNAME === "aneve") {
    runProgram(`2
    5
    1 2 3 4 5
    7
    3
    30 10 20
    15`);
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