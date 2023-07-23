// https://leetcode.cn/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const paramCandidates = [2, 3, 6, 7];
const paramTarget = 7;

// 回溯算法
var combinationSum = function (candidates, target) {
  const ans = [];
  const dfs = (target, combine, idx) => {
    if (idx === candidates.length) {
      return;
    }
    if (target === 0) {
      ans.push(combine);
      return;
    }
    dfs(target, combine, idx + 1);
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
    }
  };
  dfs(target, [], 0);
  return ans;
};
console.log(combinationSum(paramCandidates, paramTarget));

// 回溯算法 + 剪枝
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const ans = [];
  const dfs = (target, combine, idx) => {
    if (idx === candidates.length) {
      return;
    }
    if (target === 0) {
      ans.push(combine);
      return;
    }
    const diff = target - candidates[idx];
    if (diff >= 0) {
      dfs(target, combine, idx + 1);
      dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
    }
  };
  dfs(target, [], 0);
  return ans;
};
console.log(combinationSum(paramCandidates, paramTarget));

// 回溯算法 + 剪枝 - 2
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const ans = [];
  const dfs = (start, combine, sum) => {
    if (sum === target) {
      ans.push(combine);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (sum + candidates[i] > target) break;
      dfs(i, [...combine, candidates[i]], sum + candidates[i]);
    }
  };
  dfs(0, [], 0);
  return ans;
};
console.log(combinationSum(paramCandidates, paramTarget));
