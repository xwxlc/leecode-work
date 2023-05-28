// https://leetcode.cn/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */

const paramMat = [
  [1, 3, 11],
  [2, 4, 6]
];
const paramK = 5;

/**
 * 暴力解法
 */
var kthSmallest = function (mat, k) {
  let res_arr = [0];
  for (let i = 0; i < mat.length; i++) {
    let new_arr = [];
    for (let j = 0; j < mat[i].length; j++) {
      for (let key of res_arr) {
        new_arr.push(key + mat[i][j]);
      }
    }
    new_arr.sort((a, b) => a - b);
    if (k < new_arr.length) {
      res_arr = new_arr.slice(0, k);
    } else {
      res_arr = new_arr;
    }
  }
  return res_arr[k - 1];
};
console.log(kthSmallest(paramMat, paramK));
