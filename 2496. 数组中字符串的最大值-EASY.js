// https://leetcode.cn/problems/maximum-value-of-a-string-in-an-array/

/**
 * @param {string[]} strs
 * @return {number}
 */
const paramStrs = ['alic3', 'bob', '3', '4', '00000'];

var maximumValue = function (strs) {
  let res = 0;
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    if (isNaN(Number(str))) {
      res = Math.max(res, str.length);
    } else {
      res = Math.max(res, Number(str));
    }
  }
  return res;
};
console.log(maximumValue(paramStrs));
