function cidInvistigation(number) {
    let obj = {
        1: 0,
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };

    // console.log(number.length);

    let newString = '';
    if (number.length == 1) {
        let arr = obj[number];
    } else {
        for (let j = 0; j < number.length; j++) {
            let arr = obj[number[j]];
            newString += arr.shift();
        }
    }
    let finalArr = newString.split('');

    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let newArr = [];
    function gp(finalArr, curr) {
        if (curr == finalArr.length) {
            // console.log(arr.join(' '));
            newArr.push(finalArr.join(''));
            return;
        }

        for (let i = curr; i < finalArr.length; i++) {
            swap(finalArr, i, curr);
            gp(finalArr, curr + 1);
            swap(finalArr, i, curr);
        }
    }
    gp(finalArr, 0);
    console.log('newArr:', newArr)

}

function runProgram(input) {
    cidInvistigation(input.trim());
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`222`);
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
