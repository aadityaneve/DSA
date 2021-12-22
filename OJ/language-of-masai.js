/* 

    Language of Masai XI Ended
    Description

    You are given a string stored in a variable with the namestr

    Also, the length of the string is stored in a variable with the nameN

    You have to modify the string, such that if the first character of the string is a vowel, then addhulkat the end of the string

    Else if the first character of the string is a consonant, then addthorto the end of the string

    For example, consider the value stored inN = 5, andstr = abced

    Now, since the first character of the string is a vowel, therefore, we addhulkto the end of the string

    Therefore, the string becomesabcedhulk, which is the required output

    Note : The string contains only lowercase characters


    Input
    The first line of the input containsN, the length of the string

    The next line contains the value stored instr


    Output
    Print the modified string as explained in the problem statement

    Sample Input 1 

    5
    abced
    Sample Output 1

    abcedhulk
    Hint

    In the sample test case, the value stored inN = 5, andstr = abced

    Now, since the first character of the string is a vowel, therefore, we addhulkto the end of the string

    Therefore, the string becomesabcedhulk, which is the required output

*/

function languageOfMasai(string) {
    let vowels = {
        a: 'a',
        e: 'e',
        i: 'i',
        o: 'o',
        u: 'u',
    };

    if (vowels.hasOwnProperty(string[0])) {
        string+='hulk';
    } else {
        string+='thor';
    }

    console.log(string);
}

function runProgram(input) {
    input = input.trim().split('\n');
    let string = input[1].trim();
    languageOfMasai(string);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`5
    abced`);
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
