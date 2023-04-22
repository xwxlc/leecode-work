// https://leetcode.cn/problems/longest-arithmetic-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 动态规划
 *
 * 1. 首先获得最大值和最小值计 计算出最大等差数值 diff
 * 2. 注意数组不是有序数组 所以等差数范围是 [-diff,diff]
 * 3. 遍历得到 每个数传入 + diff
 */
const paramNums = [3, 6, 9, 12];
var longestArithSeqLength = function (nums) {
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  const diff = max - min;
  let res = 1;
  for (let d = -diff; d <= diff; d++) {
    const temp = new Array(max + 1).fill(-1);
    for (let num of nums) {
      const prev = num + d;
      if (prev >= min && prev <= max && temp[prev] !== -1) {
        temp[num] = Math.max(temp[num], temp[prev] + 1);
        res = Math.max(temp[num], res);
      }
      temp[num] = Math.max(temp[num], 1);
    }
  }
  return res;
};
console.log(longestArithSeqLength(paramNums));
