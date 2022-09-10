// septembre 10 2022
// https://leetcode.cn/problems/trim-a-binary-search-tree/

// 作者：AC_OIer
// 链接：https://leetcode.cn/problems/trim-a-binary-search-tree/solution/by-ac_oier-help/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// 由于被修剪的是二叉搜索树，因此修剪过程必然能够顺利进行。

// 容易想到使用原函数作为递归函数：

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
	if (!root) return null
	if (root.val < low) {
		// 若 root.val 小于边界值 low，则 root 的左子树必然均小于边界值，我们递归处理 root.right 即可；
		return trimBST(root.right, low, high)
	}
	if (root.val > high) {
		// 若 root.val 大于边界值 high，则 root 的右子树必然均大于边界值，我们递归处理 root.left 即可；
		return trimBST(root.left, low, high)
	}
	// 若 root.val 符合要求，则 root 可被保留，递归处理其左右节点并重新赋值即可。
	root.left = trimBST(root.left, low, high)
	root.right = trimBST(root.right, low, high)

	return root
}
