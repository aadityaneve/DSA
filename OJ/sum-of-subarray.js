/* 
    Sum of subarray Ended
    Description

    You are given an array of N integers and a single integer K. You need to find out if there is a subarray, which has the sum exactly as K.


    Input
    Input Format

    First-line contains T, no of test cases.

    First-line of each test case contains N, the size of the array, and K.

    Second-lineof each test casecontains N spaced integers, elements of an array.

    Constraints

    1 <= T <= 10

    1 <= N <= 10^5

    1 <= A[i] <= 10^12

    1 <= K <= 10^12


    Output
    For each test case print "Yes", if there exists a subarray with sum K or else print "No".


    Sample Input 1 

    3
    5 3
    1 2 1 3 4
    4 5
    1 2 1 3
    3 2
    1 2 1
    Sample Output 1

    Yes
    No
    Yes
*/

------ not working ------

function sumOfSubarray(arr, size, K){

    var flag = 0;
    var left = 0;
    var right = size - 1;

    while(left < right){
        if(K != arr[left]+arr[right]){
            if(arr[left] >= K){
                left++;
            }
            if(arr[right] >= K){
                right--;
            }
            if(arr[right] < K || arr[left] < K){
                if(arr[left]+arr[right] == K){
                    flag = 1;
                    break;
                }else{
                    right--;
                }
            }else{
                right--;
            }
        }else{
            flag = 1;
            break;
        }
    }
    if(flag == 1){
        console.log("Yes");
    }else{
        console.log("No");
    }
    
}



function runProgram(input) {
    
    input = input.trim().split('\n');
    var line = 0;
    for(let i=0;i<+input[0];i++){
        var [size, K] = input[++line].trim().split(' ').map(Number);
        var arr = input[++line].trim().split(' ').map(Number);
        // console.log(arr, size ,K);
        sumOfSubarray(arr, size, K);
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`3
    5 3
    1 2 1 3 4
    4 5
    1 2 1 3
    3 2
    1 2 1`);
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
    Sum of Subarray - Editorial
    Difficulty: Medium
    Prerequisite: 1D Arrays, Key Value Pairs
    Problem Statement:
    In this problem, we are given an arrayAof sizeN, and a numberK. We have to find if there exists a subarray whose sum isK

    Short Explaination
    The simplest method is to consider every possible subarray of the given array, find the sum of the elements of each of those subarrays and check for the equality of the sum obtained with the given k. Whenever the sum equals k, we can printYes, as the sum will be found. But, this solution can be optimised further by making use of a key value pair, such that every time we get a sum, we check if the difference between the required sum, and the value obtained in the sum is present in the key value pair or not

    Detailed Explanation:
    The simplest method is to consider every possible subarray of the given array, find the sum of the elements of each of those subarrays and check for the equality of the sum obtained with the given k. Whenever the sum equals k, we can printYes, as the sum will be found.

    There is an idea if all the elements of the array are positive. If a subarray has sum greater than the given sum then there is no possibility that adding elements to the current subarray the sum will be x (given sum).

    Idea is to use a similar approach to a sliding window. Start with an empty subarray, add elements to the subarray until the sum is less than x. If the sum is greater than x, remove elements from the start of the current subarray.

    Based on these thoughts, we make use of a key value pair which is used to store the cumulative sum up to all the indices possible along with the number of times the same sum occurs. We store the data in the form: (sum_i, no. of occurrences of sum_i).

    We traverse over the array and keep on finding the cumulative sum. Every time we encounter a new sum, we make a new entry in the key value pair corresponding to that sum. If the same sum occurs again, we increment the count corresponding to that sum in the key value pair.Further, for every sum encountered, we also determine the number of times the sum sum-ksum−k has occurred already, since it will determine the number of times a subarray with sum kk has occurred up to the current index. We increment the countcount by the same amount.

    Pseudo Code
    function sumOfSubarray(array,N,k){
            key_value_pair  = []      
            sum = 0;
            key_valiue_pair[0] = 1
            for (int i =0;i<nums.length;i++){
                sum += nums[i];
                if (map.containsKey(sum - k)){
                    return true
                }
                map[sum] = map[sum] + 1
            }
            return false
    }

    Time Complexity
    We have to traverse the entire array, therefore, the time complexity will beO(N)

    Space Complexity
    All the subarray sums have to be added into the key value pair, therefore, the space complexity will beO(N)

    Alternate Solution:
    Brute Force
*/