/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
	const n = matrix.length;
    // 先把右上三角和左下三角互换，再把左右对称互换
	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j++) {
			const temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}
	for (let index = 0; index < n; index++) {
		matrix[index] = matrix[index].reverse();
	}
}
// @lc code=end
