function subsequences(arr) {
    //   var arr = [];
    //   arr += 5;
    //   console.log(arr);

    //     var newArr = [];
    //   console.log(newArr.concat(1));
    //   console.log(newArr)


    /* subsequences using recursion    ********** BEST Way *********
    function getSubset(arr, newArr, curr) {
        if (curr == arr.length) {
            console.log(newArr);
            return;
        }

        getSubset(arr, newArr, curr + 1);
        getSubset(arr, newArr.concat(arr[curr]), curr + 1);
    }
    getSubset(arr, [], 0);
    */

    /* subsequences using recursion     ********* BEST Way **********
    function getSubsequences(arr, newArr) {
        if (arr.length == 0) {
            console.log(newArr.join("").trim());
            return;
        }
        // let char = arr[0];
        getSubsequences(arr.slice(1), newArr.concat(""));
        getSubsequences(arr.slice(1), newArr.concat(arr[0]));
    }
    getSubsequences(arr, []);
    */

    /* using this we can solve for string
  function getSubsequences(string, newString) {
    if (string.length == 0) {
      console.log(newString);
      return;
    }

    getSubsequences(string.substring(1), newString + string[0]);
    getSubsequences(string.substring(1), newString + "");
  }
  getSubsequences(string, "");
  */
}

function runProgram(input) {
    var arr = input.trim().split(" ");
    subsequences(arr);
}
if (process.env.USERNAME === "aneve") {
    runProgram(`a b c`);
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
