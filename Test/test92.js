function runProgram(input) {
    input = input.trim().split('\n');

    let size = +input[0];

    let arr = input[1].trim().split(' ').map(Number);

    let K = +input[2];

    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] = obj[arr[i]] + 1;
        }
    }

    let flag = false;
    for (let x in obj) {
        if (obj[x] >= K) {
            flag = true;
            break;
        }
    }
    if (flag === true) {
        console.log('True');
    } else {
        console.log('False');
    }

    /* let flag = false;

    function uniqueSubsets(arr, newArr, curr) {
        // console.log(newArr);

        if (curr === arr.length) {
            let obj = {};
            for (let i = 0; i < newArr.length; i++) {
                if (!obj.hasOwnProperty(newArr[i])) {
                    obj[newArr[i]] = 1;
                } else {
                    obj[newArr[i]] = obj[newArr[i]] + 1;
                }
            }
            // console.log('obj:', obj);

            let count = 0;
            for (let x in obj) {
                if (obj[newArr[x]] >= K) {
                    count++;
                }
            }

            if (count === K) {
                flag = true;
            }

            // console.log(Object.keys(obj).length)

            if (Object.keys(obj).length == K) flag = true;
            return;
        }

        for (let i = curr; i < arr.length; i++) {
            newArr.push(arr[i]);
            uniqueSubsets(arr, newArr, i + 1);
            newArr.pop();
        }
    }
    uniqueSubsets(arr, [], 0);
    if (flag === true) {
        console.log('True');
    } else {
        console.log('False');
    } */
}
if (process.env.USERNAME === 'aneve') {
    runProgram(`3 
    1 2 1
    3`);
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
