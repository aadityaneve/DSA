function runProgram(input) {
    
    input = input.trim().split('\n');
    let testCases = +input[0];
    let lines = 0;
    let mat = [];
    for(let i = 0; i < testCases; i++){
        let [n1, n2] = input[++lines].trim().split(' ').map(Number);
        mat.push([n1, n2]);
    }

    sum1 = 1;
    for(let i = 0; i < mat.length; i++){
        sum1*=mat[i][0];
    }

    sum2 = 1;
    for(let i = 0; i < mat.length; i++){
        sum2*=mat[i][1];
    }

    console.log(sum1 + sum2)

}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
    3 1
    4 3`);
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
