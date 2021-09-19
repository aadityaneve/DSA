/* 
    Take out maximum Ended
    Description

    Given an array of integers and a number k, find the maximum sum of a subarray of size k.


    Input
    Input Format

    First line consists of two integers n and k separated by space

    Second line consists of n integers separated by spaces.

    Constraints

    1 <= n <= 10^7

    1 <= k <= 10^6


    Output
    Print the maximum sum of a subarray of size k.


    Sample Input 1 

    10 3
    -1 -1 -2 1 -2 4 1 9 3 9
    Sample Output 1

    21
*/



function takeOutMaximum(arr, size, k) {
    var sum = 0;
    var maxSum = 0;
    for(let i=0;i<size-(k-1);i++){
        if(i == 0){
            for(let j=0;j<k;j++){
                sum+=arr[j];
                
            }
            // console.log(sum);
        }else{            
            sum+=arr[i+(k-1)];            
            sum-=arr[i-1];
            // console.log(sum);
        }       
        if(sum > maxSum){
            maxSum = sum;
        }
        
    }
    // console.log(sum);

    console.log(maxSum);
}

function runProgram(input) {
    input = input.trim().split('\n');
    [string1, string2] = input;
    [size, k] = string1.trim().split(' ').map(Number);
    var array = string2.trim().split(' ').map(Number);
    takeOutMaximum(array, size, k);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`10 3
    -1 -1 -2 1 -2 4 1 9 3 9`);
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
    Take Out Maximum - Editorial
    Difficulty: Low
    Prerequisite: Sliding Window
    Problem Statement:
    In this problem, we are given an array of sizeN, and we have to find the largest possible sum that can be generated from a subarray of sizeK, from the given array

    Hint:
    How will you find the sum of individual subarrays of sizeK?

    Short Explaination
    In this problem,we are given an arrayAof sizeN, and a numberK, such that we have to find the largest possible sum from a subarray of sizeKfor the given array. All subarrays of sizeK, can be found out in linear time complexity by Sliding Window Technique. Now, to find the sum of a subarray of size K, a little observation can be made, such that moving the window along the array, the left most element in the subarray is deleted, while one element is added to the right side of it. This idea can be used such that each of the subarray does not have to be traveresed completely for each subarray. Maximum sum is then found out from all the possible subarray sums

    Detailed Explanation:
    In this problem, we are given an array of sizeN, and we have to find the largest possible sum that can be generated from a subarray of sizeK, from the given array

    Now, using sliding window technique,we can easily find out the length of all subarrays of sizeK.

    Now, to find the sum of each individual subarray, the intuitive way would be traverse the entire subarray, and find the sum of each element.

    But, one interesting observation can be made here, such that as the window moves over the rest of the array, then at each step, left most element from each subarray is removed, and one element is added to the right side of it

    This can help us from traversing/visiting the elements again and again, while finding the sum.

    For example, consider the example

    array = [1,5,3,1,2]

    In this case, we have to find the subarray of size K = 3

    So, we initially find the sum of subarray of size 3, starting from the left of the array,such that

    sum -> 1 + 5 + 3 = 9

    Now, as we move rightwards to the rest of the array, we remove the left most element, and add the right most element, newly added.

    sum -> 9 - 1 + 1 = 9

    sum -> 9 - 5 + 2 = 6

    Therefore, the sum of all subarrays of size 3 is obtained, and as evident the largest one is 9, which is the required answer

    Pseudo Code

    function takeOutMaximum(arr,k){
            max = 0;
            sum = 0;
            for (i=0;i<k;i++) {
            sum += arr[i];
            }
            max = Maximum(sum,max);
            for (i=k;i<arr.length;i++){
            sum -= arr[i-k];
            sum += arr[i];
            max = Maximum(sum,max);
            }
            return max;
    }

    Time Complexity
    We have to traverse the entire array once, therefore, the time complexity isO(N), where N is the size of the array

    Space Complexity
    No extra space is required, therefore the space complexity will beO(1)

    Alternate Solution:
    None


*/