/* 
    Such Pair Returns Ended
    Description

    For each test case, you are given N integers and K, your task is to write a program that prints "1" (without quotes) if there are 2 integers present in the array whose sum is K. Else print "-1" (without quotes).


    Input
    10^6Input Format :

    First line contains T, no of test cases.

    First line of each test case contains 2 space separated integers: N & K

    Second line of each test case contains **N** space separated integers

    Constraints :

    1 <= T <= 10

    1 <= N <=1000000

    1 <= abs(A[i]) <=10^6<= abs(K) <= 2*10^6




    Output
    Output 1/-1 depending on the condition for each test case on new line


    Sample Input 1 

    1
    5 2
    3 4 0 2 7
    Sample Output 1

    1
*/




function suchPairReturns(arr, N, K){

    arr.sort((a,b) => a-b);
    // console.log(arr);
    var left = 0;
    var right = arr.length-1;
    while(left < right){
        sum = arr[left] + arr[right];
        if(sum == K){
            return 1;
        }else if(sum > K){
            right--;
        }else{
            left++;
        }        
    }
    return -1;

}

function runProgram(input) {
    input = input.trim().split('\n');

    var j = 0;
    for (let i = 0; i < +input[0]; i++) {
        [N, K] = input[j + 1].trim().split(' ').map(Number);
        var arr = input[j + 2].trim().split(' ').map(Number);
        // console.log(N,K, arr);
        if(suchPairReturns(arr, N, K) == 1){
            console.log(1);
        }else{
            console.log(-1);
        }
        j += 2;
    }

}
if (process.env.USERNAME === "aneve") {
    runProgram(`10
    6 16
    2 0 2 5 -3 0
    9 3
    6 -6 -7 8 -4 8 -6 1 4
    1 -1
    1
    3 -3
    -2 3 0
    5 -9
    4 5 0 -3 3
    7 4
    1 2 1 6 -2 7 0
    7 -10
    2 -5 6 -1 5 -1 6
    4 -12
    1 -2 -3 -4
    6 0
    5 -6 5 5 3 0
    2 3
    -2 -2`);
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
    Such Pair Returns - Editorial
    Difficulty: Low
    Prerequisite: 1D Arrays, Two Pointer
    Problem Statement:
    In this problem, we are given a sorted arrayAof sizeN, and a numberK, and we have to find if there exists two integers whose sum is equal toKor not

    Short Explaination
    In this problem, we are given an array of integers, such that we have to find two indexes whose sum is equal toK. We can use the two pointer technique in this case, after sorting the array such that if the sum indicated by the values of the left and the right pointer is equal toK, so we move ahead, and print the indexes of these two. Since, the array is sorted, we can make decisions based on the fact that the sum is lesser or greater than the requires sumK. If the sum is lesser thanK, we move the left pointer to the right, while if the sum is greater thanK, we move the right pointer to the left

    Detailed Explanation:
    The problem statement states that,Given an array of integers, find out if there exists a pair of integers, whose sum is exactly equal to a given number K. If such a pair exists, print 1, else print -1

    The brute force approach to solve this problem, would be to select a number from the array, for example, we selectA[i], and then check if the numberK - A[i], exists in the array. The worst case time complexity of this solution is $O(N^2)$

    The time complexity can be further reduced to linear time complexity by maintaining a key value pair, and with the help of Key - Value Pair Objects,the search time can be reduced. But, the space complexity is increased to $O(N),$ in the worst case

    We can solve this problem without using extra space,with the help of two pointers technique

    We can sort the array, and then we maintain two pointers, one at the beginning of the array, and one at the end of it, and find the sum of the values indicated by the two pointers.

    If the sum of the values indicated by the two pointers is greater than that of K, than that means we have to make the sum smaller, and this is possible by shifting the right pointer towards left, since the array is sorted

    Similarly, if the value indicated by the two pointers is greater than that of K, than that means we have to make the sum larger, so by we shift the left pointer towards right

    If the sum of the two values indicated by the two pointers is exactly equal to K, than that means we have found the required sum, and we return the value of the left and the right pointer

    The following block shows a dry run of this approach

    array = [1,2,8,7,3] K = 5

    After sorting the array becomes, array = [1,2,3,7,8]
    Step 1 -> 1 2 3 7 8
            array[L]  = 1       array[R] = 8
    The sum of the values indicated by left and right is equal to 9, which is greater than K, so we move the right pointer one step to the left
    Step 2 -> 1 2 3 7 8
                    array[L]  = 1       array[R] = 7
    The sum of the values indicated by left and right is equal to 8, which is greater than K, so we move the right pointer one step to the left
    Step 3 -> 1 2 3 7 8
                    array[L] = 1   array[R] = 3
    The sum of the values indicated by the left and right pointers is 4, which is lesser than K, so we move the left pointer one step to the right
    Step 4 -> 1 2 3 7 8
                    array[L] = 2  array[R] = 3
    The sum of the values indicated by the left and the right pointer is 5, which is equal to K, so we return the values of the left and the right pointer

    Pseudo Code
    function sucPairReturns(array,k){
            sort(array)
            left = 0
            right = array.length - 1
            while(left < right){
                    sum = array[left] + array[right]
                    if (sum == k) return 1;
                    else if (sum > k) right--;
                    else{
                            left++
                    }
            }
            return -1
    }

    Time Complexity
    Sorting the array takesNlog(N)time, so the time complexity will beO(NlogN)

    Space Complexity
    No extra space is required, therefore the space complexity will beO(1)

    Alternate Solution:
    Brute Force
*/