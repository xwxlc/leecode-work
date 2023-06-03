// https://leetcode.cn/problems/swap-for-longest-repeated-character-substring/
/**
 * @param {string} text
 * @return {number}
 */
const paramText = 'bbababaaaa';
var maxRepOpt1 = function (text) {
  const count = new Map();
  for (let i = 0; i < text.length; i++) {
    const k = text[i];
    count.set(k, (count.get(k) || 0) + 1);
  }
  let max = 0;
  for (let i = 0; i < text.length; ) {
    let curr = 0;
    const k = text[i];
    // 计算连续字符串长度
    let j = i + 1;
    while (k == text[j]) {
      j++;
    }
    curr += j - i;
    // 优化循环 跳过连续部分
    i = j;

    // 计算间隔一位后 连续的子串长度
    let m = j + 1;
    while (k == text[m]) {
      m++;
    }
    curr += m - j - 1;
    if (curr < count.get(k)) {
      curr += 1;
    }
    max = Math.max(curr, max);
  }
  return max;
};
console.log(maxRepOpt1(paramText));
