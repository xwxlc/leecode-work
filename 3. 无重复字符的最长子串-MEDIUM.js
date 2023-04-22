// https://leetcode.cn/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
const paramS = process.argv[2] ? String(process.argv[2]) : 'abcabcbb';

/**
 *
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  let res = 0;
  for (let i = 0; i < len; i++) {
    let temp = '';
    for (let j = i; j < len; j++) {
      let _s = s[j];
      if (temp.indexOf(_s) == -1) {
        temp += _s;
      } else {
        break;
      }
    }
    res = Math.max(res, temp.length);
  }

  return res;
};
console.log(lengthOfLongestSubstring(paramS));

/**
 * 定义一个 map 用于判断是否出现重复字符串 存储字符串与下标
 * 定义一个 left 左指针 由于可能存在没有重复字符串的情况，所以 left 从 -1 开始
 * 遍历字符串
 * 通过 map 判断是否出现重复字符串 并且 寻找到的指针 > 左指针 更新左指针
 * 判断不重复字符串的长度 记录最长值
 * 更新 map 保存最近的 字符串与下标
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  let map = new Map();
  let res = 0;
  let left = -1;
  for (let i = 0; i < len; i++) {
    let _s = s[i];
    if (map.has(_s) && map.get(_s) >= left) {
      left = map.get(_s);
    }
    res = Math.max(res, i - left);
    map.set(_s, i);
  }
  return res;
};

console.log(lengthOfLongestSubstring(paramS));
