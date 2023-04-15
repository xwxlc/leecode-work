// https://leetcode.cn/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
const paramS = process.argv[2] ? String(process.argv[2]) : '()';

/**
 * 可以利用 先入后出 后入先出 的思路来解题 左括号入 右括号出
 * 出必须遵循后入先出
 */
var isValid = function (s) {
  let map = { ')': '(', ']': '[', '}': '{' };
  let temp = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      if (temp[temp.length - 1] != map[s[i]]) {
        return false;
      }
      temp.pop();
    } else {
      temp.push(s[i]);
    }
  }
  return temp.length == 0;
};
console.log(isValid(paramS));

/**
 * 匹配法
 */
var isValid2 = function (s) {
  while (
    s.indexOf('()') !== -1 ||
    s.indexOf('{}') !== -1 ||
    s.indexOf('[]') !== -1
  ) {
    s = s.replace(/\(\)/g, '');
    s = s.replace(/\{\}/g, '');
    s = s.replace(/\[\]/g, '');
  }
  if (s) {
    return false;
  } else {
    return true;
  }
};
console.log(isValid2(paramS));
