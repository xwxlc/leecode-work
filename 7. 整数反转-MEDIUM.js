// https://leetcode.cn/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
const paramX = process.argv[2] ? Number(process.argv[2]) : x;

var reverse = function (x) {
  let res = 0;
  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);
  while (Math.abs(x) >= 1) {
    res = res * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  return res >= min && res <= max ? res : 0;
};

console.log(reverse(paramX));
