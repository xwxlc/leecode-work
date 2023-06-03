// https://leetcode.cn/problems/odd-string-difference/
/**
 * @param {string[]} words
 * @return {string}
 */
const paramWords = ['adc', 'wzy', 'abc'];
/**
 * charCodeAt or charCode
 * 理由
 */
const getDiff = function (word) {
  let len = word.length;
  let diff = new Array(len - 1);
  for (let i = 0; i < len - 1; i++) {
    diff[i] = word.charCodeAt(i + 1) - word.charCodeAt(i);
  }
  return diff.toString();
};
var oddString = function (words) {
  let diff1 = getDiff(words[0]);
  let diff2 = getDiff(words[1]);
  if (diff1 == diff2) {
    for (let i = 2; i < words.length; i++) {
      if (diff1 != getDiff(words[i])) {
        return words[i];
      }
    }
  }
  return diff1 == getDiff(words[2]) ? words[1] : words[0];
};

console.log(oddString(paramWords));
