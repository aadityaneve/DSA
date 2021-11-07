function sumExistsOrNot(arr, K) {
    let flag = false;
    function getSubset(arr, newArr, curr) {
        if (curr == arr.length) {
            // console.log(newArr);
            let sum = 0;
            for(let i = 0; i < newArr.length;i++){
                sum+=newArr[i];
            }
            if(sum == K){
                flag = true;
            }
            return;
        }

        // for (let i = curr; i < arr.length; i++) {
            getSubset(arr, newArr, curr + 1);
            getSubset(arr, newArr.concat(arr[curr]), curr + 1);
        // }
    }
    getSubset(arr, [], 0);
    if(flag == 1){
        console.log("yes");
    }else {
        console.log("no");
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var size = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var K = +input[2];

    sumExistsOrNot(arr, K);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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
