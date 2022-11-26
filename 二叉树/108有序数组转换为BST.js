function ListNode(val, left, right) {
	this.val = val === undefined ? 0 : val
	this.left = left === undefined ? null : left
	this.right = right === undefined ? null : right
}

/**
 * 先构造根节点，再构造左右节点
 * 二叉搜索树的中序遍历就是一个升序数组，所以root是mid
 */

var sortArrayToBST = function (nums) {
	const build = (l, r) => {
		if (l > r) return null
		let mid = Math.floor((l + r) / 2)
		let root = new ListNode(nums[mid])
		root.left = build(l, mid - 1)
		root.right = build(mid + 1, r)
		return root
	}
	return build(0, nums.length - 1)
}
