/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
	if (!matrix.length) {
		return [];
	}
	let left = 0,
		right = matrix[0].length - 1,
		top = 0,
		bottom = matrix.length - 1;
	const arr = [];
	while (1) {
		for (let i = left; i <= right; i++) {
			arr.push(matrix[top][i]);
		}
		if (++top > bottom) break;

		for (let i = top; i <= bottom; i++) {
			arr.push(matrix[i][right]);
		}
		if (--right < left) break;

		for (let i = right; i >= left; i--) {
			arr.push(matrix[bottom][i]);
		}
		if (--bottom < top) break;

		for (let i = bottom; i >= top; i--) {
			arr.push(matrix[i][left]);
		}
		if (++left > right) break;
	}
	return arr;
}
// @lc code=end
