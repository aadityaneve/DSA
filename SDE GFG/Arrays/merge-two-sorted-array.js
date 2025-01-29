/**
 * Merge Two Sorted Arrays
 *
 * Time Complexity => O(n) + O(m)
 */

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 8, 10, 11, 12, 16];
let resultArr = [];

let i = 0,
  j = 0,
  k = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    resultArr[k] = arr1[i];
    i++, k++;
  } else if (arr1[i] > arr2[j]) {
    resultArr[k] = arr2[j];
    j++, k++;
  }
}

while (i < arr1.length) {
  resultArr[k] = arr1[i];
  i++, k++;
}

while (j < arr2.length) {
  resultArr[k] = arr2[j];
  j++, k++;
}

console.log('MERGED ARRAY =>> ', resultArr);
