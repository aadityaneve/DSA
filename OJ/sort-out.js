/* 
    Sort out! -0:33:29
    Description

    Given an array A of non-negative integers of size **m**. Your task is to sort the array in non-decreasing order and print out the original indices of the new sorted array.

    Example:

    A={4,5,3,7,1}

    After sorting the new array becomes A={1,3,4,5,7}.

    The required output should be "4 2 0 1 3"

    NOTE: The indexing of the array starts with 0.

    You can only write your own sorting algorithm must not use builtin functionality of sort()


    Input
    Input Format

    The first line of input consists of the size of the array

    The next line consists of the array of size m

    Constraints

    1<=m<=10000

    0<=A[i]<=1000




    Output
    Output Format

    Output consists of a single line of integers


    Sample Input 1 

    5
    4 5 3 7 1
    Sample Output 1

    4 2 0 1 3
*/


// - - - - - - - - - - 100% Working - - - - - - - - - -

function swap(i, j, arr) {

    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr, indexArr) {

    var swapped;

    for (var i = 0; i < arr.length - 1; i++) {
        // var min = i;
        swapped = false;
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                // min = j;
                swap(j, j+1, indexArr);
                swap(j, j+1, arr);  
                swapped = true;
            }                     
        }
        // If no elements were swapped break the loop
        if(swapped == false){
            break;
        }
        // swap(i, min, indexArr);
        // swap(i, min, arr);       
    }

    // console.log(arr);
}


function sortOut(arr, size) {

    var indexArr = [];
    for (key in arr) {
        indexArr.push(key);
    }

    bubbleSort(arr, indexArr);

    // console.log(arr);
    console.log(indexArr.join(' '));

}


function runProgram(input) {

    input = input.trim().split('\n');
    var size = +input[0];
    var arr = input[1].trim().split(' ').map(Number);

    sortOut(arr, size);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`5
    4 5 3 7 1`);
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