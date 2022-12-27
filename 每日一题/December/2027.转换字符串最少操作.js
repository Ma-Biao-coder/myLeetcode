// https://leetcode.cn/problems/minimum-moves-to-convert-string/
var minimumMoves = function (s) {
	let ans = 0,
		i = 0
	const n = s.length
	while (i < n) {
		if (s.charAt(i) === 'X') {
			ans++
			i += 3
		} else {
			i++
		}
	}
	return ans
}

/**
 * 思路
 * 贪心算法，第一个X一定会浪费一次转换，所以每遇到一个X，就把指针往后移动三个
 * 否则就直接往后移动一个
 */
