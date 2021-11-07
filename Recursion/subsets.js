// 1234

// 1
// 12
// 123
// 1234

// 2
// 23

// 234

// 3
// 34

// 4

function subsets(arr) {
    /**************** IMP ****************
        Are subsequences and subsets same?
        Subset: Same as subsequence except it has empty set
    */

    // subsets using recursion
    function getSubset(arr, newArr, curr) {
        if (curr == arr.length) {
            console.log(newArr);
            return;
        }

        getSubset(arr, newArr, curr + 1);
        getSubset(arr, newArr.concat(arr[curr]), curr + 1);
    }
    getSubset(arr, [], 0);

    /* subsets in iterative way
    for (let i = 0; i < arr.length; i++) {
        let newArr = [];
        for (let j = i; j < arr.length; j++) {
            newArr.push(arr[j]);
            console.log(newArr.join(" "));
        }
    }
    */

    /* subsets using bits
    let limit = Math.pow(2, arr.length);
    for (let i = 0; i < limit; i++) {
        let set = [];
        let number = i;
        for (let j = arr.length - 1; j >= 0; j--) {
            let bit = number % 2;
            number = parseInt(number / 2);

            if (bit == 0) {
                set.unshift("-");
            } else {
                set.unshift(arr[j]);
            }
        }
        console.log(set);
    }
    */

    /* different varient
    let count = 0;
    let limit = Math.pow(2, arr.length);
    for (let i = 0; i < limit; i++) {
        let set = [];
        let number = i;
        for (let j = arr.length - 1; j >= 0; j--) {
            let bit = number % 2;
            number = parseInt(number / 2);

            if (bit == 0) {
                // set.push("-");
            } else {
                set.unshift(arr[j]);
            }
        }
        console.log(set)
        let sum = 0;
        for (let k = 0; k < set.length; k++) {
            sum+=arr[k];
        }
        if(sum == 14){
            count++;
        }        
    }
    // console.log(count)
    */
}

function runProgram(input) {
    var arr = input.trim().split(" ");
    subsets(arr);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`a b c d`);
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
