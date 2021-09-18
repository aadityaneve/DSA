/* 
    Sum of Odd Numbers II -6320:18:28
    Description

    You are given an array stored in a variable with the namearr, whose size is stored in a variable with the nameN

    You have to find the sum of odd numbers present in the array

    You have to print the output based on the following two conditions
    1. If the sum of odd numbers present in the array is Odd, print "It is Odd", without quotes
    2. Else, print "It is Even", without quotes
    For example, consider the value stored inN = 3, andarr = [1 2 3]. Now, the odd numbers in the array are1,3. Therefore, the sum of odd numbers becomes1 + 3 = 4, which is an even number. Therefore, the required output isIt is Even

    Input
    In this question, there are multiple test cases, within each test case, but they are being handled from the backend

    The first line of the input contains the value stored inN

    The next line contains the value stored inarr


    Output
    Print the output as per the conditions mentioned in the problem statement

    Sample Input 1 

    2
    3
    1 2 3
    5
    2 2 2 2 1
    Sample Output 1

    It is Even
    It is Odd
    Hint

    In the first sample test case, the value stored inN = 3, andarr = [1 2 3]. Now, the odd numbers in the array are1,3. Therefore, the sum of odd numbers becomes1 + 3 = 4, which is an even number. Therefore, the required output isIt is Even

    In the second sample test case, the value stored inN = 5, andarr = [2 2 2 2 1]. Now, the only odd number in the array is1. Therefore, the sum of odd numbers in the array becomes1, which is an odd number. Therefore, the required output isIt is Odd
*/

function sumOfOddNumbers2(arr, size){
    var sum = 0;

    for(let i=0;i<size;i++){
        if(arr[i]%2 != 0){
            sum+=arr[i];
        }
    }
    
    if(sum%2 == 0){
        console.log("It is Even");
    }else{
        console.log("It is Odd");
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    var line = 0;
    for(let i=0;i<+input[0];i++){
        var size = +input[++line].trim();
        var arr = input[++line].trim().split(' ').map(Number);
        // console.log(size, arr);
        sumOfOddNumbers2(arr, size);
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`2
    3
    1 2 3
    5
    2 2 2 2 1`);
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