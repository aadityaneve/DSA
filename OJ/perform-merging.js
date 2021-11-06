/* 
    Perform Merging Ended
    Description

    You are given two sorted arrays each of length N. Your task is to write a program that merges both the arrays such that the final array formed after merging is sorted.

    Note: You must not use sort() function in your entire code


    Input
    Input Format :

    First line contains N which is the number of integers present in both the arrays.

    Second line contains N sorted integers which are elements of first array.

    Third line contains N sorted integers which are elements of second array.



    Constraints :

    N < 1000


    Output
    Output the array formed after merging elements such that it is sorted


    Sample Input 1 

    4
    1 5 7 9
    2 4 6 8
    Sample Output 1

    1 2 4 5 6 7 8 9
*/

function merge(left, right) {
    let arr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    // console.log("Step : ", arr, left, right);
    return [...arr, ...left, ...right];
}

function mergeSort(array) {
    const half = array.length / 2;

    // Base case
    if (array.length < 2) {
        return array;
    }

    const left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
}

function runProgram(input) {
    input = input.trim().split("\n");
    var line = 0;
    var size = +input[line];
    var arr1 = input[++line].trim().split(" ").map(Number);
    var arr2 = input[++line].trim().split(" ").map(Number);
    var arr = [];
    arr = arr.concat(arr1, arr2);
    var ans = mergeSort(arr);
    console.log(ans.join(" "));
}
if (process.env.USERNAME === "aneve") {
    runProgram(`4
    1 5 7 9
    2 4 6 8`);
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
    Perform Merging - Editorial
    Difficulty: Easy
    Prerequisite: Arrays
    Problem Statement:
    You are given two sorted arrays of length N. You need to merge both the arrays and generate a single sorted array without using sort() function.

    Hint:
    Try traversing along both the arrays and keep pushing the smaller of the two values in the resultant array.

    Short Explaination
    In this question, we're given two sorted arrays of length N. We need to merge both the arrays and generate a single sorted array. We can do this by maintaing two different pointers for traversing both the arrays simultaneously. Also, keep pushing the smaller of the two values in the resultant array. Finally, after the entire traversing finishes, we'll be left with a single sorted array which is the required answer.

    Detailed Explanation:
    Let array_1 be the first given sorted array.
    Let array_2 be the second given sorted array.
    Let p1 and p2 be the pointers for traversing array_1 and array_2 respectively.
    Now, we'll compare the values of each array untill any one of the arrays reaches the end. Also, we'll keep pushing the smaller of the two values in the resultant array.
    If by chance, there is any portion of the array left for comparing, we'll simply push the remaining elements in the resultant array.
    For example: array_1 = [1, 3, 7, 9], array_2 = [0, 11, 15, 29]
    While comparing: 0 < 1 => resultant = [0]
            : 1 < 11 => resultant = [0, 1]
            : 3 < 11 => resultant = [0, 1, 3]
            : 7 < 11 => resultant = [0, 1, 3, 7]
            : 9 < 11 => resultant = [0, 1, 3, 7, 9], after this, traversing of array_1 ends and we're left with a portion of array_2 i.e., [11, 15, 29]. So, we'll simply push all the elements to the resultant array
            : Finally => resultant = [0, 1, 3, 7, 9, 11, 15, 29]
    Pseudo Code
    array_1 = [1, 5, 7, 9];

    array_2 = [2, 4, 6, 8];

    n = length of the array i.e., 4

    p1 = 0; // pointer 1 for traversing array_1

    p2 = 0; // pointer 2 for traversing array_2

    while(none of the pointers reach end of the array){

        if(array_1[p1] <= array_2[p2]){

            push array_1[p1] to the resultant array;

            increment p1;

        }else{

            push array_2[p2] to the resultant array;

            increment p2;

        }

        while(p1 does not reach end){

            push array_1[p1] to the resultant array;

            increment p1;

        }

        while(p2 does not reach end){

            push array_2[p2] to the resultant array;

            increment p2;

        }

        print resultant array;
    }


    Time Complexity
    O(n), where n is the length of the array.

    Alternate Solution:
    May be.
*/