// https://leetcode.cn/problems/combination-sum-ii/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const paramCandidates = [10, 1, 2, 7, 6, 1, 5];
const paramTarget = 8;

// 重点在做去重

// 回溯算法
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const ans = [];
  const dfs = (start, combine, sum) => {
    if (sum === target) {
      ans.push(combine);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i - 1] == candidates[i]) {
        // 当前选项和左邻选项一样，跳过
        continue;
      }
      if (sum + candidates[i] > target) break;
      dfs(i + 1, [...combine, candidates[i]], sum + candidates[i]);
    }
  };
  dfs(0, [], 0);
  return ans;
};
console.log(combinationSum2(paramCandidates, paramTarget));
