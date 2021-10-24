/* 
    Generate Permutations Ended
    Description

    Given a collection of numbers, return all possible permutations.

    NOTE:

    No two entries in the permutation sequence should be the same.

    For the purpose of this problem, assume that all the numbers in the collection are unique.

    USING BUILT-IN LIBRARY FUNCTION TO PERMUTE WILL LEAD TO DISQUALIFICATION


    Input
    Input Format :

    The first line of input contain an integer n - denoting the size of array

    The next line contain n distinct integers, A[1],A[2]...A[N]

    Constraints :

    1<= n <=6




    Output
    Print the permutations of numbers in new line seperated by space, also make sure the permutations are printed in sorted order that is "1 2 3" must come before "2 3 1". Print without quotes. See sample test case for better understanding.


    Sample Input 1 

    3
    1 2 3
    Sample Output 1

    1 2 3 
    1 3 2 
    2 1 3 
    2 3 1 
    3 1 2 
    3 2 1
*/

function generatePermutations(arr, size) {

    function swap(arr, i, curr) {
        var temp = arr[i];
        arr[i] = arr[curr];
        arr[curr] = temp;
    }

    var newArr = [];
    function gp(arr, curr) {

        if (curr == arr.length) {
            // console.log(arr.join(' '));
            newArr.push(Number(arr.join('')));
            return;
        }

        for (let i = curr; i < arr.length; i++) {
            swap(arr, i, curr);
            gp(arr, curr + 1);
            swap(arr, i, curr);
        }
    }
    gp(arr, 0);
    var finalString = "";
    var newString = newArr.sort((a, b) => a - b).map((element) => element.toString());
    for (let key in newString) {
        finalString = "";
        for (let i = 0; i < newString[key].length; i++) {
            finalString += newString[key][i]+" ";
        }
        console.log(finalString.trim());
    }
}

function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    var size = +input[0];
    var arr = input[1].trim().split(' ').map(Number);
    generatePermutations(arr, size);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`3
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
    Generate all permutations
    Difficulty: Medium

    Prerequisite: Recursion

    Problem Statement:

    Given array of integers, the task is to print all the permutations possible with those integers

    Hint:

    None

    Short Explanation:

    arr []= {1,2,3} , then permutations are noting but [123, 132, 213, 231, 312, 321]

    for better understanding please referthislink.

    Detailed Explanation:

    if the array size is 1, so with the one number only 1 permutation is possible
    other wise, do the following steps
    take loop which traverse from beg to end of array, lets say i is the loop variable and l and r will points to beg and end of array
    every time take every element [ith element] and swap it with the lth element
    call recursively same function using the parameters as l+1 and r
    see the following Pseudo code, for better understanding, here I am converting array of integers into a string and I am writing the Pseudo code.
    Pseudo code:

    // str : input string [ which is array of integers, after it got converted into string
    // l=0, beg element in the string
    //r= arr.size-1 , last element in the string
    private static void permute(String str, int l, int r) 
    {
            if(l==r) // base case
                    {
                for(int i = 0; i < str.length(); i++)
                            {
                    System.out.print(str.charAt(i) + " ");
                }
                System.out.println();
                return;
            }
            for(int i=l;i<=r;i++){
                str=swap(str,i,l);
                permute(str,l+1,r);
            }

    }
    // code for swapping 
    function String swap(String str, int i, int j)
    {
            char temp;
            char[] charArray = str.toCharArray();
            temp = charArray[i] ;
            charArray[i] = charArray[j];
            charArray[j] = temp;
            return String.valueOf(charArray);

        }
    Time Complexity:

    O(n*n!)Note that there are n! permutations and it requires O(n) time to print a permutation.

    Space Complexity:

    O(n) ,which is nothing but maximum depth of the recursion tree.

    Alternate Solution:

    None
*/