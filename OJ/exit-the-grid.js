/* 
    Exit the Grid -0:29:14
    Description

    You are playing the famous Maze Runner Arcade Game. The game contains a maze which has values{'L', 'R', 'U', 'D'}, where L -> indicates that you move left, R -> indicates that you move right,

    U -> indicates that you move up, while D -> indicates that you move down. The score is calculates as the number of moves in which you exit the grid. If you cannot exit the grid, that means your

    scoreshould be returned as 0. Given a square matrix, denoting the maze, write a program to calculate the score.

    Note: You will always enter that the maze through the position (0,0).


    Input
    The first line of the input contains T, the number of test cases.

    The first line of each test case contains N, the size of the maze, given in the form of square matrix.

    Next N lines contain N characters each, denoting in which direction to move.

    Constraints

    1 <= T <= 10

    1 <= N <= 50


    Output
    For each test case, print the score, on a new line.


    Sample Input 1 

    3
    4 
    RRRR
    LLLL
    UUUU
    DDDD
    3
    LRL
    UUU
    DLR
    2
    RL
    DD
    Sample Output 1

    4
    1
    0
    Hint

    In the first sample test case, we enter the maze through (0,0), and then we move right as the position (0,0) is R, and then R again and, then R again, and finally R again, as we exit the maze. The total number of steps taken, are equal to 4, as after 4 steps we would have crossed the boundary of the grid.

    In the second sample test case, the direction at position (0,0). We enter the maze and go left, and exit the loop, from the same direction we entered. So, the steps taken to exit the maze will be 1.

    In the third sample test case, you enter the maze at (0,0) and move right, as the direction is R, and then at the next step, we have L so we move back to the position we came from, and then we move right, and then left again. So, basically we are stuck in the maze, and cannot exit it. So, the number of steps taken is 0.
*/


// - - - - - - - - - - 100% Working - - - - - - - - - -

function exitTheGrid(arr, size) {

    var count = 0;
    var i = 0;
    var j = 0;

    while (i >= 0 && j >= 0 && i < arr.length && j < arr.length) {
        if (arr[i][j] == 'X'){
            // return 0;
            count = 0;
            break;            
        }
        if (arr[i][j] == 'L') {
            arr[i][j] = 'X';
            j--;
        } else if (arr[i][j] == 'R') {
            arr[i][j] = 'X';
            j++;
        } else if (arr[i][j] == 'U') {
            arr[i][j] = 'X';
            i--;
        } else {
            arr[i][j] = 'X';
            i++;
        }
        count++;
    }
    // return count;
    console.log(count);

}


function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    var arr = [];

    for (let i = 0; i < +input[0]; i++) {
        var size = +input[++line];
        for (let j = 0; j < size; j++) {
            arr.push(input[++line].trim().split(''));
        }
        exitTheGrid(arr, size);
        arr = [];
    }

}
if (process.env.USERNAME === "aneve") {
    runProgram(`3
    4 
    RRRR
    LLLL
    UUUU
    DDDD
    3
    LRL
    UUU
    DLR
    2
    RL
    DD
    `);
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
    Exit the Grid - Editorial
    Difficulty: Low
    Prerequisite: 2D Arrays, Implementation
    Problem Statement:
    You are given a square matrix, having valuesR, L, U, D, indicating that from the current cell, you can move right, left,up or down by 1 unit, according to the character. You have to find, how many steps does it take for you to exit the grid, which means reach a position beyond the matrix indexes. If you are stuck in the maze, the number of steps will be 0

    Hint:
    When can you be sure that no element is visited twice

    Short Explaination
    You are given a square matrix, having valuesR, L, U, D, indicating that from the current cell, you can move right, left,up or down by 1 unit, according to the character. Now, you enter the grid at (0,0) and move according to the character present at that position, and keep a value count indicating the number of steps you have taken to move out of the grid. In case, you reach to a position, which has already been visited, that indicates you are stuck in the matrix, so you should return 0. So, we have to mark the positions that have been visited, so we can use any character other than the four characters given in the input. We continue this, till the time we reach an invalid index, and then print the count.

    Detailed Explanation:
    You are given a square matrix, having valuesR, L, U, D, indicating that from the current cell, you can move right, left,up or down by 1 unit, according to the character.

    Now, you enter the grid at (0,0) and move according to the character present at that position, and keep a value count indicating the number of steps you have taken to move out of the grid.

    In case, you reach to a position, which has already been visited, that indicates you are stuck in the matrix, so you should return 0.

    So, we have to mark the positions that have been visited, so we can use any character other than the four characters given in the input. So, we useX.

    We traverse the matrix starting from (0,0), and then moving accordingly to the character present at that position. For example, if (i,j) denote the position at current index, then if we move left, so the index becomes (i,j-1), if we move right, then the index becomes (i,j + 1), if we move up, the index becomes (i-1,j), and similarly if we move down, the index becomes (i+1,j)

    It is important to mark a particular position before we move to the next position, hence we update the value at the current index toX, indicating that it is visited

    We continue this iteration, till the time we reach an invalid index or we reach a position already visited, and then print the count.

    Pseudo Code
    function exitTheGrid(arr){
            count = 0;
            i = 0;
            j = 0;
            while(i >= 0 && j >= 0 && i < arr.length && j < arr.length){
                if (arr[i][j] == 'X') return 0;
                if (arr[i][j] == 'L'){
                    arr[i][j] = 'X';
                    j--;
                }
                else if (arr[i][j] == 'R'){
                    arr[i][j] = 'X';
                    j++;
                }
                else if (arr[i][j] == 'U'){
                    arr[i][j] = 'X';
                    i--;
                }
                else{
                    arr[i][j] = 'X';
                    i++;
                }
                count++;
            }
            return count;
        }

    Time Complexity
    In the worst case, we will have to traver the entire matrix, therefore, the time complexity will beO(N^2)

    Space Complexity
    No extra space is required, therefore, the time complexity will be O(1).

    Alternate Solution:
    None.
*/