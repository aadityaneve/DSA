/* 
    Merge Sorting -9:44:0
    Description

    You are given N numbers. Your task is to write MERGE SORT sorting algorithm (from scratch) to sort those N numbers.

    USING ANY OTHER ALGORITHM OR IN BUILT FUNCTION WOULD LEAD TO DISQUALIFICATION FROM NEXT CONTEST


    Input
    Input Format:

    First line of input contains N

    Next line contains N space separated integers.

    Constraints:

    N < 1000000


    Output
    Output the sorted form of provided numbers


    Sample Input 1 

    5
    3 5 0 9 8
    Sample Output 1

    0 3 5 8 9
*/

function merge(left, right) {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  // console.log("Step : ", arr, left, right);
  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}

function runProgram(input) {
  input = input.trim().split("\n");
  var size = +input[0];
  var array = input[1].trim().split(" ").map(Number);
  console.log(mergeSort(array).join(" "));
}
if (process.env.USERNAME === "aneve") {
  runProgram(`34
  -17 11 -11 -27 -22 41 0 -27 -43 -15 27 7 -49 12 45 48 -45 -25 45 -32 -29 -18 -16 -48 -20 -46 3 -41 -43 -7 -39 -34 -17 -19`);
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
