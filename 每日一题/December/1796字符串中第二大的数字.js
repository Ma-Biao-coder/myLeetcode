// https://leetcode.cn/problems/second-largest-digit-in-a-string/
var secondHighest = function (s) {
	// 维护最大值和第二大值
	let max = -1,
		max2 = -1
	for (let str of s) {
		// isdigit
		if (str >= '0' && str <= '9') {
			let num = str - '0'
			if (num > max) {
				max2 = max
				max = num
			} else if (num > max2 && num < max) {
				max2 = num
			}
		}
	}
	return max2
}
