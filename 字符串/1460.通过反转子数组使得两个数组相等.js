/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
	const nums = new Array(1001).fill(0)
	const n = arr.length
	for (let i = 0; i < n; i++) {
		nums[target[i]]++
		nums[arr[i]]--
	}
	for (let num of nums) {
		if (num !== 0) {
			return false
		}
	}
	return true
}
