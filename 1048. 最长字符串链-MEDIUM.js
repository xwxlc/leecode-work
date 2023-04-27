// https://leetcode.cn/problems/longest-string-chain/

/**
 * @param {string[]} words
 * @return {number}
 */
const paramWords = ['a', 'b', 'ba', 'bca', 'bda', 'bdca'];

/**
 * 动态规划 1
 * 创建 map 表 保存前身数量
 * 根据前身特新 动态去生成  word.substring(0, i) + word.substring(i + 1);
 * 由于前身长度一定小于当前值 所以我们可以对数组事先进行排序
 */
var longestStrChain = function (words) {
  const map = new Map();
  //  排序 从短到长
  words = words.sort((a, b) => a.length - b.length);
  let res = 0;
  for (let word of words) {
    map.set(word, 1);
    for (let i = 0; i < word.length; i++) {
      // 前身
      const prev = word.substring(0, i) + word.substring(i + 1);
      if (map.has(prev)) {
        map.set(word, Math.max(map.get(word), map.get(prev) + 1));
      }
    }
    res = Math.max(map.get(word), res);
  }
  return res;
};

console.log(longestStrChain(paramWords));
