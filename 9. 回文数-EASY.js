// https://leetcode.cn/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
const paramX = process.argv[2] ? Number(process.argv[2]) : 121;

/**
 * 首先判断 x<0 时 直接返回false
 * 然后 转为字符串判断
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }
  const xArr = x.toString().split('');
  return xArr.toString() == xArr.reverse().toString();
};
console.log(isPalindrome(paramX));

/**
 * 首先判断 x<0 时 直接返回false
 * 然后 计算出一个新数字
 */
var isPalindrome2 = function (x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }
  let reverseNumber = 0;
  while (reverseNumber < x) {
    reverseNumber = reverseNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x == reverseNumber || x == Math.floor(reverseNumber / 10);
};
console.log(isPalindrome2(paramX));
