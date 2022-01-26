function soap(arr, K) {
    // console.log(arr, K);
    let count = 0;
    // function search(arr, low, high) {
    //     if (low > high) {
    //         return count;
    //     } else {
    //         let mid = parseInt(low + (high - low) / 2);
    //         if (arr[mid] < K) {
    //             count++;
    //         }
    //         search(arr, low, mid - 1);
    //         search(arr, mid + 1, high);
    //     }
    // }
    // search(arr, 0, arr.length);

    left = 0;
    right = arr.length - 1;
    index = -1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] < K) {
            index = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if (index > -1) {
        console.log(index+1);
    } else {
        console.log(0);
    }

    /*
    let low = 0;
    let high = arr.length - 1;
    let index = -1;
    while (low <= high) {
        let mid = parseInt(low + (high - low) / 2);
        // console.log(mid);
        if (arr[mid] >= K) {
            index = mid;
            high = mid - 1;
        } else {
            // count++;
            low = mid + 1;
        }
    }

    console.log(index);
    */
}

function runProgram(input) {
    input = input.trim().split("\n");
    let line = 0;
    let testCases = +input[2];
    var arr = input[++line].trim().split(" ").map(Number);
    arr.sort((a, b) => a - b);
    line++;
    for (let i = 0; i < testCases; i++) {
        var K = input[++line].trim().split(" ").map(Number);
        soap(arr, K);
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`5
    1 4 10 5 6
    4
    2
    3
    5
    11`);
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
