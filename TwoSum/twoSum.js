/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const val = {};

  for (let i = 0; i < nums.length; i++) {
    const currVal = nums[i];

    if (target - currVal in val) {
      return [val[target - currVal], i];
    }
    val[nums[i]] = i;
  }

  return [1, 1];
};

// test1
console.log(twoSum([5, 5, 3], 10));
// test2
console.log(twoSum([5, 4, 8], 12));
// test3
console.log(twoSum([10, 5, 3], 13));
