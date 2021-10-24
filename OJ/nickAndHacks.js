/*
    Nick and Hacks -2:6:47
    Description

    Tom and Nick are good friends.Once Tom asked Nick exactly N rupees, but Nick has only 1 rupee in his bank account.

    Nick wants to help his friend so he wrote two hacks First hack can multiply the amount of money he owns by 10,while the second can multiply it by 20. These hacks can be used any number of times.Can Nick help Tom with his hacks?


    Input
    Input Format :

    The first line of the input contains a single integer T denoting the number of test cases.

    The description of T test cases follows.The first and only line of each test case contains a single integer N.

    Constraints :

    1 <= T <= 100

    1 <= N <= 10^12


    Output
    For each test case, print a single line containing the string "Yes" if you can make exactly N rupees or "No" otherwise.


    Sample Input 1

    5
    1
    2
    10
    25
    200
    Sample Output 1

    Yes
    No
    Yes
    No
    Yes
    Hint

    Output Explanation :

    In the last case Nick can get Rs. 200 by first using 10x hack and then using 20x hack once.

    1 -> 10 -> 200
*/

function nickAndHacks(n) {

    // var product = 1;
    // var count = 0;
    function getAns(current, target) {
        // console.log(n);
        // console.log("Product: ",product);

        // func recursive(int current, int target)

        if (current == target) return true
        if (current > target) return false;
        if (getAns(10*current, target) == true || getAns(20*current, target) == true) return true
        return false;


        // if (n == product) {
        //     return "Yes";
        // }

        // count++;
        // if (count == 1) {
        //     getAns(n, product *= 10);
        // }
        // if (count == 2) {
        //     getAns(n, product *= 20);
        // }

        // if (n == product) {
        //     return "Yes";
        // }

        // return "No";
    }
    if(getAns(1, n)){
        console.log("Yes");
    }else{
        console.log("No");
    }
}

function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        nickAndHacks(+input[++line]);
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`5
    1
    2
    10
    25
    200`);
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
    Nick and Hacks - Editorial
    Difficulty: Low
    Prerequisite: Recursion:
    Problem Statement:
    Tom and Nick are good friends.Once Tom asked Nick exactly N rupees, but Nick has only 1 rupee in his bank account.

    Nick wants to help his friend so he wrote two hacks First hack can multiply the amount of money he owns by 10,while the second can multiply it by 20. These hacks can be used any number of times.Can Nick help Tom with his hacks?

    Hint:
    At each moment in time, you can only multiply the amount by either 10 or 20.

    Short Explaination
    We are given an amount, and we start with 1 unit in the account. We can only multiply, by either 10 or 20. At any point of time, if we are able to make the amount, then we should print "Yes", but if the current amount exceeds, the total amount, then answer will be "No".

    Detailed Explanation:
    An amount is given, and we need to find if the certain amount can be made or not. We start with 1 unit, and at each moment,we can multiply the current amount by either 10 or 20.A recursive function can be used to search the feasability, of making up the amount, by exploring the solution by multiplyin by 10 and 20. If any one of them results in a true value, we can say "Yes", else the answer will be "No".

    Pseudo Code
    func recursive(int current, int target)
    if (current == target) return true
    if (current > target) return false;
    if (recursive(10current, target)== true || recursive(20current,target)== true) return true
    return false;
    Time Complexity:
    Using the recurrence relation T(N) = T(N / 10) + T(N / 20) can give the time complexity as both of them are being explored.Ignoring the constants, the time complexity can be roughly said to be O(N), where N is the amount to be made.

    Space Complexity:
    No extra space is required. Therefore the space complexity will be O(1).

    Alternate Solution:
    None.
*/