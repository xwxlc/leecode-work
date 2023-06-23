// https://leetcode.cn/problems/divide-two-integers/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const paramDividend = 2;
const paramDivisor = 2;

/**
 * 迭代法
 */
var divide = function (dividend, divisor) {
  const MAX = 2147483647; // 2^31-1
  const MIN = -2147483648; // -2^31
  if (dividend == 0) return 0;
  if (divisor == 0) return null;
  if (divisor == 1) return dividend;
  if (divisor == -1) return dividend <= MIN ? MAX : -dividend;
  let minus = false; // 是否是负数
  // dividend, divisor都处理成负数计算
  if (dividend > 0) {
    dividend = -dividend;
    minus = !minus;
  }
  if (divisor > 0) {
    divisor = -divisor;
    minus = !minus;
  }
  let quotient = 0;
  while (dividend <= divisor) {
    dividend -= divisor;
    quotient++;
  }
  return minus ? -quotient : quotient;
};
console.log(divide(paramDividend, paramDivisor));

/**
 * 类二分
 * 与迭代法的区别就在于优化迭代的步数
 */
var divide = function (dividend, divisor) {
  const MAX = 2147483647; // 2^31-1
  const MIN = -2147483648; // -2^31
  if (dividend == 0) return 0;
  if (divisor == 0) return null;
  if (divisor == 1) return dividend;
  if (divisor == -1) return dividend <= MIN ? MAX : -dividend;
  let minus = false; // 是否是负数
  // dividend, divisor都处理成负数计算
  if (dividend > 0) {
    dividend = -dividend;
    minus = !minus;
  }
  if (divisor > 0) {
    divisor = -divisor;
    minus = !minus;
  }
  let quotient = 0;
  while (dividend <= divisor) {
    let tempQuotient = 1;
    let tempDivisor = divisor;
    while (dividend <= tempDivisor + tempDivisor) {
      tempDivisor += tempDivisor;
      tempQuotient += tempQuotient;
    }
    dividend -= tempDivisor;
    quotient += tempQuotient;
  }
  return minus ? -quotient : quotient;
};
console.log(divide(paramDividend, paramDivisor));
