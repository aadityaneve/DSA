/* 
    Recursive Bubble sort Ended
    Description

    You are given an array ofNunsorted numbers. Your task is to write BUBBLE SORT using RECURSION such that numbers present in the array get sorted.

    USING ANY OTHER ALGORITHM OR USING SORT FUNCTION WOULD LEAD TO DISQUALIFICATION.




    Input
    Input Format

    First line of input contains N

    Second line of input contains N numbers

    Constraints

    N < 500


    Output
    Output the numbers given after sorting it in increasing order


    Sample Input 1 

    5
    3 5 0 9 8
    Sample Output 1

    0 3 5 8 9
*/

function recursiveBubbleSort(arr, size) {
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function bubbleSort(arr, high) {
        if (high == 0) {
            return;
        }

        for (let i = 0; i < high; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
            }
        }
        bubbleSort(arr, high - 1);
    }
    bubbleSort(arr, size - 1);
    console.log(arr.join(' '))
}

function runProgram(input) {
    input = input.trim().split("\n");
    var size = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    recursiveBubbleSort(arr, size);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`5
    3 5 0 9 8`);
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










/* 
    Recursive Bubble Sort - Editorial
    Difficulty: Easy - Medium
    Prerequisite: Recursion
    Problem Statement:
    You are given an unsorted array. You need to sort the given array without using the sort() function.

    Hint:
    Try using recursion. In each recursive call try to bubble out the maximum value present in the array during that particular recursive call.

    Short Explaination
    In this question, we're given an unsorted array and we need to sort the array without using sort() function. We'll try this using recursion. During each recursive call try to shorten the given input in such a way that at last only a single element is encountered which is the required base case. Make sure you're not actually shortening the given input array, try doing this with the help of a pointer/variable for keeping track of the length of the array during each recursive call.

    Detailed Explanation:
    Let num be the unsorted array.
    Now, let's break down the recursive function into two parts, one being the base case and the other being the logic part.
    For the logic part, let's first consider a pointer/variable "high".
    Now, for each recursive call, we need to bubble out the maximum value (from 0 to high) at the "high" position. At every recursive call, we'll decrement the "high" value so that at last the value of high becomes equal to "0", which will be the base case for our recursive function.
    For the base case, if "high" is equal to "0", simply return.
    Finally, our input array will be sorted.
    Pseudo Code
    input = [3, 5, 0, 9, 8]; // given unsorted array
    n = length of input; // 5

    function RBS(arr, high){
        // base case
        if(high becomes equal to 0){
            return;
        }

        // logic
        for(from i=0 to <= high){ // code for bubbling out the maximum value to "high" position
            if(arr[i]>arr[i+1]){
                swap arr[i] with arr[i+1];
            }
        }

        RBS(arr, high-1); // recursive call

    }

    RBS(input, n-1); // initial function call

    print input array // sorted input array


    Time Complexity
    O(n**2), where n is the length of the array.

    Space Complexity
    O(1)

    Alternate Solution:
    May be.
*/