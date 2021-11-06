function merge(left, right) {
    let arr = [];
    
    while (left.length && right.length) {
        
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    // console.log("Step : ", arr, left, right);
    return [...arr, ...left, ...right];
}

function mergeSort(array) {
    const half = array.length / 2;

    // Base case
    if (array.length < 2) {
        return array;
    }

    const left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
}

function runProgram(input) {
    input = input.trim().split('\n');
    var line = 0;
    var size = +input[line];
    var arr1 = input[++line].trim().split(' ').map(Number);
    var arr2 = input[++line].trim().split(' ').map(Number);
    var arr = [];
    arr = arr.concat(arr1,arr2);
    var ans = mergeSort(arr)
    console.log(ans.join(' '))
}
if (process.env.USERNAME === "aneve") {
    runProgram(`4
    1 5 7 9
    2 4 6 8`);
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
