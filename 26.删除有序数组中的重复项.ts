/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  for (let index = nums.length - 1; index > -1; index--) {
    if (nums[index] == nums[index - 1]) {
      nums.splice(index, 1);
    }
  }
  return nums.length;
}
// @lc code=end
