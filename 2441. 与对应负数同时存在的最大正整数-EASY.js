// https://leetcode.cn/problems/largest-positive-integer-that-exists-with-its-negative/

/**
 * @param {number[]} nums
 * @return {number}
 */
const paramNums = [-1, 10, 6, 7, -7, 1];

/**
 * 暴力法
 */
var findMaxK = function (nums) {
  let res = -1;
  nums.forEach((item) => {
    // 由于nums是非零的数组 所以可以使用find查询
    if (nums.find((x) => x == -item)) {
      res = Math.max(res, item);
    }
  });
  return res;
};
console.log(findMaxK(paramNums));

/**
 * 哈希法
 */
var findMaxK = function (nums) {
  const map = new Map();
  let res = -1;
  for (let num of nums) {
    map.set(num, true);
  }
  for (let num of nums) {
    if (map.has(-num)) {
      res = Math.max(res, num);
    }
  }
  return res;
};
console.log(findMaxK(paramNums));

/**
 * 排序+双指针
 */
var findMaxK = function (nums) {
  nums = nums.sort((a, b) => a - b); // 排序 从小到大
  console.log(nums);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (-nums[left] < nums[right]) {
      right--;
    } else if (-nums[left] > nums[right]) {
      left++;
    } else {
      return nums[right];
    }
  }
  return -1;
};
console.log(findMaxK(paramNums));
