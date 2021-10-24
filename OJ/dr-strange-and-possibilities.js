/* 
    Dr. Strange and Possibilities Ended
    Description

    Dr. Strange has n distinct integers from 1 to n. He uses his mind power and time stone to calculate all the possible subsets using the given n integers. Generate all the possible subsets.


    Input
    The first line of the input contains one integer n (1 ≤ n ≤ 10).


    Output
    Print each possible subset in a new line.

    Elements within the set must be in non-decreasing order. All the subsets must be distinct and sorted in ascending order or lexicographically. For an empty subset just print a blank line.


    Sample Input 1 

    3
    Sample Output 1


    1 
    1 2 
    1 2 3 
    1 3 
    2 
    2 3 
    3 
*/

function drStrangeAndPossibilities(number) {

    var string = [];
    for (let i = 0; i < number; i++) {
        string.push(i + 1);
    }

    function getPosibilities(string, newString, curr) {

        if (newString.length >= 0) {
            console.log(newString.join(' '));
        }
        if (curr == string.length) {
            return;
        }

        for (let i = curr; i < string.length; i++) {
            newString.push(string[i]);
            getPosibilities(string, newString, i + 1);
            newString.pop();
        }
    }
    getPosibilities(string, [], 0);
}

function runProgram(input) {

    drStrangeAndPossibilities(+input.trim());

}
if (process.env.USERNAME === "aneve") {
    runProgram(`3`);
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
    Dr. Strange and Possibilities - Editorial
    Difficulty: Medium
    Prerequisite: Backtracking, Recursion
    Problem Statement:
    Dr. Strange has n distinct integers from 1 to n. He uses his mind power and time stone to calculate all the possible subsets using the given n integers. Generate all the possible subsets.

    Elements within the set must be in non-decreasing order. All the subsets must be distinct and sorted in ascending order or lexicographically. For an empty subset just print a blank line.

    Hint:
    Since the constraints are small, backtracking and checking all possibilities seem possible here.

    Short Explanation:
    A recursive function is implemented so that we can generate all the possible cases. Since Dr. Strange is calculating all the possibilities, so when the index pointer reaches the end of the array, it can be used to return. Here we don't arrange, since the arrangement is unique i.e sorted.

    Detailed Explanation:
    So in backtracking problems, we need to understand the key things to solve the problems. These are namely 1) base case/termination case so that recursion function can return from, 2) the various possibilities it would be exploring from a particular state, and 3) the parameters passed in the recursive functions.

    We consider each and every solution candidate and if does not turn out to be a solution, then we simply discard it and backtracks to the previous state.

    -> Here the parameters passed are a global answer vector of vector to store the solution by reference, a local answer vector to consider a potential solution by reference, input array A by reference, and the index for maintaining the index of the element currently being considered.

    -> To explain the various possibilities, for every element we have an option whether to include or not in the possible solution set.

    -> The base case would be when the index is out of the bounds of the input array, then we just return.

    -> Each possible state is an answer since generating all possible subset so it is considered as an answer and pushed into the global answer data structure.

    Time Complexity:
    O(n x (2^n)).

    Space Complexity:
    O(n x (2^n)).

    Alternate Solutions:
    None.
*/