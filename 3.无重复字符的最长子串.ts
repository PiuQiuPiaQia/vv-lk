/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let start = 0;
    let tempStr = "";
    let max = 0;
    for (let index = 1; index <= s.length; index++) {
      tempStr = s.slice(start, index);
      const i = tempStr.indexOf(s[index]);
      if (i > -1) {
        start = start + i + 1;
      }
      max = Math.max(tempStr.length, max);
    }
    return max;
  }
  // @lc code=end
  