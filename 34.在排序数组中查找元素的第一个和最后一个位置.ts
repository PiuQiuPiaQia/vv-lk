/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
	const arr = [-1, -1];
	for (let index = 0; index < nums.length; index++) {
		if (nums[index] == target && arr[0] == -1) {			
			arr[0] = index;
			arr[1] = index;
		} else if (nums[index] == target) {
			arr[1] = index;
		}
	}
	return arr;
}
// @lc code=end
