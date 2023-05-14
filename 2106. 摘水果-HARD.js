// https://leetcode.cn/problems/maximum-fruits-harvested-after-at-most-k-steps/

/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
const paramFruits = [
  [2, 8],
  [6, 3],
  [8, 6]
];
const paramStartPos = 5;
const paramK = 4;

/**
 * 模拟法
 * 假设 往右走的多  left*2 + right = k
 * 假设 往左走的多  left + right*2 = k
 */
var maxTotalFruits = function (fruits, startPos, k) {
  const map = new Map();
  let res = 0;
  for (const [i, val] of fruits) {
    map.set(i, val);
  }
  //  右多
  for (let i = -Math.floor(k / 2); i <= 0; i++) {
    let left = startPos + i;
    let right = startPos + k + i * 2;
    let sum = 0;
    for (let j = left; j <= right; j++) {
      sum += map.get(j) || 0;
    }
    res = Math.max(res, sum);
  }
  //  左多
  for (let i = Math.floor(k / 2); i >= 0; i--) {
    let left = startPos + i * 2 - k;
    let right = startPos + i;
    let sum = 0;
    for (let j = left; j <= right; j++) {
      sum += map.get(j) || 0;
    }
    res = Math.max(res, sum);
  }
  return res;
};

console.log(maxTotalFruits(paramFruits, paramStartPos, paramK));

/**
 * 二分查找
 */
var maxTotalFruits = function (fruits, startPos, k) {
  const n = fruits.length;
  const sum = new Array(n + 1).fill(0);
  const indices = new Array(n).fill(0);
  sum[0] = 0;
  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + fruits[i][1];
    indices[i] = fruits[i][0];
  }
  let res = 0;
  for (let x = 0; x <= Math.floor(k / 2); x++) {
    //  先向左走 x 再向右走 k-x
    let left = startPos - x;
    let right = startPos + k - 2 * x;
    let start = lowerBound(indices, 0, n - 1, left);
    let end = upperBound(indices, 0, n - 1, right);
    res = Math.max(res, sum[end] - sum[start]);
    // 先向右走 x 再向左走 k - x
    left = startPos - (k - 2 * x);
    right = startPos + x;
    start = lowerBound(indices, 0, n - 1, left);
    end = upperBound(indices, 0, n - 1, right);
    res = Math.max(res, sum[end] - sum[start]);
  }
  return res;
};
const lowerBound = (arr, left, right, val) => {
  let res = right + 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] >= val) {
      res = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return res;
};
const upperBound = (arr, left, right, val) => {
  let res = right + 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] > val) {
      res = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return res;
};

console.log(maxTotalFruits(paramFruits, paramStartPos, paramK));
