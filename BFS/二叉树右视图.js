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
 * @return {number[]}
 */
var rightSideView = function (root) {
	const res = []
	if (!root) return res
	const queue = []
	queue.push(root)
	while (queue.length) {
		let n = queue.length
		res.push(queue[0].val)
		for (let i = 0; i < n; i++) {
			let cur = queue.shift()
			cur.right && queue.push(cur.right)
			cur.left && queue.push(cur.left)
		}
	}
	return res
}
