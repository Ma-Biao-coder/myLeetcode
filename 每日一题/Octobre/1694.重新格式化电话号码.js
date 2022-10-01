// https://leetcode.cn/problems/reformat-phone-number/
// 1 octobre 2022 每日一题
/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
	let str = ''
	// 先把number提取出来
	for (let s of number) {
		if (s === '-' || s === ' ') continue
		str += s
	}
	const arr = str.split('')
	// 然后在处理相应的情况
	let ans = ''
	while (arr.length) {
		if (arr.length > 4) {
			ans += arr.splice(0, 3).join('') + '-'
		} else {
			if (arr.length === 2 || arr.length === 3) ans += arr.join('')
			if (arr.length === 4) {
				ans += arr.slice(0, 2).join('') + '-'
				ans += arr.slice(2, arr.length).join('')
			}
			break
		}
	}
	return ans
}
