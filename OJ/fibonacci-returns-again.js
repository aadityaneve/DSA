function fibonacciReturnsAgain(number) {
    const cache = [0, 1];
    for (let i = 1; i < number; i++) {
        cache.push(-1);
    }
    // console.log(cache);
    // cache[4] = 10;
    // console.log(cache[4])
    // console.log(typeof cache[4]);

    // let cache = {}
    let index = number;
    function getFibonacci(number) {
        // console.log(typeof number)
        // console.log(cache)
        if (cache[number - 1] != -1) {
            return cache[number - 1];
        } else {
            return cache[number - 1] =
                getFibonacci(number - 1) +
                getFibonacci(number - 2);
        }
    }
    getFibonacci(number+1);
    console.log(cache[cache.length-1]);
}

function runProgram(input) {
    fibonacciReturnsAgain(+input);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`10`);
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
