/* 
    Lower bound in logn Ended
    Description

    You are given n different numbers and an integer k. Write a program that finds lower bound of k in log(n) time complexity. Lower bound of a number k in a sorted list is the index of the first number which is same as k, in case the number is not present, print -1 (here the answer is given considering index to be starting from 0)

    NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION.

    WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TO TRY THE LOGN SOLUTION.

    USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, WOULD LEAD TO DISQUALIFICATION.


    Input
    Input Format

    First line contains N and K

    Second line contains N space separated sorted integers

    Constraints

    N<100


    Output
    Output lower bound


    Sample Input 1 

    5 2
    1 1 2 2 5
    Sample Output 1

    2
    Sample Input 2 

    5 3
    1 1 2 2 5
    Sample Output 2

    -1
*/

function lowerBoundInLognIterativeWay(arr, K) {
    let low = 0;
    let high = arr.length - 1;
    let index = -1;
    while (low <= high) {
        let mid = parseInt(low + (high - low) / 2);
        if (arr[mid] >= K) {
            index = mid;
            high = mid - 1;
        } else if (arr[mid] > K) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return index;
}

function runProgram(input) {
    input = input.trim().split("\n");
    var line = 0;
    var [size, K] = input[0].trim().split(" ").map(Number);
    var arr = input[++line].trim().split(" ").map(Number);
    let lowerBound = lowerBoundInLognIterativeWay(arr, K);
    console.log(lowerBound);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`5 2
    1 1 2 2 5`);
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
    Lower Bound - Editorial
    Difficulty: Low
    Prerequisite: Binary Search
    Problem Statement:
    Given a sorted array arr[] of N integers and a number K, the task is to find the lower_bound() of K in the given array.

    Hint:
    None
    Short Explaination
    In this question,we are given a sorted array, and a number K, and we have to find the lower_bound() of the element K, in the given array. Since, the array is sorted, we can use binary search to find out the first occurence of the element.

    Detailed Explanation:
    For Example

    What is the lowest possible insertion position of11in the following array so that it will maintain the sorted order?

    **What is the lower bound of 11 ->**
    +---+---+---+---+----+----+----+----+----+----+----+
    | 2 | 3 | 5 | 7 | 11 | 11 | 13 | 17 | 19 | 23 | 29 |
    +---+---+---+---+----+----+----+----+----+----+----+
    | 0 | 1 | 2 | 3 |  4 |  5 |  6 |  7 |  8 |  9 | 10 |
    +---+---+---+---+----+----+----+----+----+----+----+

    **Solution: 4

    * It is 4 because we can't push 11 into the index 3 as it will make the array unsorted.
    * On pushing the 11 into index number 4, then the array will shift right by one index.**

    Algorithm
    Intialise the low as 0 and high as N-1.
    Compare target number with the middle element of the array.
    If middle element is less than target then update left as mid + 1.
    Else update right as mid.
    Repeat the above steps while left < right.
    On above loop termination, the low is the lower bound of target in the given array.
    Pseudo Code
        function lowerbound(int[] array, int k) //This function finds out the lowerbound of K
            low = 0, high = array.length - 1
            ans = -1 //if the value of lowerbound is -1, indicating that the element is not present.
            while (low <= high)
                mid = low + (high - low)/2
                if (array[mid] == k)
                    ans = mid
                    high = mid - 1
                else if (array[mid] > k)
                    high = mid - 1
                else 
                    low = mid + 1
            return ans

    Time Complexity:
    The time complexity will beO(log(N)), where N is the size of the array.

    Space Complexity:
    O(1), no extra space required.

    Alternate Solution:
    None
*/
