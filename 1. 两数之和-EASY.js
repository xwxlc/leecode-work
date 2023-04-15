// https://leetcode.cn/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const paramNums = [2, 7, 11, 15];
const paramTarget = 9;
/**
 * 先创建一个map记录 差值和当前下标的关联表 key:target-nums[i] value:i
 * 后续的元素只要map中寻找到对应的记录，说明两数匹配
 */

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    } else {
      map.set(target - nums[i], i);
    }
  }
};

console.log(twoSum(paramNums, paramTarget));
