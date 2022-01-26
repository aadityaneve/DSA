// function binarySearch(arr, choice, K) {}

function nikhilAndHisSearch(arr, choice, K) {
    // console.log(arr,choice,K);
    let left = 0;
    let right;
    let index = -1;
    switch (choice) {
        case 0: // Find number not less than x
            left = 0;
            right = arr.length - 1;
            index = -1;
            while (left <= right) {
                let mid = Math.floor(left + (right - left) / 2);
                if (arr[mid] >= K) {
                    index = mid;
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            if (index > -1) {
                console.log(arr.length - index);
            } else {
                console.log(0);
            }

            /*
            function search(arr, low, high) {
                if (low > high) {
                    return count;
                } else {
                    let mid = parseInt(low + (high - low) / 2);
                    if (arr[mid] >= K) {
                        count++;
                    }
                    search(arr, low, mid - 1);
                    search(arr, mid + 1, high);
                }
            }
            search(arr, 0, arr.length);
            console.log(count);
            */
            break;
        case 1: // Find number greater than x
            left = 0;
            right = arr.length - 1;
            index = -1;
            while (left <= right) {
                let mid = Math.floor(left + (right - left) / 2);
                if (arr[mid] > K) {
                    index = mid;
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            if (index > -1) {
                console.log(arr.length - index);
            } else {
                console.log(0);
            }

            /*
            function search(arr, low, high) {
                if (low > high) {
                    return ;
                } else {
                    let mid = parseInt(low + (high - low) / 2);
                    if (arr[mid] > K) {
                        count++;
                    }
                    search(arr, low, mid - 1);
                    search(arr, mid + 1, high);
                }
            }
            search(arr, 0, arr.length);
            console.log(count);
            break;
            */
            break;
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let line = 0;
    let testCases = +input[2];
    var arr = input[++line].trim().split(" ").map(Number);
    arr.sort((a, b) => a - b);
    line++;
    for (let i = 0; i < testCases; i++) {
        var [choice, K] = input[++line].trim().split(" ").map(Number);
        nikhilAndHisSearch(arr, choice, K);
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`4
    1 2 3 4
    3
    0 5
    1 3
    0 3`);
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
