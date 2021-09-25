/* 
    Remove to Sort -0:55:46
    Description

    Given an array of integers of length n, the task is to remove elements from the array to make array sorted. That is, remove the elements which do not follow an increasing order.


    Input
    Input Format

    First line Consists of integer n.

    Second line consists of n integers separated by spaces.

    Constraints

    1 <= n <= 10^6


    Output
    Print the sorted array.


    Sample Input 1 

    10
    1 2 4 3 5 7 8 6 9 10
    Sample Output 1

    1 2 4 5 7 8 9 10
*/


function removeToSort(arr, size){

    var newArr = [];
    for(let i=0;i<size;i++){        
        if(i==0){
            newArr.push(arr[i]);
        }else if(arr[i] - arr[i-1] >= 0 && arr[i] >= newArr[newArr.length-1]){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(' '));
}

function runProgram(input) {
    
    input = input.trim().split('\n');
    var size = +input[0];
    var arr = input[1].trim().split(' ').map(Number);

    removeToSort(arr, size);

}
if (process.env.USERNAME === "aneve") {
    runProgram(`100
    29 24 99 43 61 60 22 41 74 44 34 17 50 28 5 100 15 58 23 52 69 42 64 70 11 75 95 53 72 85 46 40 71 90 56 84 39 96 13 49 80 26 25 32 93 1 12 87 2 9 8 37 14 97 51 47 19 54 67 7 4 94 36 18 16 48 21 31 27 6 79 88 10 81 66 77 65 33 45 3 83 35 20 91 76 92 38 68 73 30 55 82 89 98 57 86 59 63 78 62`);
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