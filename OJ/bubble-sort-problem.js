/* 
    Bubble Sort Problem -0:8:46
    Description

    You are given an array of N unsorted numbers. Your task is to write BUBBLE SORT such that numbers present in the array gets sorted.

    USING ANY OTHER ALGORITHM OR USING IN BUILT SORT FUNCTION WOULD LEAD TO YOUR DISQUALIFICATION


    Input
    Input Format:

    First line of input contains N

    Second line of input contains N numbers

    Constraints:

    N < 500


    Output
    Output the numbers given after sorting it in increasnig order


    Sample Input 1 

    5
    3 5 0 9 8
    Sample Output 1

    0 3 5 8 9
*/


function swap(arr, i, min){

    // console.log(arr, i, min);

    var temp = 0;
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
    // return arr;
}

function bubbleSort(arr, size){

    for(let i=0;i<size-1;i++){
        for(let j=0;j<size-i-1;j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }

    console.log(arr.join(' '));
}

function runProgram(input) {

    input = input.trim().split('\n');
    var size = +input[0];
    var arr = input[1].trim().split(' ').map(Number);

    bubbleSort(arr, size);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`34
    -17 11 -11 -27 -22 41 0 -27 -43 -15 27 7 -49 12 45 48 -45 -25 45 -32 -29 -18 -16 -48 -20 -46 3 -41 -43 -7 -39 -34 -17 -19`);
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