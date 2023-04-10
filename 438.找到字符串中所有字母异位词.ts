/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
	let left = 0,
		right = 0;
	const arr = [];
	const sArr = new Array(26).fill(0);
	const pArr = new Array(26).fill(0);
	for (let index = 0; index < p.length; index++) {
		const element = p[index];
		pArr[element.charCodeAt(0) - 97]++;
	}

	while (right < s.length) {
		const i = s[right].charCodeAt(0) - 97;
		// console.log(s[right], i, JSON.stringify(sArr.slice(0, 8)));
		sArr[i]++;
		// 使左指针不断移动，保证留下的是符合要求的
		while (sArr[i] > pArr[i]) {
			const j = s[left].charCodeAt(0) - 97;
			sArr[j]--;
			left++;
		}
		if (right - left + 1 == p.length) {
			arr.push(left);
		}
		right++;
	}
	return arr;
}
// @lc code=end
