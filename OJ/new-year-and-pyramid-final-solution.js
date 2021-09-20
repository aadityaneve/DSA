
function newYearAndPyramid(size) {

    var count = 0;
    var required = 1;
    while (size >= required) {
        count++;
        required = (count + 2) * (count + 1) / 2;
        size = size - required;
        // console.log("count : ",count
        //     +" required : ",required
        //     +" size : ", size
        // );
    }
    if (size > 0) {
        count++
    }
    console.log(count);
}



function runProgram(input) {
    input = +input.trim();

    newYearAndPyramid(+input);

}
if (process.env.USERNAME === "aneve") {
    runProgram(`25`);
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