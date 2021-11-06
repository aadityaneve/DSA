/* 
    Mr Robot - Elliot Ended
    Description

    Mr.Robot needs an encryption method, so Elliott was there to help him. At the same time, Richard wrote a paper on encryption. Elliott then started writing his algorithms with the help of paper from Richard but he needs your help in implementing. The algorithm is like this:

    Given an input string, the encrypted string will start with the middle character of the string and will be formed henceforth with the middle characters of the left and right substrings (of the middle character of the word) and so on. Take a look at the explanation of the sample test case for better understanding.


    Input
    Input Format :

    The first line contains an integer T denoting the number of TEST CASES. Each TEST CASE consists of 2 lines. The first line contains an integer N denoting the length of the word that needs to be encrypted. The second line contains the word that needs to be encrypted.

    Constraints :

    1 <= T <= 10

    1 <= Length of the string <= 10000


    Output
    N lines where each line will contain the encrypted words


    Sample Input 1 

    3
    3
    abc
    4
    abcd
    11
    abcdefghijk
    Sample Output 1

    bac
    bacd
    fcabdeighjk
    Hint

    For abc, initially, ans is "",

    1. Middle character for abc is b, so the answer becomes "b", and strings are a and c.

    2. Now the middle character of the string "a" is a, so the answer becomes "ba".

    3. Now the middle character of the string "c" is c, so the answer becomes "bac".
*/

function mrRobotElliot(string, size) {
    function getMiddleCharacter(string, i, j, newString) {
        if (i > j) {
            return newString;
        }
        let mid = parseInt((i + j) / 2);
        newString =
            newString +
            string.charAt(mid) +
            getMiddleCharacter(string, i, mid - 1, newString) +
            getMiddleCharacter(string, mid + 1, j, newString);
        return newString;
    }
    console.log(getMiddleCharacter(string, 0, string.length - 1, ""));
}

function runProgram(input) {
    input = input.trim().split("\n");
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        var size = +input[++line];
        var string = input[++line].trim();
        mrRobotElliot(string, size);
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`3
    3
    abc
    4
    abcd
    11
    abcdefghijk`);
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
    Mr Robot & Elliott
    Difficulty: Medium

    Prerequisite: Recursion

    Problem Statement:

    Given an input string, the encrypted string will start with the middle character of the string and will be formed henceforth with the middle characters of the left and right substrings (of the middle character of the word) and so on

    Example :-

    input : abcdefghijk

    output : fcabdeighjk [ f is middle character ]

    Hint:

    find the middle character, and add it result of string and along with that apply left part of string [0 to mid-1] and right part of string [mid+1 to n-1] where n is length of string

    Short Explanation:

    None

    Detailed Explanation:

    find the middle character of the string
    return the character along with that call two functions recursively and append that output.
    two recursive calls will be applied on 0 to mid-1 and other is mid+1 to n-1
    where n is length of string.
    let's see the following pseudo code for more clarity
    Pseudo code:

    // string a : given input
    //i: 0
    //j:a.length()-1
    //ans : empty string
    function String solve(String a,int i,int j,String ans)
    {
            if (i>j) return ans;
            int mid = (i + j)/2;
            ans = ans + a.charAt(mid) + solve(a,i,mid-1,ans) + solve(a,mid+1,j,ans);
            return ans;
    }
    main()
    {
        String str="abcdefghijk"    
    String result=solve(str, 0, str.length()-1, " ")
    print(result)
    }
    Time Complexity:

    The recurrence relation for the above code is

    T(n) = 2T(n/2) + 1 ; n>1

    T(n) = 1 ; n==1

    so if we solve that recurrence relation then we can get time complexity asO(n)

    Space Complexity:

    O(log n) :maximum depth of recursion tree.

    Alternate Solution:
*/