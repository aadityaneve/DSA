function fintTheWeirdSum(arr, size) {
    /* editorial solution - not working
    arr.sort((a, b) => a - b);
    
    function findSum(arr) {
        arr.sort((a, b) => a - b);
        largestElement = arr[arr.length - 1];
        arr.pop();
        return getAns(arr, largestElement, 0, 0);
    }

    function getAns(arr, X, i, sum) {
        if (i == arr.length) {
            
            return Math.abs(sum) == X;
        }

        return (
            getAns(arr, X, i + 1, sum + arr[i]) ||
            getAns(arr, X, i + 1, sum - arr[i])
        );
    }
    if (findSum(arr) == true) {
        console.log("Yes");
    } else {
        console.log("No");
    }
    */

    arr = arr.sort((a, b) => a - b);
    let biggestElement = arr[arr.length - 1];
    function getSubset(arr, newArr, curr) {
        if (newArr.length != 0) {
            if (!newArr.includes(biggestElement)) {
                let sum = newArr.reduce((a, b) => a + b);
                if (sum == biggestElement) {
                    return true;
                }
            }
        }

        // console.log(newArr);
        if (curr == arr.length) {
            return false;
        }

        for (let i = curr; i < arr.length; i++) {
            newArr.push(arr[i]);
            if (getSubset(arr, newArr, i + 1)) return true;
            newArr.pop();
            // getSubset(arr, newArr.concat(arr[i]), i + 1);
        }
    }
    if (getSubset(arr, [], 0)) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        var size = +input[++line];
        var arr = input[++line].trim().split(" ").map(Number);
        fintTheWeirdSum(arr, size);
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`3
    3
    1 2 3
    4
    0 1 2 3
    4
    2 3 6 10`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
