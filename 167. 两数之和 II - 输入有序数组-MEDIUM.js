// https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const paramNumbers = [2, 3, 5, 7];
const paramTarget = 9;
// 哈希表
var twoSum = function (numbers, target) {
  const map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const result = target - numbers[i];
    if (map.has(result)) {
      return [map.get(result) + 1, i + 1];
    } else {
      map.set(numbers[i], i);
    }
  }
  return [-1, -1];
};
console.log(1, twoSum(paramNumbers, paramTarget));

// 二分法
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let l = i + 1;
    let r = numbers.length - 1;
    while (l <= r) {
      const mid = parseInt((r - l) / 2) + l;
      const sum = numbers[i] + numbers[mid];
      if (sum == target) {
        return [i + 1, mid + 1];
      } else if (sum > target) {
        r = mid - 1;
      } else if (sum < target) {
        l = mid + 1;
      }
    }
  }
  return [-1, -1];
};
console.log(2, twoSum(paramNumbers, paramTarget));

// 双指针
var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum == target) {
      return [l + 1, r + 1];
    } else if (sum < target) {
      l++;
    } else if (sum > target) {
      r--;
    }
  }
  return [-1, -1];
};
console.log(3, twoSum(paramNumbers, paramTarget));
