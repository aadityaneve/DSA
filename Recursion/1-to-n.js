function runProgram(input) {
    

    function print(n){

        if(n == 1){ // Base condition   // Smallest valid input
            console.log(n);
            return;
        }

        print(n-1); // Hypothesis
        console.log(n); // Induction
    }
    print(+input.trim());


}
if (process.env.USERNAME === "aneve") {
    runProgram(`7`);
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