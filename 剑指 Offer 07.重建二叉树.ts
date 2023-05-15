/*
 * @lc app=leetcode.cn id=剑指 Offer 07 lang=typescript
 * @lcpr version=21907
 *
 * [剑指 Offer 07] 重建二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
	if (!preorder.length) return null;
	let rootVal = preorder[0];
	let index = inorder.findIndex(item => item == rootVal);
	// console.log(index, rootVal);

	const leftArr = inorder.slice(0, index);
	const rightArr = inorder.slice(index + 1);
	// console.log(...arguments, leftArr, rightArr);

	let left = buildTree(preorder.slice(1, leftArr.length + 1), leftArr);
	let right = buildTree(
		preorder.slice(leftArr.length + 1, preorder.length),
		rightArr
	);
	return new TreeNode(rootVal, left, right);
}
// @lc code=end

/*
// @lcpr case=start
// [3,9,20,15,7]\n[9,3,15,20,7]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */
