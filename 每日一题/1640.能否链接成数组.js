// https://leetcode.cn/problems/check-array-formation-through-concatenation/

// 思路来自
// https://leetcode.cn/problems/check-array-formation-through-concatenation/solution/neng-fou-lian-jie-xing-cheng-shu-zu-by-c-52z0/
var canFormAarray = function (arr, pieces) {
	// 维护一个哈希表
	// hashmap 记录每一个piece开头的元素以及对应的piece
	const map = new Map()
	for (const piece of pieces) {
		map.set(piece[0], piece)
	}
	let i = 0,
		n = arr.length
	while (i < n) {
		// 先看看是否有以arr[i]开头的元素
		if (!map.has(arr[i])) {
			return false
		}
		// 如果有则一个个对照
		const arrCompare = map.get(arr[i])
		for (const num of arrCompare) {
			if (arr[i++] !== num) {
				return false
			}
		}
	}
	return true
}
