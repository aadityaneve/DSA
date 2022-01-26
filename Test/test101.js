function commonStart(arr) {
    let string1 = arr[0];
    let string2 = arr[1];
    let string3 = arr[2];

    let newArr = [];
    for (let i = 0; i < string1.length; i++) {
        if(string1[i] === string2[i] && string2[i] === string3[i]) {
            newArr.push(string1[i]);
        }
    }
    console.log(newArr.join(''));

    /* arr.sort();
    let firstWord = String(arr[0]);
    let commonLetters = [];
    for (let i = 1; i < arr.length; i++) {
        let word = arr[i];
        for (let j = 0; j < word.length; j++) {
            if (firstWord[j] === word[j]) {
                commonLetters.push(word[j]);
            } else {
                break;
            }
        }
    }
    console.log('commonLetters:', commonLetters.join(' ')); */
}

function runProgram(input) {
    input = input.trim().split('\n');

    let testCases = +input[0];
    let lines = 0;
    let mat = [];
    for (let i = 0; i < testCases; i++) {
        let arr = input[++lines].trim().split(' ');
        commonStart(arr);
    }
    /* let testCases = +input[0];
    let lines = 0;
    let mat = [];
    for (let i = 0; i < testCases; i++) {
        let arr = input[++lines].trim().split(' ');
        arr.sort();
        for (let j = 0; j < arr.length; j++) {
            mat.push(arr[j].split(''));
        }
    } */

    /* let firstString = mat[0];
    let finalString = []
    for (let i = 1; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (firstString.length  === j) {
                break;
            } else {
                if (firstString[j] !== mat[i][j]) {
                    // console.log('mat[i][j]:', mat[i][j])
                    firstString.pop();
                }else {
                    // firstString.push(mat[i][j]);
                }
            }
        }
    }
    console.log(firstString.join('')); */
    // console.log(finalString.join(''))

    /* let commonLetters = [];
    commonLetters.push(mat[0]);
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] == commonLetters[commonLetters.length - 1]) {
                commonLetters.push(mat[i][j]);
            }
        }
    }

    console.log(commonLetters[0].join('')); */
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`1
    rbbyrrby rbb rbbybbryb`);
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
