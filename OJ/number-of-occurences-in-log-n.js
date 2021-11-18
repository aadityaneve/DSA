function numberOfOccurencesInLogN(arr, K) {
    let count = 0;
    function search(K, low, high) {
        if (low > high) {
            return;
        } else {
            let mid = parseInt(low + (high - low) / 2);
            // console.log(mid);
            if (arr[mid] === K) {
                count++;
            } 
            search(K, low, mid - 1);
            search(K, mid + 1, high);           
        }
    }
    search(K, 0, arr.length);
    console.log(count)
}

function runProgram(input) {
    input = input.trim().split("\n");
    var [size, K] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    arr.sort((a, b) => a - b);
    numberOfOccurencesInLogN(arr, K);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`6 3
    2 3 3 3 6 9`);
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
