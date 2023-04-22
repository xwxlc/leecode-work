// https://leetcode.cn/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
const paramStrs = ['flower', 'flow', 'flight'];

/**
 * 横向扫描
 */
var longestCommonPrefix = function (strs) {
  let res = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const cStr = strs[i];
    const minIndex = Math.min(res.length, cStr.length);
    let index = 0;
    while (index < minIndex && res.at(index) == cStr.at(index)) {
      index++;
    }
    res = res.substr(0, index);
  }
  return res;
};
console.log(longestCommonPrefix(paramStrs));

/**
 * 纵向扫描
 */
var longestCommonPrefix = function (strs) {
  let res = '';
  for (let j = 0; j < strs[0].length; j++) {
    for (let i = 0; i < strs.length; i++) {
      if (strs[0][j] != strs[i][j]) {
        return res;
      }
    }
    res += strs[0][j];
  }
  return res;
};
console.log(longestCommonPrefix(paramStrs));
