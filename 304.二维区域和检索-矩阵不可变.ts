/*
 * @lc app=leetcode.cn id=304 lang=typescript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
class NumMatrix {
    matrix = [];
    constructor(matrix: number[][]) {
        this.matrix = matrix;
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let sum = 0;
        for (let i = row1; i <= row2; i++) {
            sum += this.matrix[i].slice(col1, col2 + 1).reduce((pre, next) => {
                return pre + next;
            }, 0);
        }
        return sum;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

