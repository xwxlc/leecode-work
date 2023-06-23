// https://leetcode.cn/problems/next-permutation/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const paramNums = [1, 2];

/**
 * 下一个排列 是指其整数的下一个字典序更大的排列，所以本题就是寻找下一个最下小排序
 * nums[i+1]>nums[i] 寻找到i的位置
 * 在[i, len-1]中选择最小的>nums[i]的数并交互得到新的大于nums的排序
 * 然后[i+1,len-1]的范围进行升序得到最小大于nums的排序
 */
var nextPermutation = function (nums) {
  let len = nums.length;
  let i = len - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = len - 1;
    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  let l = i + 1;
  let r = len - 1;
  while (l < r) {
    // 由于[l,r]范围内本身就是降序的所以只需要进行翻转就可以得到升序数组
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }

  return nums;
};
console.log(nextPermutation(paramNums));
