function nearestGreaterElement(arr) {

    var stack = [];
    var ans = [];

    for (let i = arr.length - 1; i >= 0; i--) {

        if (stack.length == 0) {
            ans.push(-1);
        } else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
            ans.push(stack[stack.length - 1]);
        } else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
                stack.pop();
            }
            if (stack.length == 0) {
                ans.push(-1);
            } else {
                ans.push(stack[stack.length - 1]);
            }
        }
        stack.push(arr[i]);
    }

    console.log(ans);
}

function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        var arr = input[++line].trim().split(' ').map(Number);
        nearestGreaterElement(arr);
    }

}
if (process.env.USERNAME === "aneve") {
    runProgram(`1
    1 3 2 4`);
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