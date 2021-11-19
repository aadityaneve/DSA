/* 
    Upper Bound in LogN Ended
    Description

    You are given n different numbers and an integer k. Write a program that finds upper bound of k in log(n) time complexity. Upper bound of a number k in a sorted list is the index of the first number which is greater than k (here the answer is given considering index to be starting from 0)

    -> Test cases are such that there is always one number greater than k

    NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION

    WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TRY THE LOGN SOLUTION

    USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, WOULD LEAD TO DISQUALIFICATION


    Input
    Input Format

    First line contains N and K

    Second line contains N space separated sorted integers

    Constraints

    N<100


    Output
    Output upper bound


    Sample Input 1 

    10 3
    0 2 4 4 5 5 7 7 9 10
    Sample Output 1

    2
    Sample Input 2 

    10 4
    0 2 4 4 5 5 7 7 9 10
    Sample Output 2

    4
*/

function upperBoundInLognIterativeWay(arr, K) {
    let index = -1;
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = parseInt(low + (high - low) / 2);
        if (arr[mid] <= K) {
            low = mid + 1;
        } else {
            index = mid;
            high = mid - 1;
        }
    }
    return index;
}

function runProgram(input) {
    input = input.trim().split("\n");
    var line = 0;
    var [size, K] = input[0].trim().split(" ").map(Number);
    var arr = input[++line].trim().split(" ").map(Number);
    let upperBound = upperBoundInLognIterativeWay(arr, K);
    console.log(upperBound);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`10 4
    0 2 4 4 5 5 7 7 9 10`);
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
    Upper bound in log(N) - Editorial
    Difficulty: Low
    Prerequisite: Binary search
    Problem statement
    Given a sorted array A of N integers and an integer K. Find the index of first integer of the array which is greater than K.

    Hint
    Check whether binary search can be applied in this situation or not.

    Short Explanation
    If A[X] ( 1 <= X <= N ) is lesser than or equal to K then upper bound lies to the right of index X. Similarly if A[X] > K then, it may be possible that the required answer resides at an index < X. Hence binary search can be applied to solve this problem.
    Detailed Explanation
    The question asks for the first index of the array where an integer resides greater than K.
    One possible approach is to check for all indices one by one and check at which index 'j', A[j] is greater than K ? The first such occurring index is the required answer. But this doesn't solve the problem in O(log(N)) time.
    Observation :
    Array is sorted.
    If A[X] <= K ( 1 <= X < N ) then, required answer resides at an index j > X.
    Else if A[X] > K then, it is possible that at an index j < X an integer greater than K resides.
    Hence let I be the required and index and, let's try applying binary search in the search space L to H where, L = 1 and H = N initially. Each time we will pick the middle element 'mid' of the search space and check :
    if A[mid] <= K then, reduce the search space to mid+1 to H.
    Else, update I to mid and, reduce the search space to L to mid-1.
    Find the best possible index till L and H don't coincide.
    Note -

    Pseudo code:

        A[N] // Sorted array having N integers
        I = -1 
        L = 1, H = N
            K

        while( L < H ){

            mid = L + ( H - L )/2

            if( A[mid] <= K ) 
                L = mid + 1

            else{
                I = mid
                H = mid - 1
            }
            }

        Print(I)

    Time Complexity:
    O(log(N)), whereNis the size of array A.

    Space Complexity:
    O(1), no extra space required.

    Alternate Solution:
    None
*/
