// https://leetcode.cn/problems/find-duplicate-subtrees/
// septembre 5 2022

// Definition for a binary tree node.
class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}

let ans: Array<TreeNode | null>
let map: Map<string, number>
function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
	ans = new Array<TreeNode | null>()
	map = new Map<string, number>()
	dfs(root)
	return ans
}
const dfs = (root: TreeNode | null): string => {
	if (!root) return ' '
	let key: string = root.val + '_'
	key += dfs(root.left)
	key += dfs(root.right)
	if (!map.has(key)) map.set(key, 1)
	else map.set(key, map.get(key) + 1)

	if (map.get(key) == 2) ans.push(root)
	return key
}
