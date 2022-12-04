/**
 * @param {number[]} skill
 * @return {number}
 */

/**
 * 排序加双指针
 */
var dividePlayers = function (skill) {
	let size = skill.length
	if (size === 2) return skill[0] * skill[1]
	if (size % 2 === 1) return -1
	skill.sort((a, b) => a - b)
	let temp = skill[0] + skill[size - 1]
	let i = 0,
		j = size - 1
	let res = 0
	while (i < j) {
		let sum = skill[i] + skill[j]
		if (sum !== temp) {
			return -1
		}
		res += skill[i] * skill[j]
		i++
		j--
	}
	return res
}
