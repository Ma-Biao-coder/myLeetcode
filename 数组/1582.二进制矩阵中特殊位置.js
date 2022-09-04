/**
 * 每日一题 4 septembre
 * https://leetcode.cn/problems/special-positions-in-a-binary-matrix/
 * 思路：统计每一行和每一列1的个数，然后行和列个数均为1
 * 且该点为1，则为特殊位置
 * 时间复杂度O(m*n)
 * 空间复杂度O(m+n)
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
	let m = mat.length,
		n = mat[0].length,
		ans = 0
	// r用于统计每一行的1的个数，c用于统计列上的
	const r = Array(m).fill(0)
	const c = Array(n).fill(0)
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			r[i] += mat[i][j]
			c[j] += mat[i][j]
		}
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (r[i] === 1 && c[j] === 1 && mat[i][j] === 1) ans++
		}
	}

	return ans
}
