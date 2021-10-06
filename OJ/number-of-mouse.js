/*
	Number of mouse Ended
	Description

	You are given a string of size N, consisting of characters from 'a' to 'z'.

	You need to print number of times you can make "mouse", using characters from string. You can use a character only once from the string.

	Note : You have to take the input yourself

	Input
	First line contains T, no of test cases.

	First line of each test case contains N, size of string

	Second line of each test case contains string S.

	Constraints

	1 <= T <= 10

	1 <= N <= 10^6


	Output
	For each test case, print number of times you can make "mouse"





	Sample Input 1 

	2
	7
	mousems
	8
	wimousee
	Sample Output 1

	1
	1
*/





function numberOfMouse(string, size) {

    var mouse = ['m', 'o', 'u', 's', 'e'];
    // var mouse2 = ['m', 'o', 'u', 's', 'e'];
    // console.log(mouse.join('') == mouse2.join(''));
    var count = 0;
    for (let i = string.indexOf('m'); i < string.length; i++) {
        // string.shift()
        // console.log(i);
        // console.log(string.slice(i,i+5));
        // console.log(string.indexOf('m'));
        if (string.slice(i, i + 5).join('') == mouse.join('')) {
            count++;
            for (let j = i; j < string.indexOf('m'); j++) {
                // console.log(string.shift());
                string.shift();
            }
        }
        // i = i + 5;
        // console.log(string);
        // console.log(i);
    }
    console.log(count);


}

function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        var size = +input[++line];
        var string = input[++line].trim().split('');
        numberOfMouse(string, size);
    }

}
if (process.env.USERNAME === "aneve") {
    runProgram(`2
    7
    mousemsmouse
    8
    wimouseeemouserrrmouse`);
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