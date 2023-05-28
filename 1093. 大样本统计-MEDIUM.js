// https://leetcode.cn/problems/statistics-from-a-large-sample/
/**
 * @param {number[]} count
 * @return {number[]}
 */
const paramCount = [
  0, 1, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

var sampleStats = function (count) {
  let minimum = 256; //最小
  let maximum = 0; //最大
  let total = count.reduce((acc, cur) => acc + cur, 0); //总长
  let left = Math.floor((total + 1) / 2); //中位数
  let right = Math.floor((total + 2) / 2); //中位数
  let cat = 0; //计数
  let median = 0; //中位
  let sum = 0; //总和
  let mean = 0; //平均
  let mode = 0; //最多
  for (let i = 0; i < count.length; i++) {
    if (count[i] != 0) {
      if (minimum == 256) {
        minimum = i;
      }
      maximum = i;
    }
    sum += i * count[i];
    if (count[mode] < count[i]) {
      mode = i;
    }
    if (cat < left && count[i] + cat >= left) {
      median += i;
    }
    if (cat < right && count[i] + cat >= right) {
      median += i;
    }
    cat += count[i];
  }
  mean = sum / total;
  median = median / 2;
  return [minimum, maximum, mean, median, mode];
};
console.log(sampleStats(paramCount));
