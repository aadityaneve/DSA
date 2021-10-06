/*
	SNE Modified II Ended
	Description

	Andy and Mark are playing a game of arrays.

	The game involves finding the smallest neighbor element to the left side for each element in the array

	Andy counts the number of elements which do have a smaller neighbor element to the left side. Help Andy find the count

	Here smaller neighbor element, means the closest value towards the left, such that the value is lesser than the current value

	Note : You have to take the input yourself


	Input
	Input Format:

	First line contains an integer N denoting the number of elements in the array (not necessarily distinct).

	Second line contains N space separated integers denoting the elements of the array.

	Constraints:

	N <= 100000


	Output
	Print a single integer denoting the number of elements which do not have a smaller neighbor element to the left side


	Sample Input 1 

	8
	39 27 11 4 24 32 32 1
	Sample Output 1

	3
	Hint

	The element at index4 5 & 6do have a smaller neighbor elements to the left side. Therefore, the answer is 3
*/






function sneModified2(arr, size) {
    var stack = [];
    var ans = [];
    var count = 0;

   for(let i=0;i<size;i++){

        while(stack.length > 0 && stack[stack.length-1] >= arr[i]){
            stack.pop();
        }

       if(stack.length == 0){
           ans[i] = -1;
       }else{
        // ans[i] = stack.peek();
        // console.log((arr[i]));
        // console.log(arr.indexOf(arr[i]));
        count++;
       }
       stack.push(arr[i]);
   }
   console.log(count);
}

function runProgram(input) {

    input = input.trim().split('\n');
    var size = +input[0].trim();
    var arr = input[1].trim().split(' ').map(Number);

    sneModified2(arr, size);

}
if (process.env.USERNAME === "aneve") {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
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