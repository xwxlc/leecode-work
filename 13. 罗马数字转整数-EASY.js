// https://leetcode.cn/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
const paramS = process.argv[2] ? String(process.argv[2]) : 'IIIV';
const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

/**
 * 因为罗马数字 例如 VI = V + 1 但是 IV =  V - I
 * 所以为了计算方便我们决定 从右到左 解析
 * 当出现比上一个最大值小的情况 减去当前值
 */
var romanToInt = function (s) {
  let temp = 'I';
  let res = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (map[s[i]] < map[temp]) {
      res -= map[s[i]];
    } else {
      res += map[s[i]];
      temp = s[i];
    }
  }
  return res;
};

console.log(romanToInt(paramS));
