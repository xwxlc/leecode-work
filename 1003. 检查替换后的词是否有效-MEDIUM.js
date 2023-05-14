// https://leetcode.cn/problems/check-if-word-is-valid-after-substitutions/

/**
 * @param {string} s
 * @return {boolean}
 */
const paramS = 'aabcbc';

/**
 * 匹配法
 */
var isValid = function (s) {
  while (s.indexOf('abc') != -1) {
    s = s.replace(/abc/g, '');
  }
  return !s.length;
  //
};
console.log(isValid(paramS));
