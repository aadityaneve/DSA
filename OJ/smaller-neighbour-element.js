/* 
    Smaller Neighbour Element -0:31:34
    Description

    Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

    Mathematically,

    G[i] for an element A[i] is an element A[j] such that

    j is maximum possible AND

    j < i AND

    A[j] < A[i]

    Note: Elements for which no smaller element exist, consider next smaller element as -1.


    Input
    Input Format:

    First line contains an integer N denoting the number of elements in the array (not necessarily distinct).

    Second line contains N space separated integers denoting the elements of the array.

    Constraints:

    N <= 100000


    Output
    Print N space separated integers denoting the array G.


    Sample Input 1 

    8
    39 27 11 4 24 32 32 1
    Sample Output 1

    -1 -1 -1 -1 4 24 24 -1
*/

/* 
    Approach 2 : Using stack : Time Complexity O(N) : Space complexity O(N)
*/

var stack = [];
var top = -1;
var stackSize = 0;
var ans = [];

function push(data) {
    if (top === stackSize - 1) {
        // console.log(top);
        // console.log(stack.length);
        // console.log('Overflow');
    } else {
        top++;
        stack[top] = data;
        // stackSize++;
    }
}

function pop() {
    if (top === -1) {
        // console.log('Underflow');
    } else {
        stack.splice(top, 1);
        top--;
        stackSize--;
        return stack[top];
    }
}

function peek() {
    if (top === -1) {
        // console.log('Empty');
    } else {
        return stack[top];
    }
}

function smallerNeighboutElement(arr, size) {
    stackSize = size;

    for (let i = 0; i < size; i++) {
        // console.log(stack.length);
        // console.log(top);
        // console.log(peek());
        // console.log(stackSize);       
        // console.log('Arr : ',arr);
        while (stack.length > 0 && peek() >= arr[i]) {
            pop();
        }
        // console.log('Stack : ', stack);
        // console.log('Ans : ', ans);

        // console.log(stack.length);
        if (stack.length == 0) {
            ans[i] = -1;
        } else {
            ans[i] = peek();
        }

        push(arr[i]);
    }

    console.log(ans.join(' '));
}


function runProgram(input) {

    input = input.trim().split('\n');
    var size = +input[0];
    var arr = input[1].trim().split(' ').map(Number);

    smallerNeighboutElement(arr, size);

}
if (process.env.USERNAME === "aneve") {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
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
    Approach 1 : Traversing arrays : O(N^2)

    function smallerNeighboutElement(arr, size) {

    var newArr = [];
    var flag;
    for(let i=0;i<size;i++){
        flag = false;
        for(let j=i-1;j>=0;j--){
            if(arr[j] < arr[i]){
                // console.log(a[j]);
                newArr.push(arr[j]);
                flag = true;
                break;
            }
        }
        if(flag == false){
            // console.log(-1);
            newArr.push(-1);
        }
    }

    console.log(newArr.join(' '));
}

*/