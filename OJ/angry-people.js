function angryPeople(arr) {
    function swap(arr, i, curr) {
        var temp = arr[i];
        arr[i] = arr[curr];
        arr[curr] = temp;
    }

    let dangerValue = 0;
    let value;
    var maxValues = [];
    function gp(arr, curr) {
        if (curr == arr.length) {
            // console.log(arr.join(' '));
            // newArr.push((arr));
            for (let i = 0; i < arr.length; i++) {
                value = arr[i] - arr[i + 1];
                if (i === arr.length - 1) {
                    value = arr[i] - arr[0];
                }
                if (dangerValue < value) {
                    dangerValue = value;
                }
            }
            maxValues.push(dangerValue);
            return;
        }

        for (let i = curr; i < arr.length; i++) {
            swap(arr, i, curr);
            gp(arr, curr + 1);
            swap(arr, i, curr);
        }
    }
    gp(arr, 0);
    // console.log("dangerValue:", dangerValue);
    console.log(Math.min(...maxValues))


    // console.log(newArr)

    /*
    let dangerValue = 0;
    let maxValue;

    function getSubset(arr, newArr, curr) {
        if (curr === arr.length) {
            // console.log(newArr);
            if (newArr.length === 2) {
                maxValue = newArr[0]-newArr[1];
            }
            if (dangerValue < maxValue) {
                dangerValue = maxValue;
            }
            return;
        }

        getSubset(arr, newArr.concat(arr[curr]), curr + 1);
        getSubset(arr, newArr, curr + 1);
    }
    getSubset(arr, [], 0);
    console.log(dangerValue);
    */

    // arr.sort((a, b) => a - b);

    // let i = 0;
    // let dangerValue = 0;
    // let value1;
    // let value2;
    // let maxValue;
    // while (i < arr.length - 2) {
    //     if (i === 0) {
    //         value1 = arr[i + 1] - arr[i];
    //         value2 = arr[arr.length - 1] - arr[i];
    //         maxValue = Math.max(value1, value2);
    //     } else if (i === arr.length - 1) {
    //         value1 = arr[i] - arr[i-1];
    //         value2 = arr[i] - arr[0];
    //         maxValue = Math.max(value1, value2);
    //     } else {
    //         value1 = arr[i + 1] - arr[i];
    //         value2 = arr[i] - arr[i - 1];
    //         maxValue = Math.max(value1, value2);
    //     }
    //     // console.log(maxValue);
    //     console.log(value1+":"+value2)
    //     if (dangerValue < maxValue) {
    //         dangerValue = maxValue;
    //     }

    //     i++;
    // }
    // console.log(dangerValue);
}

function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    angryPeople(arr);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`4
    5 10 6 8`);
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
