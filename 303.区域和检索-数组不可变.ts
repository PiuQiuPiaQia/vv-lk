/*
 * @lc app=leetcode.cn id=303 lang=typescript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
class NumArray {
	nums = [];
	constructor(nums: number[]) {
		this.nums = nums;
	}

	sumRange(left: number, right: number): number {
		return this.nums.slice(left, right + 1).reduce((pre, next) => {
            return pre + next;
        }, 0);
	}
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
