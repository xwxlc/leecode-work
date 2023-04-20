// https://leetcode.cn/problems/robot-bounded-in-circle/
/**
 * 模拟法
 * @param {string} instructions
 * @return {boolean}
 */
const paramIn = process.argv[2] ? String(process.argv[2]) : 'GGLLGG';

/**
 * 问题 1041. 困于环中的机器人
 *      初始位置 (0,0) 方向朝北 重复执行指令如果机器人能回到原点返回 true 否则 false
 *      指令 G、L、R
 *      方向 E(1,0)、S(0,-1)、W(-1,0)、N(0,1)
 *
 * 思路
 * 当机器人回到 (0,0) 无论机器人面朝那个返现都能回到原点
 * 当机器坐标不在 (0,0) 上且反向还是朝 北 的话，那么机器人用于也会不到原点
 */

var isRobotBounded = function (instructions) {
  let [x, y] = [0, 0];
  let arrowArr = ['E', 'S', 'W', 'N'];
  let current = 3; // E S W N
  function arrowFn(arrow) {
    switch (arrow) {
      case 'E':
        x += 1;
        break;
      case 'S':
        y -= 1;
        break;
      case 'W':
        x -= 1;
        break;
      case 'N':
        y += 1;
        break;
    }
  }
  const arr = instructions.split('');

  for (let i = 0; i < arr.length; i++) {
    const action = arr[i];
    switch (action) {
      case 'G':
        arrowFn(arrowArr[current]);
        break;
      case 'L':
        current = (current + 3) % 4;
        break;
      case 'R':
        current = (current + 1) % 4;
        break;
    }
  }
  return current != 3 || (x == 0 && y == 0);
};

console.log(isRobotBounded(paramIn));
