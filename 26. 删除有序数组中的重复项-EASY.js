// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const paramNums = [1, 1, 2];

/**
 * 双指针法
 */
var removeDuplicates = function (nums) {
  const len = nums.length;
  if (len < 2) {
    return nums;
  }
  let fast = 1;
  let slow = 1;
  while (fast < len) {
    if (nums[fast] > nums[fast - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }

  return slow;
};

console.log(removeDuplicates(paramNums));
