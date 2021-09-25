/* 
    King & Collection of Taxes -0:2:12
    Description

    The King of Somerville, is a noble king, and is considerate about his citizens. After the recent survey, he found out that the amount of tax paying citizens in his kingdom is 2N. So, he decides to impose a new rule on his kingdom for the collection of taxes. He decides that all the people will be divided into groups of 2 each, and the tax collected from each group will be equal to the maximum of the tax amount of the two members. To take care of his poor citizens, he decides a strategy. At every iteration, the citizen which has the minimum tax amount, and is not part of any other group is paired with the citizen, which has the maximum tax amount, and is not part of any other group.

    You are given an array of size 2N, and the elements of the array denote the tax amount of the citizens. Find out the tax collected if the citizens are divided into groups using the above strategy.


    Input
    The first line contains N, the total number of groups that can be formed, if each group contains 2 members. The next line contains 2N space separated integers indicating the tax amount that the citizens have to pay.

    Constraints
    1 <= N <= 10^5

    1 <= A[i] <= 100


    Output
    Print single integer, denoting the total tax amount collected if the divison happens using the strategy discussed in the problem statement.


    Sample Input 1 

    2
    1 3 1 2
    Sample Output 1

    5
    Hint

    Using the above strategy, the citizen at index 0 is paired with citizen at index 1, and the citizen at index 2 is paired with citizen at index 3, giving the total tax collected equals to 5
*/


function kingAndCollectionOfTaxes(arr, groups) {
    var sum = 0;
    arr = arr.sort((a,b) => b-a);
    // console.log(arr);
    for(let i=0;i<arr.length/2;i++){
        sum+=arr[i];
    }
    console.log(sum);
}


function runProgram(input) {

    input = input.trim().split('\n');

    var groups = +input[0];
    var arr = input[1].trim().split(' ').map(Number);

    kingAndCollectionOfTaxes(arr, groups);

}
if (process.env.USERNAME === "aneve") {
    runProgram(`2
    1 3 1 2`);
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
    King & Collection of Taxes - Editorial
    Difficulty: Low
    Prerequisite: Sorting
    Problem Statement:
    You are given an array of size2N, and you have to makeNpairs out of it, such that at each step, the smallest value not part of any other group, is paired with the largest value not part of any other group. The maximum value is taken from each group, and then the sum of all the values is to be printed

    Hint:
    How can you pair elements, according to the condition given in the question

    Short Explaination
    In this question, you are given an unsorted array, and you have to makeNpairs such that at each step, the smallest value not part of any other group, is paired with the largest value not part of any other group. The maximum value is taken from each group, and then the sum of all the values is to be printed. But, since we are only interested in the maximum values in each group, we can sort the array in descending order, and find the sum of values in the first half, which will be the required output

    Detailed Explanation:
    In this question, you are given an unsorted array, and you have to makeNpairs such that at each step, the smallest value not part of any other group, is paired with the largest value not part of any other group.

    The maximum value is taken from each group, and then the sum of all the values is to be printed.

    But, since we are only interested in the maximum values in each group, we can sort the array in descending order, and find the sum of values in the first half, which will be the required output

    For example,`

    [1 2 2 1 3 1]

    After sorting this, it becomes

    [1 1 1 2 2 3]Now, we can find the sum of the elements in the second half of the array which are 2 2 3 , because we are only interested in the maximum elements in each group. So, the elements will be 2 2 3 . So, their sum becomes 2 + 2 + 3 = 7 , which is the required answer

    Another way to do this is, sort the array in descending order, so that the array becomes3 2 2 1 1 1

    And now, we have to find the sum of elements in the first half of the array - so that the sum becomes 3 + 2 + 2 = 7 which is the required answer


    - The constraints are such that the `Selection Sort` or `Bubble Sort` will result in a TLE. Therefore, in built sort must be used


    ### **Pseudo Code**

    ```java
    function findTax(arr[], N){
        //sort the array in descending order
        sum = 0;
        //Since array size is 2N, then half of it will be N
        for (i = 0;i<N;i++){
            sum += arr[i];
        }
        print (sum)
    }

    Time Complexity
    The time complexity of the inbuilt sort isO(NlogN), which will be the required time complexity

    Space Complexity
    No extra space is required, therefore, the time complexity will be O(1).

    Alternate Solution:
    None.
*/