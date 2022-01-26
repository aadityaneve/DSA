function drStrangeAndPossibilities2(arr) {

    let finalArr = [];

    function hasSubstring(tempArr){
        for(let i = 0; i < finalArr.length;i++){
            if(JSON.stringify(finalArr[i]) === JSON.stringify(tempArr)){
                // console.log("hi")
                return true;
            }
        }
        return false;
    }


    function getSubset(arr, newArr, curr) {        
        // console.log(...newArr)
        if(!hasSubstring(newArr)){
            finalArr.push(new Array(...newArr))
        }
        
        if (curr == arr.length) {
            return;
        }

        for (let i = curr; i < arr.length; i++) {
            newArr.push(arr[i]);
            getSubset(arr, newArr, i + 1);
            newArr.pop();
        }
    }
    getSubset(arr, [], 0);
    // console.log(...finalArr)
    for (let i = 0; i < finalArr.length; i++){
        console.log(...finalArr[i])
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var size = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    drStrangeAndPossibilities2(arr);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`3
    1 2 2`);
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
