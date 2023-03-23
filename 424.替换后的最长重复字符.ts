/*
 * @lc app=leetcode.cn id=424 lang=typescript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
function characterReplacement(s: string, k: number): number {
	if (s.length < k) {
		return s.length;
	}
	const a = 'A'.charCodeAt(0);
	let max = 0;
	let res = 0;
	let arr = new Array(26).fill(0);
	let start = 0,
		end = 0;
	while (end < s.length) {
		const code = s[end].charCodeAt(0) - a;
        // 把end元素++
		arr[code]++;
		end++;
		max = Math.max(max, arr[code]);
		if (end - start > max + k) {
            // 把start元素--
			arr[s[start].charCodeAt(0) - a]--;
			start++;
		}
		res = Math.max(res, end - start);
	}
	return res;
}
// @lc code=end
