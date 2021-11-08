/* 
    Array Equation Ended
    Description

    You are given a mathematical equationA * (X) + B * (Y) = Z, whereXis the sum of even numbers in the array, andYis the sum of odd numbers in the array, andA = 2andB = 3are constants.

    Solve the given equation.

    Refer the sample I/O for better understanding.


    Input
    The first line of the input contains three integers, the value ofN, where N is the size of the array.

    The next line contains N space separated integers denoting the integers of the array.

    Constraints

    1 <=A, B<= 10

    1 <=N<= 100

    1 <=A[i]<= 100


    Output
    Print a single integer, which denotes the value of the equation, based on the values given in the input.


    Sample Input 1 

    5
    1 2 3 4 5
    Sample Output 1

    39
    Hint

    In the sample test case, the value ofA = 2and that ofB = 3, and the value ofN = 5.

    The even numbers in the array are2, 4, and that of odd numbers in the array are1,3,5.

    Therefore, the sum of the even numbers in the array is6, and that of the odd numbers in the array is9.

    Finally solving the equation,(2)*(6) + (3)*(9) = 12 + 27 = 39.

    Therefore, the required output is 39.
*/

function arrayEquation(arr, size) {

    let evenSum = 0;
    let oddSum = 0;
    A = 2;
    B = 3;

    for( let i = 0; i< arr.length; i++){
        if(arr[i]%2 == 0){
            evenSum+=arr[i];
        }else if(arr[i]%2 != 0){
            oddSum+=arr[i];
        }
    }

    let ans = (A * (evenSum)) + (B * (oddSum));
    console.log(ans)

}

function runProgram(input) {
    
    input = input.trim().split('\n');
    var size = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    arrayEquation(arr, size);

}
if (process.env.USERNAME === "aneve") {
    runProgram(`5
    1 2 3 4 5`);
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
