// https://leetcode.cn/problems/powerful-integers/

/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */

const paramX = 2;
const paramY = 3;
const paramBound = 10;

var powerfulIntegers = function (x, y, bound) {
  let tempX = 1;
  let numsX = [1];
  let tempY = 1;
  let numsY = [1];
  if (x != 1) {
    while (tempX < bound) {
      tempX *= x;
      numsX.push(tempX);
    }
  }
  if (y != 1) {
    while (tempY < bound) {
      tempY *= y;
      numsY.push(tempY);
    }
  }
  const tempArr = new Set();
  for (let i = 0; i < numsX.length; i++) {
    for (let j = 0; j < numsY.length; j++) {
      const sum = numsX[i] + numsY[j];
      if (sum <= bound) {
        tempArr.add(sum);
      }
    }
  }
  return [...tempArr];
};
console.log(powerfulIntegers(paramX, paramY, paramBound));
