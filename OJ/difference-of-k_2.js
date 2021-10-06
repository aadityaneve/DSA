/*
	Difference of K Ended
	Description

	You are given a sorted arrayAof sizeN, and another integerK
	You have to find if there exists a pair of integers with indexiandj, such thati != j, andA[i] - A[j] = k
	If such a pair exists, printYes, else printNo

	Input
	The first line of the input containsT, the number of test cases.

	The first line of each test case contains N and K, the size of the array and the value of K.

	The next line contains N space separated integers denoting the elements of the array

	Constraints

	1 <=T<= 10

	1 <=N<= 1000000

	-10^9 <=A[i]<= 10^9

	0 <= K <= 10^9


	Output
	For each test case, print "Yes", if the pair as described in the problem exists, else print "No", on a new line.


	Sample Input 1 

	2
	5 3
	1 2 3 4 5
	5 8
	1 2 3 4 5 
	Sample Output 1

	Yes
	No
	Hint

	In the sample test case, in the first test case, the value ofN = 5, and that ofK = 3. Upon observation, you can see the pairs with values(2, 5)or(1,4)have a difference of 3. Therefore, the output is Yes.

	In the second test case, no pair exists such that the difference between them is 8. Therefore, the output is No.
*/





function differenceOfK(arr, size, K) {
    // console.log(arr, size ,K);
    var i = 0;
    var j = i+1;
    while (i < size-1 && j < size) {
        // console.log(arr[i]+":"+arr[j]);
        // console.log(arr[i]-arr[j]);
        if (arr[j] - arr[i] == K) {
            return true;
        } else if (arr[j] - arr[i] < K) {
            // console.log("hi");
            j++;
        } else {
            i++;
        }
    }
    return false;

}

function runProgram(input) {
    input = input.trim().split('\n');
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        var [size, K] = input[++line].trim().split(' ').map(Number);
        var arr = input[++line].trim().split(' ').map(Number);

        if (differenceOfK(arr, size, K)) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }

}
if (process.env.USERNAME === "aneve") {
    runProgram(`5
    1 5
    3
    6 0
    -8 -7 5 6 6 9
    1 4
    -3
    2 6
    -2 1
    3 3
    -5 -3 0`);
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