/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let maxLen = 1,
    start = 0;
  // js初始化用map，防止引用类型fill
  let dp = new Array(s.length + 1)
    .fill(0)
    .map(() => new Array(s.length + 1).fill(0));
  for (let index = 0; index < s.length; index++) {
    dp[index][index] = 1;
  }
  // console.log(start, dp);
  for (let j = 1; j < s.length; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] != s[j]) {
        dp[i][j] = 0;
      } else {
        // 排除掉j-1 - (i+1) < 2的情况
        if (j - i < 3) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
      if (dp[i][j] && j - i + 1 > maxLen) {
        start = i;
        maxLen = j - i + 1;
      }
    }
  }
  // console.log(start, dp);

  return s.slice(start, start + maxLen);
}
// @lc code=end
