/* 
    Difference of K Ended
    Description

    You are given a sorted arrayAof sizeN, and another integerK
    You have to find if there exists a pair of integers with indexiandj, such thati != j, andA[i] - A[j] = k
    If such a pair exists, printYes, else printNo

    Input
    The first line of the input containsT, the number of test cases.

    The first line of each test case contains N and K, the size of the array and the value of K.

    The next line contains N space separated integers denoting the elements of the array

    Constraints

    1 <=T<= 10

    1 <=N<= 1000000

    -10^9 <=A[i]<= 10^9

    0 <= K <= 10^9


    Output
    For each test case, print "Yes", if the pair as described in the problem exists, else print "No", on a new line.


    Sample Input 1 

    2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5 
    Sample Output 1

    Yes
    No
    Hint

    In the sample test case, in the first test case, the value ofN = 5, and that ofK = 3. Upon observation, you can see the pairs with values(2, 5)or(1,4)have a difference of 3. Therefore, the output is Yes.

    In the second test case, no pair exists such that the difference between them is 8. Therefore, the output is No.
*/

function differenceOfK(arr, size, K) {
    var i = 0;
    var j = 0;
    while(i < size && j < size){
        var temp = arr[j] - arr[i];
        if(temp == K && i != j){
            return true;
        }
        if(temp < K){
            j++;
        }else{
            i++;
        }
    }
    return false;
}


function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        var [size, K] = input[++line].trim().split(' ').map(Number);
        var arr = input[++line].trim().split(' ').map(Number);

        // differenceOfK(arr, size, K);
        if(differenceOfK(arr, size, K)){
            console.log('Yes');
        }else{
            console.log('No');
        }
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5 `);
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
    Difference of K - Editorial
    Difficulty: Low
    Prerequisite: Two Pointers
    Problem Statement:
    We are given a sorted arrayAof sizeN, and an integerK, and we have to find out if there exists two indexesi and j, such thati != jand theA[i] - A[j] = K

    Hint:
    How can you make use of the fact that the array is sorted?

    Short Explaination
    In this question, we are given a sorted arrayA, and an integerK, and we have to find out if their exists two elements in the array, whose difference isK. The brute force approach will be to fix and element, and then search for the entire array, for another element, such that their difference isK. The worst case time complexity of this solution would beO(N^2). A better approach here, would be to make use of two pointers, both starting from the left end of the array, and trying to find the difference, such that if the value of the difference is lesser thanK, the second pointer is moved towards the right side, otherwise the left pointer is moved right. An extra check has to be done, to find out if left and right indicate to the same condition

    Detailed Explanation:
    In this question, we are given a sorted arrayA, and an integerK, and we have to find out if their exists two elements in the array, whose difference isK.

    The brute force approach will be to fix and element, and then search for the entire array, for another element, such that their difference isK. The worst case time complexity of this solution would beO(N^2).

    A better approach here, would be to make use of two pointers, both starting from the left end of the array, and trying to find the difference, such that if the value of the difference is lesser thanK, the second pointer is moved towards the right side, otherwise the left pointer is moved right. An extra check has to be done, to find out if left and right indicate to the same condition

    These conditions come up from the observation from the fact, that the array is sorted in ascending order. Therefore, if we have to make the difference larger, the pointers need to moved away from each other, else if the value is lesser than the required difference, then the pointers need to be moved towards each other to reduce the difference

    For example, consider the test case

    K =  3
    A -> [1 2 3 5 6]

    Initially, the two pointers, first and second both point to the starting index of the array (first = 0, second = 0)

    In the first iteration, both the pointers are pointing to the same index, and therefore, the difference is 0. Since, we want to make the difference larger, we move the second pointer towards the right by 1 step (first = 0, second = 1)

    In the second iteration, the value indicated by first is 1, while that by second is 2, hence, the difference between them is 1, which is lesser than K, so we further need to increase the difference, hence second pointer is moved further right (first = 0, second = 2)

    In the third iteration, the value indicated by first is 1, while that by second is 3, hence, the difference between them is 2, which is lesser than K, so we further need to increase the difference, hence second pointer is moved further right (first = 0, second = 3)

    In the fourth iteration, the value indicated by first is 1, while that by second is 5, hence, the difference between them is 4, which is greater than K, so we need to decrease the difference, hence first pointer is moved further right (first = 1, second = 3)

    In the fifth iteration, the value indicated by first is 2, while that by second is 5. Therefore, the difference between them is 3, which is the required difference. Therefore, we return Yes, and break out of the loop


    Pseudo Code:
    function differenceOfK(arr1){
            first = 0;
            second = 0;
            while(first < arr.length && second < arr.length){
                temp = arr[second] - arr[first];
                (temp == val && first != second) return true;
                if (temp < val) second++;
                else{
                    first++;
                }
            }
            return false;
    }

    Time Complexity:
    In the worst case, we will have to traverse the entire array once. Therefore, the time complexity will beO(N), where N is the length of the array

    Space Complexity:
    No extra space is required, therefore, the space complexity will beO(1)

    Alternate Solution:
    None
*/