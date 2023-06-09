/*
 * @lc app=leetcode.cn id=344 lang=typescript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let start = 0,
    end = s.length - 1;
  let temp = "";
  while (start < end) {
    temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
}
// @lc code=end
