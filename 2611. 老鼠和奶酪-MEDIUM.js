// https://leetcode.cn/problems/mice-and-cheese/

/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
const paramReward1 = [1, 1, 3, 4];
const paramReward2 = [4, 4, 1, 1];
const paramK = 2;
var miceAndCheese = function (reward1, reward2, k) {
  const n = reward1.length;
  var ans = 0;
  var diff = [];
  for (let i = 0; i < n; i++) {
    ans += reward2[i];
    diff.push(reward1[i] - reward2[i]);
  }
  diff = diff.sort((a, b) => b - a);
  
  for (let i = 0; i < k; i++) {
    ans += diff[i];
  }
  return ans;
};
console.log(miceAndCheese(paramReward1, paramReward2, paramK));
