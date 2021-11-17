function binarySearchForSortedArray(arr) {
    // console.log(arr)
    key = 8;
    low = 0;
    high = arr.length;
    while (low <= high) {
        // let mid = (low + high) / 2;

        // Best way to calculate mid : 
        let mid = low + (high-low)/2;
        if (arr[mid] === key) {
            return [true, mid];
        } else if (arr[mid] > key) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return [false];
}

function runProgram(input) {
    input = input.trim().split(" ").map(Number);
    const [doFound, index ] = binarySearchForSortedArray(input)
    if(doFound){
        console.log(`Found @ ${index}`);
    }else {
        console.log("Not Found");
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`0 1 5 7 8 9`);
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
