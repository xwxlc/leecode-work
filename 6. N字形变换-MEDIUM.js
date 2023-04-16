// https://leetcode.cn/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const paramS = 'PAYPALISHIRING';
const paramNumRows = 3;

/**
 * 矩阵法
 */
var convert = function (s, numRows) {
  let res = '';
  let len = s.length;
  let r = numRows;
  if (r == 1 || len < r) {
    return s;
  }
  let temp = new Array(r).fill('').map(() => []);
  const t = r * 2 - 2; //周期
  let x = 0;
  for (let i = 0; i < len; i++) {
    temp[x].push(s[i]);
    if (i % t < r - 1) {
      x++;
    } else {
      x--;
    }
  }
  for (let row of temp) {
    res += row.join('');
  }
  return res;
};

console.log(convert(paramS, paramNumRows));

/**
 * 直接构造
 */
var convert2 = function (s, numRows) {
  let len = s.length;
  let r = numRows;
  if (r == 1 || len < r) {
    return s;
  }
  let res = '';
  const t = r * 2 - 2; //周期
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < len - i; j += t) {
      res += s[i + j];
      if (i > 0 && i < r - 1 && j + t - i < len) {
        res += s[j + t - i];
      }
    }
  }

  return res;
};

console.log(convert2(paramS, paramNumRows));
