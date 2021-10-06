/*
	Minimum Stack Ended
	Description

	Given a stack, there are three main operations performed on this stack -

	1. push(x) - pushes an element x onto the stack and does not print anything

	2. pop() - pops the top element of the stack and does not print anything

	3. getMin() - print the minimum element of the stack

	Given a number of operations of the above three types, print the expected result.
	Look at sample inputs for better understanding

	Note - It is always ensured that pop() or getMin() is not called on an empty stack


	Input
	Input Format

	First line contains an integer o, the number of operations

	The next o lines each contain one of the three operations -

	1. push x - push element onto the stack and do not print anything

	2. pop - pop element onto the stack and do not print anything

	3. getMin - get minimum in the stack and print the element



	Input Constraints

	100 <= o <= 10e7

	1 <= x <= 100

	It is always ensured that pop or getMin is not called on an empty stack


	Output
	You have to create your own stack, which performs the required operations


	Sample Input 1 

	8
	push 5
	push 3
	push 1
	getMin
	pop
	getMin
	pop
	getMin
	Sample Output 1

	1
	3
	5
*/










var stack = [];

function minimumStack(operation, num){

    switch(operation){
        case 'push': if(num!==undefined){
                       stack.push(num);
                    }
                    break;
        case 'pop': 
                    stack.pop();                    
                    break;
        case 'getMin': console.log(Math.min(...stack));
                    break;
        
    } 

    // console.log(stack);
}

function runProgram(input) {
    
    input = input.trim().split('\n');
    var line = 0;
    for(let i=0;i<+input[0];i++){
        var [operation, num] = input[++line].trim().split(' ');
                
        minimumStack(operation, num);
    }

}
if (process.env.USERNAME === "aneve") {
    runProgram(`8
    push 5
    push 3
    push 1
    getMin
    pop
    getMin
    pop
    getMin`);
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