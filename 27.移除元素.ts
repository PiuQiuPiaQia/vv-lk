/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    for (let index = nums.length; index > -1; index--) {
        if (nums[index] == val) {
            nums.splice(index, 1);
        }
    }
    return nums.length;
};
// @lc code=end

