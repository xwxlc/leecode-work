/**
 * 问题 1053. 交换一次的先前排列
 * link https://leetcode.cn/problems/previous-permutation-with-one-swap/
 * 思路
 * 1、小于原数组的最大排序 所以在 length-1 到 0 选择 i 的位置
 * 2、判断思路 i > i+1 得到 i 的位置
 * 3、在 length-1 到 i 中寻找 j 的位置
 * 4、判断思路 j < i 得到 j 的位置
 **/
function prevPermOpt(arr) {
  let n = arr.length;
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      let j = n - 1;
      while (arr[j] >= arr[i] || arr[j] == arr[j - 1]) {
        j--;
      }
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      break;
    }
  }
  return arr;
}
console.log(prevPermOpt([1, 9, 6, 7, 9, 6, 4, 4, 2, 2, 7, 7, 7, 6, 3, 5]));
