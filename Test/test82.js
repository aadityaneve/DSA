function tileOfTogetherness(num1, num2) {
   /*  let num1 = Math.min(num3, num4);
    let num2 = Math.max(num3, num4);
 */
    let num = 0;
    flag = false;
    while (num1 < num2) {
        num = 0;
        let splitedNumber = String(num1).split('');
        for (let i = 0; i < splitedNumber.length; i++) {
            num = num + Number(splitedNumber[i]);
        }
        // console.log(num);
        num1 = Number(num1) + Number(num);
        // console.log('num1:', num1);

        num = 0;
        splitedNumber = String(num2).split('');
        for (let i = 0; i < splitedNumber.length; i++) {
            num = num + Number(splitedNumber[i]);
        }
        // console.log(num);
        num2 = Number(num2) + Number(num);
        // console.log('num1:', num1);

        console.log(num1+":"+num2)

        if (num1 >= num2) {
            flag = true;
            break;
        }
    }

    if (flag == true) {
        console.log(num2);
    } else {
        console.log(-1);
    }
}

function runProgram(input) {
    // input = input.trim().split('\n');
    let [num1, num2] = input.trim().split(' ');
    tileOfTogetherness(num1, num2);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`32 47`);
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
