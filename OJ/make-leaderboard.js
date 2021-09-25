/* 
    Make Leaderboard Ended
    Description

    You are given name and marks of N different students in a hackerrank contest. Your task is to write a program that makes leaderboard of the students under following conditions:

    - If two students get same marks they get same rank

    - The student placed next to the same marks students will get the rank skipping the intermediate ranks.

    Refer to the sample test case for better understanding

    Note : You cannot use built-in sort function. Using that can lead to disqualification. Write your own sorting algorithm


    Input
    Input Format :
    First line of input contains N

    Next N line contains name and marks respectively of N different students (where name and marks is separated by a space)



    Constraints :

    N < 100


    Output
    Output N names with their rank. Follow these rules for generating the list:

    1. The students having more mark gets better rank

    2. If students have similar mark, their rank will be same(In case of similar marks, the person whose name comes first in alphabetical order comes first in order. However their rank will be same)

    3. The student placed next to the same marks students will get the rank skipping the intermediate ranks.


    Sample Input 1 

    6
    rancho 45
    chatur 32
    raju 30
    farhan 28
    virus 32
    joy 45
    Sample Output 1

    1 joy
    1 rancho
    3 chatur
    3 virus
    5 raju
    6 farhan
*/

function swap(names, marks, indexOne, indexTwo) {
    var temp;

    temp = names[indexOne];
    names[indexOne] = names[indexTwo];
    names[indexTwo] = temp;

    temp = marks[indexOne];
    marks[indexOne] = marks[indexTwo];
    marks[indexTwo] = temp;

}

function checkStrings(nameOne, nameTwo) {
    // console.log(Math.min(nameOne.length, nameTwo.length));
    for (let i = 0; i < Math.min(nameOne.length, nameTwo.length); i++) {
        if (nameOne[i] != nameTwo[i]) {
            if (nameOne[i] > nameTwo[i]) {
                return true;
            }else{
                return false;
            }
        }
    }
    return false;
}


function sortNames(names, marks) {
    for (let i = 0; i < names.length; i++) {
        for (let j = 0; j < names.length - i - 1; j++) {
            if (checkStrings(names[j], names[j + 1]) == true) {
                swap(names, marks, j, j + 1);
            }
        }
    }
}

function sortMarks(names, marks) {
    for (let i = 0; i < marks.length; i++) {
        for (let j = 0; j < marks.length - i - 1; j++) {
            if (marks[j] < marks[j + 1]) {
                swap(names, marks, j, j + 1);
            }
        }
    }
}

function printRankList(names, marks) {
    var count = 0;
    var rank = 1;
    previous = -1;

    for (let i = 0; i < names.length; i++) {
        if (marks[i] == previous) {
            console.log(rank, names[i]);
        } else {
            rank += count;
            count = 0;
            console.log(rank, names[i]);
        }
        count++;
        previous = marks[i];
    }
}


function makeLeaderboard(names, marks) {

    sortNames(names, marks);
    sortMarks(names, marks);
    printRankList(names, marks);
    // console.log(names);
    // console.log(marks);

}



function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    var names = [];
    var marks = [];
    for (let i = 0; i < +input[0]; i++) {
        var [name, mark] = input[++line].trim().split(' ');
        names.push(name);
        marks.push(Number(mark));
    }
    // console.log(names);
    // console.log(marks);
    makeLeaderboard(names, marks);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`6
    rancho 45
    chatur 32
    raju 30
    farhan 28
    virus 32
    joy 45`);
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
    Make LeaderBoard - Editorial
    Difficulty: Medium
    Prerequisite: Ad-Hoc, Implementation, Custom Sort, Sorting
    Problem Statement:
    You are given name and marks of N different students in a hackerrank contest. Your task is to write a program that makes leaderboard of the students under following conditions:

    If two students get same marks they get same rank

    The student placed next to the same marks students will get the rank skipping the intermediate ranks.

    Refer to the sample test case for better understanding

    Note : You cannot use built-in sort function. Using that can lead to disqualification. Write your own sorting algorithm

    Hint:
    The smallest lexicographical order is an order relation where string s is smaller than t, given the first character of s (s1) is smaller than the first character of t (t1), or in case they are equivalent, the second character, etc.

    Short Explaination
    We are given the name and marks of the students in a contest, and we are tasked with designing the leaderboard for the contest. The rules are designed such that, if two students have the same marks, then the students are ranked the same, but the student has name is lexicographicaaly smaller, should be printed first. A key value pair can be used in this case where student with same marks are to the same key. Then, the marks will be sorted in decreasing, order, the student with the same marks need to be sorted lexicographically according to their name. Finally, the students along with their ranks are printed. Care should be taken that if two students have the same rank, then the next rank is skipped.

    Detailed Explanation:
    This question can be basically divided into three parts
    We have to ensure that the names are arranged in alphabetical order, their names should be displayed higher, however, the rank should be the same. Therefore, the list has to be sorted in alphabetical order
    The students with higher marks should be getting the better ranks, therefore, the entire list has to be sorted in decreasing order of marks
    Finally, the ranks are printed along with the student names, according to the given rules
    First thing, we have to ensure that the names are sorted alphabetically. Our existing sorting algorithms can be modified such that the strings are sorted alphabetically. A separate function needs to be created such that, we can identify when to swap two strings or not
    The helper function created is such that the it tells the sort function, when to swap the strings or not
    function checkStrings(String a,String b){
            n = a.length()
            m = b.length()
            for(i = 0;i<minimum(n,m);i++){
                    if (a[i] != b[i]){
                            if (a[i] > b[i]) return true
                            return false
                    }
            }
            return false
    }
    [AA,BC,CC,DDDC,DDDB]
    This function returnstrueif the strings need to be swapped, and returnsfalseif the strings are in correct order
    The following function is called, to check if the two strings need to be swapped or not
    function sortNames(names[],marks[]){
        n = names.length
        for (i = 0;i<n;i++){
                for (j = 0;j<n-i-1;j++){
                        if (checkStrings(names[j],names[j+1]) == true) swap(names,marks,j,j+1)
                }
        }
    }
    The swapping has to be done in such a way, that the marks at a corresponding index are also updated along with the names at that index
    After this, the marks are updated in the descending order. Therefore, the existing sorting algorithm is modified to get the required order
    function sortMarks(names[],marks[]){
        n = names.length
        for (i = 0;i<n;i++){
                for (j = 0;j<n-i-1;j++){
                        if (marks[j] < marks[j + 1]) swap(names,marks,j,j+1)
                }
        }
    }
    Finally, the rank list is to be printed such that the students with the same ranks get the same marks, by skipping the immediate ranks. The below code block shows the implementations for the same
    function printRankList(names[],marks){
        count = 0
        rank = 1
        previous = -1
        n = names.length
        for (i = 0;i<n;i++){
                if (marks[i] == previous){
                            print (rank,names[i])
                }else{
                        rank += count
                        count = 0
                        print (rank,names[i])
                }
                count++
                previous = names[i]
        }
    }
    Time Complexity: →
    $(N^2 * M)$, M is the maximum length of the string. It would be wrong to consider M, as an average of all the strings, for example, consider the test case →[aa,bb,cc,ddde,dddc], in the worst case, the helper function will run time 4 times, which is the maximum length of the string, while the average length of the string is 3, and hence it does not take care of the worst case

    Space Complexity→ $
    O(1)$, as no extra space is required

    Alternate Solution:
    None.
*/