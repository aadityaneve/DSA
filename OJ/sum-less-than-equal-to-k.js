/*
	Sum less than equal to K Ended
	Description

	You are given an array A of N integers, and an integer K. You have to find the sum of all the numbers in the array which have less than or equal to K.

	Note : You have to take the input yourself

	Input
	The first line of the input contains N, the size of the array, and K as mentioned in the problem statement.

	The next line contains N space separated integers, denoting the values of the array.


	Output
	Print a single integer denoting the sum of all the elements in the array, whose value is less than or equal to K.


	Sample Input 1 

	4 2
	1 2 3 4
	Sample Output 1

	3
	Hint

	In the sample test case, the value of K = 2. Sum of all the values less than or equal to K, is 3.
*/


function runProgram(input) {
    
    input = input.trim().split('\n');
    var [ size, K] = input[0].trim().split(' ').map(Number);
    var arr = input[1].trim().split(' ').map(Number);
    
    var sum = 0;
    for(let i=0;i<size;i++){

        if(arr[i] <= K){
            sum+=arr[i];
        }

        // // if(arr[i] <= K){
        // //     count++;
        // // }
        // for(let j=i+1;j<size;j++){
        //     if(arr[i] + arr[j] <= K){
        //         // count++;
        //         sum+=arr[i]+arr[j];
        //     }
        // }
    }
    console.log(sum);

}
if (process.env.USERNAME === "aneve") {
    runProgram(`4 2
1 2 3 4`);
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
