// https://leetcode.cn/problems/longest-valid-parentheses/

/**
 * @param {string} s
 * @return {number}
 */
/**
 * 栈
 * 为什么起始栈是[-1] 主要是方便计算
 * 例如“()”  i-stack[stack.length-1] => i-(-1) == 2;
 */
const paramS = '(())))))()())()()()';
var longestValidParentheses = function (s) {
  const stack = [-1];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length) {
        max = Math.max(max, i - stack[stack.length - 1]);
      } else {
        stack.push(i);
      }
    }
  }
  return max;
};
console.log(longestValidParentheses(paramS));
