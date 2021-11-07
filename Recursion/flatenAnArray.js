let arr = [1, 2, [3, 4, [5, 6]]];

let newArr = [];
function flatenAnArray(arr) {
  for (let j = 0; j < arr.length; j++) {
    if (typeof arr[j] == "number") {
      newArr.push(arr[j]);
    } else {
      flatenAnArray(arr[j]);
    }
  }
}
flatenAnArray(arr);

console.log(newArr);
