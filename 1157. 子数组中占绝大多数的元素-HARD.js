// https://leetcode.cn/problems/online-majority-element-in-subarray/

/**
 * @param {number[]} arr
 */
let MajorityChecker = function (arr) {
  this.map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!this.map.has(arr[i])) {
      this.map.set(arr[i], []);
    }
    this.map.get(arr[i]).push(i);
  }
  this.array = arr;
};

/**
 * @param {number} left
 * @param {number} right
 * @param {number} threshold
 * @return {number}
 */
MajorityChecker.prototype.query = function (left, right, threshold) {
  const length = right - left + 1;
  for (let i = 0; i < 20; i++) {
    const index = Math.floor(Math.random() * length) + left;
    const num = this.array[index];
    const arr = this.map.get(num);
    const start = binarySearch(arr, left);
    const end = binarySearch(arr, right + 1);
    if (end - start >= threshold) {
      return num;
    }
  }
  return -1;
};

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * var obj = new MajorityChecker(arr)
 * var param_1 = obj.query(left,right,threshold)
 */
