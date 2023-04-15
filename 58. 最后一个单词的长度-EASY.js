// https://leetcode.cn/problems/length-of-last-word/
/**
 * @param {string} s
 * @return {number}
 */
const paramS = process.argv[2] ? String(process.argv[2]) : 'Hello World';

//
var lengthOfLastWord = function (s) {
  let end = s.length - 1;
  while (end > 0 && s[end] == ' ') {
    end--;
  }
  let start = end;
  while (start >= 0 && s[start] != ' ') {
    start--;
  }
  return end - start;
};

console.log(lengthOfLastWord(paramS));

//
var lengthOfLastWord2 = function (s) {
  return s.trim().split(' ').pop().length;
};

console.log(lengthOfLastWord2(paramS));
