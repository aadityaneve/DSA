function missingLetters(arr) {


    /* for(let i = 0; i <= arr.length; i++) {
        if(i !== arr[i]){
            console.log(i);
            break;
        }
    } */



    /* Binary search */

    for (var i = 0; i <= arr.length; i++) {
        let element = i;
        // first occurrences
        let start = 0;
        let end = arr.length - 1;
        let firstOccurrence = -1;
        while (start <= end) {
            var mid = parseInt(start + (end - start) / 2);

            if (element === arr[mid]) {
                // console.log(element)
                firstOccurrence = mid;
                end = mid - 1;
            } else if (element < arr[mid]) {
                end = mid - 1;
            } else if (element > arr[mid]) {
                start = mid + 1;
            }
        }
        // console.log('firstOccurrence:', firstOccurrence)

        /* // last occurrences
        start = 0;
        end = arr.length - 1;
        let lastOccurrence = -1;
        while (start <= end) {
            var mid = parseInt(start + (end - start) / 2);
            
            if (element === arr[mid]) {
                lastOccurrence = mid;
                start = mid + 1;
            } else if (element < arr[mid]) {
                end = mid - 1;
            } else if (element > arr[mid]) {
                start = mid + 1;
            }
        }
        // console.log('lastOccurrence:', lastOccurrence) */

        if (firstOccurrence === -1) {
            console.log(i);
            break;
        }
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let lines = 0;
    for (let i = 0; i < +input[0]; i++) {
        let arr = input[++lines].trim().split(' ').map(Number);
        arr.sort((a, b) => a - b);
        missingLetters(arr);
    }
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`2
    0 1 2 4 5 6 9 10 11 12 
    1 2 3 5 7 8 9 10 11 12`);
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
