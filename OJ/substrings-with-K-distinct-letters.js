/* 
    Substrings with K distinct letters Ended
    Description

    Given string str of lowercase alphabets of length n and an integer K, the task is to count all substrings of length K which have exactly K distinct characters.


    Input
    Input Format

    First line contains n and k separated by space

    Second line contains strings of length n.

    Constraints

    1<=n<=10^6

    1<=k<=10^6








    Output
    Print count of substrings of length k with k distinct letters


    Sample Input 1 

    4 2
    abcc
    Sample Output 1

    2
    Hint

    Sample 1 Explanation

    Possible substrings of length K = 2 are

    ab : 2 distinct characters

    bc : 2 distinct characters

    cc : 1 distinct character

    Only two valid substrings exist {“ab”, “bc”}.
*/

---- not getting 100% output -----

function check(newArr, K, start){
    var keyValuePair = [];
    // console.log("start",start);
    for(let i=start;i<newArr.length;i++){
        keyValuePair.push(i);
    }
    // console.log(keyValuePair);
    if(keyValuePair.length == K){
        return true;
    }else{
        return false;
    }
}

function substringsWithKDistinctLetters(arr, size, K){
    var count = 0;
    var newArr = [];
    for(let i=0;i<K;i++){
        newArr.push(arr[i]);
    }
    // console.log(newArr);
    if(check(newArr, K, 0) == true){
        count++;
    }

    for(let i=K;i<arr.length;i++){
        newArr.push(arr[i]);
        if(check(newArr, K, i-K+1)){
            count++;
        }
    }
    // console.log(newArr);
    return count;
}

function runProgram(input) {
    
    input = input.trim().split('\n');
    var [size, K] = input[0].trim().split(' ').map(Number);
    var arr = input[1].trim().split('');
    console.log(substringsWithKDistinctLetters(arr, size, K));
}
if (process.env.USERNAME === "aneve") {
    runProgram(`100 10
    aekyhrbjdmuomwcmriiczjikjozagcadeunslgonohknagwmjigaqurzthfyspvrdmodrdnjrthwuedksthwdhetccnjtswbhihb`);
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
    Substrings with K distinct letter - Editorial
    Difficulty: Low
    Prerequisite: Strings, Sliding Window, Key Value Pair
    Problem Statement:
    Given string str of lowercase alphabets of length n and an integerK, the task is to count all substrings of lengthKwhich have exactlyKdistinct characters.

    Hint:
    Can a string of size less thanK, haveKdistinct characters?

    Short Explaination
    In this question, the intuitive way will be to generate all possible substrings, and then for each substring check, if the substring containsKunique characters. But, it can be observed that no substring of size lesser than K, can have K distinct characters. Therefore, we do not check for strings with size lesser thanK. For each of the substring, we check if the number of distinct character is equal toKor not, and maintain a count, which will keep track of all such subarrays

    Detailed Explanation:
    In this question, we are given a string str of lowercase alphabets of length n and an integer K, the task is to count all substrings of length K which have exactly K distinct characters.

    The intuitive way would be to generate all possible substrings, and for each substring, it must be checked if it contains onlyKdistinct characters.

    But, on observation it can be seen that the no string of size less thanK, can haveKdistinct characters, and hence they are not needed to be checked

    Therefore, all the substrings of size greater than or equal toK, are checked, and for each substring, we check if it contains all unique characters or not

    For each substring, a key value pair can be generated, and if the size of the key value pair is equal toK, then we can be sure that the string containsKdistinct characters

    Pseudo Code


        function check(new_string[] a, k, start) // function to check if the String contains only one unique character
        Key Value Pair =  [] //
        for (i = start;i<new_string.length;i++) Add i in Key Value Pair
        if (size of set is equal to K) return true
        else return false

        function substingsWithKDistinctCharacters(String a, K){
                array[] new_string = []
                for (i=0;i<k;i++) {
                    new_string.add(a[i]);
                }
                count = 0;
                if (check(list,k,0) == true) count++;

                for (int i = k;i<arr.length;i++){
                new_string.add(arr[i]);
                if (check(list,k,i - k + 1)) count++;
                }

            return count;
        }

    Time Complexity:
    In the worst case, we may have to generate all possible substrings, therefore the time complexity would be O(N^2).

    Space Complexity:
    For each substring, we are storing all the unique elements in the key value pair, therefore, the space complexity would be O(M), where M is the maximum number of unique elements possible in any substring.

    Alternate Solution:
    None
*/