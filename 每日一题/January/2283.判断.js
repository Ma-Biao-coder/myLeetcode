/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
	const map = new Map()
	for (let char of num) {
		if (map.has(char)) {
			map.set(char, map.get(char) + 1)
		} else {
			map.set(char, 1)
		}
	}
	for (let i = 0; i < num.length; i++) {
		let char = i + ''
		if (map.get(char) !== num[i] * 1) return false
	}
	return true
}
digitCount('1210')
