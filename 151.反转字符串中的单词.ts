/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
function reverseWords(s: string): string {
	return s.replace(/\s+/g, ' ').trim().split(' ').reverse().join(' ');
}
// @lc code=end
