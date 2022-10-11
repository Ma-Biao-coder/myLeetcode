// https://leetcode.cn/problems/check-if-one-string-swap-can-make-strings-equal/
// octobre 11 2022

/**
 * 不用想着把字符串交换一下再做比较，也不用想开数组来记录不同的位置
 * 只需要用两个数字记录就好，不需要数组
 * 注意记录的条件
 * if(l1 === -1) l1 = i
 * if(l2 === -1 && l1 !== i) l2 = i
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
	const n = s1.length,
		m = s2.length
	if (m !== n) return false
	let count = 0
	let l1 = -1,
		l2 = -1
	for (let i = 0; i < n; i++) {
		if (s1[i] !== s2[i]) {
			count++
			if (l1 === -1) l1 = i
			if (l2 === -1 && l1 !== i) l2 = i
		}
	}
	if (count === 0) return true
	if (count === 2 && s1[l1] === s2[l2] && s1[l2] === s2[l1]) return true
	return false
}
