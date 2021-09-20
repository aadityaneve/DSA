/* 
    Symmetric Or Not? Ended
    Description

    You are given some matrices consist of only 0 's and 1's and you have to pick which are symmetric and which are not

    A matrix is said to be symmetric about X- axis if 1st row is identical to n-th row, 2nd is identical to (n-1)th row and so on.

    A matrix is said to be symmetric about Y- axis if 1st column is identical to the nth column, 2nd identical to (n-1)th and so on for all columns.

    Your task is to print "YES" if it is symmetric about X-axis and Y-axis else "NO"

    Note : This is a function complete problem. 
    You don't have to take the input, just complete the function and print the required output

    Input
    Input Format :

    First line contains T - number of test cases.

    First line of each test case contains the n size of matrix.

    Next n lines contains n characters.

    Constraints :

    1 ≤ T ≤ 10

    2 ≤ N ≤ 32




    Output
    Print YES or NO in a new line for each test case .


    Sample Input 1 

    4
    2
    11
    11
    4
    0101
    0110
    0110
    0101
    4
    1001
    0000
    0000
    1001
    5
    01110
    01010
    10001
    01010
    01110
    Sample Output 1

    YES
    NO
    YES
    YES
    Hint

    Output Explanation :

    Test Case 1: Symmetric about both axes, so YES.

    Test Case 2: Symmetric about X-axis but not symmetric about Y-axis, so NO.

    Test Case 3: Symmetric about both axes, so YES.
*/


function symmetricOrNot(n, mat) {

    var top = 0, bottom = n - 1, left = 0, right = n - 1;
    var xFlag = 0;
    var yFlag = 0;
    var lString = "";
    var rString = "";
    var x = true;

    //for(let i=0;i<n;i++){
    while (top <= bottom) {
        // for x - axis
        // console.log(mat[top]+"---"+mat[bottom]);
        if (mat[top] == mat[bottom]) {
            xFlag = 1;
        } else {
            xFlag = 0;
            break;
        }
        top++;
        bottom--;
    }
    // console.log(xFlag);

    // converting array to martix
    var matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push(mat[i].trim().split('').map(Number));
        // console.log(mat[i]);
    }
    // console.log(matrix);

    var top = 0, bottom = n - 1, left = 0, right = n - 1;
    var x = true;

    while (left < right && x) {
        lString = "";
        for (let i = top; i <= bottom; i++) {
            lString += matrix[i][left];
            // console.log(lString);
        }
        left++;

        rString = "";
        for (let i = top; i <= bottom; i++) {
            rString += matrix[i][right];
            // console.log(rString);
        }
        right--;

        
        if (lString === rString) {
            // console.log(lString+"--"+rString);
            yFlag = 1;
        } else {
            // console.log("whi");
            yFlag = 0;
            x = false;
        }
    }

    // console.log(xFlag+":"+yFlag);
    if (yFlag == 1 && xFlag == 1) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}


function runProgram(input) {
    
    symmetricOrNot(4, ['1001','0100','0000','1001']);

}
if (process.env.USERNAME === "aneve") {
    runProgram(``);
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