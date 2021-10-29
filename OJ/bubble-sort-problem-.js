/* 
    Bubble Sort Problem -12:45:49
    Description

    You are given an array of N unsorted numbers. Your task is to write BUBBLE SORT such that numbers present in the array gets sorted.

    USING ANY OTHER ALGORITHM OR USING IN BUILT SORT FUNCTION WOULD LEAD TO YOUR DISQUALIFICATION


    Input
    Input Format:

    First line of input contains N

    Second line of input contains N numbers

    Constraints:

    N < 500


    Output
    Output the numbers given after sorting it in increasnig order


    Sample Input 1 

    5
    3 5 0 9 8
    Sample Output 1

    0 3 5 8 9
*/

function bubbleSortUsingRecursion(arr, size) {
  let swapped;
  for (let i = 0; i < size - 1; i++) {
    swapped = false;
    for (let j = 0; j < size - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped == false) {
      break;
    }
  }
  console.log(arr.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  var size = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  bubbleSortUsingRecursion(arr, size);
}
if (process.env.USERNAME === "aneve") {
  runProgram(`5
  3 5 0 9 8`);
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
