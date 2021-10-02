/* 
    Rotate the array returns back Ended
    Description

    You are given an array of n elements and an integer k, you need to rotate the array by k units.



    Input
    First-line contains t, which is the number of test cases

    For each test cases, first-line has n & k - the number of elements in the array and the number of times the array has to be rotated

    The second line of each test case contains n numbers which represent the elements of the array

    Constraints

    1<=T<=20

    1<=N<=50000, 0<=K<=1000000000

    1 <= Ai <= 1000000


    Output
    out put N elements, elements of the array , rotated by K units



    Sample Input 1 

    3
    2 1
    1 2
    2 2
    1 2
    3 1
    1 2 3
    Sample Output 1

    2 1
    1 2
    3 1 2
*/

-------- not working 100% --- still need to solve ------


function reverseFromTo(arr, left, right){
    // console.log(left+":"+right);
    //for(let i=left;i<=right;i++){
    while(left < right){
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }        
    //}
}

function rotateTheArrayReturnsBack(arr, size, K) {

    newSize = K % size;
    // console.log(276489384%11796);
    // console.log("K",K);

    // arr.reverse();
    // console.log(arr);
    var newArr = [];
    for(let i=size-1;i>=0;i--){
        newArr.push(arr[i]);
    }
    // reverseFromTo(arr, 0, size-1);
    // console.log(arr);
    var output = [];
    for(let i=newSize-1;i>=0;i--){
        output.push(newArr[i]);
    }

    for(let i=size-1;i>=newSize;i--){
        output.push(newArr[i]);
    }
    // reverseFromTo(newArr, 0, newSize-1);
    // console.log(arr);
    // reverseFromTo(newArr, newSize, size-1);
    console.log(output.join(' '));
}

function runProgram(input) {

    input = input.trim().split('\n');
    var totalArray = input[0].trim().split('').map(Number);

    var j = 0;
    for (let i = 0; i < totalArray; i++) {

        [size, K] = input[j + 1].trim().split(' ').map(Number);
        var arr = input[j + 2].trim().split(' ').map(Number);

        rotateTheArrayReturnsBack(arr, size, K);

        j += 2;
    }

}
if (process.env.USERNAME === "aneve") {
    runProgram(`3
    2 1
    1 2
    2 2
    1 2
    3 1
    1 2 3`);
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
    Rotate the array returns back - Editorial
    Difficulty: Low
    Prerequisite: Two Pointers, Ad-hoc
    Problem Statement:
    In this problem, we are given an array and we have to rotate the array byKunits

    Hint:
    Can you make some observations about the array after its rotation

    Short Explaination
    In this problem, we are given an arrayAof sizeN, and an integerK, and we have to rotate the array by K units. On observation, it can be found out that the resultant configuration in the array can be obtained after first reversing the array entirely, and then reversing the array in parts, from (start to k - 1), and then from the kth element till the end of the array

    Detailed Explanation:
    In this problem, we are given an arrayAof sizeN, and an integerK. We have to rotate the array byKunits

    On observation, it can be found out that the resultant configuration in the array can be obtained after first reversing the array entirely, and then reversing the array in parts, from (start to k - 1), and then from the kth element till the end of the array

    For example, consider the example given below`array = [1,2,3,4,5] and we have to rotate the array by K = 2 units
    After revresing the entire array, the array becomes

    array = [5,4,3,2,1]

    After reversing the array from (0,1) and then from (2,length of array), we get

    [4,5,1,2,3]

    which is the required answer

    - Now to reverse the array, two pointers can be helpful, such that one points to the left of the array, while another points to the right of array coming towards each other

    ### **Pseudo Code**

    function reverseArray(array, start, end){ while(start < end){ swap(arr,start,end); start++; end--; } return ;}

    `

    Time Complexity
    The reverse function in the worst case takes O(N) time, where N is the length of the array

    Space Complexity
    No extra space is required, therefore the space complexity will beO(1)

    Alternate Solution:
    None
*/