/* 
    Discover number -1:17:56
    Description

    You are given an array A of size N, and Q queries to deal with. For each query, you are given an integer X, and you're supposed to find out if X is present in the array A or not.


    Input
    Input Format

    The first line contains two integers, N and Q, denoting the size of array A and number of queries.

    The second line contains N space separated integers, denoting the array of elements Ai.

    The next Q lines contain a single integer X per line.

    Constraints

    1 <= N, Q <= 10^5

    1 <= Ai <= 10^9

    1 <= X <= 10^9


    Output
    Output Format

    For each query, print YES if the X is in the array, otherwise print NO.


    Sample Input 1 

    5 10
    50 40 30 20 10
    10
    20
    30
    40
    50
    60
    70
    80
    90
    100
    Sample Output 1

    YES
    YES
    YES
    YES
    YES
    NO
    NO
    NO
    NO
    NO
*/

function discoverNumber(arr, K) {
    // console.log(arr, K)
    let low = 0;
    let high = arr.length-1;
    while (low <= high) {
        let mid = parseInt(low + (high - low) / 2);
        if (arr[mid] === K) {
            return true;
        } else if (arr[mid] > K) {
            high = mid - 1;
        } else if (arr[mid] < K) {
            low = mid + 1;
        }
        // console.log(mid)
        // console.log(low+":"+high)
    }
    return false;
}

function runProgram(input) {
    input = input.trim().split("\n");
    var line = 0;
    var [size, testCases] = input[line].trim().split(" ").map(Number);
    var arr = input[++line].trim().split(" ").map(Number);
    arr.sort((a, b) => a - b);
    for (let i = 0; i < testCases; i++) {
        var number = +input[++line].trim();
        // console.log(number)
        if(discoverNumber(arr, number)){
            console.log("YES")
        }else {
            console.log("NO")
        }
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`5 10
  50 40 30 20 10
  10
  20
  30
  40
  50
  60
  70
  80
  90
  100`);
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
