/* 
    Length & Recursion -2:14:22
    Description

    Given a string, S. Find the length of the string using recursion.

    Note: You are not allowed to use the length built-in property.


    Input
    Input Format

    The single line  consists of string S

    Constraints

    1<= S length <= 200


    Output
    Print length of the given string S.


    Sample Input 1 

    masaischool
    Sample Output 1

    11
*/


function lengthAndRecursion(string) {

    // console.log(string);
    var count = 0;
    function getLength(string) {

        if (string[count] == undefined) {
            return;
        }

        count++;
        getLength(string);
    }
    getLength(string);

    console.log(count);
}

function runProgram(input) {

    lengthAndRecursion(input);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`masaischool`);
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
    Length & Recursion- Editorial
    Difficulty: Low
    Prerequisite: Recursion
    Problem Statement:
    Given a string, S. Find the length of the string using recursion.

    Hint:
    None

    Short Explaination
    We need to find the length of the string using recursion, we can think about the base case to terminate the recursion i.e. to stop the recursion when we reach the end of string, also we can recur by moving the index starting from 0th index.

    Detailed Explanation:
    To find the length of the string we can use recursion, where we will start the recursion from 0th index and recur till we reach the NULL character present at the end of the string (this will act as the base case of the recursion).
    In each recursive call we will increment our current index and call the recursion by adding 1 to it to get the length of string.

    str = "abcde"
    intitally, index = 0, then we increment the index and do the next recursive call, i.e. index = 1

    Output = 5 

    This process will continue till be reach the Null character ('\0') present at the end of the string. 
    Pseudo Code
    lengthString(str,index) {
        If String is Null:
            return 0
        else
            return 1+lengthString(str,index+1)
    }
    Time Complexity:
    O(Length of String)

    Space Complexity:
    No extra space is required, hence the space complexity will be O(1).

    Alternate Solution:
    None.
*/