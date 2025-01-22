/**
 * Leaders in an array
 * Description
 * Given an array arr[] of size n, the task is to find all the Leaders in the array.
 * An element is a Leader if it is greater than or equal to all the elements to its right side.
 *
 * Note: The rightmost element is always a Leader.
 *
 * Example 1:
 * Input: arr[] = [16, 17, 4, 3, 5, 2]
 * Output: [17 5 2]
 * Explanation: 17 is greater than all the elements to its right i.e., [4, 3, 5, 2],
 * therefore 17 is a leader. 5 is greater than all the elements to its right i.e., [2],
 * therefore 5 is a leader. 2 has no element to its right, therefore 2 is a leader.
 *
 * Example 2:
 * Input: arr[] = [1, 2, 3, 4, 5, 2]
 * Output: [5 2]
 * Explanation: 5 is greater than all the elements to its right i.e., [2],
 * therefore 5 is a leader. 2 has no element to its right, therefore 2 is a leader.
 *
 * 2 Approachs
 * 1. Brute Force
 * Using Nested Loops – O(n^2) Time and O(1) Space
 * 2. Optimal
 * Using Suffix Maximum – O(n) Time and O(1) Space
 *
 * GFG Problem Link: https://www.geeksforgeeks.org/leaders-in-an-array/#approach-1-brute-force-approach-on2-time-and-o1-space
 * */

const array1 = [16, 17, 4, 3, 5, 2];
const array2 = [1, 2, 3, 4, 5, 2];

// Brute Force
// Time complexity => O(n^2)
// Space complexity => O(1)
function leaders(arr) {
  const leaders = [];
  const n = arr.length - 1;

  for (let i = 0; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (arr[i] < arr[j]) {
        break;
      }

      if (j === n) {
        leaders.push(arr[i]);
      }
    }
  }

  leaders.push(arr[n]);

  return leaders;
}

const result1 = leaders(array1);
console.log('BRUTE FORCE ==>> ', result1);

// Optimal
// Time complexity => O(n)
// Space complexity => O(1)
function leadersOptimal(arr) {
  const leaders = [];
  const n = arr.length - 1;

  leaders.push(arr[n]);

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] > leaders[leaders.length - 1]) {
      leaders.push(arr[i]);
    }
  }

  return leaders.reverse();
}

const result2 = leadersOptimal(array1);
console.log('OPTIMAL ==>> ', result2);
