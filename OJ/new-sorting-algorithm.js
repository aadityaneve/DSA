/* 
    New Sorting Algorithm -1:6:34
    Description

    Hassan has discovered his own sorting algorithm. The algorithm has following conditions:

    1. Given an integer k,  sort the values in the array according to their modulo with k. That is, if there are two integers a and b, and a%k < b%k, then a would come before b in the sorted array.

    2. If a%k = b%k, then the integer which comes first in the given array remains first in the sorted array.

    Your task is to write a program that sorts the given array as per above mentioned condition and print the sorted array.


    Input
    Input Format :

    The first line consists of two integers N and k, N being the number of elements in the array and k is the number with which we need to take the modulo.

    The next line consists of N space separated integers , denoting the elements of the array A.

    Constraints :

    N < 10000

    K < 1000000000

    Integers of array < 10000000000


    Output
    Print the modulo sorted array of the given array.


    Sample Input 1 

    5 6
    12 18 17 65 46
    Sample Output 1

    12 18 46 17 65
    Hint

    12%6=0

    18%6=0

    17%6=5

    65%6=5

    46%6=4

    So, the sorted order is: 12 18 46 17 65
*/


function swap(arr, index1, index2){
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}


function customSort(arr, size, K) {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if((arr[j] % K) > (arr[j+1] % K)){
                swap(arr, j, j+1);
            }
        }
    }
    console.log(arr.join(' '));
}


function runProgram(input) {

    input = input.trim().split('\n');

    var [size, K] = input[0].trim().split(' ').map(Number);
    var arr = input[1].trim().split(' ').map(Number);

    customSort(arr, size, K);

}
if (process.env.USERNAME === "aneve") {
    runProgram(`5 6
    12 18 17 65 46`);
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
    New Sorting Algorithm - Editorial
    Difficulty: Easy
    Prerequisite: Ad-Hoc, Implementation, Custom Sort, Sorting
    Problem Statement:
    You are given an integer array,Aof sizeN,and you have to sort the array, based on the value of the elements obtained, from the operationA[i]% K, whereKis a given positive integer, following the below rules

    Given an integer k, sort the values in the array according to their modulo with k. That is, if there are two integers a and b, and a%k < b%k, then a would come before b in the sorted array.
    If a%k = b%k, then the integer which comes first in the given array remains first in the sorted array.

    Hint:
    Since, you want to preserve the order of the elements if the values are equal which algorithm would be a good choice

    Short Explanation
    In this question, we are given an array of sizeN, such that we have to sort the values in the array, with respect to the values obtained from the equationA[i] % K, whereKis a given positive integer. Since, in this question, if two values have the same value for the given equation, we can use bubble sort, which will preven the order of the elements, and the swapping condition can be modified to achieve the desired result.

    Detailed Explanation
    This question basically wants to sort the array, such that the values are sorted based on their modulo with K
    For example, given an array →[12, 18, 17, 65, 46], and the value ofK = 6, we find the modulo of all the values in the array with K, which results in the following values
    12 % 6 = 0
    18 % 6 = 0
    17 % 6 = 5
    65 % 6 = 5
    46 % 6 = 4
    As you can see, the value obtained after modulo with K, for 46 is 4, and needs to be swapped with 17, as the modulo obtained for K with 17, is 5
    For 12 and 18, the order remains the same, as the modulo is 0 for both of them. Similarly, the order of 17 and 65 remains the same
    Our existing sorting algorithms can be modified to sort the array in the given fashion. The idea is to use the value of modulo obtained for K, to determine the decision to swap or not
    Pseudo Code
    function customSort(array[], k){
            n = array.length
            for (i = 0;i<n;i++){
                    for (j = 0;j<n-i-1;j++){
                            if ((array[j] % k) > (array[j + 1] % k)) swap(array,j,j+1)
                    }
            }
    }
    Time Complexity→
    Since we are modifying bubble sort as per our use, the time complexity will beO(N^2)

    Space Complexity→
    No extra space is used, therefore, the space complexity will beO(1)

    Alternate Solution:
    None.
*/