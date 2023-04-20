// https://leetcode.cn/problems/convert-to-base-2/
/**
 * @param {number} n
 * @return {string}
 */
const paramN = process.argv[2] ? Number(process.argv[2]) : 2;
// // 模拟进位
// /**
//  * 思路 模拟进位
//  * i为偶数 2的i次方 == -2的i次方
//  * i为奇数 2的i次方 == -2的(i+1)次方 + -2的i次方
//  */
function baseNeg2(n) {
  if (n == 0) {
    return '0';
  }
  let bins = new Array(32).fill(0);
  for (let i = 0; i < 32 && n !== 0; i++) {
    if ((n & 1) !== 0) {
      bins[i]++;
      // i为奇数 需要加上 i+1
      if ((i & 1) !== 0) {
        bins[i + 1]++;
      }
    }
    n >>= 1;
  }
  // 转换为-2进制
  let carry = 0;
  for (let i = 0; i < 32; i++) {
    const val = carry + bins[i];
    bins[i] = val & 1;
    carry = (val - bins[i]) / -2;
  }
  // 生产结构
  let res = '';
  for (let i = bins.length - 1; i >= 0; i--) {
    if (bins[i] || res) {
      res += bins[i];
    }
  }
  return res;
}
console.log(baseNeg2(paramN));
