// https://leetcode.cn/problems/apply-operations-to-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const paramNums = [1, 2, 2, 1, 1, 0];
var applyOperations = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
    if (nums[i] != 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
  return nums;
};
console.log(applyOperations(paramNums));
