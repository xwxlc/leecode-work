// https://leetcode.cn/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
const paramS = process.argv[2] ? String(process.argv[2]) : 'babad';

/**
 * 中心扩展算法
 * 思路 从中间向两边扩展
 * 情况1 回文是奇数  i-n ~ i+n
 * 情况2 回文是偶数  i-n ~ i+n+1
 */
var expandAroundCenter = function (s, left, right) {
  while (left >= 0 && right < s.length && s[left] == s[right]) {
    left--;
    right++;
  }
  return [left + 1, right - 1];
};
var longestPalindrome = function (s) {
  let len = s.length;
  if (len < 2) {
    return s;
  }
  let start = 0;
  let end = 0;
  for (let i = 0; i < len; i++) {
    const [l1, r1] = expandAroundCenter(s, i, i);
    const [l2, r2] = expandAroundCenter(s, i, i + 1);
    if (r1 - l1 > end - start) {
      start = l1;
      end = r1;
    }
    if (r2 - l2 > end - start) {
      start = l2;
      end = r2;
    }
  }
  return s.slice(start, end + 1);
};
console.log(longestPalindrome(paramS));

/**
 * 动态规划
 */
var longestPalindrome2 = function (s) {
  let len = s.length;
  if (len < 2) {
    return s;
  }
  let begin = 0;
  let maxLen = 1;
  let dp = [];
  for (var i = 0; i < len; i++) {
    dp[i] = new Array();
    for (var j = 0; j < len; j++) {
      dp[i][j] = false;
    }
  }
  //   所有长度为一的都是回文字符串;
  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }
  //   回文的长度
  for (let L = 2; L <= len; L++) {
    //   定义左指针
    for (let i = 0; i < len; i++) {
      // 定义右指针
      let j = i + L - 1;
      if (j >= len) {
        break;
      }
      if (s[i] != s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }

  return s.slice(begin, begin + maxLen);
};
console.log(longestPalindrome2(paramS));
