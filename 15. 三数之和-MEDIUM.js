// https://leetcode.cn/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const paramNums = [-1, 0, 1, 2, -1, -4];

/**
 * 思路
 * 1、len < 3 肯定不满足条件
 * 2、nums 从小到大排序,如果nums[0] > 0 肯定不存在满足的条件
 * 3、但 nums[i] == nums[i-1]，会导致结果重复，所有需要跳过
 * 4、当 sum==0 时保存结果
 * 5、同理 如果nums[L] == nums[L++] 或 nums[R] == nums[R-1] 都会导致结果重复，所以都需要跳过处理
*/
var threeSum = function (nums) {
  let res = [];
  const len = nums?.length || 0;
  if (len < 3) return res;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) return res;
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum == 0) {
        res.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] == nums[L + 1]) L++;
        while (L < R && nums[R] == nums[R - 1]) R--;
        L++;
        R--;
      } else if (sum < 0) {
        L++;
      } else if (sum > 0) {
        R--;
      }
    }
  }
  return res;
};

console.log(threeSum(paramNums));
