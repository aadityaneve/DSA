/* 
    Subarray and Sum Ended
    Description

    Given an array of integers of length n and a positive integer K, the task is to find the count of the longest possible subarrays with the sum of its elements not divisible by K.


    Input
    Input Format

    First line contains n and k separated by space

    Second line contains strings of length n.

    Constraints

    1 <= n <=10^6

    1 <= k <= 100


    Output
    Print count of sub arrays.


    Sample Input 1 

    4 3
    2 3 4 6
    Sample Output 1

    1
    Hint

    Sample 1 Explanation

    There is only one longest possible subarray of size 3 i.e. {3, 4, 6} having a sum 13, which is not divisible by K = 3.
*/


------- logic not working... need to work more ---- see editorial given ------

function subarrayAndSum(arr, size, K) {

    var left = -1;
    var right = 0;
    var count = 0;
    var sum = 0;

    for (let i = 0; i < size; i++) {
        if (arr[i] % K != 0) {
            if (left == -1) {
                left = i;
            } else {
                // console.log(arr[i]);
                right = i;
                sum += arr[i];
            }
        } else {
            // console.log(arr[i]);
            sum += arr[i];
        }

        if (sum % K != 0) {
            return 1;
        }
        if (left == -1) {
            return 0;
        }
        left = left + 1;
        right = size - right;
        return Math.min(left, right);
    }


    // console.log(count);


}

function runProgram(input) {
    input = input.trim().split('\n');
    [size, K] = input[0].trim().split(' ').map(Number);
    var arr = input[1].trim().split(' ').map(Number);

    console.log(subarrayAndSum(arr, size, K));
}
if (process.env.USERNAME === "aneve") {
    runProgram(`5 3
    3 2 2 2 3`);
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
    Subarray and Sum- Editorial
    Difficulty: Medium
    Prerequisite: 1D Arrays, Sliding Window
    Problem Statement:
    In this problem, we are given an array of sizeN, and we have to find the number of subarrays of the largest possible length, such that the sum of all the elements of the subarrays is not divisible by a numberK.

    Hint:
    If a given sum is divisible byK, what values should be divisible byK, so that the sum becomes not divisible byK

    Short Explaination
    In this problem, we are given an arrayAof sizeN, such that we have to find the count of longest possible subarrays, such that the sum is not divisible byK. This question, can be broken down into two parts, one, we find the longest possible subarray such that the sum is not divisible byK, and in the second step, we find the sum of all subarrays of the size obtained in the previous step, and find out how many of them have sum not divisible byK, which will be the required answer.

    Detailed Explanation:
    In this problem,Given an array of integers of length n and a positive integer K, the task is to find the count of the longest possible subarrays with the sum of its elements not divisible by K

    The intuitive approach to solve this problem would be to generate all subarrays of the given array, and find out the the longest subarrays having sum not divisible by K, and then how many subarrays exists of the given length

    But, the above approach is very costly in terms of the complexity analysis of the solution. This solution can be further improved. This problem can be broken down into the following subproblems

    Finding the length of the longest subarray having sum not divisible by K
    Finding the number of subarrays of the given length with sum not divisible by K
    The second problem can be solved in linear time using the sliding window, but for the first problem, we need to understand some facts

    A number if originally divisible by a number K, will remain divisible by K, if a number which is itself divisible by K, is subtracted from it. For example, the number 90 is divisible by 3. If we subtract 27 from it, which is divisible by 3, then the new value will also be divisible by 3. The value obtained from subtracting 27 from 90, is 63, which is divisible by 3

    Therefore, to make a sum not divisible by K, we have to subtract a number from K, which is not divisible by K. Therefore, in the array we try to find out the left most value not divisible by K, and also the right most value by K

    Our goal is to find the largest substring with sum not divisible by K, therefore, the sum remaining after removing the value before and including the left most value not divisible by K, will be not divisible by K. Similarly, the sum of the rest of the elements obtained after removing the right most element not divisible by K, and all the values after it, will also be not divisible by K

    For example, consider the array → [2,3,4,6], and K = 3. The left most element not divisible by K is 2, stored at index 0, while the right most element not divisible by K = 4, stored at index 2. So, we can either remove one element from the left, or two elements from right. But, since we want the subarray to be of maximum size, we will remove the element from the left

    Therefore, after removing one element from the array, then the size of the subarray, not divisible by K is 3, which is the largest possible, so we find the count of all subarrays which have size 3, and have a sum not divisible by K

    There are two edge cases to this approach, the first one being if the total sum of the array is not divisible by K, in that case, the longest subarray, with sum not divisible by K, is the array itself, and there can only be 1 subarray equal to the size of the array, therefore, the answer is 1
    The second edge case, is when the there are no elements not divisible by K, which makes it impossible to have a non empty subarray, with sum not divisible by K. Therefore, the count is 0 in that case. We need to ensure that these two edge cases are taken care of
    Pseudo Code
    function longestSubarray(array[],k){
        left = -1
        right = 0
        sum = 0;
        for (i = 0;i<array.length;i++){
            if (array[i] % k != 0){
                if (left == -1) left = i
                right = i
            }
            sum += array[i]
        }
        if (sum % k != 0) return 1
        if (left == -1) return 0
        left = left + 1
        right = array.length - right
        max_window_size = array.length - min(left,right)
        return window_size
    Time Complexity
    We have to traverse the entire array once, therefore, the time complexity isO(N), where N is the size of the array

    Space Complexity
    No extra space is required, therefore the space complexity will beO(1)

    Alternate Solution:
    Brute force
*/