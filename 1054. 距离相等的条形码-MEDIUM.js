// https://leetcode.cn/problems/distant-barcodes/

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
const paramBarcodes = [1, 1, 1, 2, 2, 2];
/**
 * 首先 barcodes 一定能生成满足条件的值，减少了我们判断边界值的情况
 * 1. 结果需要相邻不想同，那就是下标 +2 的设置
 * 2. 当某一个数大于总长度的一半是 他只能从 0 开始设置
 *
 * 结合上面的思路
 * 1. 生成 map 记录 val 和 count
 * 2. 创建两个指针 i=0，j=0; 当 count <= len/2时 从 j 开始设置，知道 j <= len
 * 3. 到 count > len/2，或 j > len时开始从i设置
 */
var rearrangeBarcodes = function (barcodes) {
  const len = barcodes.length;
  if (len <= 2) {
    return barcodes;
  }
  const map = new Map();
  for (let val of barcodes) {
    map.set(val, (map.get(val) || 0) + 1);
  }
  let i = 0;
  let j = 1;
  let middle = Math.floor(len / 2);
  let res = new Array(len).fill(0);
  for (let [val, count] of map.entries()) {
    while (count > 0 && count <= middle && j <= len) {
      res[j] = val;
      count--;
      j += 2;
    }
    while (count > 0) {
      res[i] = val;
      count--;
      i += 2;
    }
  }
  return res;
};
console.log(rearrangeBarcodes(paramBarcodes));
