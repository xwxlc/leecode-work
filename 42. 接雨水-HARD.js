// https://leetcode.cn/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
const paramHeight = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
//  动态规划
var trap = function (height) {
  const len = height.length;
  if (len < 3) return 0; //小于3无法满足行成凹槽

  const leftMax = new Array(len).fill(0);
  leftMax[0] = height[0];
  for (let i = 1; i < len; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  const rightMax = new Array(len).fill(0);
  rightMax[len - 1] = height[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let res = 0;
  for (let i = 0; i < len; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return res;
};
console.log(trap(paramHeight));

// 单调栈
var trap = function (height) {
  let res = 0;
  const stack = [];
  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop();
      if (!stack.length) {
        break;
      }
      const left = stack[stack.length - 1];
      const currWidth = i - left - 1;
      const currHeight = Math.min(height[left], height[i]) - height[top];
      res += currWidth * currHeight;
    }
    stack.push(i);
  }
  return res;
};
console.log(trap(paramHeight));
