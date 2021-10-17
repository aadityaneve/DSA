/* 
    Follow The Knight Ended
    Description

    You are very good at playing chess since childhood and you knew the rules very much. You have a  10 X 10 chessboard and you want to explore all the possible squares on the board that the knight can be at in exactly N moves.It is placed at (i,j) coordinate initially. For a 10X10 chessboard (1,1) will be the top left corner and (10,10) will be the bottom right corner.

    You can refer the following diagram, the knight can move to any of the squares marked as X in 1 move.

    Image


    Input
    Input Format

    Input will consist of three space seperated integers i,j and N

    Constraints

    N < 10


    Output
    Print a single integer denoting the number of blocks on the chessboard that the knight can be at in exactly N moves.


    Sample Input 1 

    3 3 1
    Sample Output 1

    8
*/




var board = new Array(10);
for (let i = 0; i < 10; i++) {
    board[i] = new Array(10);
    for (let j = 0; j < 10; j++) {
        board[i][j] = 0;
    }
}
// console.log(board[10][10]);
// console.log(board);
function followTheKnight(row, col, X) {
    console.clear();

    function numberOfBlocks(steps, i, j) {

        if (i < 0 || i > 9 || j < 0 || j > 9) {
            return;
        }

        // Base Case
        if (steps == 0) {
            board[i][j] = 1;
            return;
        }

        numberOfBlocks(steps - 1, i - 2, j + 1);
        numberOfBlocks(steps - 1, i - 2, j - 1);
        numberOfBlocks(steps - 1, i - 1, j + 2);
        numberOfBlocks(steps - 1, i - 1, j - 2);
        numberOfBlocks(steps - 1, i + 2, j + 1);
        numberOfBlocks(steps - 1, i + 2, j - 1);
        numberOfBlocks(steps - 1, i + 1, j - 2);
        numberOfBlocks(steps - 1, i + 1, j + 2);
    }
    numberOfBlocks(X, row, col);

    // console.log(board);

    var count = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (board[i][j] == 1) {
                count++;
            }
        }
    }

    console.log(count);
}

function runProgram(input) {

    var [row, col, X] = input.trim().split(' ').map(Number);
    followTheKnight(row-1, col-1, X);

};
if (process.env.USERNAME === "aneve") {
    runProgram(`3 3 1`);
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
    Follow The Knight
    Difficulty: Medium

    Prerequisite: Recursion

    Problem Statement:

    Given integers i, j and, n where (i, j) is the initial position of the Knight on a 10*10 chessboard. Find the number of positions the Knight can move to in exactly n moves.

    Hint:

    If (i,j) is the initial position of the knight then, it is possible that it can move to one of 8 distinct positions in the next move

    Short Explanation:

    If (i,j) is the cell where the knight is residing currently. If N>0 then, it is possible that in the next move the knight will move to one of the positions : (i+2,j+1), (i+2,j-1), (i-2,j+1), (i-2,j-1), (i+1,j+2), (i+1,j-2), (i-1,j+2), (i-1,j-2)
    Hence try placing the knight in all possible positions recursively
    one by one and thus find out the maximum number of cells it can occupy in exactly N moves.
    Note: If any of the eight positions is either out of the board or is already visited in earlier moves then you can't place the knight in that cell in the current move.
    Detailed Explanation:

    Let C be the number of positions.
    Let the knight reside at cell (i,j) and let K moves have already been performed.
    Now, a knight can move to the following positions in the next move : (i+2,j+1), (i+2,j-1), (i-2,j+1), (i-2,j-1), (i+1,j+2), (i+1,j-2), (i-1,j+2), (i-1,j-2)
    It should be noted that if any of these cells is already visited in ealier moves or any of them is going out of the board then, it is not possible to move at that position
    Hence let f(i,j,k) be a function that returns all possible cells that can be visited in exactly k moves.
    Now, for cell (i+2,j-1) if, i+2 < 10, j-1 >= 0 and (i+2,j-1) is not visited then, f(i+2,j-1,k-1) can return a possible cell which can be visited after performing k-1 moves.
    Similarly we can check for all other cells.
    Hence we can try placing the knight for each of the possible cells and count all the distinct cells which can be reached after exactly n moves are performed.
    This can be done by implementing the functions using recursion and taking backtracking approach.
    Pseudo code:

    `C = 0 // Count of all possible positions
    Obj // Object to store the cells
    N // number of moves
    Board[10][10] // All cells initialised to 0

    * F( i, j, N ){

        if( N == 0 ){

        if( {i,j} is not present in Obj ){
            C = C + 1
            Obj.insert({i,j})
            return
        }
        }

    if( i+2 < 10 and j+1 < 10 && Board[i+2][j+1] == 0){
        Board[i+2][j+1] = 1
        F( i+2, j+1, N-1)
        Board[i+2][j+1] = 0
    }

    // Similarly check or all other 7 possibilities.

    Print(C)

    }

    Time Complexity:

    O(8^N), whereNis the number of moves that can be performed.

    Space Complexity:

    O(N), whereN` is the number of moves that can be performed.

    Alternate Solution:

    Try using Dynamic programming.
*/