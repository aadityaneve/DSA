/* 
    Common Index of an Array -0:0:28
    Description

    You are given two sorted arraysAandBof sizeNandM.
    You have to find the list of elements common in both the arrays
    The resultant list should also be sorted.
    Note: If there are not elements common in both the arrays, then print-1


    Input
    The first line of the input containsT, the number of test cases

    The first line of each test case, containsN, the number of elements in the arrayA

    The second line of each test case containsNspace separated integers denoting the elements of the arrayA

    The next line containsM, the number of elements in the arrayB.

    The next line containsMspace separated integers denoting the elements of the arrayB.

    Constraints

    1 <= T <= 10

    1 <=N, M<= 10^7

    1 <=A[i], B[i]<= 10^7


    Output
    For each test case, print the number of elements common in both the arrays on a single line, in ascending order,-1if no elements are common between the two arrays, on a new line.


    Sample Input 1 

    2
    6
    1 2 3 4 5 6
    3
    3 3 5
    4 
    1 2 3 4
    4 
    5 6 7 8
    Sample Output 1

    3 5
    -1
    Hint

    In the first test case, the number of elements common in the two arrays are3, 5, which is the required output.

    In the second test case, there are no common elements between the two arrays, therefore, the output is-1
*/



function commonIndexOfAnArray(arr1, N, arr2, M){

    first = 0;
    second = 0;
    ans = [];
    while(first < N && second < M){
        if(arr1[first] == arr2[second]){
            ans.push(arr1[first]);
            first++;
            second++;
        }else if(arr1[first] > arr2[second]){
            second++;
        }else{
            first++;
        }
    }
    if(ans.length == 0){
        console.log(-1);
    }else{
        console.log(ans.join(' '));
    }    
}


function runProgram(input) {
    
    input = input.trim().split('\n');
    var line = 0;

    for(let i=0;i<+input[0];i++){
        var N = +input[++line];
        var A = input[++line].trim().split(' ').map(Number);
        var M = +input[++line];
        var B = input[++line].trim().split(' ').map(Number);

        // console.log(A, N, B, M);

        commonIndexOfAnArray(A, N, B, M);
    }

}
if (process.env.USERNAME === "aneve") {
    runProgram(`2
    6
    1 2 3 4 5 6
    3
    3 3 5
    4 
    1 2 3 4
    4 
    5 6 7 8`);
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
    Common Index of an Array - Editorial
    Difficulty: Low
    Prerequisite: Implementation, Two Pointers
    Problem Statement:
    In this question, we are given two sorted arrays, such that we have to find all the elements common in both the arrays

    Hint:
    How can you make use of the fact that the arrays are sorted

    Short Explaination
    In this question, we are given two sorted arrays, and we have to find all the elements common in both the arrays. A brute force solution to this will be to fix one element in the first array, and find the presence of the element in the second array. But, the worst case time complexity will beO(N^2), and since the size ofNcan go till10^7, the brute force solution will result inTLE. We can make use of the fact that the arrays are sorted, such that we have to pointers, one pointing to the start of the first array, and another pointing to the start of the second array. Now, there can be three conditions in this case, the value indicated in the first array is greater than the value in the second array, so we move the second pointer towards right, because of the fact that the arrays are sorted. If the value indicated by the second array is greater than the value indicated in the first array, we move the first pointer towards right, else if the values are equal,we move both the pointers towards right, by storing the current value. Finally, once any one of them has reached the end of the respective arrays, the loop will be terminated, and we will stop checking

    Detailed Explanation:
    In this question, we are given two sorted arrays, and we have to find all the elements common in both the arrays.

    A brute force solution to this will be to fix one element in the first array, and find the presence of the element in the second array. But, the worst case time complexity will beO(N^2), and since the size ofNcan go till10^7, the brute force solution will result inTLE.

    We can make use of the fact that the arrays are sorted, such that we have to pointers, one pointing to the start of the first array, and another pointing to the start of the second array.

    Now, there can be three conditions in this case

    The value indicated in the pointer in the first array is greater than the value indicated by the pointer indicated in the second array, so we move the second pointer towards right, because of the fact that the arrays are sorted.
    If the value indicated by the pointer of the second array is greater than the value indicated by the pointer in the first array, we move the first pointer towards right
    If the values are equal,we move both the pointers towards right, by storing the current value.
    Finally, once any one of them has reached the end of the respective arrays, the loop will be terminated, and we will stop checking

    For example, consider the following example

    array_1 = [1,1,1,3,3]

    array_2 = [1,1,2,3]

    Let's say the pointer pointing towards the first array is called, first, and the pointer pointing towards the second array is second

    So, initially first = 0, second = 0

    We can keep an answer array, which will keep track of the values found common

    1. So, when first = 0, and second = 0, then array_1[first] = 1, and array_2[second] = 1, since the values are equal, we push the value in the answer array, and increment both the pointers. So, after the first step, first = 1, second = 1, answer = [1]

    2. In the second step, array_1[first] = 1, and array_2[second] = 1, since the values are equal, we push the value in the answer array, and increment both the pointers. So, after the first step, first = 2, second = 2, answer = [1,1]

    3. In the third step, array_1[first] = 1, and array_2[second] = 2, since the value indicated by the second pointer is greater, therefore, we increment the value of first. Therefore, after the third step, first = 3, second = 2, answer = [1,1]

    4. In the fourth step, array_1[first] = 3, and array_2[second] = 2, since the value indicated by the first pointer is greater, therefore,
    we increment the value of second. Therefore, after the fourth step, first = 3, second = 3, answer = [1,1]

    5. In the fifth step, array_1[first] = 3, and array_2[second] = 3. Since, the values are equal, we push the value in the answer array, and increment both the pointers. Therefore, after th fifth step, first = 4, second = 4, answer = [1,1,3]

    6. After this step, we will have to stop, since we have already gone beyond the second array. Therefore, the required answer is [1,1,3], which indicates all the elements common in both the arrays

    Pseudo Code
    function commonIndexofArray(arr1[],arr2[])
            first = 0;
            second = 0;
            ans = [];
            while(first < arr1.length && second < arr2.length){
                if (arr1[first] == arr2[second]){
                    ans.push(arr1[first]);
                    first++;
                    second++;
                }else if (arr1[first] > arr2[second]) {
                    second++;
                }
                else{
                    first++;
                }
            }
            return ans

    Time Complexity
    In the worst case, we will have to traverse the entire array, so the time complexity will beO(maximum(N1,N2)), whereN1andN2, are the size of the two arrays

    Space Complexity
    If we consider the output array, then the space complexity will beO(M), whereMrefers to the number of elements common in both the arrays

    Alternate Solution:
    A solution involving key value pairs can be thought of such that the keys contain the unique elements in the array, while the value contain their frequency. Now, the common keys in the two arrays are considered, and the minimum of the two values is taken
*/