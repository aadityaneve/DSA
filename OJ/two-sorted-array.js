/*
	Two Sorted Arrays Ended
	Description

	You are given two arraysAandB, each of size N.
	The first array A, is sorted in ascending order, while the second array is sorted in descending order.
	You have to find the number of elements common in both the arrays.

	Input
	The first line of the input containsT, the number of test cases.

	The first line of each test case, contains N, the number of elements in the arrayAandB

	The next line of the test case, containsNspace separated integers, denoting the number of elements of the arrayA

	The next line containsNspace separated integers, denoting elements of the arrayB.

	Constraints

	1 <=T<= 10

	1 <=N<= 1000000

	1 <=A[i]<= 1000


	Output
	For each test case, print the number of elements common in both the arrays, on a new line.


	Sample Input 1 

	1
	6
	1 2 2 3 4 5
	4 4 3 2 1 1
	Sample Output 1

	4
	Hint

	In the sample test case, the number of elements common in both the arrays are {1,2,3,4}. Therefore, the required output is 4.
*/








function twoSortedArray(arr1, arr2, size) {



    // arr2.sort((a, b) => a - b);
    // console.log(arr1);
    // console.log(arr2);
    var i = 0;
    var j = size - 1;
    // var count = 0;
    // var arr = [];
    let count = 0;

    while (i < arr1.length && j >= 0) {
        if (arr1[j] > arr2[i]) {
            j--;
        } else if (arr1[j] < arr2[i]) {
            i++;
        } else if (arr1[j] == arr2[i]) {
            // arr.push(arr1[i]);
            count++;
            i++;
            j--;
        }
    }
    // console.log(arr.length);
    console.log(count);



    // var object1 = {};
    // var object2 = {};

    // // console.log(object.hasOwnProperty(arr1[0]));
    // for(let i=0;i<arr1.length;i++){
    //     if(!object1.hasOwnProperty(arr1[i])){
    //         object1[arr1[i]] = 1;
    //     }
    // }

    // for(let i=0;i<arr1.length;i++){
    //     if(!object2.hasOwnProperty(arr2[i])){
    //         object2[arr2[i]] = 1;
    //     }
    // }
    // // console.log(object1);
    // // console.log(object2);

    // // console.log(Object.keys(object2).length);
    // if(Object.keys(object2).length < Object.keys(object1).length){
    //     console.log(Object.keys(object2).length);
    // }else{
    //     console.log(Object.keys(object1).length);
    // }
}


function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        var size = +input[++line].trim();
        var arr1 = input[++line].trim().split(' ').map(Number);
        var arr2 = input[++line].trim().split(' ').map(Number);
        twoSortedArray(arr1, arr2, size);
    }

}
if (process.env.USERNAME === "aneve") {
    runProgram(`6
    1
    1
    5
    1
    3
    7
    5
    1 2 5 7 8
    8 7 6 6 3
    5
    1 4 4 5 5
    9 5 5 5 2
    4
    1 3 3 9
    8 6 5 4
    6
    1 2 3 4 5 7
    9 8 6 5 3 2`);
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