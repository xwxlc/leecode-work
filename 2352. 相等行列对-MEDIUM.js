// https://leetcode.cn/problems/equal-row-and-column-pairs/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const paramGrid = [
  [3, 2, 1],
  [1, 7, 6],
  [2, 7, 7]
];
var equalPairs = function (grid) {
  let res = 0;
  const n = grid.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const val = grid[i].toString();
    map.set(val, (map.get(val) || 0) + 1);
  }
  for (let i = 0; i < n; i++) {
    var val = [];
    for (let j = 0; j < n; j++) {
      val.push(grid[j][i]);
    }
    res += map.get(val.toString()) || 0;
  }
  return res;
};
console.log(equalPairs(paramGrid));
