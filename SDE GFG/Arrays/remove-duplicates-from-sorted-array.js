/**
 * 26. Remove Duplicates from Sorted Array
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

console.clear();

var removeDuplicates = function (nums) {
  let i = 0;
  let j = 1;
  let numsLength = nums.length;
  while (i < nums.length && j < nums.length) {
    if (nums[i] === nums[j]) {
      const removedElement = nums.splice(j, 1);
      // nums.push(...removedElement)
      // delete nums[nums.length - 1]
      numsLength -= 1;

      // j++;
    }

    if (nums[i] !== nums[j]) {
      i = j;
      j = j + 1;
    }

    console.log(" ========= ", JSON.stringify(nums));
  }

  return numsLength;
};

// console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
