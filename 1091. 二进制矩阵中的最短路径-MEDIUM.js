// https://leetcode.cn/problems/shortest-path-in-binary-matrix/

/**
 * @param {number[][]} grid
 * @return {number}
 */

const paramGrid = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0]
];
/**
 *
 */
var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] === 1) {
    return -1;
  }
  const len = grid.length;
  let dist = new Array(len).fill('').map(() => new Array(len).fill(Infinity));
  dist[0][0] = 1;
  let temp = [[0, 0]];
  while (temp.length > 0) {
    const [x, y] = temp.shift();
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        if (x == len - 1 && y == len - 1) {
          return dist[x][y];
        }
        // 边界情况
        if (x + dx < 0 || x + dx >= len || y + dy < 0 || y + dy >= len) {
          continue;
        }
        // 被访问了
        if (grid[x + dx][y + dy] > 0 || dist[x + dx][y + dy] <= dist[x][y] + 1) {
          continue;
        }
        dist[x + dx][y + dy] = dist[x][y] + 1;
        temp.push([x + dx, y + dy]);
      }
    }
  }
  return -1;
};
console.log(shortestPathBinaryMatrix(paramGrid));
