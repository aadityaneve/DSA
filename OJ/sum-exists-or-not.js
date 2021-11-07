/* 
    Sum Exists or Not Ended
    Description

    Given an array of non-negative integers, and a value 'sum', determine if there is a subset of the given set (array) with sum equal to given sum.

    If there is a subset whose sum is equal to the required sum then print "yes" else print "no" without quotes.


    Input
    Input Format :

    The first line of input contains an integer N - denoting size of the array.

    The second line contains the N space seperated integers.

    The third line of input will contain S - the required Sum value.

    Constraints :

    1<=n<= 18

    1<=A[i]<=10^9


    Output
    Print "yes" or "no" without quotes.


    Sample Input 1 

    9
    1 2 3 4 5 6 7 8 9
    5
    Sample Output 1

    yes
*/

function sumExistsOrNot(arr, K) {
    let flag = false;
    function getSubset(arr, newArr, curr) {
        if (curr == arr.length) {
            // console.log(newArr);
            let sum = 0;
            for(let i = 0; i < newArr.length;i++){
                sum+=newArr[i];
            }
            if(sum == K){
                flag = true;
            }
            return;
        }

        // for (let i = curr; i < arr.length; i++) {
            getSubset(arr, newArr, curr + 1);
            getSubset(arr, newArr.concat(arr[curr]), curr + 1);
        // }
    }
    getSubset(arr, [], 0);
    if(flag == 1){
        console.log("yes");
    }else {
        console.log("no");
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var size = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var K = +input[2];

    sumExistsOrNot(arr, K);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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
    Sum Exists or Not - Editorial
    Difficulty: Medium
    Prerequisite: Backtracking, Recursion
    Problem Statement:
    We are given an arrayA, and we have to find out if there exists a subset of the given array, such that the sum of all values of the subset is equal toK

    Hint:
    How can you find out all subsets of the given array?

    Short Explaination
    In this question, we are given an arrayAof sizeN, and a valueK, and we have to find if there exists a subset, such that the sum of all values in the subset becomes equal toK. To do that, we use a backtracking solution to check for all the subsets, and for we each value in the array we have two options, either to include it or not to include it. We select one option, and then make recursive calls to the next position, and once the function call is complete, we backtrack to the previous state. If anyone of the subsets result in the required answer, then we can say that the required subset exists, else not

    Detailed Explanation:
    In this question, we are given an arrayAof sizeN, and a valueK, and we have to find if there exists a subset, such that the sum of all values in the subset becomes equal toK.

    To do that, we use a backtracking solution to check for all the subsets, and for we each value in the array we have two options, either to include it or not to include it.

    We select one option, and then make recursive calls to the next position, and once the function call is complete, we backtrack to the previous state.

    If anyone of the subsets result in the required answer, then we can say that the required subset exists, else not

    For example, consider the following test case

    array = [1 2 3 4]
    K = 3

    All the subsets of the given array are

    1
    1,2
    1,2,3
    1,2,3,4
    1,2,4
    1,3
    1,3,4
    1,4
    2
    2,3
    2,3,4
    2,4
    3
    3,4
    4

    On observation, we can see that the subsets with sum K = 3 exists, therefore, the answer is "yes"

    Pseudo Code
    flag = false //global variable to check if the answer exists or not
    function solve(arr[],k,sum,cur){
        if (sum == k){
        flag = true;
        }
        if (cur == arr.length){
        return ;
        }
        for (i = cur;i<arr.length;i++){
        solve(arr,k,sum,i+1); // Recursion call after not selecting the value
        solve(arr,k,sum + arr[i],i+1); //Recursion call after selecting the value
        }
    }

    //solve(arr,k,0,0) - Initial function call
    Alternate Solution:
    None
*/