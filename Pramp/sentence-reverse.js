function reverseWords(arr, i, j) {
    while (i <= j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        i++;
        j--;
    }
}

function sentenceReverse(arr) {
    arr = arr.reverse();

    let i = 0;
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] == '  ') {
            reverseWords(arr, i, j - 1);
            i = j + 1;
        }
    }
    reverseWords(arr, i, j - 1);
    i = j + 1;

    console.log(arr);
}

function runProgram(input) {
    let arr = ["g","r","e","a","t","e","s","t"," ","n","a","m","e"," ","f","i","r","s","t"," ","e","v","e","r"," ","n","a","m","e"," ","l","a","s","t"];

    sentenceReverse(arr);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(``);
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
