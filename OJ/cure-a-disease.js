function cureADisease(strengthOfVaccine, countOfPeople) {

    let flag = true;
    for(let i = 0; i < strengthOfVaccine.length; i++) {
        if(countOfPeople[i] >= strengthOfVaccine[i]){
            flag = false;
            break;
        }
    }
    if(flag){
        console.log("Yes");
    }else{
        console.log('No');
    }

}

function runProgram(input) {
    input = input.trim().split('\n');
    let strengthOfVaccine = input[1].trim().split(' ').map(Number);
    strengthOfVaccine.sort((a, b) => a - b);
    let countOfPeople = input[2].trim().split(' ').map(Number);
    countOfPeople.sort((a, b) => a - b);
    cureADisease(strengthOfVaccine, countOfPeople);
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`5
  123 146 454 542 456
  100 328 248 689 200`);
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
