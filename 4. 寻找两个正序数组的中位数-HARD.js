// https://leetcode.cn/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const paramNums2 = [1, 3];
const paramNums1 = [2, 7];
/**
 * 条件 两个有序数组 nums1 nums2
 * 查找中位数
 * 时间复杂时要求 O(log(m+n))
 */

/**
 * 函数合并 取中法
 * 先合并两个有序数组
 * 然后排序找到中位数
 * 时间复杂度 O((m+n)log(m+n))
 * 空间复杂度 O(m+n)
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const newNums = [...nums1, ...nums2].sort((a, b) => a - b);
  const len = newNums.length;
  // if (len % 2 == 0) {
  //   return (newNums[(len - 2) / 2] + newNums[len / 2]) / 2;
  // } else {
  //   return newNums[(len - 1) / 2];
  // }
  // 上述可以优化成
  return (
    (newNums[Math.floor(len / 2)] + newNums[Math.floor((len - 1) / 2)]) / 2
  );
};
console.log(findMedianSortedArrays(paramNums1, paramNums2));
/**
 * 双指针 取中法
 * 合并两个数组
 * 然后找到中位数
 * 时间复杂度 O(m+n)
 * 空间复杂度 O(m+n)
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let len1 = nums1.length;
  let len2 = nums2.length;
  let i = 0;
  let j = 0;
  let newNums = [];
  while (i < len1 && j < len2) {
    if (nums1[i] < nums2[j]) {
      newNums.push(nums1[i]);
      i++;
    } else {
      newNums.push(nums2[j]);
      j++;
    }
  }
  while (i < len1) {
    newNums.push(nums1[i]);
    i++;
  }
  while (j < len2) {
    newNums.push(nums2[j]);
    j++;
  }
  const len = newNums.length;
  return (
    (newNums[Math.floor(len / 2)] + newNums[Math.floor((len - 1) / 2)]) / 2
  );
};
console.log(findMedianSortedArrays(paramNums1, paramNums2));

/**
 * 二分查找
 *
 * 中位数：在只有一个有序数组的时候，中位数把数组分割成两个部分。
 * 根据定义，分数组长度为奇数和偶数讨论。
 * 当数组为偶数时，中位数有两个，其中一个是左边的最大值，另一个是右边的最小值
 * 当数组为奇数时，中位数有一个，我们可以定义左边多一个元素，左边的最大值
 *
 * 中位数：在有两个有序数组的时候，仍然可以把两个数组分割成两个部分
 * 分割的需要满足的条件：
 *  1. 左右两边的元素个数相等，或者左边比右边多一个元素
 *  2. 左边所有元素的数值<=右边所有元素的数值
 * 长度之和为偶数时，中位数为左边两个数组的最大值和右边两个数组的最小值
 * 长度之和为奇数时，中位数为左边两个数组左边的最大值
 *
 * 条件1
 * 假设两个数组长度为 m n
 * 当 m + n 为偶数时，(m+n)/2
 * 当 m + n 为奇数时，(m+n+1)/2
 * 我们两种情况合并 Math.floor((m+n)/2)
 * 合并的好处是，不用区分奇偶，只需要确定其中一个数组的分割线位置，另一个数组的分割线位置就可以通过公式计算出来
 *
 * 分割线在第一个数组右边第一个数组的下标 i == 分割线第一个数组左边元素的个数
 * 分割线在第二个数组右边第一个数组的下标 j == 分割线第二个数组左边元素的个数
 */

var findMedianSortedArrays = function (nums1, nums2) {
  // 保证第二个数组长度>=等一个数组
  if (nums1.length > nums2.length) {
    let temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }
  const m = nums1.length;
  const n = nums2.length;
  // 分割线左边的所有元素需要满足的个数
  let totalLeft = Math.floor((m + n + 1) / 2);
  // 在 nums1 的区间 [0,m] 里查找恰当的分割线
  // 使得 nums1[i-1] <= nums2[j] && nums2[j-1] <= nums1[1]
  let left = 0;
  let right = m;
  while (left < right) {
    let i = left + Math.floor((right - left + 1) / 2);
    let j = totalLeft - i;
    if (nums1[i - 1] > nums2[j]) {
      // 下一轮区间 [left, i-1]
      right = i - 1;
    } else {
      // 下一轮区间 [i, right]
      left = i;
    }
  }
  let i = left;
  let j = totalLeft - i;
  let nums1LeftMax = i == 0 ? Number.MIN_SAFE_INTEGER : nums1[i - 1];
  let nums1RightMin = i == m ? Number.MAX_SAFE_INTEGER : nums1[i];
  let nums2LeftMax = j == 0 ? Number.MIN_SAFE_INTEGER : nums2[j - 1];
  let nums2RightMin = j == n ? Number.MAX_SAFE_INTEGER : nums2[j];
  if ((m + n) % 2 == 1) {
    return Math.max(nums1LeftMax, nums2LeftMax);
  } else {
    return (
      (Math.max(nums1LeftMax, nums2LeftMax) +
        Math.min(nums1RightMin, nums2RightMin)) /
      2
    );
  }
};
console.log(findMedianSortedArrays(paramNums1, paramNums2));

/**
 * 二分查找 2
 * 中位数的位置
 * 假设两个数组长度为 m n
 * 当 m + n 为偶数时，k1 =(m+n)/2 k2=(m+n+2)/2
 * 当 m + n 为奇数时，k =(m+n+1)/2
 *
 * 假设  k1 = Math.floor((m+n+1)/2); k2 = Math.floor((m+n+2)/2)
 *
 * 假设  p = Math.floor(k/2);
 * 1、比较 arr1[p-1] arr2[p-1], 假设前者小
 * 2、由于数组都是正序的，所以可以排除 [0,p-1] 范围不可能是第 k 小的数，可以排除 剩下[p,arr1.length-1]
 * 3、剩下数组中找 k 小的数， k = k - (p-1 - 0 +1);
 * 4、重复操作 知道 k==1 比较两个数数组中第一个数字大小，取小的就是结果
 *
 * 需要考虑
 * 1、其中一个数组小于 p 直接去取最后一位
 * 2、其中一个数组长度等于 0，从第二个数组中取第 k 小的数
 * 3、arr1[p-1]==arr2[p-1],随便删除那一段
 */

var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  if ((m + n) % 2 == 1) {
    let k = (m + n + 1) / 2;
    return findKVal(nums1, 0, m - 1, nums2, 0, n - 1, k);
  } else {
    let k1 = (m + n) / 2;
    let k2 = (m + n) / 2 + 1;
    const left = findKVal(nums1, 0, m - 1, nums2, 0, n - 1, k1);
    const right = findKVal(nums1, 0, m - 1, nums2, 0, n - 1, k2);
    return (left + right) / 2;
  }
  // 上述可以合并成下面写法
  // let i = Math.floor((m + n + 1) / 2);
  // let j = Math.floor((m + n + 2) / 2);
  // const left = findKVal(nums1, 0, m - 1, nums2, 0, n - 1, i);
  // const right = findKVal(nums1, 0, m - 1, nums2, 0, n - 1, j);
  // return (left + right) / 2;
};
var findKVal = function (arr1, s1, e1, arr2, s2, e2, k) {
  let l1 = e1 - s1 + 1; //
  let l2 = e2 - s2 + 1; //
  // 让 n 始终大于等 n 减少后面的边界判断
  if (l1 > l2) {
    return findKVal(arr2, s2, e2, arr1, s1, e1, k);
  }
  // 当一个数组等于0了 直接在另一个数组中取第k小的数
  if (l1 == 0) {
    return arr2[s2 + k - 1];
  }
  // 当 k ==1 说明查询结束 比较两数组第一个数小的就是k小的数
  if (k == 1) {
    return Math.min(arr1[s1], arr2[s2]);
  }
  let p = Math.floor(k / 2);
  let i = s1 + Math.min(l1, p) - 1;
  let j = s2 + Math.min(l2, p) - 1;
  // 递归逻辑
  if (arr1[i] < arr2[j]) {
    return findKVal(arr1, i + 1, e1, arr2, s2, e2, k - (i - s1 + 1));
  } else {
    return findKVal(arr1, s1, e1, arr2, j + 1, e2, k - (j - s2 + 1));
  }
};
console.log(findMedianSortedArrays(paramNums1, paramNums2));
