/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const zeroArr = [];
  for (let index = nums.length - 1; index > -1; index--) {
    if (nums[index] == 0) {
      zeroArr.push(nums.splice(index, 1));
    }
  }
  nums.push(...zeroArr);
}
// @lc code=end
