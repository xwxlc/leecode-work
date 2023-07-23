// https://leetcode.cn/problems/first-missing-positive/

/**
 * @param {number[]} nums
 * @return {number}
 */
const paramNums = [1, 2, 0];

//  哈希表
var firstMissingPositive = function (nums) {
  const map = new Map();
  let index = 1;
  for (const num of nums) {
    map.set(num, true);
  }
  while (index) {
    if (!map.get(index)) {
      return index;
    }
    index++;
  }
};

console.log(firstMissingPositive(paramNums));
