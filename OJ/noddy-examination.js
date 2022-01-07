function noddyExamination(arr, X) {
    let count = 0;
    let skipQuestionCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= X) count++;
        if(arr[i] > X) skipQuestionCount++;
        if(skipQuestionCount === 2){
            break;
        }
    }
    console.log(count);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let [testCases, X] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);
    noddyExamination(arr, X);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`8 3
        4 4 4 4 4 4 4 4`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding('ascii');
    let read = '';
    process.stdin.on('data', function (input) {
        read += input;
    });
    process.stdin.on('end', function () {
        read = read.replace(/\n$/, '');
        read = read.replace(/\n$/, '');
        runProgram(read);
    });
    process.on('SIGINT', function () {
        read = read.replace(/\n$/, '');
        runProgram(read);
        process.exit(0);
    });
}
