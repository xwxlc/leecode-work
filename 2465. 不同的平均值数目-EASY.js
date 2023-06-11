// https://leetcode.cn/problems/number-of-distinct-averages/

/**
 * @param {number[]} nums
 * @return {number}
 */
const paramNums = [10, 2, 2, 0, 4, 0];
var distinctAverages = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let arr = new Set();
  while (left < right) {
    const a = nums[left];
    const b = nums[right];
    left++;
    right--;
    arr.add((a + b) / 2);
  }
  return arr.size;
};

console.log(distinctAverages(paramNums));
