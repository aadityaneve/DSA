function minimumInSortedAndRotatedArray(arr) {
    /* NOT WORKING
    let low = 0;
    let high = arr.length;
    let minimumNumber = 9999999999999999;
    while (low < high) {
        let mid = parseInt(low + (high - low) / 2);
        if (arr[mid] === minimumNumber) {
            // high = mid + 1;
            // low = mid - 1;
        } else if (arr[mid] < minimumNumber) {
            minimumNumber = arr[mid];
            high = mid - 1;
        } else if(arr[mid] > minimumNumber) {
            low = mid + 1;
        }
    }
    console.log(minimumNumber);
    */

    let minimumNumber = 999999999999999;
    function getMinimum(arr, low, high) {
        if (low > high) {
            return;
        } else {
            let mid = parseInt(low + (high - low) / 2);
            if (arr[mid] < minimumNumber) {
                minimumNumber = arr[mid];
            }
            getMinimum(arr, low, mid - 1);
            getMinimum(arr, mid + 1, high);
        }
    }
    getMinimum(arr, 0, arr.length);
    console.log(minimumNumber);
}

function runProgram(input) {
    input = input.trim().split("\n");
    var size = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    minimumInSortedAndRotatedArray(arr);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`8
    0 8 9 -9 -7 -3 -2 -1`);
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
