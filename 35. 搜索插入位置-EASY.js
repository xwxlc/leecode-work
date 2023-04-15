// https://leetcode.cn/problems/search-insert-position/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const paramNums = [1, 3, 5, 6];
const paramTarget = 5;

/**
 * 二分查法
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let res = nums.length;

  while (left <= right) {
    // (right-left)>>1 向上取整
    let mid = ((right - left) >> 1) + left;
    if (target <= nums[mid]) {
      res = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return res;
};

console.log(searchInsert(paramNums, paramTarget));
