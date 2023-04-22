// https://leetcode.cn/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const paramNums = [3, 2, 2, 3];
const paramVal = 3;

/**
 * 双指针法
 */
var removeElement = function (nums, val) {
  let len = nums.length;
  let fast = 0;
  let slow = 0;
  while (fast < len) {
    if (nums[fast] != val) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }

  return slow;
};
console.log(removeElement(paramNums, paramVal));

/**
 * 双指针法优化
 */
var removeElement = function (nums, val) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    if (nums[left] == val) {
      nums[left] = nums[right - 1];
      right--;
    } else {
      left++;
    }
  }
  return left;
};
console.log(removeElement(paramNums, paramVal));
