/* 
    Nearest Greater Element Ended
    Description

    You are given an array A of size N. For each element, print the closest greater element, to that particular element. If there is no greater element for a particular element, print -1.

    If the two values, are equidistant from a particular value, print the value that occurs to the left of it.

    Refer the sample I/O for better understanding


    Input
    The first line of the input contains T, the number of test cases. The first line of each test case contains N, the size of the array.

    The next line contains N space separated integers, denoting the array elements.

    Constraints

    1 <= T <= 10

    1 <= N <= 10^5

    1 <= A[i] <= 10^4


    Output
    For each test case, print N space separated integers, denoting the nearest greater element in the array, and -1, if no such element exists, on a new line.


    Sample Input 1 

    1
    5
    5 4 1 3 2
    Sample Output 1

    -1 5 4 4 3
    Hint

    In the sample test case, the first element 5 has no element greater than it, either to the left of it, or to the right of it, therefore, the output is -1.

    The second element 4 has only one element greater than it, which is 5, which occurs to the left of it, therefore, the output for 4 is 5.

    The third element is 1, which has four elements greater than it in the array, which are {5,4,3,2}. The closest to 1 are {4,3}, but 4 occurs to the left side. therefore, the output is 4.

    The fourth element is 3, the elements greater than 3 in the array are {4,5} which both occur to the left of it. But the closer one is 4, therefore, the output is 4.

    The fifth element 2 has three elements greater than it, {5,4,3}. The value closest to the element 2 is 3, therefore, the output is 3.
*/

function isEmpty(array) {
    return array.length == 0 ? true : false;
}


function nearestGreaterElement(arr, size) {

    var left = [];
    var right = [];
    var ans = [];
    var stack = [];
    var i = 0;

    // Solving for left
    var i = 0;
    stack = [];
    while (i < size) {

        while (!isEmpty(stack) && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }
        if (isEmpty(stack)) {
            left[i] = -1;
        }
        else {
            left[i] = stack[stack.length - 1];
        }
        stack.push(i);

        i++;
    }
    // console.log(left);

    // Solving for right
    i = size - 1;
    while (i >= 0) {

        while (!isEmpty(stack) && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }
        if (isEmpty(stack)) {
            right[i] = -1;
        } else {
            right[i] = stack[stack.length - 1];
        }
        stack.push(i);

        i--;
    }
    // console.log(right);

    // Solving for ans array
    i = 0;
    while (i < size) {

        if (left[i] == -1 && right[i] == -1) {
            ans.push(-1);
        }
        else if (left[i] == -1 && right[i] != -1) {
            ans.push(arr[right[i]]);
        }
        else if (right[i] == -1 && left[i] != -1) {
            ans.push(arr[left[i]]);
        }
        else {
            //finding the absolute difference
            let temp1 = Math.abs(i - left[i]);
            // finding the absolute difference
            let temp2 = Math.abs(i - right[i]);
            ans.push(temp1 > temp2 ? arr[right[i]] : arr[left[i]]);
        }

        i++;
    }

    // console.log(left);
    // console.log(right);
    // console.log(ans);
    console.log(ans.join(' '));
    // console.log(newArr.join(' '));

}

function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        var size = +input[++line];
        var arr = input[++line].trim().split(' ').map(Number);
        nearestGreaterElement(arr, size);
    }
}

if (process.env.USERNAME === "aneve") {
    runProgram(`1
    5
3 2 1 3 1`);
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










// if (left[i] && right[i] == -1) {
//     // both -1 then store -1
//     ans.push(left[i]);
// } else if (i == Math.floor(size / 2)) {
//     // i is at equidistant then store lesser value in between left and right
//     if (arr[left[i]] < arr[right[i]]) {
//         ans.push(arr[left[i]]);
//     } else {
//         ans.push(arr[right[i]]);
//     }
// } else {
//     // store greater value between left and right

//     if(left[i] < 0 && right[i] >= 0){
//         ans.push(arr[right[i]]);
//       }else if(right[i] < 0 && left[i] >= 0){
//           ans.push(arr[left[i]]);                
//       }else {
//           if (arr[left[i]] > arr[right[i]]) {
//               ans.push(arr[left[i]]);
//           } else {
//               ans.push(arr[right[i]]);
//           }

//       }

// }
















/*
    Nearest Greater Element - Editorial
    Difficulty - Medium
    Prerequisite: Stacks
    Problem Statement:

    You are given an arrayAof sizeN. You have to find the closest greater element for each element in the array. If there are no elements greater than a particular element, print -1. If there are two elements which are equidistant from the two elements, then print the one that occurs to the left of it
    Hint:

    You can find the smaller elements to the left and right. How can you find out the closer one, if you can find the closer ones to the left and right

    Short Explanation:

    You are given an arrayAof sizeN. You have to find the closest greater element for each element in the array. If there are no elements greater than a particular element, print -1. If there are two elements which are equidistant from the two elements, then print the one that occurs to the left of it. Now, to solve this problem optimally, we can find the elements to the left of it, and to the right of it, and find out the position of the elements instead of the values. Then, for each element, we find the difference of the current index from the left and the right, and then choose the one which is smaller. Now, since we already have the index, we can directly get the values for each element. If, there are no greater elements to the left and right, then answer will be -1, and if the distance is equal in both the directions, then we choose the one on the left
    Detailed Explanation:

    You are given an arrayAof sizeN. You have to find the closest greater element for each element in the array. If there are no elements greater than a particular element, print -1. If there are two elements which are equidistant from the two elements, then print the one that occurs to the left of it.

    Now, of course the brute force solution involves, looking for the elements in both the directions, but the worst case time complexity will beO(N^2), which given the constraints, will throw aTLE

    Now, to solve this problem optimally, we can find the elements to the left of it, and to the right of it, and find out the position of the elements instead of the values.

    Then, for each element, we find the difference of the current index from the left and the right, and then choose the one which is smaller.

    Now, since we already have the index, we can directly get the values for each element. If, there are no greater elements to the left and right, then answer will be -1, and if the distance is equal in both the directions, then we choose the one on the left

    For example, consider the following test case

    N = 7

    array = [6 5 7 8 4 3 9]

    Now, the left array contains the position of the nearest greater element for each element towards the left, and -1 if no greater element occurs. Therefore,

    left = [-1 0 -1 -1 3 4 -1]

    Similarly, right array contains the position of the nearest greater element for each element towards the right, and -1 if no greater element occurs. Therefore,

    right = [2 2 3 6 6 6 -1]

    Now, for each element we compare the distance of the left and the right element from the index of a particular element, given the value is not -1

    Therefore, the we get the final answer as

    ans = [7 6 8 9 8 4 -1]

    The closest greater element for each element
    Pseudo code:

    function left(a[]){
        left[] = []
        Stack = []
        for (int i=0;i<a.length;i++){
        while(!stack.isEmpty() && a[stack.peek()] <= a[i]) stack.pop();
        if (stack.isEmpty()) ans[i] = -1;
        else{
            ans[i] = stack.peek();
        }
        stack.push(i);
        }
        return left;
    }

    function right(a[]){
        right = []
        stack = [];
        for (int i=a.length-1;i>=0;i--){
        while(!stack.isEmpty() && a[stack.peek()] <= a[i]) stack.pop();
        if (stack.isEmpty()) ans[i] = -1;
        else{
            ans[i] = stack.peek();
        }
        stack.push(i);
        }
        return right;
    }

    function getAnswer(left[], right[]){
        ans = [];
        for (int i=0;i<left.length;i++){
        if (left[i] == -1 && right[i] == -1) ans[i] = -1;
        else if (left[i] == -1) ans[i] = right[i];
        else if (right[i] == -1) ans[i] = left[i];
        else{
            int temp1 = Math.abs(i - left[i]); //finding the absolute difference
            int temp2 = Math.abs(i - right[i]); // finding the absolute difference
            ans[i] = temp1 > temp2 ? right[i] : left[i];
        }
        }
        return ans;
    }
    Time Complexity

    Three individual functions have the time complexity ofO(N). Therefore, the overall time complexity becomesO(N)

    Space Complexity

    Extra space is required. Therefore, the space complexity isO(N)

    Alternate Solution:

    None
*/

