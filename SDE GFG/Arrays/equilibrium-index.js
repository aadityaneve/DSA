/**
 * Given an array arr[] of size n, the task is to return an equilibrium index (if any) or -1
 * if no equilibrium index exists.
 * The equilibrium index of an array is an index such that the sum of all elements at lower indexes
 * equals the sum of all elements at higher indexes.
 *
 * Note: When the index is at the start of the array, the left sum is 0,
 * and when it’s at the end, the right sum is 0.
 *
 * Examples:
 * Input: arr[] = [1, 2, 0, 3]
 * Output: 2
 * Explanation: The sum of left of index 2 is 1 + 2 = 3 and sum on right of index 2 is 3.
 *
 * Input: arr[] = [1, 1, 1, 1]
 * Output: -1
 * Explanation: There is no equilibrium index in the array.
 *
 * Input: arr[] = [-7, 1, 5, 2, -4, 3, 0]
 * Output: 3
 * Explanation: The sum of left of index 3 is -7 + 1 + 5 = -1 and sum on right of index 3 is -4 + 3 + 0 = -1.
 *
 * Approaches:
 * [Naive Approach] Using Nested Loop – O(n^2) Time and O(1) Space
 * [Better Approach] Prefix Sum and Suffix Sum Array – O(n) Time and O(n) Space
 * [Expected Approach] Running Prefix Sum and Suffix Sum – O(n) Time and O(1) Space
 *
 *
 * GFG Problem Link: https://www.geeksforgeeks.org/equilibrium-index-of-an-array/
 */

/** [Naive Approach] Using Nested Loop – O(n^2) Time and O(1) Space
 * The most basic idea is to use nested loops.
 *
 * The outer loop iterates through all the indices one by one. Consider it as equilibrium index.
 * The inner loop finds out whether index i is equilibrium index or not,
 * by checking if left side sum = right side sum.
 */

console.clear();

const array1 = [1, 2, 0, 3];
const array2 = [1, 1, 1, 1];
const array3 = [-7, 1, 5, 2, -4, 3, 0];

function findEquilibriumIndexBruteForce(arr) {
  const n = arr.length - 1;

  for (let i = 0; i <= n; i++) {
    // Left sum
    let leftSum = 0;
    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }

    // Right sum
    let rightSum = 0;
    for (k = n; k > i; k--) {
      rightSum += arr[k];
    }

    // If equal
    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

const resultBruteForce = findEquilibriumIndexBruteForce(array1);
console.log('Brute Force ==>> ', resultBruteForce);

/**
 * [Better Approach] Prefix Sum and Suffix Sum Array – O(n) Time and O(n) Space
 *
 * The idea is to remove the need of inner loop.
 * Instead of calculating the left side sum and right side sum each time,
 * precompute the prefix sum array and suffix sum array, and simply access this in O(1) time.
 *
 * So for each index i, we can check if prefixSum[i – 1] = suffixSum[i + 1] but to avoid
 * unnecessary boundary checks we can also check if prefixSum[i] = suffixSum[i].
 */

function findEquilibriumIndexBetterApproach(arr) {
  const n = arr.length - 1;

  // Initialize the ends of prefix and suffix array
  const pref = new Array(n).fill(0);
  const suff = new Array(n).fill(0);

  // Initialize the ends of prefix and suffix array
  pref[0] = arr[0];
  suff[n] = arr[n];

  // Calculate prefix sum for all indices
  for (let i = 1; i <= n; i++) {
    pref[i] = pref[i - 1] + arr[i];
  }

  // Calculate suffix sum for all indices
  for (let i = n - 1; i >= 0; i--) {
    suff[i] = suff[i + 1] + arr[i];
    // console.log(suff, suff[i], suff[i + 1], arr[i]);
  }

  // Checking if prefix sum is equal to suffix sum
  for (let i = 0; i < n; i++) {
    if (pref[i] === suff[i]) {
      return i;
    }
  }

  // If equilibrium index doesn't exist
  return -1;
}

const resultBetterApproach = findEquilibriumIndexBetterApproach(array3);
console.log('Better Approach ==>> ', resultBetterApproach);

/**
 * [Expected Approach] Running Prefix Sum and Suffix Sum – O(n) Time and O(1) Space
 *
 * Now the above prefix sum array and suffix sum array approach can be further optimized in terms of space,
 * by using prefix sum and suffix sum variables.
 * The idea is that instead of storing the prefix sum and suffix sum for each element in an array,
 * we can simply use the fact that
 *
 * PrefixSum(arr[0 : pivot – 1]) + arr[pivot] + SuffixSum[pivot + 1: n – 1] = ArraySum
 *
 * so, SuffixSum[pivot + 1: n – 1] = ArraySum – PrefixSum(arr[0 : pivot – 1])
 *
 * Here, pivot refers to the index that we are currently checking for the equilibrium index.
 */

// JavaScript program to find equilibrium index of an array
// using prefix sum and suffix sum variables

function findEquilibriumIndexExpectedApproach(arr) {
  let prefSum = 0;
  let total = arr.reduce((sum, ele) => sum + ele, 0);

  // Iterate pivot over all the elements of the array

  for (let pivot = 0; pivot < arr.length; pivot++) {
    let suffSum = total - prefSum - arr[pivot];
    if (prefSum === suffSum) {
      return pivot;
    }

    prefSum += arr[pivot];
  }

  return -1;
}

const resultExpectedApproach = findEquilibriumIndexExpectedApproach(array3);
console.log('Expected Approach ==>> ', resultExpectedApproach);
